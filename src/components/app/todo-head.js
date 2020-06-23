import React, { useState } from "react";
import styled from "styled-components";
import { todoMutations } from "../operations";

const ToDoHead = () => {
  const [text, setText] = useState("");

  const { addTodo } = todoMutations;

  const handleSubmit = () => {
    if(text.length > 2) {
      addTodo(text);
    }
    setText("");
  };

  return (
    <Container>
      <InputWrapper>
        <InputText
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <InputButton
          type="submit"
          value="enviar"
          onClick={() => handleSubmit()}
        />
      </InputWrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
`;

const InputWrapper = styled.div`
  display: flex;
  margin: 28px auto;
`;

const InputText = styled.input`
  display: block;
`;

const InputButton = styled.input`
  border: none;
`;

export default ToDoHead;
