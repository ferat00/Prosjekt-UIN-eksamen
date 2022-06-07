import { NavLink } from "react-router-dom";

const Navigation = () => {

/* 
koden for style isActive navigasjon ble hentet fra:
https://xn--fullstkk-o0a.no/courses/react-router/02-link-navlink/
*/

    const Style = ({ isActive }) => {
        return {
            textDecoration: isActive ? "underline" : "",
        }
    }

    return (
        <>
            <nav>
                <h3  className="h3" data-testid="logo">
                    <NavLink  to="/" data-testid="logo_link" >
                    Tjenesteweb
                    </NavLink>
                </h3>
                <ul  data-testid="nav">
                    <li data-testid="nav_services">
                        <NavLink className="tjenester" to="/tjeneste" data-testid="services_link" style={Style} >
                        Tjenester
                        </NavLink>
                    </li>
                    <li  data-testid="nav_new">
                        <NavLink className="ny" to="ny" data-testid="create_link" style={Style}  >
                            Ny tjeneste
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navigation;