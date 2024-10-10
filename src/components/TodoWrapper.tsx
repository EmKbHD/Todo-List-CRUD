import { useState } from "react";
import { Link } from "react-router-dom";
import TodoForm from "./TodoForm";
import ToDo from "./ToDo";
import { v4 as uuid4 } from "uuid";
import EditTodoForm from "./EditTodoForm";

uuid4();

interface Tasks {
  id: string;
  task: string;
  color: string;
  completed: boolean;
  isEditing: boolean;
}

const colors = [
  "bg-red-400",
  "bg-green-400",
  "bg-blue-400",
  "bg-yellow-400",
  "bg-purple-400",
  "bg-pink-400",
];

const TodoWrapper: React.FC<Tasks> = ({ id }) => {
  const [tasks, setTasks] = useState<Tasks[]>([]);
  const [lastColor, setLastColor] = useState("");

  // Function to generate a random color
  const generateRandomColor = () => {
    let newColor;

    // Keep picking a new color until it's different from the last one
    do {
      newColor = colors[Math.floor(Math.random() * colors.length)];
    } while (newColor === lastColor);

    // Update the last used color
    setLastColor(newColor);
    return newColor;
  };

  // function to add a new task in the array
  const addTodo = (todo: string) => {
    const newTask: Tasks = {
      id: uuid4(),
      task: todo,
      color: generateRandomColor(),
      completed: false,
      isEditing: false,
    };
    setTasks([...tasks, newTask]);

    // console.log(tasks);
  };
  console.log(tasks);

  // function to toggle the completed todo
  const toggleComplete = (id: string) => {
    setTasks(
      tasks.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // function to filter and delete an element in the array
  const deleteTodo = (id: string) => {
    setTasks(tasks.filter((todo) => todo.id !== id));
  };
  // function to edit a todo
  const editTodo = (id: string) => {
    setTasks(
      tasks.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };
  // function to edit a todo in the array...
  const editTask = (task: string, id: string) => {
    setTasks(
      tasks.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };
  // function to move Up an element in the array
  const moveUp = (id: string) => {
    const index = tasks.findIndex((task) => task.id === id);
    if (index > 0) {
      const updatedTasks = [...tasks];
      // This code will swipe two elements within an array
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      //set our tasks updating the array
      setTasks(updatedTasks);
    }
  };

  // function to move Up an element in the array
  const moveDown = (id: string) => {
    const index = tasks.findIndex((task) => task.id === id);
    // If an element is already at the bottom we do not wanna move it any further here
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      // This code will swipe two elements within an array but notice we added +1 instead here
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      //set our tasks updating the array
      setTasks(updatedTasks);
    }
  };

  return (
    <div className=" flex flex-col justify-center items-center mx-auto font-suse md:w-9/12 min-h-dvh sm:w-11/12 sm:text-2xl">
      <nav className=" w-full font-bold text-xl px-2">
        <Link to={"/"}>
          <div className="sm:text-3xl">
            To
            <span className="text-[#fa5353] font-bold font-suse">do</span>
          </div>
        </Link>
      </nav>
      <div
        className=" flex flex-col justify-center items-center mx-auto grow text-center md:w-11/12 min-[360px]:px-[.8rem] sm:px-12 py-5 "
        key={id}
      >
        <h1 className="min-[360px]:text-3xl mb-[1rem] sm:mb-8 text-center sm:text-4xl sm:min-w-[540px] md:min-w-[600px] font-semibold text-xl">
          Start Your Day & Be <span className="text-[#fa5353]">Productive</span>
        </h1>
        <TodoForm addTodo={addTodo} />
        {tasks.map((todo) =>
          //conditional display of update input
          todo.isEditing ? (
            <EditTodoForm editTodo={editTask} task={todo} />
          ) : (
            // Default display of the array of todos
            <ToDo
              task={todo}
              key={todo.id}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
              moveUp={moveUp}
              moveDown={moveDown}
            />
          )
        )}
      </div>
      <footer className=" w-full bottom-0 py-2 min-[800px]:text-xl text-center">
        {" "}
        © 2024 Afritic Group
      </footer>
    </div>
  );
};

export default TodoWrapper;
