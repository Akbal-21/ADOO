import React from "react";
import { useSelector } from "react-redux";

export const ProfileScreen = () => {
  const { name, email, uid, photoURL } = useSelector((state) => state.auth);
  console.log(name, email, uid, photoURL);
  return (
    <div>
      <h2>Profile</h2>
      <div>
        <h3>Nombre : {name}</h3>
        <h4>No.Usuario: {uid}</h4>
        <h4>Email: {email}</h4>
        <h4>
          Photo: <img src={photoURL} alt="new" />
        </h4>
      </div>
    </div>
  );
};
