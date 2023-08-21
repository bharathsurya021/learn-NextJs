import About from "@/components/About";
import Divider from "@/components/Divider";
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
    </main>
  )
}
