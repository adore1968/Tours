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
      <div>
        <h1>Empty tours...</h1>
        <button onClick={() => fetchTours()}>Refresh</button>
      </div>
    );
  }

  return (
    <div>
      <section>
        <h1>Our Tours</h1>
        <TourList />
      </section>
    </div>
  );
}

export default App;
