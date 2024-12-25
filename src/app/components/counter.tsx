"use client"
import { useState } from "react";
import  {useAuth, useUser} from "@clerk/nextjs";

export const Counter = ()=>{
    const [count, setCount] = useState(0)
    const {isLoaded, userId, sessionId, getToken} = useAuth();

    console.log("counter")

    if(!isLoaded || !userId || !sessionId){
        return null
    }
    return(
        <button onClick={()=> setCount(count + 1)}>click {count} times</button>
    )
}