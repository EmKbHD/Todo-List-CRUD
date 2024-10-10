import { Link } from "react-router-dom";
import Illustration from "../assets/undraw_todo.svg";
const HomePage = () => {
  return (
    <div className="flex flex-col justify-center items-center mx-auto font-suse h-dvh sm:w-11/12 sm:text-2xl">
      <nav className="w-full font-bold text-xl p-2">
        <Link to={"/"}>
          <div className="sm:text-3xl">
            To
            <span className="text-[#fa5353] font-bold font-suse">do</span>
          </div>
        </Link>
      </nav>
      <section className="flex flex-col justify-center items-center mx-auto grow text-center min-[360px]:px-[.8rem] sm:px-12 py-5 ">
        <h1 className="min-[360px]:text-3xl sm:text-5xl font-bold text-2xl">
          Manage your time with our{" "}
          <span className="text-[#fa5353] font-bold font-suse">
            Task Todo App
          </span>
        </h1>
        <img
          className="my-[16px] w-[200px] min-[360px]:w-[250px] sm:w-[450px] sm:mt-[40px] "
          src={Illustration}
          alt="Illustration image"
        />
        <Link to={"/todoWrapper"}>
          <button className="bg-[#ff6f61] text-[white] border-none rounded-[20px] sm:rounded-[25px] py-[12px] px-[40px] cursor-pointer text-[1.2rem] transition-colors-[.3s] ease-in mt-[20px] sm:text-4xl sm:py-[20px] sm:px-[65px] sm:mt-[40px] uppercase hover:bg-[#ff5a4f]">
            Let's start
          </button>
        </Link>
      </section>
      <footer className="w-full bottom-0 py-2 min-[800px]:text-xl text-center">
        {" "}
        © 2024 Afritic Group
      </footer>
    </div>
  );
};

export default HomePage;
