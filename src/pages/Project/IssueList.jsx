/* eslint-disable react/prop-types */
import { Button } from '../../components/ui/button'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '../../components/ui/card'
import { DialogContent, DialogTitle, DialogTrigger } from '../../components/ui/dialog'
import { Dialog, DialogHeader } from '../../components/ui/dialog'
import IssueCard from './IssueCard'
import { PlusIcon } from 'lucide-react'
import CreateIssueForm from './CreateIssueForm';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchIssues } from '../../Redux/Issue/Action'
import { useParams } from 'react-router-dom'

const IssueList = ({ title, status }) => {

  const {issue} = useSelector(store => store)
  const {id} = useParams()

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchIssues(id))
  },[id])

  return (
    <>
      <Dialog>
        <Card className="w-full md:w-[300px] lg:w-[310px]">
          <CardHeader>
            <CardTitle>{title}</CardTitle>
          </CardHeader>
          <CardContent className="px-2">
            <div className='space-y-2'>
              {issue.issues.filter(issue => issue.status == status).map(item => <IssueCard projectId={id} item={item} key={item.id} />)}
            </div>
          </CardContent>
          <CardFooter>
            <DialogTrigger>
              <Button variant="outline" className="w-full flex items-center gap-2">
              <PlusIcon/>
                Create Issue
              </Button>
            </DialogTrigger>
          </CardFooter>
        </Card>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Issue</DialogTitle>
          </DialogHeader>
          <CreateIssueForm status={status}/>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default IssueList