import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { Header } from "./elems/header/Header"
import 'bootstrap/dist/css/bootstrap.min.css';
import { addUser, signInUser} from "../src/services/user-service/userService"


function App() {

  const dispatch = useDispatch()
  // const cash = useSelector(state)

  //dispatch()

  return (
    <>
      <Header />
    </>
  );
}

export default App;
