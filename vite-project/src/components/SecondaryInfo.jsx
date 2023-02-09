import sunrise from '../assets/sunrise.svg'
import sunset from '../assets/sunset.svg'
import windspeed from '../assets/wind-speed.svg'
import winddir from '../assets/wind-dir.svg'


function SecondaryInfo(props) {

    function unixTimestampToDate(timestamp) {
        let date = new Date(timestamp * 1000);
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        return `${hours}:${minutes}:${seconds}`;
      }

      function convertDegreesToCardinalPoints(degrees) {
        let cardinalPoints = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
        let index = Math.round(degrees / 22.5);
        return cardinalPoints[index % 16];
      }   
    
    return (
        <div className="row m-auto">
            <div className="col-6 d-flex flex-column align-items-center">
                <p><img src={sunrise} /> {unixTimestampToDate(props.sunrise)}</p>
                <p><img src={sunset} /> {unixTimestampToDate(props.sunset)}</p>
            </div>
            <div className="col-6 d-flex flex-column align-items-center">
                <p><img src={windspeed} /> {props.windSpeed}</p>
                <p><img src={winddir} /> {convertDegreesToCardinalPoints(props.windDir)}</p>
            </div>
        </div>
    )
}
 
export default SecondaryInfo
