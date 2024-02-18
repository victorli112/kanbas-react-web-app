import "./App.css";
import Labs from "./Labs";
import Kanbas from "./Kanbas";
import { HashRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router";
import HelloWorld from "./Labs/a3/HelloWorld/helloworld";

function App() {
  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.2.1/css/all.css"
        rel="stylesheet"
      />
      <HashRouter>
        <div>
          <Routes>
            <Route path="/" element={<Navigate to="/Labs" />} />
            <Route path="/Labs/*" element={<Labs />} />
            <Route path="/Kanbas/*" element={<Kanbas />} />
            <Route path="/hello" element={<HelloWorld />} />
          </Routes>
        </div>
      </HashRouter>
    </>
  );
}

export default App;
