import "./App.css";
import Protected from "./components/Protected";
import Login from "./components/login";

function App() {
  return (
    <>
      <Login />
      <Protected/>
    </>
  );
}

export default App;
