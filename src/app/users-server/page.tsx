
type user = {
    id: number,
    name: string;
    username: string,
    email: string,
    phone: string
}

export default async function userClient (){
    await new Promise((resolve)=> setTimeout(resolve, 2000));
   const response = await fetch("https://jsonplaceholder.typicode.com/users");
   const users = await response.json();


    return(
        <ul className="space-y-4 p-4">
            {users.map((user: user)=>(
                <li key={user.id}>
                    {user.name} ({user.email})
                </li>
            ))}
        </ul> 
    )
} 