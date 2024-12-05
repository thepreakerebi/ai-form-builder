import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { LibraryBig, LineChart, MessageSquare, Shield } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

function sideNav() {

    const menuList = [
        {
            id: 1,
            name: "My Forms",
            icon: LibraryBig,
            path: "/dashboard"
        },
        {
            id: 2,
            name: "Responses",
            icon: MessageSquare,
            path: "/dashboard/responses"
        },
        {
            id: 3,
            name: "Analytics",
            icon: LineChart,
            path: "/dashboard/analytics"
        },
        {
            id: 4,
            name: "Upgrade",
            icon: Shield,
            path: "/dashboard/upgrade"
        }
    ]

    const path = usePathname();

    useEffect(() => {   
        console.log(path.includes("responses") !== -1);
    }, [path])

  return (
    <section className="pt-28 h-screen shadow-md border px-5 flex flex-col gap-4">
        {
            menuList.map((item) => (
                <section key={item.id} className={`flex text-gray-500 hover:bg-gray-100 hover:text-gray-800 
                    items-center gap-4 p-4 cursor-pointer rounded-md 
                    ${path === item.path && "bg-gray-200 text-gray-800 font-medium hover:bg-gray-200 hover:text-gray-800 hover:font-medium"}`}
                >
                    <item.icon />
                    <p>{item.name}</p>
                </section>
            ))
        }
        <section className="flex flex-col gap-8">
            <Button className="w-full font-bold text-md">+ Create Form</Button>
            <section className="flex flex-col gap-2">
                <Progress value={50} />
                <h2 className="text-sm">
                    <strong>2</strong> Out of <strong>3</strong> files created
                </h2>
                <h2 className="text-sm">
                    Upgrade your plan for unlimited AI Form building
                </h2>
            </section>
        </section>
    </section>
  )
}
export default sideNav