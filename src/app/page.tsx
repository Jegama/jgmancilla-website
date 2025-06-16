import { AboutMe } from "@/components/home/about-me";
import { AIChat } from "@/components/home/ai-chat";

export default function HomePage() {
  return (
    <div className="container-max section-padding">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
        <div className="md:order-1">
          <AboutMe />
        </div>
        <div className="md:order-2">
          <AIChat />
        </div>
      </div>
    </div>
  );
}
