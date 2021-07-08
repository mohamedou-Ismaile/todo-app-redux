import { Container, Heading } from '@chakra-ui/react';
import { AddTask } from './components/AddTask';
import { TaskList } from './components/TaskList';
import { VisibilityFilter } from './components/VisibilityFilter';

function App() {
  return (
    <Container maxW="container.sm">
      <Heading my="4">Todo List</Heading>
      <AddTask />
      <TaskList />
      <VisibilityFilter />
    </Container>
  );
}

export default App;