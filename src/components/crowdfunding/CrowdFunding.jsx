import { Footer } from "./Footer";
import { Header } from "./Header";
import { Project } from "./Project";
export default function CrowdFunding() {
  return (
    <section className="flex justify-center flex-col items-center p-10">
      <div className="p-5 border-2 border-[#038103] mb-4 shadow-md shadow-[#038103] rounded-md w-[600px]">
        <Header />
        <div className="grid gap-4 grid-cols-2">
          <Project id={1} goal={1000} />
          <Project id={2} goal={500} />
          <Project id={3} goal={2000} />
          <Project id={4} goal={1500} />
        </div>
      </div>
      <Footer />
    </section>
  );
}
