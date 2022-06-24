import React, { useState, useEffect, useCallback, useReducer } from "react";
import "./css/index.css";
import EdiHeader from "./components/EdiHeader";
import Screen from "./components/Screen";
import Popup from "./components/Popup";
import { useDispatch, useSelector } from "react-redux";
import { Beforeunload } from "react-beforeunload";
import { useHistory } from "react-router-dom";
import firebaseApp from "../config/firebaseApp";
import TitleSection from "./components/TitleSection";
import { Animation } from "../styles/Animation";
import Loading from "./components/Loading";
import { v4 as uuidv4 } from "uuid";
const Fstore = firebaseApp.firestore();
const Fstorage = firebaseApp.storage();

function Editor({ location }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { type, timestamp, category, id } = location.state;
  const temKey = useSelector((state) => state.database.key);
  function reducer(state, action) {
    switch (action.type) {
      case "RESET":
        return {
          title: undefined,
          isPin: false,
          isBlind: false,
          kind: undefined,
        };
      case "INIT":
        return action.info;
      case "TITLE":
        return { ...state, title: action.title };
      case "KIND":
        return { ...state, kind: action.payload };
      case "PIN":
        return { ...state, isPin: action.isPin };
      case "BLIND":
        return { ...state, isBlind: action.isBlind };
      default:
        throw new Error(`Unhandled action type: ${action.type}`);
    }
  }

  const [info, patch] = useReducer(reducer, {
    title: undefined,
    isPin: false,
    isBlind: false,
    kind: undefined,
  });
  const [isUp, setIsUp] = useState({
    status: false,
    type: "",
  });
  const __uploadFile = useCallback((data, title, temKey, index) => {
    return new Promise((resolve, reject) => {
      Fstorage.ref(`${temKey}/${title}`)
        .putString(data, "base64", {
          contentType: "image/jpeg",
        })
        .then((res) => {
          res.ref.getDownloadURL().then((url) => {
            const template = document.getElementById("screen");
            template.childNodes[index].src = url;
            resolve(url);
          });
        });
    });
  }, []);
  const __insetData = useCallback(() => {
    const template = document.getElementById("screen");
    const childnode = template.childNodes;
    const { title, isPin, isBlind, kind } = info;
    const pro = Array.from(childnode);
    Promise.all(
      pro.map(async (item, idx) => {
        const { currentSrc, localName } = item;
        if (localName === "img" && currentSrc.substr(0, 4) === "data") {
          const data = currentSrc.split(",")[1];
          const result = await __uploadFile(
            data,
            `${localName}${Math.random(1000)}`,
            temKey,
            idx
          ).then((res) => {
            return res;
          });
          return result;
        } else {
          return item;
        }
      })
    ).then((res) => {
      const db = Fstore.collection(category).doc(temKey);
      if (type === "new") {
        db.set({
          template: template.innerHTML,
          title: title,
          config: {
            isBlind: false,
            isPin,
          },
          kind,
          timestamp: Date.now(),
        }).then(() => {
          history.goBack();
        });
      } else {
        db.update({
          template: template.innerHTML,
          title,
          config: {
            isBlind,
            isPin,
          },
          kind,
        }).then(() => {
          history.goBack();
        });
      }
    });
  }, [category, temKey, info, history, type, __uploadFile]);

  useEffect(() => {
    if (type === "new") {
      patch({
        type: "RESET",
      });
      dispatch({
        type: "@layouts/INIT_KEY",
        payload: uuidv4(),
      });
    } else {
      Fstore.collection(category)
        .doc(id)
        .get()
        .then((result) => {
          const value = result.data();
          patch({
            type: "INIT",
            info: {
              title: value.title,
              isPin: value.config.isPin,
              isBlind: value.config.isBlind,
              kind: value.kind,
            },
          });
          if (value.urlList) {
            dispatch({
              type: "@layouts/INIT_DELETELIST",
              payload: value.urlList,
            });
          } else {
            dispatch({
              type: "@layouts/INIT_DELETELIST",
              payload: [],
            });
          }
          if (value.videoList) {
            dispatch({
              type: "@layouts/INIT_VIDEO",
              payload: value.videoList,
            });
          } else {
            dispatch({
              type: "@layouts/INIT_VIDEO",
              payload: [],
            });
          }

          const screen = document.getElementById("screen");
          screen.innerHTML = value.template;
        });
      dispatch({
        type: "@layouts/INIT_KEY",
        payload: id,
      });
    }
    return () => {};
  }, [dispatch, category, id, type, timestamp]);
  useEffect(() => {
    return () => {
      dispatch({
        type: "@layouts/RESET",
      });
    };
  }, [dispatch]);
  return (
    <Beforeunload
      onBeforeunload={(e) => {
        e.preventDefault();
      }}
    >
      <Animation>
        <div className="editor">
          <TitleSection
            dispatch={patch}
            info={info}
            insert={__insetData}
            type={category}
          />
          <div className="editor-wrapper">
            <EdiHeader
              setIsUp={setIsUp}
              temKey={temKey}
              category={category}
              type={type}
            />
            <Screen
              temKey={temKey}
              Fstore={Fstore}
              Fstorage={Fstorage}
              state={type}
            />
          </div>
          <Popup
            isUp={isUp}
            setIsUp={setIsUp}
            temKey={temKey}
            category={category}
            state={type}
          />
        </div>
      </Animation>
      <Loading />
    </Beforeunload>
  );
}

export default Editor;
