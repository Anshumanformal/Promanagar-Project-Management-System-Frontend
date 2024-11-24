import { TabsList, TabsTrigger } from "@radix-ui/react-tabs"
import { ScrollArea } from "../../components/ui/scroll-area"
import { Tabs, TabsContent } from "../../components/ui/tabs"
import CreateCommentForm from "./CreateCommentForm"
import { useParams } from "react-router-dom"
import CommentCard from "./CommentCard"
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "../../components/ui/select"
import { AvatarFallback } from "@radix-ui/react-avatar"
import { Avatar } from "../../components/ui/avatar"
import { Badge } from "../../components/ui/badge"

const IssueDetails = () => {
  const { projectId, issueId } = useParams()

  const handleUpdateIssueStatus = (status) => {
    console.log("status---", status)
  }

  return (
    <div className="px-20 py-8 text-gray-400">
      <div className="flex justify-between border p-10 rounded-lg">
        <ScrollArea className="h-[80vh] w-[60%]">
          <div>
            <h1 className="text-lg font-semibold text-gray-400">Create Navbar</h1>
          </div>
          <div className="py-5">
            <h2 className="font-semibold text-gray-400">Description</h2>
            <p className="text-gray-400 text-sm mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quisquam quos provident tenetur saepe iste sint, expedita iusto ab corrupti alias ullam autem, quidem error quo! Molestiae cumque recusandae exercitationem!</p>
          </div>
          <div className="mt-5">
            <h1 className="pb-3">Activity</h1>
            <Tabs defaultValue="comments" className="w-[400px]">
              <TabsList className="mb-5">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="comments">Comments</TabsTrigger>
                <TabsTrigger value="history">History</TabsTrigger>
              </TabsList>
              <TabsContent value="all">Make changes to your account here</TabsContent>
              <TabsContent value="comments">
                <CreateCommentForm issueId={issueId} />
                <div className="mt-8 space-y-6">
                  {[1, 1, 1].map((item) => (
                    <CommentCard key={item} />
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="history">Change your password here</TabsContent>
            </Tabs>
          </div>
        </ScrollArea>
        <div className="w-full lg:w-[30%] space-y-2">
          <Select onValueChange={handleUpdateIssueStatus}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="To Do" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pending">To Do</SelectItem>
              <SelectItem value="in_progress">In Progress</SelectItem>
              <SelectItem value="done">Done</SelectItem>
            </SelectContent>
          </Select>
          <div className="border rounded-lg">
            <p className="border-b py-3 px-5">Details</p>
            <div className="p-5">
              <div className="space-y-7">
                <div className="flex gap-10 items-center">
                  <p className="w-[7rem]">Assignee</p>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8 text-xs">
                      <AvatarFallback>Z</AvatarFallback>
                    </Avatar>
                    <p>Anshuman</p>
                  </div>
                </div>
                <div className="flex gap-10 items-center">
                  <p className="w-[7rem]">Labels</p>
                  <p>None</p>
                </div>
                <div className="flex gap-10 items-center">
                  <p className="w-[7rem]">Status</p>
                  <Badge>in_progress</Badge>
                </div>
                <div className="flex gap-10 items-center">
                  <p className="w-[7rem]">Release</p>
                  <p>10-10-24</p>
                </div>
                <div className="flex gap-10 items-center">
                  <p className="w-[7rem]">Reporter</p>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8 text-xs">
                      <AvatarFallback>R</AvatarFallback>
                    </Avatar>
                    <p>Ram</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IssueDetails
