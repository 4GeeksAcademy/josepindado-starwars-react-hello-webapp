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
            <p className="text-white">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
              totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
              qui ratione voluptatem sequi.
            </p>
          </div>
        </div>
  
        {store.planet && (
          <div className="row mt-4 p-3 border-top border-danger">
            <div className="col text-center text-warning fw-bold">Name</div>
            <div className="col text-center text-warning fw-bold">Climate</div>
            <div className="col text-center text-warning fw-bold">Gravity</div>
            <div className="col text-center text-warning fw-bold">Terrain</div>
            <div className="col text-center text-warning fw-bold">Diameter</div>
            <div className="col text-center text-warning fw-bold">Population</div>
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