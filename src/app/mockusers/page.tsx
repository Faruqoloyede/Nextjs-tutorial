import { revalidatePath } from "next/cache";
import {auth, currentUser} from "@clerk/nextjs/server";

type Mock = {
    id: number,
    name: string
}

export default async function MockUsers (){

    const authObj = await auth();
    const userObj = await currentUser();

    console.log(authObj, userObj)
    const res = await fetch('https://67694de0cbf3d7cefd3a4c84.mockapi.io/users')
    const users= await res.json();

    const addUser = async (formData: FormData)=>{
        "use server";
        const name = formData.get("name");
        const res = await fetch('https://67694de0cbf3d7cefd3a4c84.mockapi.io/users', {
            method: "POST",
            headers: {
                "content-Type": "application/json",
            },
            body: JSON.stringify({name}),
        });
        const newUser = await res.json();
        revalidatePath("/mockusers")
        console.log(newUser)
    }

    return(
        <div className="py-10">
            <form action={addUser} className="mb-4">
                <input type="text" name="name" required className="border text-black p-2 mr-2 rounded" />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add users</button>
            </form>
        <div className="grid grid-cols-4 gap-4 py-10">
            {users.map((user: Mock)=>(
                <div key={user.id} className="p-4 bg-white shadow-md rounded-lg text-gray-700">
                    {user.name}
                </div>
            ))}
        </div>
        </div>
    )
}