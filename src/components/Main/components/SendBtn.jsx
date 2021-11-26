import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import styled, { css } from "styled-components";
const Wrapper = styled.button`
  cursor: pointer;
  width: 321px;
  height: 80px;
  border-radius: 50px;
  color: white;
  font-size: 22px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  ${(props) => {
    return css`
      background-color: ${props.isOn ? "#47d99b" : "#dbdbdb"};
    `;
  }}
`;
function SendBtn() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.database.ask);
  const [isOn, setIsOn] = useState(false);

  const send = useCallback(() => {
    dispatch({
      type: "config/isPopup",
      payload: true,
    });
  }, [dispatch]);

  useEffect(() => {
    const { name, category, tel, email, number, content, agree } = data;
    if (
      name.length > 0 &&
      category.length > 0 &&
      email.length > 0 &&
      number > 0 &&
      content.length > 0 &&
      agree &&
      tel.length === 13
    ) {
      setIsOn(true);
    } else {
      setIsOn(false);
    }
    return () => {};
  }, [data]);
  return (
    <Wrapper isOn={isOn} onClick={send}>
      김과장에게 문의하기
    </Wrapper>
  );
}

export default SendBtn;
