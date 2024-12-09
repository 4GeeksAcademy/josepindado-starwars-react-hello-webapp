import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";


const VehicleDetails = () => {
    const { store, actions } = useContext(Context);
    const { id } = useParams();  
    
    useEffect(() => {
        actions.getVehicle(id);
    }, [id]);

    return (
        <div className="container">
        <div className="row mt-4">
          <div className="col-md-6">
          <img src={`${store.vehiclesimgs[id] || 'https://via.placeholder.com/800x600'}`} className="img-fluid" alt="Planet" style={{maxWidth: 336, height: 300}}/>
          </div>
          <div className="col-md-6">
            <h1 className="text-white">{store.vechicle ? store.vechicle.name : "Loading..."}</h1>
            <p className="text-white">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
              totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
              qui ratione voluptatem sequi.
            </p>
          </div>
        </div>
  
        {store.vechicle && (
          <div className="row mt-4 p-3 border-top border-danger">
            <div className="col text-center text-warning fw-bold">Name</div>
            <div className="col text-center text-warning fw-bold">Manufacturer</div>
            <div className="col text-center text-warning fw-bold">Model</div>
            <div className="col text-center text-warning fw-bold">Vehicle Class</div>
            <div className="col text-center text-warning fw-bold">Created</div>
            <div className="col text-center text-warning fw-bold">Cargo Capacity</div>
          </div>
        )}
        
        {store.vechicle && (
          <div className="row p-3">
            <div className="col text-center text-white">{store.vechicle.name}</div>
            <div className="col text-center text-white">{store.vechicle.manufacturer}</div>
            <div className="col text-center text-white">{store.vechicle.model}</div>
            <div className="col text-center text-white">{store.vechicle.vehicle_class}</div>
            <div className="col text-center text-white">{store.vechicle.created}</div>
            <div className="col text-center text-white">{store.vechicle.cargo_capacity}</div>
          </div>
        )}
      </div>
  )
}

export default VehicleDetails