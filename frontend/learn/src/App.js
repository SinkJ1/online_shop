import React from "react"
import { useSelector } from "react-redux"
import { Header } from "./elems/header/Header"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  const user = useSelector(state=> state.Autorization)

  console.log(user)
  
  return (
    <>
      <Header />
    </>
  );
}

export default App;
