import React, { useState } from 'react'
import Setinterval from './Setinterval'

const Practice = () => {
    const [name,setName]=useState('')
    const [pwd,setPwd]=useState('')

    const [lname,setLname]=useState([])
    const [lpwd,setLpwd]=useState([])
    const Handle=()=>{
        const localName=[...lname,name]
        const localPwd=[...lpwd,pwd]
        setLname(localName)        
        setLpwd(localPwd)
        localStorage.setItem("name",JSON.stringify(localName))
        localStorage.setItem('pwd',JSON.stringify(localPwd))
    }
    const [logN,setLogN]=useState('')
    const [logP,setLogp]=useState('')
    const [comp,setComp]=useState(false)
    const Login=()=>{
       const storeN=JSON.parse(localStorage.getItem("name"))
       const storeP=JSON.parse(localStorage.getItem("pwd"))
       const index=storeN.indexOf(logN)
       if(index !== -1 && storeP[index] === logP){
        alert("success")
        setComp(true)
       }else{
        alert("failed")
        setComp(false)
       }
    }
  return (
    <div>
      <dl>
        <dt>Name</dt>
        <dd>
            <input type="text" value={name} onChange={e=>setName(e.target.value)}/>
        </dd>
        <dt>Password</dt>
        <dd>
            <input type="text" value={pwd} onChange={e=>setPwd(e.target.value)}/>
        </dd>
      </dl>
      <button onClick={Handle}>Submit</button>
      <h1>Login</h1>
      <dl>
        <dt>Name</dt>
        <dd>
            <input type="text" value={logN} onChange={e=>setLogN(e.target.value)}/>
        </dd>
        <dt>Password</dt>
        <dd>
            <input type="text" value={logP} onChange={e=>setLogp(e.target.value)}/>
        </dd>
      </dl>
      <button onClick={Login}>Login</button>
      {comp && <Setinterval />}
    </div>
  )
}

export default Practice
