import DesktopWorkDisplay from "@/components/projects/DesktopWorkDisplay";
import MobileWorkDisplay from "@/components/projects/MobileWorkDisplay";

const Projects = () => {
  return (
    <section
      className="h-fit min-h-screen sm:w-3/4 w-full flex flex-col items-center justify-center sm:mb-48 text-center py-10"
      id="projects"
    >
      <h2 className="text-5xl font-semibold my-20 glowing-text">My work</h2>
      <DesktopWorkDisplay />
      <MobileWorkDisplay />
    </section>
  );
};

export default Projects;
