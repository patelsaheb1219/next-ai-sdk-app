import { WiHumidity, WiStrongWind, WiBarometer } from 'react-icons/wi';
import { MdLocationOn, MdVisibility } from 'react-icons/md';
import Image from 'next/image';

type WeatherProps = {
    temperature: number;
    weather: string;
    location: string;
    humidity: number;
    wind: number;
    pressure: number;
    visibility: number;
    icon: string;
};

export const Weather = ({ temperature, weather, location, humidity, wind, pressure, visibility, icon }: WeatherProps) => {
    return (
        <div className="card shadow rounded-3 mb-3">
            <div className="card-body p-4">
                <div className="d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-start mb-4">
                        <div>
                            <h5 className="card-title text-primary mb-3 d-flex align-items-center">
                                <MdLocationOn className="me-2" size={24} />
                                {location}
                            </h5>
                            <p className="mb-1 fs-5 d-flex align-items-center">
                                <Image src={icon} alt={"weather"} width={28} height={28} className="me-2" />
                                {weather}
                            </p>
                            <p className="display-4 mb-0 fw-bold">
                                {temperature}°C
                            </p>
                        </div>
                        <Image src={icon} alt={"weather"} width={80} height={80} className="text-primary opacity-50" />
                    </div>
                    
                    <div className="row g-3">
                        <div className="col-6 col-md-3">
                            <div className="d-flex align-items-center">
                                <WiHumidity className="me-2 text-primary" size={24} />
                                <div>
                                    <small className="text-muted">Humidity</small>
                                    <p className="mb-0">{humidity}%</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-md-3">
                            <div className="d-flex align-items-center">
                                <WiStrongWind className="me-2 text-primary" size={24} />
                                <div>
                                    <small className="text-muted">Wind</small>
                                    <p className="mb-0">{wind} km/h</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-md-3">
                            <div className="d-flex align-items-center">
                                <WiBarometer className="me-2 text-primary" size={24} />
                                <div>
                                    <small className="text-muted">Pressure</small>
                                    <p className="mb-0">{pressure} hPa</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-md-3">
                            <div className="d-flex align-items-center">
                                <MdVisibility className="me-2 text-primary" size={20} />
                                <div>
                                    <small className="text-muted">Visibility</small>
                                    <p className="mb-0">{visibility} km</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};