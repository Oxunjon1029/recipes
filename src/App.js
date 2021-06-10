
import { useEffect, useState } from 'react';
import './App.css';
import Component from './Components/Component';

const  App=()=> {

  const [search,setSearch] = useState('');
  const [recipes,setRecipes] = useState([]);
  const [query,setQuery] = useState('chicken');
  const GetSearchResult = (e) =>{
    setSearch(e.target.value);
  }
const updateSearch = (e) =>{
  e.preventDefault();
  setQuery(search);
  setSearch('')
}
  useEffect(() => {
  getRecipes()

  }, [query]);
  const API_ID="bcbb2e41";
  const API_KEY="75be6417d1ae6d4bec6132f87778c2cb";
  const getRecipes = async () => { 
    const response= await fetch(`https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${ API_KEY}`);
    const data = await response.json();
    console.log(data.hits);
    setRecipes(data.hits)
  }
  return (
    <div className="App">
      <div className="container">
      <form onSubmit={updateSearch} className="search-form">
       <input className="form-bar" type="text" value={search} onChange={GetSearchResult} placeholder="Search recipes"/>
       <button className="form-button">
         Search
       </button>
     </form>
     <div className="recipes">
     {
      recipes.map(recipe =>(
        <Component key={recipe.recipe.label} title={recipe.recipe.label} calories={recipe.recipe.calories} image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients} 
        />
      ))
    }
     </div>
  
      </div>
    
    </div>
  );
}

export default App;
