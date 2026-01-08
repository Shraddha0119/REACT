// usestate hook to store and update data inside a component

// synatx => const[state,setState]=useState(initialvalue)

// state current value
// setState => function to update value
// initialValue => starting value


import { useState } from "react";
import Hooks from "./Hooks";

function Counter(){
  

const [count,setCount]= useState(55)
const [name,setName] = useState("priya")
const [isLogin,setIslogin] = useState(false)
const [user,setuser] = useState({name:"",password:""})

// console.log(user);


    function infun(){
        setCount(count+1)
       
    }
    function decfun(){
        setCount(count-1)
     
    }


        function handlechange(e){
          setuser({
            ...user,
            [e.target.name]:e.target.value
         
          })
            

        }

        // let obj = {a:11,b:12}
        // let newobj = {...obj, c:13}

        // console.log(newobj);
        




    return(
        <div>

            <div>
                <input type="text"  name="name"                   placeholder="enter name" onChange={handlechange}/>

                <input type="password" 
                 name="password"     placeholder="enter password"onChange={handlechange}/>


                <p>{user.name}</p>
                <p>{user.password}</p>
            </div>

            <br/>
            <br/>


            <h1>{count}</h1>
            <button onClick={infun}>Increment</button>
            <button onClick={decfun}>Decrement</button>


        <br/>
        <br/>

        <h1>{name}</h1>
        <button onClick={()=>setName("pooja")}>change name</button>

        <br/>
        <br/>

        <button onClick={()=>setIslogin(!isLogin)}>
            {isLogin ? "Logout" : "Login"}
        </button>
        </div>

     
    )


}

export default Counter