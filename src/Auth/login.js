import React ,{useState}from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
export default function Signup() {
     const [user,setUser]=useState({
      email:"",
      password:""
     })
     const handle_User=(event)=>{
        console.log(event.target);
        const {name,value}=event.target;
        setUser({
          ...user,
          [name]:value
        })
     }
          async function Login(e){
            e.preventDefault();
            const {email,password}=user;
            try{
              if(email&&password){
                console.log(user);
                axios.post("http://localhost:9002/",user)
              .then(res=>{
                // console.log("succes")
                if(res.data==="success"){
                  // history("/text",{});
                  alert("success")
                }else{
                  alert("unsuccess");
                }
                  
              })
         }else{
          alert("Email or password must not be empty");
         }
          }catch(e){
            console.log(e)
          }

     }
  return (
    <div>
      <section className="container-fluid">
    <section className="row justify-content-center">
      <section className="col-12 col-sm-6 col-md-4">
        <form className="form-container" action="POST">

        <div className="form-group">
          <h4 className="text-center font-weight-bold"> Login </h4>
          <label for="Inputuser1">Username</label>
           <input type="email" id="Inputuser1" name="email" className="form-control" value={user.email} onChange={handle_User}  />
        </div>
        <div className="form-group">
          <label for="InputPassword1">Password</label>
          <input type="password" name="password" id="InputPassword1" className="form-control" value={user.password} onChange={handle_User}  />
        </div>
        <button type="Sign in" className="btn btn-primary btn-block" onClick={Login}>Sign in</button>
        <div className="form-footer">
          <p> Don't have an account? <Link to="/register">Sign Up</Link></p>
        </div>
        </form>
      </section>
    </section>
  </section>
    </div>
  )
}
