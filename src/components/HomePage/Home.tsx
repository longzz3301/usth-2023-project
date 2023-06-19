import Topmost from "components/HomePage/component-homepage/Topmost"
import Navbbar from "components/HomePage/component-homepage/Navbar"
import Tittle from "./component-homepage/title"
import Booking from "./component-homepage/booking"
import Welcome from "./component-homepage/Welcom"
import Picture from "./component-homepage/body1"
import OurServices from "./component-homepage/component-services/OurServices"
import Specialties from "./component-homepage/specility"
const Home =() => {
    return(
        <div>
            <Topmost/>
            <Navbbar/>
            <Tittle/>
            <Booking/>
            <Welcome/>
            <Picture/>
            <OurServices/>
            <Specialties/>
            
            
            
            
        </div>
    )
}

export default Home