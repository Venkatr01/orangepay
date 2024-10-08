import { Button } from "../components/Button";
import { Emailinput } from "../components/Emailinput";
import { Footer } from "../components/Footertext";
import { Password } from "../components/Password";
import { Heading } from "../components/heading";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { Homepage } from "./Homepage";

export function Signin(){

  const [username,setUserName] = useState('');
  const [password,setPassword] = useState('');
  const navigate = useNavigate();
    return (
        <>
        <div className="flex items-center justify-center h-screen bg-orange-500">
            <div className="flex items-center justify-center ">
            <div className="flex flex-col border border-white mt-5 hover:border-black  hover:text-black rounded-xl w-80 px-5 py-5 pb-10 items-center justify-center gap-3 border-white-100" >
                        <Heading label={"Sign in"}/>
                        <Emailinput onChange={e =>{
                            setUserName(e.target.value)
                        }}  label={"Email"}/>
                        <Password onChange={e =>{
                            setPassword(e.target.value)
                        }}  label={"Password"} />
                        <Button onPress={async () => {
                        await axios.post("https://wallet-backed.onrender.com/api/v1/user/signin", {
                            username,
                            password
                        }).then((res) => {
                            localStorage.setItem("token", res.data.token);
                            navigate('/dashboard');
                        })
                    }} label={"Sign in"}/>
                        <Footer value={"Dont have an account? "} action={"Sign Up"} to={"/signup"} />
                </div>
            </div>
        </div>
        </>
    )
}