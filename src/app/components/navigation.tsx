"use client"
import { UserButton, SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navigation = ()=>{
    const pathName = usePathname()
    return(
        <nav>
            <Link href="/" className={pathName === "/" ? "font-bold mr-4 text-white" : "mr-4 text-blue-500"}>Home</Link>
            <Link href="/about" className={pathName === "/about" ? "font-bold mr-4 text-white" : "mr-4 text-blue-500"}>About</Link>
            <Link href="/product/1" className={pathName.startsWith ("/product/1") ? "font-bold mr-4 text-white" : "mr-4 text-blue-500"}>Product-1</Link>
            <SignedOut>
            <SignInButton mode="modal"/>
            </SignedOut>
            <SignedIn>
            <UserButton />
            </SignedIn>
        </nav>
    )
}