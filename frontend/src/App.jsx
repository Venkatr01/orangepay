import {BrowserRouter, Routes,Route} from "react-router-dom";
import { Dashboard } from "../pages/dashboard";
import { SendMoney } from "../pages/send";
import { Signin } from "../pages/signin";
import { Signup } from "../pages/Signup";
import { Heading } from "../components/heading";


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/send" element={<SendMoney />} />
        </Routes>
      </BrowserRouter>
      <Heading ></Heading>
    </>
  )
}

export default App
