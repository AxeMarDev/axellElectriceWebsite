const Banner = () =>{
    return(
        <div className={"bg-blue-600 w-screen  h-10 text-white pl-3 flex flex-row justify-between pr-2"}>
            <p className={"grid content-center"}>Serving the rio grande valley for over 20 years</p>
            <div className={"flex space-x-2 flex-row underline "}>
                <a className={"text-blue-300 grid content-center"} target="_blank" href={"https://coretools.railiant.app/account"}>employee portal</a>
                <a className={"text-blue-300 grid content-center"} target="_blank" href={"https://coretools.railiant.app/account"}>customer portal</a>
            </div>
        </div>
    )
}

export default Banner