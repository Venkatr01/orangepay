import {Link} from "react-router-dom";


export function Homepage(){

    return (
        <>
        <div className="h-screen bg-orange-500" >
            <Navbar />
            <div className="gap-20 mt-60 flex justify-center align-center ">
                <SignupButton  to={"/signup"}/>
                <SigninButton to={"/signin"} />
            </div>

        </div>
        </>
    )
}

function Navbar() {
  return (
    <div class=" border-2 border-black bg-orange-500">
        <nav className="bg-black py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
            <div className="flex-shrink-0">
                <span className="text-orange-300 text-2xl font-semibold">OrangePay</span>
            </div>
            <div className="hidden md:block">
                <div className="flex space-x-4">
                <a href="#" className="text-orange-300 hover:bg-orange-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
                <a href="#" className="text-orange-300 hover:bg-orange-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
                <a href="#" className="text-orange-300 hover:bg-orange-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
                {/* <a href="#" className="text-orange-300 hover:bg-orange-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Sign In</a> */}
                {/* <a href="#" className="text-orange-300 hover:bg-orange-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Sign Up</a> */}
                </div>
            </div>
            </div>
        </div>
        </nav>
    </div>
    
  );
}



export function SigninButton({to}){
    return (
        <>
        <Link to={to}>
            <button type="button" className=" px-6 py-3.5 text-base font-medium text-white bg-black hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign In</button>        
        </Link>
        </>
    )
}


export function SignupButton({to}){
    return (
        <>
            <Link to={to} >
                <button type="button" className=" px-6 py-3.5 text-base font-medium text-white bg-black hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign Up</button>                    
            </Link>
        </>
    )
}










export default Navbar;

