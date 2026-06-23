import Hero from "../components/home/Hero";
import ExpertiseArea from "../components/home/ExpertiseArea";
// import FeaturedProjects from "../components/home/FeaturedProjects";

export default function HomePage() {
  return (
    <main id="home">
      <Hero />
      <ExpertiseArea />
      {/* <FeaturedProjects /> */}
    </main>
  );
}
