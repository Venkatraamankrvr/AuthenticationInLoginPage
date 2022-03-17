// import "./login.css"

// // import { useHistory } from "react-router-dom";
// import React, { useContext, useState } from "react";

// import Axios from "axios"
// import { Usercontext } from "./context/LoginContext";
// import { useNavigate } from "react-router";

// // export const Usercontext = React.createContext({});


// function Login() {

//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
//   const [isEmpty, setIsEmpty] = useState(false)
//   // const [id, setId] = useState("")
//   console.log(email, password, "8");

//   // const url = "http://localhost:2222/api/v1/users/login"
//   // // const navigate = useNavigate()
//   // const navigate = useNavigate();

//   const { fetchData } = useContext(Usercontext)
//   const submitHandler = (e) => {
//     e.preventDefault();
//     fetchData(email, password);
//     console.log(email, password);
//     console.log("form submitted");
//     if (!email || !password) {
//       // let isEmpty = true;
//       // console.log('====================================');
//       // console.log("Please enter your Credentials");
//       // console.log('====================================');
//       // // isEmpty = true;
//       return setIsEmpty(true)

//     }



//     // Axios.post(url, {
//     //   email: email,
//     //   password: password
//     // }).then(res => {
//     //   console.log(res)
//     //   console.log("response", res.data.message);
//     //   if ((res.data.message) === 'admin') {
//     //     // navigate to admin page
//     //     console.log("AdminPage submitted")
//     //     return (
//     //       navigate("/admin")
//     //     )
//     //   }
//     //   else {
//     //     // navigate to user page
//     //     console.log("UserPage submitted")
//     //     return (
//     //       navigate("/user")
//     //     )

//     //   }
//     //   // if (res.statusCode === 200) {


//     //   // }
//     // }).catch(err => {
//     //   console.log(err, "error")
//     //   navigate("/errorFound")
//     // })
//     setIsEmpty(false)
//   }
//   // const emailRef = useRef(null)

//   // console.log(emailRef.current.value);
//   // useEffect(() => {
//   //   emailRef.current.focus();
//   // }, [])
//   return (
//     <>
//       {isEmpty && <h2 >Please enter your Credentials</h2>}
//       <form onSubmit={submitHandler} >
//         <label>Login</label>
//         <input
//           type="email"
//           id="email"
//           placeholder="EnterEmail"
//           value={email}
//           onChange={e => setEmail(e.target.value)}
//         />
//         <input
//           type="text"
//           id="password"
//           placeholder="EnterPassword"
//           value={password}
//           onChange={e => setPassword(e.target.value)}
//         />
//         <button >Login</button>
//       </form>
//     </>
//   )
//   // console.log(email, password, "37");


// }
// export default Login;



// ================================================================================================================================================================

import "./login.css"

// import { useHistory } from "react-router-dom";
import React, { useState } from "react";

import Axios from "axios"
import { useNavigate } from "react-router";

// export const Usercontext = React.createContext({});


function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isEmpty, setIsEmpty] = useState(false)
  // const [id, setId] = useState("")
  console.log(email, password, "8");
  const url = "http://localhost:2222/api/v1/users/login"
  // const navigate = useNavigate()
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(email, password);
    console.log("form submitted");
    if (!email || !password) {
      // let isEmpty = true;
      // console.log('====================================');
      // console.log("Please enter your Credentials");
      // console.log('====================================');
      // // isEmpty = true;
      return setIsEmpty(true)

    }



    Axios.post(url, {
      email: email,
      password: password
    }).then(res => {
      console.log(res)
      console.log("response", res.data.message);
      if ((res.data.message) === 'admin') {
        // navigate to admin page
        console.log("AdminPage submitted")
        return (
          navigate("/admin")
        )
      }
      else {
        // navigate to user page
        console.log("UserPage submitted")
        return (
          navigate("/user")
        )

      }
      // if (res.statusCode === 200) {


      // }
    }).catch(err => {
      console.log(err, "error")
      navigate("/errorFound")
    })
    setIsEmpty(false)
  }
  // const emailRef = useRef(null)

  // console.log(emailRef.current.value);
  // useEffect(() => {
  //   emailRef.current.focus();
  // }, [])
  return (
    <>
      {isEmpty && <h2 >Please enter your Credentials</h2>}
      <form onSubmit={submitHandler} >
        <label>Login</label>
        <input
          type="email"
          id="email"
          placeholder="EnterEmail"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="text"
          id="password"
          placeholder="EnterPassword"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button >Login</button>
      </form>
    </>
  )
  // console.log(email, password, "37");


}
export default Login;
