"use client";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
  } from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { AiChatSession } from "@/configs/AIModal";
import moment from "moment/moment";
import { useUser } from "@clerk/nextjs";
import { db } from "@/configs/index";  
import { JsonForms } from "@/configs/schema";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";


function CreateForm() {

    const [ openDialog, setOpenDialog ] = useState(false);
    const [ userInput, setUserInput ] = useState("");
    const [ loading, setLoading ] = useState(false);
    const { user } = useUser();
    const route = useRouter();

    const prompt = "On the basis of description, please give form in json format with form title, form subheading, form fields, form name, placeholder name, form label, field type, and field required in json format"

    const handleCreateForm = async (e) => {
        e.preventDefault();
        console.log(userInput);
        setLoading(true);
        const result = await AiChatSession.sendMessage(`Description: ${userInput}. ${prompt}`);
        console.log(result.response.text());
        if(result.response.text()) {
            const res = await db.insert(JsonForms).values({
                jsonform: result.response.text(),
                created_by: user?.primaryEmailAddress?.emailAddress,
                created_at: moment().format("DD/MM/YYYY")
            }).returning({id: JsonForms.id});
            console.log("New form id: ", res[0].id);
            if(res[0].id) {
                route.push(`/edit-form/${res[0].id}`);
            }    
            setLoading(false);
        }
        setLoading(false);
        setUserInput("");
        setOpenDialog(false);
    }

  return (
    <section>
        <Button onClick={() => setOpenDialog(true)} variant="outline" className="font-bold">+ Create Form</Button>
        <Dialog open={openDialog}>
            <DialogContent>
                <DialogHeader className={"flex flex-col gap-4"}>
                    <DialogTitle>Create new form</DialogTitle>
                    <DialogDescription className="flex flex-col gap-4">
                        <section className="flex flex-col gap-2">
                            <label className="font-bold">Enter form description below</label>
                            <Textarea 
                            onChange={(e) => setUserInput(e.target.value)}
                            value={userInput}

                            />
                        </section>
                        <section className="flex items-center justify-end gap-4">
                            <Button onClick={() => setOpenDialog(false)} variant="outline" className="font-bold">Cancel</Button>
                            <Button disabled={loading} 
                            onClick={handleCreateForm} 
                            className="font-bold"
                            >
                                {loading ? 
                                <Loader2 className="animate-spin" /> : "Create"
                                }
                            </Button>
                        </section>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    </section>
  )
}
export default CreateForm