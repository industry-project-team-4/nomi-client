import './App.scss';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Order from "./pages/Order/Order";
import NavBar from "./components/NavBar/NavBar";
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Order />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
