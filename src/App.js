
import './App.css';
import {useState} from 'react';

function App() {

 
  const [disable, setDisable] = useState(false);

  let obj = [{variant: "v1", data: ["cat-1", "cat-2", "cat-3"], isDefault: true},
             {variant: "v2", data: ["cat-3", "cat-4", "cat-5"], isDefault: false}];



  const Card = ({data}) => {
    return (
        <article  className="card">
          <p>{data}</p>
        </article>
      )
  }
  
  return (

  
    <div className="App">
     {obj.map((value, idx) => {
        return (
          <div key = {idx} className="main-card">
            <p className="main-card__title">{value.variant}</p>
           
            {
              
              value.data.map((data, key)=> {
                return <Card key= {key} data={data}></Card>
              })
              
            }
            <button  className="main-card__btn" onClick={() => setDisable(!disable)}>
              {value.isDefault === disable ? "Disable": "Enable"}
            </button>
            
          </div>
        )
      
     })}
      
    </div>
  );
}

export default App;
