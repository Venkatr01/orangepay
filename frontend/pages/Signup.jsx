import { Button } from "../components/Button";
import { useState } from "react";
import axios from "axios";
import { Emailinput } from "../components/Emailinput";
import { Footer } from "../components/Footertext";
import { Inputbox } from "../components/Inputbox";
import { Password } from "../components/Password";
import { Heading } from "../components/heading";
import { useNavigate } from "react-router-dom";
// import { Subheading } from "../components/subheading";

export function Signup(){
  const [firstName,setFirstName] = useState('');
  const [lastName,setLastName] = useState('');
  const [username,setUserName] = useState('');
  const [password,setPassword] = useState('');
  const navigate = useNavigate();

  return (
    <>

      <div className="flex items-center justify-center my-10" >
        <div className="flex flex-col border border-gray-400 mt-5 hover:border-black rounded-xl w-80 px-5 py-5 pb-10 items-center justify-center gap-3 border-white-100" >
          <Heading  label={"Sign Up"}></Heading>
          {/* <Subheading label={"Enter your information to create an account"} ></Subheading> */}
          <Inputbox onChange={e =>{
            setFirstName(e.target.value)
          }} label={"First Name"} placeholder={"John"}></Inputbox>
          <Inputbox onChange={e =>{
            setLastName(e.target.value)
          }} label={"Last Name"} placeholder={"Doe"}></Inputbox>
          <Emailinput onChange={e =>{
            setUserName(e.target.value)
          }}label={"Email"} placeholder={"johndoe@example.com"}></Emailinput>
          <Password onChange={e =>{
            setPassword(e.target.value)
          }} label={"Password"} />

          <Button onPress={async()=>{
            const response = await axios.post("http://localhost:3000/api/v1/user/signup",{
              firstName,
              lastName,
              username,
              password
            });
            localStorage.setItem("token",response.data.token);
            navigate('/dashboard');

          }}  label={"Sign Up"}/>
          <Footer value={"Already have an account? "} action={"Login"} to={"/signin"} />
        </div>
      </div>
    </>
  )
}