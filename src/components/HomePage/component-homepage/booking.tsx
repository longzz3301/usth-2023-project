import "../css/booking.css"
import { ReactComponent as Calender } from "../../../assets/SVG/calender-goal1.svg"
import { ReactComponent as IconTeam } from "../../../assets/SVG/27-Team.svg"
import { ReactComponent as IconCash } from "../../../assets/SVG/15.-Cash.svg"
const Booking =() => {
    return(
        <div className="group181">
            <div className="goal1">
                <p className="text-goal1">Book an Appointment </p>
                <Calender className="calender"/>
            </div>
            <div className="goal2">
                <p className="text-goal2">Book an Appointment </p>
                <IconTeam/>
                
            </div>
            <div className="goal3">
                <p className="text-goal1">Book an Appointment </p>
                <IconCash/>
            </div>
        </div>
    )
}

export default Booking