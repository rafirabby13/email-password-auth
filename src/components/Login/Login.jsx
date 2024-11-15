import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebase/Firebase.init.js";
import { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import AuthProvider, { AuthContext } from "../../AuthProvider/AuthProvider.jsx";

const Login = () => {
    const [user, setUser] = useState('')
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState('')
    const emailRef = useRef()

    const {name} = useContext(AuthContext)
    console.log(name);


    const handleLogin=(e)=>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
setSuccess(false)
setError('')

        signInWithEmailAndPassword(auth, email, password)
        .then(res=>{

            if (!res.user.emailVerified) {
                setError('please verify ur email')
                return;
            }
            setSuccess(true)
            setUser(res.user.photoURL)
            console.log(res.user);
        })
        .catch(err=>{
            console.log(err.message);
            setError(err.message)
        })
    }


    const handleForgetPassword=()=>{
        console.log('object');
        console.log(emailRef.current.value);
        const email = emailRef.current.value;
        if (!email) {
            console.log('please provide a valid email');
            
        }
        else{
            sendPasswordResetEmail(auth, email)
            .then((res)=>{
                console.log(res);

            })
            .catch(err=>{
                console.log(err);
            })
        }
    }


  return (
    <div className="hero bg-base-200 min-h-screen">
        
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body" onSubmit={handleLogin}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email" ref={emailRef}
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label onClick={handleForgetPassword} className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <Link to='/register'>Sign Up</Link>
          {
            success && <p className="text-green-600">User Logged in successfully</p>
          }
          {
            error && <p className="text-red-600">{error}</p>
          }
        </div>
      </div>
      <img src={user} alt="" />
    </div>
  );
};

export default Login;
