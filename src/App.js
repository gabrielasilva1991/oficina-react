import React, { useState, useEffect } from 'react';
import './App.css';
import User from './components/Users';

const data = [
  {
    name: 'Isa',
    description: 'Gosta de sorvete'
  },
  {
    name: 'Cintia',
    description: 'Gosta de goiaba cascão'
  },
  {
    name: 'Moni',
    description: 'Gosta de mousse'
  },
];

const App = () => {
  const [users, setUsers] = useState(data);
  const [name, setName] = useState(''); 
  const [description, setDescription] = useState(''); 


  // const [pokemons, setPokemons] = useState([]);

  // useEffect(() => {
  //   fetch('https://pokeapi.co/api/v2/type/5')
  //   .then(result => result.json())
  //   .then(result => {
  //     console.log(result);
  //     setPokemons(result.pokemon);
  //   });
    
  // }, []);



  useEffect(() => {
    console.log('Component App Montado')
  }, []);

  // useEffect(() => {
  //   console.log('Input description foi alterado')
  // }, [description]);

  // useEffect(() => {
  //   console.log('Input name foi alterado')
  // }, [name]);

  // useEffect(() => {
  //   console.log('Users foi alterado')
  // }, [users]);

  const handleSubmit = (event) => {
    event.preventDefault();

    setUsers([ ...users, {name, description} ]);

  }

  return (
    <div className= "App">
      {
        users.map((user, index) => (
          <User
            key={index}
            name={user.name}
            description={user.description}
          />
        ))
      }

      <form>
        <input type='text' value={name} onChange={(event) => setName(event.target.value)}/>
        <input type='text' value={description} onChange={(event) => setDescription(event.target.value)}/>
        <button type='submit' onClick={(event) => handleSubmit(event)}>Criar novo usuário</button>
        
        
      </form>

      {/* {
        pokemons.map((item, index)=> {
          return (
            <p key={index} > {item.pokemon.name}</p>
          )
        })
      }     */}

    </div>
  );
}

export default App;
