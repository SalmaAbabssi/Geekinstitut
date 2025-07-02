import React from 'react'
import UserFavoriteAnimals from './UserFavoriteAnimals.jsx'
function App(){
  const user ={
    firstName: 'Bob', 
    lastName: 'Dylan' ,
    favoriteAnimals: ['Dog', 'Cat', 'Elephant']
  };

 return (
    <div> <h3> {user.firstName}</h3>
      <h3> {user.lastName}</h3>
      <UserFavoriteAnimals animals={user.favoriteAnimals} />
    </div>
  );
}
export default App;