"use client"
import { useState, useEffect } from "react";

type user = {
    id: number,
    name: string;
    username: string,
    email: string,
    phone: string
}

export default function userClient (){
    const  [users, setUsers] = useState <user[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("")

    useEffect(()=>{
        async function fetchusers() {
            try {
                const res = await fetch("https://jsonplaceholder.typicode.com/users");

                if(!res.ok) {
                    throw new Error("failed to fetch")
                }
                const data = await res.json();
                setUsers(data)
            }catch(err){
                setError("failed to fetch users");
            } if(error){
                setError(`failed to fetch users: ${error}`)
            }
            setLoading(false)
        }
        fetchusers()
    }, [])

    return(
        <ul className="space-y-4 p-4">
            {users.map((user)=>(
                <li key={user.id}>
                    {user.name} ({user.email})
                </li>
            ))}
        </ul>
    )
} 