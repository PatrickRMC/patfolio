import { BrowserRouter, NavLink } from "react-router-dom"
const Navigation = () => (

    <BrowserRouter forceRefresh={true}>
        <NavLink to="/" className="text-xl lg:text-3xl m-3">Home</NavLink>
        <NavLink to="/cv" className="text-xl lg:text-3xl m-3">CV</NavLink>
    </BrowserRouter>
    
)   
const activeClassName = 'nav-item-active'

export default Navigation