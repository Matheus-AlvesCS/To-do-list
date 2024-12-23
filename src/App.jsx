import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Container, List, Input, Button } from "./styles.js";

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

    setList([...list, { id: uuidv4(), task }]);
    setTask("");
  }

  return (
    <Container>
      <List>
        <div>
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
            <li key={item.id}>{item.task}</li>
          ))}
        </ul>
      </List>
    </Container>
  );
}

export default App;
