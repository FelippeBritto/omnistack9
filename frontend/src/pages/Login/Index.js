import React, { useState } from 'react';
import api from '../../services/api';

export default function Login({ history }) {
   //O set state armazena uma informação para ser manipulada
   //O use state recebe um valor inicial ()
   //Retorna um vetor de duas posições
   //A constante vetor aplica a desestruturação no vetor
   const [email, setEmail] = useState('');
   //email é a string em branco, retorna o valor do state em tempo real
   //stEmail atualiza o valor  

   async function handleSubmit(event) {
      event.preventDefault();

      //A rota recebe o email dentro de um abjeto
      //Armazena a resposta assiíncrona dentro de response
      const response = await api.post('/sessions', { email });

      //Pegando o id do usuário
      const { _id } = response.data;

      //Armazenando o id no navegador
      localStorage.setItem('user', _id);

      history.push('/dashboard')
   }
   return (
      <>
         <p>
            Ofereça <strong>spots</strong> para programadores
        e encontre <strong>talentos</strong> para sua empresa
      </p>
         <form onSubmit={handleSubmit}>
            <label htmlFor="email">E-Mail *</label>
            <input
               type="email"
               id="email"
               placeholder="Seu melhor e-mail"
               //mantem atualizado 
               value={email}
               //criando uma função (poderia ser externa)
               onChange={event => setEmail(event.target.value)}
            />
            <button type="submit" className="btn">Entrar</button>
         </form>
      </>
   )
}