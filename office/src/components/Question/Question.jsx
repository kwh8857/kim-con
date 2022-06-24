import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import Search from "../common/Search";
import firebaseApp from "../config/firebaseApp";
import QuestionCard from "./components/QuestionCard";

const Fstore = firebaseApp.firestore();

const Wrapper = styled.main`
  padding-top: 117px;
  .container {
    & > .list-wrapper {
      margin-top: 33px;
      display: grid;
      row-gap: 12px;
    }
  }
`;
function Question() {
  const [original, setOriginal] = useState([]);
  const [questionList, setQuestionList] = useState([]);
  const [keyword, setKeyword] = useState(undefined);

  const __searching = useCallback((val) => {
    if (val) {
      setKeyword(val);
    } else {
      setKeyword(undefined);
    }
  }, []);
  useEffect(() => {
    Fstore.collection("request")
      .orderBy("timestamp", "desc")
      .get()
      .then((res) => {
        let arr = [];
        res.forEach((item) => {
          console.log(item.data());
          arr.push(Object.assign(item.data(), { key: item.id }));
        });
        setOriginal(arr);
      });
    return () => {};
  }, []);
  useEffect(() => {
    let result = original.slice();

    if (keyword) {
      result = result.filter(({ title }) => title.includes(keyword));
    }
    setQuestionList(result);
    return () => {};
  }, [keyword, original]);
  return (
    <Wrapper>
      <div className="container">
        <Search
          title="고객문의"
          type="question"
          placeholder="검색"
          searching={__searching}
        />
        <div className="list-wrapper">
          {questionList.map((item, idx) => {
            return <QuestionCard key={idx} data={item} />;
          })}
        </div>
      </div>
    </Wrapper>
  );
}

export default Question;
