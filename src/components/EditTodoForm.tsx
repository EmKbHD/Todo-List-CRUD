import { useState } from "react";

const EditTodoForm: React.FC<{
  editTodo: (value: string, task: string) => void;
  task: { id: string; task: string };
}> = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value.trim() !== "") {
      editTodo(value, task.id);
      setValue("");
      console.log(value);
    }
  };
  return (
    <form
      className="sm:w-full flex flex-col sm:flex-row md:w-10/12  w-11/12 mb-4"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="rounded-[8px] w-full p-[.8em] border-solid border-[1px] placeholder:text-slate-400 border-gray-300 text-[18px] sm:flex-1"
        value={value}
        placeholder="Edit todo..."
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        type="submit"
        className="bg-[#000] text-white py-[.9rem] px-[1rem] rounded-[8px] border-solid text-[18px] font-semibold hover:bg-[#ff5a4f] max-[640px]:mt-2 cursor-pointer sm:ml-1 sm:px-[1.5rem]"
      >
        Update
      </button>
    </form>
  );
};

export default EditTodoForm;
