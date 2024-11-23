import React from 'react'
import { ScrollArea } from '../../components/ui/scroll-area'
import { Avatar, AvatarFallback } from "../../components/ui/avatar"
import { DialogContent, DialogTrigger, DialogHeader } from '../../components/ui/dialog'
import { PlusIcon } from 'lucide-react'
import IssueList from './IssueList'
import ChatBox from './ChatBox'


const ProjectDetails = () => {

    const handleProjectInvitation = () => {

    }

    return (
        <>
            <div className='mt-5 lg:px-10'>
                <div className='lg:flex gap-5 justify-between pb-4'>
                    <ScrollArea className="h-screen lg:w-[69%] pr-2"></ScrollArea>
                    <div className='text-gray-400 pb-10 w-full'></div>
                    <h1 className='text-lg font-semibold pb-5'>Create Ecommerce Website using React</h1>
                    <div className='space-y-5 pb-10 text-sm'>
                        <p className='w-full md:max-w-lg lg:max-w-xl'>
                            Lorem empsumskjbddsd Lorem empsumskjbddsd Lorem empsumskjbddsd
                            Lorem empsumskjbddsd Lorem empsumskjbddsd Lorem empsumskjbddsd
                        </p>
                        <div className='flex'>
                            <p className='w-36'>Project Lead : </p>
                            <p>Anshuman</p>
                        </div>
                        <div className='flex'>
                            <p className='w-36'>Members : </p>
                            <div className='flex items-center gap-2'>
                                {[1, 1, 1, 1].map(item => <Avatar className="cursor-pointer" key={item}>
                                    <AvatarFallback>Z</AvatarFallback>
                                </Avatar>)}
                            </div>
                        </div>
                        <div className='flex'>
                            <p className='w-36'>Category : </p>
                            <p>Fullstack</p>
                        </div>
                        <div className='flex'>
                            <p className='w-36'>Status : </p>
                            <p>In Progress</p>
                            <Badge>Anshuman</Badge>
                            <Dialog>
                                <DialogTrigger>
                                    <DialogClose>
                                        <Button onClick={handleProjectInvitation} size="sm" variant="outline" className="ml-2">
                                            <span>invite</span>
                                            <PlusIcon className='w-3 h-3' />
                                        </Button>
                                    </DialogClose>
                                </DialogTrigger>
                                <DialogContent>
                                    <DialogHeader>Invite User</DialogHeader>
                                    <InviteUserForm />
                                </DialogContent>
                            </Dialog>
                        </div>
                    </div>
                    <section>
                        <p className='py-5 border-b text-lg tracking-wider'>Tasks</p>
                        <div className='lg:flex md:flex gap-3 justify-between py-5'>
                            <IssueList status="pending" title="Todo List" />
                            <IssueList status="in_progress" title="In Progress" />
                            <IssueList status="done" title="Done" />
                        </div>
                    </section>
                </div>
                <div className='lg:w-[30%] rounded-md stciky right-5 top-10'>
                    <ChatBox />
                </div>
            </div>
        </>
    )
}

export default ProjectDetails