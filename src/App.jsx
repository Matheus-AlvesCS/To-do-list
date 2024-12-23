import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { FaCheck, FaXmark } from "react-icons/fa6";

import { Container, List, Input, Button, ListItem } from "./styles.js";

function App() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([
    { id: uuidv4(), task: "React", done: true },
  ]);

  function inputChanged(event) {
    setTask(event.target.value);
  }

  function buttonClicked() {
    if (task.length < 1) {
      return alert("Nenhuma tarefa digitada.");
    }

    setList([...list, { id: uuidv4(), task }]);
    setTask("");
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
            <ListItem done={item.done}>
              <FaCheck />
              <li key={item.id}>{item.task}</li>
              <FaXmark />
            </ListItem>
          ))}
        </ul>
      </List>
    </Container>
  );
}

export default App;
