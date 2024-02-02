export function Inputbox({onChange,label,placeholder}){
    return (
    <>
        <div>
            <div>{label}</div>
            <div className="border-solid">              
                <input onChange={onChange} type="text" className="border border-gray-400 focus:border-black focus:outline-none rounded-md px-4 py-2" placeholder= {placeholder} />
            </div>
        </div>
    </>
     )
}