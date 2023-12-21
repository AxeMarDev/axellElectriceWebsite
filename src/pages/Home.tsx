import React, {useState} from "react";
import {BsArrowLeftSquareFill, BsArrowRightSquareFill} from "react-icons/bs";

const Home = () =>{

    return(
        <div className="bg-white">
            <div style={{
                backgroundImage: "url(https://images.unsplash.com/photo-1536895058696-a69b1c7ba34f?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
                backgroundSize: "cover",
                backgroundPosition: "center"
            }} className={" w-screen h-[40rem] flex flex-row justify-end"}>
                <div className={"w-1/2  h-full flex flex-row text-white justify-between p-4 "}>
                    <div className={" grid content-end"}>
                        <BsArrowLeftSquareFill size={30} />
                    </div>
                    <div className={" grid content-end"}>
                        <BsArrowRightSquareFill size={30}/>
                    </div>
                </div>

                <div className={"w-1/2 bg-blue-600/50 h-full flex justify-center grid content-center p-20"}>
                    <h1 style={{
                        fontFamily: "itc-avant-garde-gothic-pro, sans-serif ",
                        fontWeight: "700",
                        fontStyle: "normal"
                    }}
                        className={"text-white text-7xl"}>The valley's premier commercial Electricians</h1>
                </div>
            </div>
            <div className={"bg-white w-screen h-[40rem]"}>
            </div>
        </div>
    )
}

export default Home