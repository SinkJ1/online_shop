import React from "react"
import { Header } from "./components/header/Header"
import 'bootstrap/dist/css/bootstrap.min.css';
import { MainProductPage } from "./pages/MainProductPage";

function App() {
  
  return (
    <>
      <Header />
      <MainProductPage />
    </>
  );
}

export default App;
