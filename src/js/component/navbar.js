import React,{ useEffect, useState,useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from "../store/appContext";
import starWarsLogo from '../../img/starWarsLogo.png'

export const Navbar = () => {
  const navigate = useNavigate();
	const {store, actions} = useContext(Context);
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    if (store.favorites){
      setFavorites(store.favorites);
    }
  }, [store.favorites]);

              /* <li><span className="dropdown-item">(empty)</span></li> */

  return (
		<nav className="navbar bg-black border border-warning">
    <div className="container mx-1">
      <div className="mx-1 mb-0">
       <a><h1 className="navbar-brand  badge text-wrap text-warning d-block" onClick={() => navigate("/")}  style={{fontSize: '2.3em', fontFamily: 'Impact, fantasy', textAlign: 'start', padding: '0,0,0,0'}}>Star<br />Wars</h1>
       </a>
      </div>
      <div className="d-flex align-items-center">
        <span className="me-2 text-dark btn btn-warning fw-bolder">Favorites <span className="badge bg-secondary">{favorites.length}</span></span>
        <div className="dropdown">
          <span className="dropdown-toggle text-white" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            
          </span>
          <ul className="dropdown-menu dropdown-menu-end mt-2">
          {favorites.length === 0 ? (
                <li><span className="dropdown-item">(empty)</span></li>
              ) : (
                favorites.map((fav, index) => (
                  <li className='d-flex justify-content-between' key={index}><span className="dropdown-item px-1">{fav}</span><span class="material-symbols-outlined me-2" onClick={() => {actions.updateFavorites(fav)}}>
                  delete
                  </span></li>
                ))
              )}
          </ul>
        </div>
      </div>
    </div>
  </nav>
	);
};