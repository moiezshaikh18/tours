import "./App.css";
import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
const url = "https://course-api.com/react-tours-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  return (
    <div className="App">
      <h1>Tour Project</h1>
    </div>
  );
}

export default App;
