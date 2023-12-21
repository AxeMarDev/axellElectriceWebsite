import Gallary1 from "../assets/ProjectsImages/instapost fina;.png"
import Gallary2 from "../assets/ProjectsImages/coldstoneinsta.png"
import Gallary3 from "../assets/ProjectsImages/spacexinstapost.png"

import Gallary4 from "../assets/ProjectsImages/sunrisemall.png"
import Gallary5 from "../assets/ProjectsImages/ddposf.png"
import Gallary6 from "../assets/ProjectsImages/wssstore.png"

// add baked bear
// add south westkey programs
// doctor in alton gloor

// add padre vacation



const Projects = () =>{
    return(
        <div>

            <div className={"grid p-10 grid-cols-3 gap-8"}>
                <div className={"bg-gray-500 flex"}>
                    <img src={Gallary1} className={"w-full"}/>
                </div>
                <div className={"bg-gray-500 flex "}>
                    <img src={Gallary2} className={"w-full"}/>
                </div>
                <div className={"bg-gray-500 flex "}>
                    <img src={Gallary3} className={"w-full"}/>
                </div>
                <div className={"bg-gray-500 flex"}>
                    <img src={Gallary4} className={"w-full"}/>
                </div>
                <div className={"bg-gray-500  flex"}>
                    <img src={Gallary5} className={"w-full"}/>
                </div>
                <div className={"bg-gray-500 flex "}>
                    <img src={Gallary6} className={"w-full"}/>
                </div>
            </div>

        </div>
    )
}

export default Projects