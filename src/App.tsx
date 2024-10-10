import "./App.css";
import HomePage from "./components/HomePage";
import TodoWrapper from "./components/TodoWrapper";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="h-dvh">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/todoWrapper"
          element={
            <TodoWrapper
              id={""}
              task="Sample task"
              color=""
              completed={false}
              isEditing={false}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
