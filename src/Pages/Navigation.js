import { BrowserRouter, NavLink } from "react-router-dom"
const Navigation = () => (

    <BrowserRouter forceRefresh={true}>
        <NavLink to="/" className="font-mono text-coolorange text-xl lg:text-3xl m-3">Home</NavLink>
    </BrowserRouter>
    
)   
const activeClassName = 'nav-item-active'

export default Navigation