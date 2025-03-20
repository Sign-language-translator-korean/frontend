import { useState, useEffect } from "react";
import Header from './components/header'

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/")
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <Header />
      <h1>FastAPI + React</h1>
      <p>API 응답: {message}</p>
    </div>
  );
}

export default App;