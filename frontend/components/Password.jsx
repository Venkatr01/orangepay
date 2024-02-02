export function Password({label,onChange}){
    return (
        <>
        <div>
        <div>{label}</div>
        <input  onChange={onChange} type="password" className="border border-gray-400 focus:border-black focus:outline-none rounded-md px-4 py-2" />
        </div>
        </>
    )
}