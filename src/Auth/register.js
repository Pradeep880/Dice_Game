import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
function Signup() {
    const [user,SetUser]=useState({
        name:"",
        password:"",
        email:"",
        repassword:"",
    });
   const handleChange=(event)=>{
          // console.log(event.target);  it will give all input tag in output
          let {name,value}=event.target;
          // console.log(event.target.name);
          SetUser({
            ...user,
            [name]:value
          });
   }
   const register=()=>{
    const {name,email,password,repassword}=user;
    if(name&&email&&password&&repassword&&(password===repassword)){
      axios.post("http://localhost:9002/register",user)
      .then(res=>{
        console.log(res);
      })
    }else{
        alert("Invalid Input");
    }
   }
  return (
   
    <div>
         <section className="vh-100" >
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black" >
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                <form className="mx-1 mx-md-4">

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example1c" name="name" className="form-control" value={user.name} onChange={handleChange}/>
                      <label className="form-label" for="form3Example1c"   >Your Name</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="email" id="form3Example3c" name="email" className="form-control" value={user.email} onChange={handleChange}/>
                      <label className="form-label" for="form3Example3c" >Your Email</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4c" name="password" className="form-control"  value={user.password}  onChange={handleChange}/>
                      <label className="form-label" for="form3Example4c">Password</label>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4cd" name="repassword"  value={user.repassword} className="form-control"  onChange={handleChange}/>
                      <label className="form-label" for="form3Example4cd">Repeat your password</label>
                    </div>
                  </div>

                  <div className="form-check d-flex justify-content-center mb-5">
                    <input className="form-check-input me-2" type="checkbox" name="check"  id="form2Example3c"  onChange={handleChange}/>
                    <label className="form-check-label" for="form2Example3">
                      I agree all statements in <Link to="/">Terms of service</Link>
                    </label>
                  </div>

                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="button" className="btn btn-primary btn-lg"  onClick={register}>Register</button>
                  </div>

                </form>

              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Signup
