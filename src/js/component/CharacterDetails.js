import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";


function CharacterDetails() {
  const { store, actions } = useContext(Context);
  const { id } = useParams();
  

  useEffect(() => {
    actions.getCharacter(id);
}, [id]);

  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-md-6">
          <img src={`${store.charactersimgs[id] || 'https://via.placeholder.com/800x600'}`} className="img-fluid" alt="Character" style={{width: 800, height: 300}}/>
        </div>
        <div className="col-md-6">
          <h1 className="text-white">{store.singlecharacter ? store.singlecharacter.name : "Loading..."}</h1>
          <p className="text-white">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
            qui ratione voluptatem sequi.
          </p>
        </div>
      </div>

      {store.singlecharacter && (
        <div className="row mt-4 p-3 border-top border-danger">
          <div className="col text-center text-warning fw-bold">Name</div>
          <div className="col text-center text-warning fw-bold">Birth Year</div>
          <div className="col text-center text-warning fw-bold">Gender</div>
          <div className="col text-center text-warning fw-bold">Height</div>
          <div className="col text-center text-warning fw-bold">Skin Color</div>
          <div className="col text-center text-warning fw-bold">Eye Color</div>
        </div>
      )}
      
      {store.singlecharacter && (
        <div className="row p-3">
          <div className="col text-center text-white">{store.singlecharacter.name}</div>
          <div className="col text-center text-white">{store.singlecharacter.birth_year}</div>
          <div className="col text-center text-white">{store.singlecharacter.gender}</div>
          <div className="col text-center text-white">{store.singlecharacter.height}</div>
          <div className="col text-center text-white">{store.singlecharacter.skin_color}</div>
          <div className="col text-center text-white">{store.singlecharacter.eye_color}</div>
        </div>
      )}
    </div>
  );
}

export default CharacterDetails;