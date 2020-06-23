import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";

const todosListInitial = [
  {
    id: 0,
    text: "lore ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    completed: false,
  },
  {
    id: 1,
    text: "lore ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    completed: false,
  },
];

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        getAllTodos: {
          read() {
            return todosVar();
          },
        },
      },
    },
  },
});

export const todosVar = makeVar(todosListInitial);

export default new ApolloClient({ cache });
