"use client";

import { SignedIn } from "@clerk/nextjs";

function DashboardLayout({ children }) {
  return (
    <section>
       <SignedIn>
        {children}
       </SignedIn>
    </section>
  )
}
export default DashboardLayout