import React from "react"
import { Header } from "./components/header/Header"
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserProductsPage } from "./components/user/user-products-page/UserProductsPage";

function App() {
  
  return (
    <>
      <Header />
      <UserProductsPage/>
    </>
  );
}

export default App;
