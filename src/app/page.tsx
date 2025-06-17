import { AboutMe } from "@/components/home/about-me";
import { AIChat } from "@/components/home/ai-chat";

export default function HomePage() {
  return (
    <div className="container-max px-4 sm:px-6 lg:px-8 h-full flex flex-col">
      <div className="py-8 flex-shrink-0">
        <AboutMe />
      </div>
      <div className="flex-grow min-h-0 pb-8">
        <AIChat />
      </div>
    </div>
  );
}
