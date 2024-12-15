import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";


function CharacterDetails() {
  const { store, actions } = useContext(Context);
  const { id } = useParams();
  

  useEffect(() => {
    actions.getCharacter(id);
}, [id]);

console.log(store.singlecharacter);

  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-md-6">
          <img src={`${store.charactersimgs[id] || 'https://via.placeholder.com/800x600'}`} className="img-fluid" alt="Character" style={{width: 800, height: 300}}/>
        </div>
        <div className="col-md-6">
          <h1 className="text-black">{store.singlecharacter?.name}</h1>
        </div>
      </div>

      {store.singlecharacter && (
        <div className="row mt-4 p-3 border-top border-secondary">
          <div className="col text-center text-secondary fw-bold">Name</div>
          <div className="col text-center text-secondary fw-bold">Birth Year</div>
          <div className="col text-center text-secondary fw-bold">Gender</div>
          <div className="col text-center text-secondary fw-bold">Height</div>
          <div className="col text-center text-secondary fw-bold">Skin Color</div>
          <div className="col text-center text-secondary fw-bold">Eye Color</div>
        </div>
      )}
      
      {store.singlecharacter && (
        <div className="row p-3">
          <div className="col text-center text-black">{store.singlecharacter.name}</div>
          <div className="col text-center text-black">{store.singlecharacter.birth_year}</div>
          <div className="col text-center text-black">{store.singlecharacter.gender}</div>
          <div className="col text-center text-black">{store.singlecharacter.height}</div>
          <div className="col text-center text-black">{store.singlecharacter.skin_color}</div>
          <div className="col text-center text-black">{store.singlecharacter.eye_color}</div>
        </div>
      )}
    </div>
  );
}

export default CharacterDetails;