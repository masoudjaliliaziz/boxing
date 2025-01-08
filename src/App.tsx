import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";

import Home from "./pages/Home";
import List from "./pages/List";
import Form from "./pages/Form";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<List />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
