import "../css/navbar.css"
import { ReactComponent as IconSearch } from "../../../assets/SVG/Group 175.svg"
const Navbbar = () => {
    return(
        <div className="navbar">
            <div className="frame7">
                <div className="Home">Home</div>
                <div className="aboutus">About us</div>
                <div className="Home">Services</div>
                <div className="Home">Doctors</div>
                <div className="Home">News</div>
                <div className="Home">Contact</div>
                
            </div>
            <div className="group180">
                <IconSearch className="icon"/>
                <button className="button1">Appointment</button>
            </div>
            
        </div>
    )

}
export default Navbbar