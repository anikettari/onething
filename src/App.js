import logo from "./logo.svg";
import "./App.css";
import Navigationbar from "./Components/Navigationbar";
import HomePage from "./Components/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";

function App() {
  return (
    <div>
      <Navigationbar />
      <HomePage />
    </div>
  );
}

export default App;
