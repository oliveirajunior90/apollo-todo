import React from "react";
import styled from "styled-components";
import { useQuery } from "@apollo/client";
import { GET_ALL_TODOS } from "./queries/todo";

const ToDoContent = () => {
  const { data, error, loading } = useQuery(GET_ALL_TODOS);

  const todos = data.getAllTodos;

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Deu ruim.</div>;
  }

  return (
    <Container>
      {todos.length > 0 && (
        <Wrapper>
          <UL>
            {todos.map((item) => (
              <li>{item.id} - {item.text}</li>
            ))}
          </UL>
        </Wrapper>
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;

const Wrapper = styled.div`
  margin: auto;
  display: block;
`;

const UL = styled.ul`
  margin: auto;
  width: 450px;
`;

export default ToDoContent;
