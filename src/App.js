import Header from "components/Header";
import LeftSide from "components/LeftSide";
import RightSide from "components/RightSide";
import Footer from "components/Footer";

function App() {
  return (
    <div className="transition duration-200 dark:bg-zinc-900">
      <div class="flex flex-col h-screen md:container md:mx-auto gap-4">
        <div className="bg-zinc-200 dark:bg-zinc-800 dark:border dark:border-zinc-700 rounded-b-3xl">
          <Header />
        </div>
        <div class="flex-grow">
          <div class="flex flex-col h-full md:flex-row gap-4">
            <div class="bg-zinc-200 dark:bg-zinc-800 dark:border dark:border-zinc-700 rounded-3xl md:w-1/3 p-5">
              <LeftSide />
            </div>
            <div class="bg-zinc-200 dark:bg-zinc-800 dark:border dark:border-zinc-700 rounded-3xl md:w-2/3 p-5">
              <RightSide />
            </div>
          </div>
        </div>
        <div className="bg-zinc-200 dark:bg-zinc-800 dark:border dark:border-zinc-700 rounded-t-3xl px-5">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
