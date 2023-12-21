import AxellLogo from "../assets/axelelectriclogonew.png"
import React, {ReactNode} from "react";
import NavButton from "./NavButton";

type NavBarProps = {
    children:ReactNode
}
const Navbar = ({children}:NavBarProps )=>{
    return(
        <>
            <div className={"bg-white h-14 p-2 px-4 flex flex-row justify-between"}>
                <div className={"flex flex-row "}>
                    <div className={"py-2 mr-5"}>
                        <img className={"h-full"} src={AxellLogo} alt={"axell electric brand icon"}/>
                    </div>
                    <div className={"flex flex-row space-x-2"}>
                        {children}
                    </div>
                </div>
                <div className={"flex flex-row space-x-2"}>
                    <NavButton  route={"about"}> contact    </NavButton>
                </div>
            </div>
            <div className={"w-screen h-[1px] bg-gray-200"}></div>
        </>

    )
}

export default Navbar