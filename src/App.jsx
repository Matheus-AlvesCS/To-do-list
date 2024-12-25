import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import {
  Container,
  List,
  Input,
  Button,
  ListItem,
  CheckMark,
  Xmark,
} from "./styles.js";

function App() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  function inputChanged(event) {
    setTask(event.target.value);
  }

  function buttonClicked() {
    if (task.length < 1) {
      return alert("Nenhuma tarefa digitada.");
    }

    setList([...list, { id: uuidv4(), task, done: false }]);
    setTask("");
  }

  function checkTask(id) {
    const newList = list.map((item) => {
      if (item.id === id) {
        return { ...item, done: !item.done };
      } else {
        return item;
      }
    });

    setList(newList);
  }

  function deleteTask(id) {
    const newList = list.filter((item) => item.id !== id);

    setList(newList);
  }

  return (
    <Container>
      <List>
        <div className="addTask">
          <Input
            value={task}
            onChange={inputChanged}
            type="text"
            placeholder="Tarefa a fazer"
          />
          <Button onClick={buttonClicked}>Adicionar</Button>
        </div>
        <ul>
          {list.map((item) => (
            <ListItem key={item.id} $done={item.done}>
              <CheckMark onClick={() => checkTask(item.id)} />
              <li>{item.task}</li>
              <Xmark onClick={() => deleteTask(item.id)} />
            </ListItem>
          ))}
        </ul>
      </List>
    </Container>
  );
}

export default App;
