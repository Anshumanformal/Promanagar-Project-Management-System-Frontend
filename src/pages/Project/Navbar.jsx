import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "../../components/ui/dialog"
import CreateProjectForm from "./CreateProjectForm"
import { PersonIcon } from "@radix-ui/react-icons"
import { useNavigate } from "react-router-dom"
import { Button } from "../../components/ui/button"

const Navbar = () => {

    const navigate = useNavigate()
    return (
        <div className='border-b py-4 px-5 flex items-center justify-between'>
            <div className='flex items-center gap-3'>
                <p onClick={() => navigate("/")} className='cursor-pointer'>Project Management</p>
                <Dialog>
                    <DialogTrigger>
                        <Button variant="ghost">New Project</Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>Create New Project</DialogHeader>
                        <CreateProjectForm />
                    </DialogContent>
                </Dialog>
                <Button onClick={()=> navigate("/upgrade_plan")} variant="ghost">Upgrade</Button>
                <div className="flex gap-3 items-center">
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <Button variant="outline" size="icon" className="rounded-full border-2 border-gray-500">
                                <PersonIcon />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem>Logout</DropdownMenuItem>
                            <DropdownMenuContent></DropdownMenuContent>
                        </DropdownMenuContent>
                    </DropdownMenu>

                </div>

            </div>
        </div>
    )
}

export default Navbar