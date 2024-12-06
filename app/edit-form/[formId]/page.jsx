"use client";

import { db } from "@/configs/index";
import { eq, and } from "drizzle-orm";
import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";
import { JsonForms } from "@/configs/schema";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import FormUi from "../_components/FormUi";

export default function EditForm({ params }) {

    const { user } = useUser();
    const [ formData, setFormData ] = useState([]);
    const router = useRouter();

    useEffect(() => {
        user && getFormData();
    }, [user])

    const getFormData = async () => {
        const res = await db.select()
        .from(JsonForms)
        .where(and(eq(JsonForms.id, params?.formId), eq(JsonForms.created_by, user?.primaryEmailAddress?.emailAddress)));
        // const data = await res.json();
        // console.log(data);
        // return data;
        const data = JSON.parse(res[0].jsonform)
        console.log(data);
        setFormData(data);
    }

  return (
    <section className="pt-28 px-5 pb-5">
        <h2 className="text-md text-gray-600 flex items-center 
        gap-2 mb-5 cursor-pointer hover:font-bold"
        onClick={() => router.back()}
        >
            <ArrowLeft /> Back
        </h2>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <aside className="border rounded-lg p-5 max-h-fit">
                Controller
            </aside>
            <main className="md:col-span-2 border rounded-lg p-5 h-screen flex items-start justify-center overflow-auto">
                <FormUi formData={formData} />
            </main>
        </section>
    </section>
  )
}