import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";

import Home from "./pages/Home";
import List from "./pages/List";
import Form from "./pages/Form";
import { BoxerProvider } from "./context/BoxerContext";
import UserInfo from "./pages/UserInfo";
import FormEdit from "./pages/FormEdit";
function App() {
  return (
    <>
      <BoxerProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/list" element={<List />} />
            <Route path="/:id" element={<UserInfo />} />
            <Route path="/form" element={<Form />} />
            <Route path="/formEdit/:id" element={<FormEdit />} />
          </Routes>
        </BrowserRouter>
      </BoxerProvider>
    </>
  );
}

export default App;
