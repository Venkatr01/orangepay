export function Emailinput({label,placeholder,onChange}){
    return (
        <>
        <div>
        <div>{label}</div>
        <input onChange={onChange} type="email" className="border border-gray-400 focus:border-black focus:outline-none rounded-md px-4 py-2" placeholder= {placeholder} />
        </div>
        </>
    )
}