// import AboutHero from "../components/aboutme/AboutHero";
import ProfileCard from "../components/aboutme/ProfileCard";
import PersonalInterest from "../components/aboutme/PersonalInterest";
import Story from "../components/aboutme/Story";
import Experience from "../components/aboutme/Experience";
import Certifications from "../components/aboutme/Certifications";
import Skill from "../components/aboutme/Skills";

export default function AboutMe() {
  return (
    <main>
      <section id="content" className="bg-slate-50 mt-10">
        <div className="flex container mx-auto">
          {/* Left side */}
          <div className=" w-1/4 p-8">
            <div className="grid grid-row-2 gap-4">
              <div className="">
                <ProfileCard />
              </div>
              <div className="">
                <PersonalInterest />
              </div>
            </div>
          </div>
          {/* Right side */}
          <div className=" w-3/4 p-8">
            <Story />
            <Experience />
            <div className="flex justify-between gap-4">
              <Certifications />
              <Skill />
            </div>
          </div>
          <div></div>
        </div>
      </section>
    </main>
  );
}
