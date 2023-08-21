import About from "@/components/About";
import Contact from "@/components/Contact";
import Divider from "@/components/Divider";
import Expereince from "@/components/Expereince";
import Footer from "@/components/Footer";
import Intro from "@/components/Intro";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
   <Intro />
   <Divider/>
   <About/>
   <Divider/>
   <Skills/>
   <Divider/>
   <Expereince/>
   <Divider/>
   <Contact/>
   <Footer/>
    </main>
  )
}
