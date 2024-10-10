import { HiMiniTrash } from "react-icons/hi2";
import { HiPencilSquare } from "react-icons/hi2";
import { HiOutlineChevronUp } from "react-icons/hi2";
import { HiOutlineChevronDown } from "react-icons/hi2";

const ToDo: React.FC<{
  task: { task: string; id: string; color: string; completed: boolean };
  toggleComplete: (id: string) => void;
  deleteTodo: (id: string) => void;
  editTodo: (id: string) => void;
  moveUp: (id: string) => void;
  moveDown: (id: string) => void;
}> = ({ task, toggleComplete, deleteTodo, editTodo, moveUp, moveDown }) => {
  return (
    <div
      key={task.id}
      className={`${task.color} mb-2 w-11/12 text-white rounded-[8px] p-2`}
    >
      <div className="p-2 font-semibold ">
        <p
          onClick={() => toggleComplete(task.id)}
          className={`${task.completed ? "line-through text-[#E43838] italic cursor-pointer" : ""}`}
        >
          {task.task}
        </p>
      </div>

      <div className="flex justify-between text-white p-2">
        <div className="flex gap-1">
          <HiPencilSquare
            className=" cursor-pointer text-[1.5rem] hover:text-[#4FA5E6]"
            onClick={() => editTodo(task.id)}
          />
          <HiMiniTrash
            className=" text-[1.5rem] cursor-pointer hover:text-[#E43838]"
            onClick={() => deleteTodo(task.id)}
          />
        </div>
        <div className="flex">
          <HiOutlineChevronUp
            className=" text-[1.5rem] cursor-pointer hover:text-[#4FA5E6]"
            onClick={() => moveUp(task.id)}
          />
          <HiOutlineChevronDown
            className=" text-[1.5rem] cursor-pointer hover:text-[#4FA5E6]"
            onClick={() => moveDown(task.id)}
          />
        </div>
      </div>
    </div>
  );
};

export default ToDo;
