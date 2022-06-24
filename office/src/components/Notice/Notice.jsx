import React, { useCallback, useMemo, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { Animation } from "../styles/Animation";
import firebaseApp from "../config/firebaseApp";
import Card from "../common/Card";
import { useDispatch } from "react-redux";
import Search from "../common/Search";
const Fstore = firebaseApp.firestore();
const Fstorage = firebaseApp.storage();
const List = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 33px;
  display: grid;
  grid-template-columns: 100%;
  row-gap: 12px;
`;

const Body = styled.div`
  width: 992px;
  height: 100%;
  margin: 0 auto;
  padding-top: 117px;
  box-sizing: border-box;
`;
function Notice() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [ListData, setListData] = useState([]);
  const [DisplayList, setDisplayList] = useState([]);
  const __navMake = useCallback(
    (type, timestamp, id) => {
      history.push("/editor", {
        type,
        category: "notice",
        timestamp: timestamp ? timestamp : Date.now(),
        id: id ? id : undefined,
      });
    },
    [history]
  );
  const __searching = useCallback(
    (val) => {
      const filt = ListData.filter(
        (item) => item.title && item.title.includes(val)
      );
      setDisplayList(filt);
    },
    [ListData]
  );
  const __getData = useCallback(async () => {
    let arr = [];
    await Fstore.collection("notice")
      .orderBy("timestamp", "desc")
      .get()
      .then((result) => {
        if (result) {
          result.forEach((item) => {
            const value = item.data();
            arr.push(Object.assign(value, { id: item.id }));
          });
        }
      });
    return arr;
  }, []);
  const __blind = useCallback(
    (id, state) => {
      Fstore.collection("notice")
        .doc(id)
        .update({
          config: {
            isBlind: !state,
          },
        })
        .then(() => {
          dispatch({
            type: "@config/TOAST",
            payload: {
              isactive: true,
              msg: `게시글이 블라인드${state ? "해제" : ""} 되었습니다`,
            },
          });
          __getData().then((result) => {
            setListData(result);
            setDisplayList(result);
          });
        });
    },
    [__getData, dispatch]
  );
  const __deleteCard = useCallback(
    async (id, file) => {
      let ref = await Fstorage.ref(`notice/${id}`);
      //해당 리워드에 존재하는 storage 파일들 전부삭제
      ref.listAll().then((dir) => {
        dir.items.forEach((fileRef) => {
          deleteFile(ref.fullPath, fileRef.name);
        });
        dir.prefixes.forEach((folderRef) => {
          deleteFolderContents(folderRef.fullPath);
        });
      });
      firebaseApp
        .firestore()
        .collection("notice")
        .doc(id)
        .delete()
        .then(() => {
          dispatch({
            type: "@config/TOAST",
            payload: {
              isactive: true,
              msg: "게시글이 삭제되었습니다",
            },
          });
          __getData().then((result) => {
            setListData(result);
            setDisplayList(result);
          });
        });
    },
    [__getData, dispatch]
  );
  useMemo(
    () =>
      __getData().then((result) => {
        setListData(result);
        setDisplayList(result);
      }),
    [__getData]
  );
  return (
    <div>
      <Animation>
        <Body>
          <Search
            title="공지사항 관리"
            type="notice"
            placeholder="공지사항명 검색"
            searching={__searching}
            add={__navMake}
          />
          <List>
            {DisplayList.map(
              (
                { title, timestamp, id, index, config, template, kind },
                idx
              ) => {
                return (
                  <Card
                    __delete={__deleteCard}
                    navigation={__navMake}
                    key={idx}
                    id={id}
                    title={title}
                    timestamp={timestamp}
                    config={config}
                    index={ListData.length - index}
                    template={template}
                    __blind={__blind}
                    kind={kind}
                  />
                );
              }
            )}
          </List>
        </Body>
      </Animation>
    </div>
  );
}

export default Notice;
function deleteFolderContents(path) {
  const ref = Fstorage.ref(path);
  ref.delete();
}

function deleteFile(pathToFile, fileName) {
  const ref = Fstorage.ref(pathToFile);
  const childRef = ref.child(fileName);
  childRef.delete();
}
