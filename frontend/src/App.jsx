import {BrowserRouter, Routes,Route} from "react-router-dom";
import { Dashboard } from "../pages/dashboard";
import { Send } from "../pages/send";
import { Signin } from "../pages/signin";
import { Signup } from "../pages/Signup";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/send" element={<Send />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
