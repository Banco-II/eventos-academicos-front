import { Routes,BrowserRouter, Route } from "react-router-dom";
import GlobalStyle from "./styles/global-styles";
import HomePage from "./pages/Home";

function App() {
  return (
  <BrowserRouter>
  <GlobalStyle/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
    </Routes>
  </BrowserRouter>);
}

export default App;
