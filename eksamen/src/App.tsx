import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Header from "./components/shared/Header";
import { FunPage, HomePage, ManagementPage, ViewGamePage } from "./pages";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header/>
        <main className="main-output">
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="view-games" element={<ViewGamePage/>}/>
            <Route path="fun-page/*" element={<FunPage/>}/>
            <Route path="management/*" element={<ManagementPage/>}/>
          </Routes>
        </main>

        <footer></footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
