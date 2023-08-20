import "./Weather.css";
export default function Weather() {
    return (
        <div className="Weather">
            <form>
                <div className="row">
                    <div className="col-9">
                <input type="search" placeholder="Enter a city" className="form-control" />
                </div>
                <div className="col-3">
                <input type="submit" value="Search" className="btn btn-primary" />
                </div>
                </div>
            </form>
            <h1>Oslo</h1>
            <ul>
                <li>Sunday 13:00</li>
                <li>Cloudy</li>
            </ul>
            <div className="row">
                <div className="col-6">
                    <img 
                    src="https://ssl.gstatic.com/onebox/weather/64/rain_light.png"
                    alt="cloudy" />
                    <span className="temperature">6</span>
                    <span className="unit">°C</span>
                </div>
                <div className="col-6">
                    <ul>
                        <li>Precipitation: 91%</li>
                        <li>Humidity: 82%</li>
                        <li>Wind: 14 km/h</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}