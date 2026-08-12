import dynamic from "next/dynamic";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";

const About = dynamic(() => import("@/components/sections/About").then((m) => m.About));
const Services = dynamic(() =>
  import("@/components/sections/Services").then((m) => m.Services)
);
const Projects = dynamic(() =>
  import("@/components/sections/Projects").then((m) => m.Projects)
);
const Process = dynamic(() =>
  import("@/components/sections/Process").then((m) => m.Process)
);
const WhyChooseMe = dynamic(() =>
  import("@/components/sections/WhyChooseMe").then((m) => m.WhyChooseMe)
);
const FAQ = dynamic(() => import("@/components/sections/FAQ").then((m) => m.FAQ));
const Contact = dynamic(() =>
  import("@/components/sections/Contact").then((m) => m.Contact)
);

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Projects />
        <Process />
        <WhyChooseMe />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
