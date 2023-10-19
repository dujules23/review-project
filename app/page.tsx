import Image from "next/image";
import Contact from "./contact/page";
import About from "./about/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <>
        <About />
        <Contact />
      </>
    </main>
  );
}
