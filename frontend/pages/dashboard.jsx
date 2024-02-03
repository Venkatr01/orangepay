// import { Appbar } from "../components/Appbar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";
import Navbar from "./Homepage";


export function Dashboard(){
    return (
        <>
        <Navbar />
        <div className="h-screen bg-orange-500">
            {/* <Appbar /> */}
            <Balance  />

           <div className="border-2 border-black m-2 p-4">
                <Users />
           </div>
        </div>
        </>
    )
}