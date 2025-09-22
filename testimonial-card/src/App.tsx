import "./App.css";
import TestimonialCard from "./components/TestimonialCard";
import sarahAvatar from "./assets/sarah-profile-thumbnail.png";

function App() {
  return (
    <div className="bg-gradient-to-b from-[#F9FAFB] to-[#D2D6DB] h-dvh w-dvw py-[200px] flex justify-center items-start">
      <TestimonialCard
        avatar={sarahAvatar}
        name="Sarah Dole"
        handle="@sarahdole"
      >
        I&apos;ve been searching for high-quality abstract images for my design
        projects, and I&apos;m thrilled to have found this platform. The variety
        and depth of creativity are astounding!
      </TestimonialCard>
    </div>
  );
}

export default App;
