import RailiantLogo from "../assets/railiatnlogoforweb.png"
const Footer = () =>{
    return(
        <>
            <div className={"w-screen h-[25rem] bg-stone-800"}>
                <p>footer</p>
            </div>
            <div className={"w-screen p-3 h-16 bg-stone-900 flex flex-row justify-center "}>
                <p className={"text-white text-xl grid content-center pr-3"}>powered by </p>
                <img className={"h-full"} src={RailiantLogo}/>
            </div>
        </>
    )
}

export default Footer