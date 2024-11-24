import { TabsList, TabsTrigger } from '@radix-ui/react-tabs'
import { ScrollArea } from '../../components/ui/scroll-area'
import { Tabs, TabsContent } from '../../components/ui/tabs'
import CreateCommentForm from './CreateCommentForm'


const IssueDetails = () => {
  return (
    <div className='px-20 py-8 text-gray-400'>
      <div className='flex justify-between border p-10 rounded-lg'>
        <ScrollArea className="h-[80vh] w-[60%]">
          <div>
            <h1 className='text-lg font-semibold text-gray-400'>Create Navbar</h1>
          </div>
          <div className='py-5'>
            <h2 className='font-semibold text-gray-400'>Description</h2>
            <p className='text-gray-400 text-sm mt-3'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae 
              quisquam quos provident tenetur saepe iste sint, expedita 
              iusto ab corrupti alias ullam autem, quidem error quo! 
              Molestiae cumque recusandae exercitationem!
            </p>
          </div>
          <div className='mt-5'>
            <h1 className='pb-3'>Activity</h1>
            <Tabs defaultValue='comments' className='w-[400px]'>
              <TabsList className='mb-5'>
                <TabsTrigger value='all'>All</TabsTrigger>
                <TabsTrigger value='comments'>Comments</TabsTrigger>
                <TabsTrigger value='history'>History</TabsTrigger>
              </TabsList>
              <TabsContent value="all">Make changes to your account here</TabsContent>
              <TabsContent value="comments">
                <CreateCommentForm issueId={123} />
                {/* <CreateCommentForm issueId={issueId}/> */}
              </TabsContent>
              <TabsContent value="history">Change your password here</TabsContent>

            </Tabs>

          </div>

        </ScrollArea>

      </div>

    </div>
  )
}

export default IssueDetails