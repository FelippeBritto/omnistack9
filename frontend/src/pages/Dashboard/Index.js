import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import './styles.css';

export default function Dashboard() {
   const [spots, setSpots] = useState([]);
   //carrega informação assim que o componente é exibido em tela
   useEffect(() => {
      async function loadSpots() {
         //buscando id do usuario
         const user_id = localStorage.getItem('user');

         const response = await api.get('/dashboard', {
            headers: { user_id }
         });

         setSpots(response.data);
      }

      loadSpots();
   }, [])
   //sempre que o array altera ele executa a função novamente(caso vazio exec. 1x)
   return (
      <>
         <ul className="spot-list">
            {/* percorre a listas de spots e para cada spot retorna um html */}
            {/* sempre que o map for usado o primeiro elemento apos ele recebe uma key */}
            {spots.map(spot => (
               <li key={spot._id}>
                  <header
                     style={{
                        backgroundImage: `url(${spot.thumbnail_url})`
                     }}
                  />
                  <strong>{spot.company}</strong>
                  <span> {spot.price ? `R$${spot.price}/dia` : 'GRATUITO'}</span>
               </li>
            ))}
         </ul>
         <Link to='/new'>
            <button className="btn">
               Cadastrar novo spot
             </button>
         </Link>
      </>
   )
}