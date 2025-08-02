import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Dashboard } from "./pages/Dashboard"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
export default function App() {
  return(
   <BrowserRouter>
   <Routes>
    <Route element={<Dashboard/>} path="/"></Route>
    <Route element={<Signin/>} path="/signin"></Route>
    <Route element={<Signup/>} path="/signup"></Route>
   </Routes>
   </BrowserRouter>
  )
}