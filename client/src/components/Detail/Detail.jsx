import React, { useCallback, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import firebaseApp from "../../config/firebaseApp";

const DetailPage = styled.main`
  padding: 164px 0;
  min-height: 1800px;
  & > .wrapper {
    & > .title-section {
      padding-bottom: 25px;
      border-bottom: 1px solid #bfbfbf;
      & > .tag {
        font-size: 15px;
        font-weight: bold;
        color: #00be83;
      }
      & > .title {
        margin-top: 7px;
        font-size: 33px;
        font-weight: bold;
      }
      & > .sub-wrapper {
        margin-top: 19px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 14px;
        font-weight: 500;
        color: #7c7c7c;
      }
    }
    & > .template {
      padding-top: 25px;
      .link-template {
        cursor: pointer;
        background-color: white;
        margin: 20px 0;
        box-sizing: border-box;
        border-radius: 5px;
        width: 100%;
        border: solid 1px #3597ec;
        height: 53px;
        padding-left: 15.4px;
        padding-right: 21.3px;
        display: flex;
        align-items: center;
        position: relative;

        & > .file-asset {
          width: 21px;
          margin-right: 15.5px;
        }

        & > .link-asset {
          margin-right: 8.4px;
          width: 34.2px;
        }

        & > .file-asset {
          margin-right: 15.5px;
          width: 21px;
        }

        & > .link-title {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          font-size: 17px;
          font-weight: bold;
          color: #3597ec;
        }

        & > .link-play {
          position: absolute;
          right: 21.3px;
          width: 9.6px;
        }
      }
    }
  }
`;

const Fstore = firebaseApp.firestore();

function Detail() {
  const location = useLocation();
  const templateRef = useRef(null);
  const [data, setData] = useState(undefined);
  const __download = useCallback((url, name) => {
    var xhr = new XMLHttpRequest();
    xhr.responseType = "blob";
    xhr.onload = (event) => {
      var blob = URL.createObjectURL(xhr.response);
      var link = document.createElement("a");
      link.href = blob;
      link.download = name;
      document.body.appendChild(link);
      link.click();
      link.remove();
    };
    xhr.open("GET", url);
    xhr.send();
  }, []);
  useEffect(() => {
    if (templateRef) {
      const projectid = location.pathname.split("/");
      Fstore.collection(projectid[2])
        .where("timestamp", "==", parseFloat(projectid[3]))
        .get()
        .then((res) => {
          res.forEach((item) => {
            const val = item.data();
            item.ref.update({
              view: val.view ? val.view + 1 : 1,
            });
            templateRef.current.innerHTML = val.template;
            const list = document.getElementsByClassName("link-template file");
            for (let i = 0; i < list.length; i++) {
              const e = list[i];
              e.addEventListener("click", () => {
                __download(
                  e.firstChild.textContent,
                  e.childNodes[2].textContent
                );
              });
            }
            setData(val);
          });
        });
    }
    return () => {};
  }, [location, templateRef, __download]);
  return (
    <DetailPage>
      <div className="wrapper">
        {data ? (
          <div className="title-section">
            <div className="tag">{data.kind}</div>
            <div className="title">{data.title}</div>
            <div className="sub-wrapper">
              <div className="timestamp">{formatDate(data.timestamp, ".")}</div>
              <div className="view">조회수 {data.view ? data.view : 1}</div>
            </div>
          </div>
        ) : undefined}
        <div className="template" ref={templateRef}></div>
      </div>
    </DetailPage>
  );
}

export default Detail;
function formatDate(date, type) {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();
  if (parseInt(month) < 10) month = "0" + month;
  if (parseInt(day) < 10) day = "0" + day;
  return [year, month, day].join(type);
}
