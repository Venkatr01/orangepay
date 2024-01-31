import { Button } from "../components/Button";
import { Emailinput } from "../components/Emailinput";
import { Inputbox } from "../components/Inputbox";
import { Password } from "../components/Password";
import { Heading } from "../components/heading";
import { Subheading } from "../components/subheading";

export function Signup(){
  return (
    <>
      <div className="flex items-center justify-center my-10" >
        <div className="flex flex-col border border-gray-400 mt-5 hover:border-black rounded-xl w-80 px-5 py-5 pb-10 items-center justify-center gap-3 border-white-100" >
          <Heading  label={"Sign Up"}></Heading>
          {/* <Subheading label={"Enter your information to create an account"} ></Subheading> */}
          <Inputbox label={"First Name"} placeholder={"John"}></Inputbox>
          <Inputbox label={"Last Name"} placeholder={"Doe"}></Inputbox>
          <Emailinput label={"Email"} placeholder={"johndoe@example.com"}></Emailinput>
          <Password label={"Password"} />
          <Button />
        </div>
      </div>
    </>
  )
}