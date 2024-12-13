import React,{ useEffect, useState,useContext } from 'react';
import { Link } from "react-router-dom";
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

  return (
		<nav className="navbar bg-black border border-dark border-5">
    <div className="container mx-1">
      <div className="mx-1 mb-0">
         <Link to="/">
            <img src={starWarsLogo} width="25%" alt="Star Wars Logo" className="navbar-logo" />
        </Link>
      </div>
      <div className="d-flex align-items-end">
        <span className="me-2 text-light btn btn-dark fw-bolder">Favorites <span className="badge bg-secondary">{favorites.length}</span></span>
        <div className="dropdown">
          <span className="dropdown-toggle text-white" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          </span>
          <ul className="dropdown-menu dropdown-menu-end mt-2">
          {favorites.length === 0 ? (
                <li><span className="dropdown-item">(vacio)</span></li>
              ) : (
                favorites.map((fav, index) => (
                  <li className='d-flex justify-content-between' key={index}><span className="dropdown-item px-1">{fav}</span><span class="material-symbols-outlined me-2" onClick={() => {actions.updateFavorites(fav)}}>
                  🗑
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