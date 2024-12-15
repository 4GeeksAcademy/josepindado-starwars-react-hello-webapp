import React,{ useEffect, useState,useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from "../store/appContext";


const Characters = () => {
  const [combinedCharacters, setCombinedCharacters] = useState([]);
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    actions.getCharactersWithUid();
    actions.fetchCharactersWithProperties();
  }, []);

  function handleClick (objectname) {
    actions.updateFavorites(objectname);
  };

  useEffect(() => {
    if (store.storecharacterswithProperties.length && store.storecharacterswithUid.length) {
      const combined = store.storecharacterswithUid.map(character => {
        const properties = store.storecharacterswithProperties.find(prop => prop.name  === character.name);
        return { ...character, ...properties };
      });
      setCombinedCharacters(combined);
      console.log("combinedCharacters: ", combined);
    }
  }, [store.storecharacterswithProperties,store.storecharacterswithUid]);

  return (
    <div className='container-fluid py-2 mb-3 border border-dark border-5'>
      <h2 className="text-dark">Characters</h2>
      <div className="d-flex overflow-auto" style={{ whiteSpace: "nowrap" }}>
        {combinedCharacters.length === 0 ? (<p className='text-secondary fst-italic'>Loading...</p>) :
        combinedCharacters.map((character, index) => (
          <div key={index} style={{ minWidth: "300px", marginRight: "15px" }}>
            <div className="card mb-4">
              <img src={`${store.charactersimgs[character.uid] || 'https://via.placeholder.com/400x200'}`} className="card-img-top" alt={character.name} style={{width: "100%", height: 200}} />
              <div className="card-body">
                <h5 className="card-title">{character.name}</h5>
                <p className="card-text">
                  <strong>Gender: </strong> {character.gender}<br/>
                  <strong>Hair Color:</strong> {character.hair_color}<br />
                  <strong>Eye Color:</strong> {character.eye_color}<br />
                  <strong>Height:</strong> {character.height}<br />
                  <strong>Mass:</strong> {character.mass}<br />
                </p>
                <div className="d-flex justify-content-between">
                  <button className="btn text-light btn btn-dark fw-bolder" onClick={() => navigate(`/CharacterDetails/${character.uid}`)}>Learn more!</button>
                  <button className={`heartbtn ${store.favorites.includes(character.name) ? "clicked" : ""}`} onClick={() => handleClick(character.name)}>❤</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Characters;