import React, { useEffect, useState } from "react";
import axios from "axios";
import '../App.css'
function FindGitHub() {
  const [user, setUser] = useState({});
  const [id, setId] = useState(1);
  const [idFromButtonClick, setIdFromButtonClick] = useState(1);
  useEffect(() => {
    axios.get(`https://api.github.com/users/${id}`).then(res => {
      console.log(res);
      setUser(res.data)
    }).catch(err => console.log(err))
  }, [idFromButtonClick])

  const handleClick = () => {
    setIdFromButtonClick(id)
  }
  return (
    <div>
      <input type="text" value={id} onChange={e => setId(e.target.value)}/>
      <button onClick={handleClick}>Find</button>
       <img src={user.avatar_url} alt="" />
      <h1 key={user.id}>Name: {user.name}</h1>
      <h3>Username: {user.login}</h3>
      <h3>Company: {user.company}</h3>
    </div>
  );
}

export default FindGitHub;
