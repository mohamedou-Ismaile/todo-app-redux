import { Box } from "@chakra-ui/react"
import { useSelector } from "react-redux";
import { getTodosByVisibilityFilter } from "../redux/selector";
import { Task } from "./Task";

export const TaskList = () => {
  const { todos, visibilityFilter } = useSelector(state => state);
  const filterTodos = getTodosByVisibilityFilter(todos, visibilityFilter);

  return (
    <Box my={3}>
      {filterTodos.length ? filterTodos.map(todo => (
        <Task key={`todo-${todo.id}`} todo={todo} />
      )) : <Box textAlign="center" my="4">No Todos Yet!</Box>}
    </Box>
  )
}