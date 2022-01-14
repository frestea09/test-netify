import logo from './logo.svg';
import './App.css';
import React,{useEffect,useState} from 'react';
import axios from 'axios';
import { DataPersonal } from './DataPersonal';
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
function App() {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState('');
  const [loading, setloading] = useState(true);
  const fetchData = async () => {
    await   axios
          .get('/posts')
          .then((res) => {
              setResponse(res.data);
          })
          .catch((err) => {
              setError(err);
          })
          .finally(() => {
              setloading(false);
          });
  };
  useEffect(() => {
      fetchData();
  }, []);
  // console.log(response)
  // let bilangan = [1,2,3,4,5]
  let tempData = response && response.map((item)=><DataPersonal key={item.userId} name={item.title}/>)
  // let temp = bilangan.map((item)=><li key={item}>{item}</li>)
  return (
    <div className="App">
      <h3>Hello World</h3>
      <ul>
        {tempData}
      </ul>
    </div>
  );
}

export default App;
