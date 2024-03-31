import React, { useState } from 'react'
import Setinterval from './Setinterval'
const Test = () => {
  const [name, setName] = useState('')
  const [pwd, setPwd] = useState('')
  const [lname, setLname] = useState([])
  const [lpwd, setLpwd] = useState([])
  const [loggedIn, setLoggedIn] = useState(false);

  const Handle = () => {
    const storeName = [...lname, name]
    const storePwd = [...lpwd, pwd]
    setLname(storeName)
    setLpwd(storePwd)
    localStorage.setItem('name', JSON.stringify(storeName))
    localStorage.setItem('pwd', JSON.stringify(storePwd))
  }

  // login
  const [logName,setLogName]=useState('')
  const [logPwd,setLogPwd]=useState('')
  const HandleLogin=()=>{
    const storedName=JSON.parse(localStorage.getItem('name'))
    const storedPwd=JSON.parse(localStorage.getItem('pwd'))
    const index=storedName.indexOf(logName)
    if(index !== -1 && storedPwd[index] === logPwd){
      setLoggedIn(true)
      alert('success')
    }else{
      alert('login failed')
    }
  }
  return (
    <div>
      <dl>
        <dt>User Name</dt>
        <dd><input type="text" value={name} onChange={e => setName(e.target.value)} /></dd>
        <dd>Password</dd>
        <dd><input type="text" value={pwd} onChange={e => setPwd(e.target.value)} /></dd>
        <button onClick={Handle}>Sigh Up</button>
      </dl>
      <dl>
        <dt>User Name</dt>
        <dd><input type="text" value={logName} onChange={e=>setLogName(e.target.value)}/></dd>
        <dd>Password</dd>
        <dd><input type="text" value={logPwd} onChange={e=>setLogPwd(e.target.value)}/></dd>
        <button onClick={HandleLogin}>LogIn</button>
      </dl>
      {loggedIn && <Setinterval />}
    </div>
  )
}

export default Test