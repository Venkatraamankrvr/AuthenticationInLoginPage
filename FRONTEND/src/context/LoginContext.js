// import React, { useState } from "react";
// // import { signInAPI } from "./../context/api";
// // import { useNavigate } from "react-router-dom";

// export const Usercontext = React.createContext({});

// export const LogincontextProvider = (props) => {
//   console.log(props.data);
//   // const [data, setdata] = useState();
//   // //   const [error, seterror] = useState();
//   // const navigate = useNavigate();

//   // const logindata = async (email, password) => {
//   //   console.log(email, password);
//   //   const data = await signInAPI(email, password);

import React, { useState } from "react";

//   //   if (data.role) {
//   //     console.log(data);
//   //     setdata(data);
//   //     navigate("/nextpage");
//   //   } else {
//   //     console.log("wrong password");
//   //   }
//   // };
//   return (
//     <Usercontext.Provider
//       value={{
//         values: data,
//         logindata,
//         // error: error,
//       }}
//     >
//       {props.children}
//     </Usercontext.Provider>
//   );
// };
// // export default logincontextProvider;
import Axios from "axios"
import { useNavigate } from "react-router";

const url = "http://localhost:2222/api/v1/users/login"
// const navigate = useNavigate();
export const Usercontext = React.createContext({});

export const LoginContextProvider = (props) => {
  const navigate = useNavigate()
  console.log(props.data);

  const fetchData = function (email, password) {
    console.log("fetchData", email, password);
    Axios.post(url, {
      // email: email,
      // password: password
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
  }
  return (
    <Usercontext.Provider
      value={{
        // values: data,
        fetchData,
        // error: error,
      }}
    >
      {props.children}
    </Usercontext.Provider>
  );
}