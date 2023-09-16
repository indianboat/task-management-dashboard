import DoneListSection from "./components/DoneListSection";
import InProgressListSection from "./components/InProgressListSection";
import Navbar from "./components/Navbar";
import RevisedListSection from "./components/RevisedListSection";
import TitleSection from "./components/TitleSection";
import ToDoListSection from "./components/ToDoListSection";

export default function Home() {
  return (
    <>
      <div className="">
        <Navbar />
        <div className="p-3">
          <TitleSection />
          <div className="container mx-auto grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 select-none">
            <ToDoListSection />
            <InProgressListSection />
            <DoneListSection />
            <RevisedListSection />
          </div>
        </div>
      </div>
    </>
  )
}
