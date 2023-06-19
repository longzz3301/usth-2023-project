import "../../css/ourservices.css"
import {useState} from "react"
import Services from "./Services"
import { ReactComponent as IconMedia } from "../../../../assets/SVG/medical 1.svg"
import { ReactComponent as IconCadio } from "../../../../assets/SVG/Vector (1).svg"
import { ReactComponent as IconDna } from "../../../../assets/SVG/Vector (2).svg"
import { ReactComponent as IconBlood } from "../../../../assets/SVG/Vector (3).svg"
const OurServices = () => {
    const [checkup , Setcheckup] = useState(false)
    const CheckupClick = () => {
        Setcheckup(prev => !prev)
    }

    return(
        <div>
            <div className="text-belive">Care you can believe in</div>
            <div className="text-services">Our Services</div>
            <div className="services">
                     
                
                    <div className="button-services1">
                        <button onClick={CheckupClick} className="free1"> 
                            <IconMedia/>
                            <div>Free Checkup</div>  
                                            
                        </button>
                        {checkup && <Services/>} 
                    </div>
                   
                
                <button className="free2"  >
                    <IconCadio style={{
                        color:"#159EEC"
                    }}/>
                    <div>Cardiogram</div>
                    
                    
                </button>
                <button className="free3">
                    <IconDna/>
                    <div>Dna Testing</div>
                    
                    
                </button>
                <button className="free4">
                    <IconBlood/>
                    <div>Blood Bank</div>
                    
                    
                </button>
            </div>
        </div>
    )
}

export default OurServices