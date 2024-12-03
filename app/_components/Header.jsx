"use client";

import { Button } from "@/components/ui/button"
import { SignInButton, UserButton, useUser } from "@clerk/nextjs"
import Link from "next/link";

function Header() {

  const { user, isSignedIn } = useUser();


  return (
    <header className="p-5 border-b shadow-sm fixed top-0 left-0 right-0 z-50 bg-white">
        <section className="flex items-center justify-between">
            <img className="w-28 md:w-36" src={"./logo.svg"} alt="logo" />
            {
              isSignedIn ?
                <section className="flex items-center gap-5">
                  <Link href={"/dashboard"}>
                    <Button variant="outline">Dashboard</Button>
                  </Link>
                  <UserButton />
                </section> : 
                <SignInButton>
                  <Button>Get Started</Button>
                </SignInButton>
            }
            {/* <Button className="font-bold">Get Started</Button> */}
        </section>
    </header>
  )
}
export default Header