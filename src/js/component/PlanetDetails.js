import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";


const PlanetDetails = () => {
    const { store, actions } = useContext(Context);
    const { id } = useParams();

    useEffect(() => {
        actions.getPlanet(id);
    }, [id]);

  return (
    <div className="container">
        <div className="row mt-4">
          <div className="col-md-6">
          <img src={`${store.planetsimg[id] || 'https://via.placeholder.com/800x600'}`} className="img-fluid" alt="Planet" style={{maxWidth: 336, height: 300}}/>
          </div>
          <div className="col-md-6">
            <h1 className="text-white">{store.planet ? store.planet.name : "Loading..."}</h1>
          </div>
        </div>
  
        {store.planet && (
          <div className="row mt-4 p-3 border-top border-secondary">
            <div className="col text-center text-secondary fw-bold">Name</div>
            <div className="col text-center text-secondary fw-bold">Climate</div>
            <div className="col text-center text-secondary fw-bold">Gravity</div>
            <div className="col text-center text-secondary fw-bold">Terrain</div>
            <div className="col text-center text-secondary fw-bold">Diameter</div>
            <div className="col text-center text-secondary fw-bold">Population</div>
          </div>
        )}
        
        {store.planet && (
          <div className="row p-3">
            <div className="col text-center text-white">{store.planet.name}</div>
            <div className="col text-center text-white">{store.planet.climate}</div>
            <div className="col text-center text-white">{store.planet.gravity}</div>
            <div className="col text-center text-white">{store.planet.terrain}</div>
            <div className="col text-center text-white">{store.planet.diameter}</div>
            <div className="col text-center text-white">{store.planet.population}</div>
          </div>
        )}
      </div>
  )
}

export default PlanetDetails