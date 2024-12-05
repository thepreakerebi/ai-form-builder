"use client";

import { SignedIn } from "@clerk/nextjs";
import SideNav from "./_components/SideNav";

function DashboardLayout({ children }) {
  return (
    <SignedIn>
        <section>
            <section className="md:w-64">
              <SideNav />
            </section>
            <section className="md:ml-64 fixed top-0 left-0 right-0">
                {children}
            </section> 
        </section>
    </SignedIn>
  )
}
export default DashboardLayout