import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Order from "./pages/Order/Order";
import ChatBot from "./pages/ChatBot/ChatBot";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Order />}></Route>
          <Route path="/chatbot" element={<ChatBot />}></Route>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
