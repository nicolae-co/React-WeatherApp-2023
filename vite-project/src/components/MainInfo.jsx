function MainInfo(props) {
  const currentDate = new Date();
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const monthsOfYear = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const formattedDate = `${daysOfWeek[currentDate.getUTCDay()]}, ${
    monthsOfYear[currentDate.getUTCMonth()]
  } ${currentDate.getUTCDate()}, ${currentDate.getUTCFullYear()}`;

  const degreeUnit = props.units === "metric" ? "C" : "F";

  return (
    <div className="row ">
      <div className="d-flex flex-column align-items-center justify-content-center">
        <h1 className="city p-4">{props.city}</h1>
        <h3 className="date">{formattedDate}</h3>
        <h1 className="temperature pt-4 ">{props.temp}°{degreeUnit}</h1>
        <p>_ _ _ _ _ _ _ _ _</p>
        <div className="d-flex align-items-center text-center">
          <p className="m-0">{props.weatherMain}</p>
          <img
            src={`http://openweathermap.org/img/wn/${props.weatherIcon}@2x.png`}
          />
        </div>
        <p>{props.minTemp}°{degreeUnit} / {props.maxTemp}°{degreeUnit}</p>
        <button onClick={props.changeUnits} className="btn btn-success w-25">
          {props.units === "metric" ? "F" : "C"}
        </button>
      </div>
    </div>
  );
}

export default MainInfo;
