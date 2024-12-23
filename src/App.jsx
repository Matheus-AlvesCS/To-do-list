import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

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
    <div>
      <input
        value={task}
        onChange={inputChanged}
        type="text"
        placeholder="Tarefa a fazer"
      />
      <button onClick={buttonClicked}>Adicionar</button>
      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.task}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
