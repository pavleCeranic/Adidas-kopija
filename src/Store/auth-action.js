import { authActions } from './auth-slice';

export const LogIn = (Email,Password)=>{
    return async(dispatch)=>{
      let response=null;
    const loginRequest = async ()=>{
       response = await fetch("http://localhost:8000/api/login", {
      method:"POST",
      headers: { "content-type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        Email,
        Password,
     }),
   }) 
   const Data = await response.json();  
    return Data;
  }
  const content = await loginRequest()
  console.log("ovo je response poslije requesta",content);
  if(!response.ok){
    dispatch(authActions.User({
      ValidUser: false,
      isLoggedIn: false,
    }))
    console.log("request nije dobar")
  }else{
    dispatch(authActions.User({
      ValidUser: true,
      isLoggedIn: true,
    }))
    console.log("request je dobar")
  }
}
}
export const GetUser = ()=>{
  return async(dispatch)=>{
       const fetchUser =  async () => {
        const response = await fetch("http://localhost:8000/api/user", {
          headers: { "content-type": "application/json" },
          credentials: "include",
        });
    if(!response.ok){
      console.log("Could not get the user from the cookie properly!")
      return;
    }  
        const content = await response.json();

        return content;
      }
      const userContent = await fetchUser();
      try{
        dispatch(
          authActions.User({
            isLoggedIn: true,
            user: userContent.username,
            role: "default",
          })
        );
      }catch(error){
console.log("not Logged in",error);

      }
   
  }
}
export const LogOut = ()=>{
  return async(dispatch)=>{
       const requestLogout =  async () => {
        const response = await fetch("http://localhost:8000/api/logout", {
          method:"POST",
          headers: { "content-type": "application/json" },
          credentials: "include",
        });
    if(!response.ok){
      console.log("Could not logout properly!")
    }  
        const content = await response.json();

        return content;
      }
    const userContent = await requestLogout();
    dispatch(
      authActions.User({
        isLoggedIn: false,
        role: "default",
      })
    );
  }
}
export const RegisterUser = (username,email,password)=>{
  return async(dispatch)=>{
    const requestRegister =  async () => {
         const response = await fetch("http://localhost:8000/api/register", {
          method:"POST",
          headers: { "content-type": "application/json" },
          credentials: "include",
          body: JSON.stringify({
            username,
            email,
            password,
          }),
        }
        ); 
        dispatch(
          authActions.User({
            userExists:true,
          })
        )
        const data = await response.json();
        return data      
    }
    const content = await requestRegister()
    if(content){
      console.log("response je dobar", content)
      dispatch(
        authActions.User({
          userExists:false,
        })
      )
    }
    dispatch(
      authActions.User({
        userExists:null,
      })
    )
  }
}