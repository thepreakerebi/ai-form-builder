import { Button } from "@/components/ui/button"
import CreateForm from "./_components/CreateForm"

function Dashboard() {
  return (
    <section className="pt-28 px-5">
        <h1 className="text-2xl font-bold text-gray-600 flex items-center justify-between">Dashboard 
            <CreateForm />
        </h1>
    </section>
  )
}
export default Dashboard