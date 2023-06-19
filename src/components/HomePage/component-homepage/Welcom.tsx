import "../css/welcome.css"
import { ReactComponent as IconArrow } from "../../../assets/SVG/Vector.svg"

const Welcome = () => {
    return(
        <div className="group182">
            <div className="group25">
                <div className="text1">Welcome to Meddical</div>
                <div className="text2">A Great Place to Receive Care</div>
            </div>
            <p className="lorem">Loreqm ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor</p>
            <ul className="learn">
             <li className="button3"><a href="link">Learn More </a>  </li>
             <IconArrow className="Arrow"/>

            </ul>
        </div>
    )
}
export default Welcome