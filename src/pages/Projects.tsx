import HeroProject from "../components/projects/HeroProject";
import Filters from "../components/projects/Filters";
import ProjectCard from "../components/projects/ProjectCard";

export default function Projects() {
  return (
    <main>
      <HeroProject />
      <Filters />
      <ProjectCard />
    </main>
  );
}
