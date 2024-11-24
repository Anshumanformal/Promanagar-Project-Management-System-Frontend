import { Avatar, AvatarFallback } from "@radix-ui/react-avatar"
import { Button } from "../../components/ui/button"
import { TrashIcon } from "lucide-react"

const CommentCard = () => {
  return (
    <div className="flex justify-between">
        <div className="flex items-center gap-4">
            <Avatar>
                <AvatarFallback>Z</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
                <p>Hey! how much work is pending...</p>
                <p>Please provide the status of work done</p>
            </div>
        </div>
        <Button className="rounded-full" variant="ghost" size="icon">
            <TrashIcon/>
        </Button>

    </div>
  )
}

export default CommentCard