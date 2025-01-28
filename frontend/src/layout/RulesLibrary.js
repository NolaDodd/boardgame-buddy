import React, {useState} from "react";


function RulesLibrary() {

  let [search, setSearch] = useState("") 

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearch(value);
  };
  
  return (
    <div className="RulesLibrary space">
      <h1>Rules Library</h1>
      <p>Need to check the rules for your game? Look for your game here!</p>
      <p>If your game isn't here, feel free to add it to the database!<button className="btn btn-secondary btn-sm buttonMargin" >Add New Game</button></p>
      <div> 
        <h4>Search:
        <input
              type="text"
              value={search}
              onChange={handleSearch}
              placeholder="Search">    
        </input>
        <button className="btn btn-secondary btn-sm buttonMargin" onClick={() => setSearch(search = "")}>
          Reset
        </button></h4>
      </div>
      <button>Clue</button>
      <button>Monopoly</button>
      <button>Twilight Imperium</button>
      <button>Cascadia</button>

    </div>
  );
}

export default RulesLibrary;