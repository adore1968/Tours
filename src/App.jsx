import React from "react";
import { useGlobalContext } from "./context/AppContext";
import TourList from "./components/TourList";
import Loading from "./components/Loading";

function App() {
  const { loading, tours, fetchTours } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }

  if (tours.length < 1) {
    return (
      <div className="min-h-screen bg-black text-white px-5 sm:px-8 text-center pt-14">
        <h1 className="text-2xl sm:text-4xl font-bold mb-5">Empty tours...</h1>
        <button
          onClick={() => fetchTours()}
          className="text-lg sm:text-xl border border-blue-500 text-white py-1 px-4 rounded hover:bg-blue-500 transition-colors"
        >
          Refresh
        </button>
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen">
      <section className="px-5 sm:px-8 pt-14 flex flex-col items-center justify-center">
        <h1 className="text-center text-2xl sm:text-4xl text-white font-bold">
          Our Tours
        </h1>
        <TourList />
      </section>
    </div>
  );
}

export default App;
