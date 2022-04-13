
import './App.css';

import axios from 'axios';
import { useState } from 'react';


axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/posts';

function App() {
  const [res, setres] = useState({message:'',data:[]});

  const handleGet = async ()=>{
      try {
        const resp = await axios.get('');
       
        setres({message:"get request successfull",data:resp.data});
      } catch (error) {
        console.log(error);
      }
  } 
  const handlePost = async ()=>{
      try {
        const resp = await axios.post('',{
          
            id: 101,
            title: 'foo',
            body: 'bar',
            userId: 1
          
        });
        
        setres({message:"post request successfull",data:resp.data});
      } catch (error) {
        console.log(error);
      }
  } 
  const handlePut = async ()=>{
      try {
        const resp = await axios.put('/1',{
          
            id: 101,
            title: 'foo',
            body: 'bar',
            userId: 1
          
        });
        
        setres({message:"put request successfull",data:resp.data});
      } catch (error) {
        console.log(error);
      }
  } 
  const handleDel = async ()=>{
      try {
        const getResp = await axios.get('/1');
        await axios.delete('/1');
       
        setres({message:"delete request successfull",data: getResp.data});
      } catch (error) {
        console.log(error);
      }
  } 

  return (
  <>
  <div>
    hello
  </div>
  <button onClick={handleGet}>
    get request
  </button>
  <button onClick={handlePost}>
    Post request
  </button>
  <button onClick={handlePut}>
    Put request
  </button>
  <button onClick={handleDel}>
    delete request
  </button>

  <div>
    response : 
  </div>

  <div>
    <div>
    {res.message}

    </div>
    {Array.isArray(res.data) ?
      res.data.map(e=>{
        return(
        <>
        <div> id: {e.id}</div>
        <div>title : {e.title}</div>
        <div> body :{e.body}</div>

        </> )
      }) :
      <>
      <div> id: {res.data.id}</div>
      <div>title : {res.data.title}</div>
      <div> body :{res.data.body}</div>

      </>
    }
  </div>
  
  </>
  );
}

export default App;
