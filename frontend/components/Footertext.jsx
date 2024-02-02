import {Link} from "react-router-dom";

export function Footer({value,action,to}){
    return (
        <>
        <div>
            <div>{value} 
                {/* <span className="underline"> {action}</span> */}
                <Link className="underline" to={to} >{action}</Link>
            </div>
        </div>
        </>
    )
}