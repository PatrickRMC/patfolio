import { BrowserRouter, NavLink } from "react-router-dom"
const Navigation = () => (
    <BrowserRouter forceRefresh={true}>
        
        <NavLink to="/" className="text-3xl">Home</NavLink>
        <NavLink to="/games" className="text-3xl">Games</NavLink>
    </BrowserRouter>
)   
const activeClassName = 'nav-item-active'

export default Navigation