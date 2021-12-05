export default function setUserInLocal(email) {
    const userEmail = localStorage.getItem('userEmail');
    if (userEmail!==null) {
 localStorage.setItem('userEmail', JSON.stringify(userToken));
        
    } else {
        
    }
}

// export default function useToken() {
//     const getToken = () => {
//       const tokenString = localStorage.getItem('token');
//       const userToken = JSON.parse(tokenString);
//       return userToken?.token
//     };
  
//     const [token, setToken] = useState(getToken());
  
//     const saveToken = userToken => {
//       localStorage.setItem('token', JSON.stringify(userToken));
//       setToken(userToken.token);
//     };
  
//     return {
//       setToken: saveToken,
//       token
//     }
//   }