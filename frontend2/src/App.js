import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [newdata, setNewData] = useState([]);
  const [editid, setEditId] = useState(null);

  // Fetch users from backend
//  
useEffect(()=>{
    fetchdata()
  },([]))

 const fetchdata = async()=>{
    try{
      const responce = await fetch('http://localhost:5000/getUsers');
  
      const data=await responce.json();
      setNewData(data);
    }
  catch(err){
    console.log(err.message);
  }
  
};
const createdata = async()=>{
  try{
    await fetch('http://localhost:5000/create',{method:'post',
    headers:{'content-Type':'application\JSON'},
    body:JSON.stringify({username,password})
  });
  fetchdata();
  resetform();
} catch(err){
  console.log(err.message);
}
};

const updatedata = async()=>{
  try{
    await fetch('http://localhost:5000/create',{method:'put',
    headers:{'content-Type':'application\JSON'},
    body:JSON.stringify({username,password})
  });

  fetchdata();
  resetform();
} catch(err){
  console.log(err.message);
}
};

const deletedata = async()=>{
  try{
    await fetch('http://localhost:5000/create',{method:'delete',

  });
fetchdata();
}catch(err){
  console.error('error deleting data',err);
}

};

const handleSubmit=(e) =>{
  e.preventDefault();
  editid ? updatedata():createdata();


};

const handleEdit = (data) => {
  setUsername(data.username);
  setPassword(data.password);
  setEditId(editid);
};

const resetform =() =>{
  setUsername('');
  setPassword('');
  setEditId(null);
};

//render

  return (
     <div>
      <h1> DATA</h1>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="username" value={username} onchange ={(e)=>{setUsername(e.target.value)}}/>
            <input type="text" placeholder="password"  value={password} onchange ={(e)=>{setPassword(e.target.value)}}/>
            <button type='submit'>create</button>

          </form>
          <ul>
            {newdata.map((data)=>{
              <li key={editid}>
                <strong>{data.title}</strong>:{data.password}
                <button onClick={()=> handleEdit(data)}>Edit</button>
                <button onClick={()=> deletedata(editid)}>delete</button>
              </li>
            })}
          </ul>

        </div>
  );
}

export default App;
