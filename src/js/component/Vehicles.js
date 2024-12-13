import React,{ useEffect, useState,useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from "../store/appContext";


function Vehicles() {
  const [combinedVehicles, setCombinedVehicles] = useState([]);
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    actions.getVehiclesWithUid();
    actions.fetchVehiclesWithProperties();
  }, []);

  useEffect(() => {
    if (store.vehicleswithProperties.length && store.vehicleswithUid.length) {
      const combined = store.vehicleswithUid.map(character => {
        const properties = store.vehicleswithProperties.find(prop => prop.name  === character.name);
        return { ...character, ...properties };
      });
      setCombinedVehicles(combined);
      console.log("combinedVehicles: ", combined);
    }
  }, [store.vehicleswithProperties,store.vehicleswithUid]);

  function handleClick (objectname) {
    actions.updateFavorites(objectname);
  };
  
  return (
    <div className="container-fluid py-2 mb-3 border border-dark border-5">
      <h2 className="text-dark">Vehicles</h2>
      <div className='d-flex overflow-auto' style={{ whiteSpace: "nowrap" }}>
      {combinedVehicles.length === 0 ? (<p className='text-secondary fst-italic'>Loading...</p>) :
      combinedVehicles.map((vehicle, index) => (
        <div key={index} style={{ minWidth: "300px", marginRight: "15px" }}>
          <div className="card mb-4">
            <img src={`${store.vehiclesimgs[vehicle.uid] || 'https://via.placeholder.com/400x200'}`} className="card-img-top" alt={vehicle.name} style={{width: 400, height: 200}} />
            <div className="card-body">
              <h5 className="card-title">{vehicle.name}</h5>
              <p className="card-text">
                <strong>Model:</strong> {vehicle.model}<br />
                <strong>Manufacturer:</strong> {vehicle.manufacturer}
              </p>
              <div className="d-flex justify-content-between">
                <button className="btn text-light btn btn-dark fw-bolder" onClick={() => navigate(`/VehicleDetails/${vehicle.uid}`)}>Learn more!</button>
                <button className={`heartbtn ${store.favorites.includes(vehicle.name) ? "clicked" : ""}`} onClick={() => handleClick(vehicle.name)}>❤</button>
              </div>
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}

export default Vehicles;