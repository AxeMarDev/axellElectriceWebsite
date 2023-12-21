import {Link} from "react-router-dom"


type NavButtonProps = {
    children:string
    controller?:[string, any]
    route?:string
}
const NavButton = ({children,controller,route}:NavButtonProps) =>{

    if (controller){
        return(
            <Link to={`/${route}`} onClick={()=>controller[1](children)}>
                <div className={`${controller[0] !== children ? "text-black ":"text-black bg-blue-200 "} rounded h-full grid content-center px-3 text-lg` }>
                    {children}
                </div>
            </Link>

        )
    } else{
        return(
            <Link to={`/${route}`} >
                <div className={`"text-black bg-blue-200 rounded h-full grid content-center px-3 text-lg` }>
                    {children}
                </div>
            </Link>

        )
    }

}

export default NavButton