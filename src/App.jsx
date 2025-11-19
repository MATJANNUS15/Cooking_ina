
import { useState } from "react";
import List from "./components/List";

function App() {
  const [lastName, setLastName] = useState('');
  const [listofNames, setListofNames] = useState([]);

  const handleSubmit =(e) =>{
    e.preventDefault();
      setListofNames ([...listofNames, lastName])

    console.log(listofNames)
  }

  return (
    <>

    <h1>use State sample</h1>
    <section>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input 
                type="text"
                name="name"
                onChange={(e) => setLastName(e.target.value)}
                 />
                 <h1>{lastName}</h1>
        </div>
        <button type="submit">add</button>
      </form>

    </section>
    </>
  )
}

export default App
