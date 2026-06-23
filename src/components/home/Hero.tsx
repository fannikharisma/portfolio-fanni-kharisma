import { BsAwardFill } from "react-icons/bs";
import { BsFillLightbulbFill } from "react-icons/bs";
import { BsFillGearFill } from "react-icons/bs";
import { BsBookFill } from "react-icons/bs";

const boxStyles = {
  link: "text-cyan-400 font-medium px-2 py-2 flex gap-1 border-2 rounded-lg items-center",
};

export default function Hero() {
  return (
    // <section id="hero" className="flex min-h-screen items-center px-45 bg-linear-to-r from-sky-900 to-blue-500 text-white">
    <section id="hero" className="flex min-h-screen  bg-linear-to-r from-sky-900 to-blue-500 text-white">
      <div className="flex container mx-auto justify-between items-center px-4 py-12">
        {/* LEFT SIDE */}
        <div className="w-3/4 pr-5">
          <div className="mb-10">
            <h3 className="text-sm tracking-[0.3em] text-cyan-400 font-medium mb-8">BUSINESS - TECHNOLOGY - IMPACT</h3>
            <h1 className="text-5xl font-bold leading-tight mb-8">Hi, I&apos;m Fanni!</h1>
            <h2 className="text-4xl font-bold ">Turning Data and Strategy Into</h2>
            <h2 className="text-4xl font-bold text-cyan-400 mb-8"> Business Impact</h2>
            <p className="text-lg text-slate-200 leading-8 text-justify">
              I&apos;m business analyst with over 14 years of experience in digital transformation and data analytics. I analyze data and processes, ask questions, translate them into requirements, build solutions with dev teams, testing,
              and keep refining until it works for everyone and brings value.
            </p>
          </div>
          <div className="flex mb-10 gap-6">
            <button className={boxStyles.link}>
              <BsAwardFill />
              Analytical Thinker
            </button>
            <button className={boxStyles.link}>
              <BsFillLightbulbFill />
              Problem Solver
            </button>
            <button className={boxStyles.link}>
              <BsFillGearFill />
              Solution Builder
            </button>
            <button className={boxStyles.link}>
              <BsBookFill />
              Continuous Learner
            </button>
          </div>

          {/* BUTTONS */}
          <div className="flex gap-4">
            <a href="src\assets\FKH_Resume.pdf" download="Fanni_Kharisma_Resume" className="px-6 py-3 bg-cyan-400 text-black rounded-lg font-semibold hover:bg-cyan-300 transition">
              My Resume
            </a>
            {/* <a href="#" className="px-6 py-3 border border-slate-500 rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition">
              View My Work
            </a> */}
            <a href="#foot" className="px-6 py-3 border border-slate-500 rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition">
              Get In Touch
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-1/4 p-5">
          <img src="src/assets/dummy_profile2.jpg" alt="Fanni Kharisma Profile Image" className="w-112.5 rounded-3xl " />
        </div>
      </div>
    </section>
  );
}
