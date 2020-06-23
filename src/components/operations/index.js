
import { todosVar } from "../../client";

import { createAddTodo } from "./mutations/addTodo";

export const todoMutations = {
  addTodo: createAddTodo(todosVar),
}