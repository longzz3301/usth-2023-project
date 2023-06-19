import '../css/topmost.css'
import { ReactComponent as IconPhone } from '../../../assets/SVG/iconGroup188.svg'
import { ReactComponent as Clock } from '../../../assets/SVG/iconGroup177.svg'
import { ReactComponent as Location } from '../../../assets/SVG/iconGroup178.svg'
const Topmost = () => {
    return(
        <div className="topmost">
            <p className='medical'><span className='med'>MED</span><span className='dical'>DICAL</span></p>
            <div className='group179'>
                
                <div className='group8'>
                        <IconPhone/>
                        <div>
                            <div>EMERGENCY</div>
                            <div>(237) 681-812-255</div>
                        </div>
                </div>
                <div className='group8'>
                        <Clock/>
                        <div>
                            <div>WORK HOUR</div>
                            <div>09:00 -20:00 Everyday</div>
                        </div>
                </div>
                    <div className='group8'>
                        <Location/>
                        <div>
                            <div>LOCATION</div>
                            <div>0123 Some Place</div>
                        </div>
                </div>
             </div>
                
                
          

        </div>
    )
}

export default Topmost