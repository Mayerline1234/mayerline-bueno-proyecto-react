
import React from "react";
import { Link } from 'react-router-dom';

const Card = ({ name, username, id }) => {
  const addFav = () => {
    // Obtén los favoritos actuales del almacenamiento local
    const favs = JSON.parse(localStorage.getItem("favs")) || [];

    // Crea un nuevo favorito
    const newFav = { name, username, id };

    // Verifica si el favorito ya existe
    const exists = favs.some((fav) => fav.id === newFav.id);

    if (!exists) {
      // Agrega el nuevo favorito a la lista
      favs.push(newFav);

      // Guarda la lista actualizada en el almacenamiento local
      localStorage.setItem("favs", JSON.stringify(favs));

      alert(`Se ha agregado odontologo(a) ${name} a favoritos`);
    } else {
      alert(`${name} ya es favorito`);
    }
  };

  return (
    <div className="card">
      <Link key={id} to={`/dentist/${id}`}>
        <img
          style={{ width: '100%' }}
          src="/images/doctor.jpg"
          alt=""
        />
        <p>{name}</p>
        <p>{username}</p>
        <p>{id}</p>
      </Link>
      <Link to={'/favs'}>
        <button onClick={addFav} className="favButton">
          Add fav
        </button>
      </Link>
    </div>
  );
};

export default Card;