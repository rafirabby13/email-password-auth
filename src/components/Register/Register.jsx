import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import auth from "../../Firebase/Firebase.init.js";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

const Register = () => {
  const [user, setUser] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(null);
  const [seePassword, setSeePassword] = useState('');
  const [textType, setTextType] = useState('password');
  const [visible, setVisible] = useState(true);
  const [submitBtnDisAble, setSubmitBtnDisAble] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (!submitBtnDisAble) {
      return;
    }

    if (password.length < 6) {
      setError("Password should be at least 6 character");
      return;
    }
    setSuccess(false);
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

    if (!passwordRegex.test(password)) {
      setError(
        "Password must be at least 6 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character (e.g., @, $, !, %, *, ?, &)."
      );
      return;
    }
   

    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        setUser(res.user);
        console.log(res.user);
        setError("");
        setSuccess(true);
      })
      .catch((err) => {
        console.log(err.message);
        setError(err.message);
        console.log(err.message.Firebase);
        setSuccess(false);
      });
  };
  const handlePasssChange=(e)=>{
    // console.log(e.target.value);
    setSeePassword(e.target.value)


  }
  const handleVisibilytyOfPassword=(e)=>{
    e.preventDefault()
    setVisible(!visible)
    console.log(visible);

    if (visible) {
      setTextType('text')
    }
    else{
      setTextType('password')

    }

    console.log(seePassword);
  }
  const handleCheckbox=(e)=>{
    // e.preventDefault()
    setSubmitBtnDisAble(e.target.checked);
  }

  

  return (
    <div className="w-1/2 mx-auto space-y-5">
      <h1 className="text-4xl my-8">Register</h1>
      <form onSubmit={handleRegister} className="space-y-5">
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input
            type="text"
            className="grow"
            placeholder="Email"
            name="email"
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            
              type={textType}
            
            className="grow"
            name="password"
            onChange={handlePasssChange}
            value={seePassword}
  
            placeholder="Password"
          />
         <button onClick={handleVisibilytyOfPassword}>
         {visible ? 
          <IoEyeOffOutline /> 
          :
           <IoEyeOutline />}
         </button>
        </label>
        <p className="text-red-600">{error}</p>

        {success && (
          <p className="text-green-600">Yahoooooo, sign up hoyaa gese..</p>
        )}
        <input type="checkbox" name="" id="" onClick={handleCheckbox} />
        <div  className="form-control mt-6">
          <button  className="btn btn-accent btn-wide">Login</button>
        </div>
       
      </form>
    </div>
  );
};

export default Register;
