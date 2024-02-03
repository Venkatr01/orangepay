export function Inputbox({onChange,label,placeholder}){
    return (
    <>
        <div>
            <div>{label}</div>
            <div className="border-solid">              
                <input  onChange={onChange} type="text" className="border border-gray-400 focus:border-black focus:outline-none rounded-md px-4 py-2 hover:bg-gray-300 hover:text-black" placeholder= {placeholder} />
            </div>
        </div>
    </>
     )
}

{/* <input type="text" class="border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100 focus:outline-none focus:border-blue-500"> */}
