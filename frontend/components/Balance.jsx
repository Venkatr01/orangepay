import axios from "axios"
import { useEffect, useState } from "react"

export const Balance = ({ value }) => {

    const [balance,setBalance] = useState(0);


    useEffect(()=>{
        axios.get("https://wallet-backed.onrender.com/api/v1/account/balance",{
            headers: {
                Authorization: "Bearer " + localStorage.getItem('token')
            }
        }).then((res)=>{
            setBalance(res.data.balance);
        })
    })

    return <div className="flex">
        <div className="font-bold text-lg">
            Your balance
        </div>
        <div className="font-semibold ml-4 text-lg">
        ₹ {Math.round(balance)}
        </div>
    </div>
}




