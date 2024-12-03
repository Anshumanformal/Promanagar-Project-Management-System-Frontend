/* eslint-disable react/prop-types */
import { Form, FormControl, FormMessage, FormItem, FormField } from '../../components/ui/form'
import { Button } from '../../components/ui/button'
import { Input } from '../../components/ui/input'
import { Avatar } from '../../components/ui/avatar'
import { useForm } from 'react-hook-form'
import { AvatarFallback } from '@radix-ui/react-avatar';
import { useDispatch } from 'react-redux'
import { createComment } from '../../Redux/Comment/Action';


const CreateCommentForm = ({issueId}) => {
    const dispatch = useDispatch()

    const form = useForm({
        defaultValues: {
            email: ""
        }
    })

    const onSubmit = (data) => {
        dispatch(createComment({content: data.content, issueId}))
        console.log('create comment form data------', data)
    }
    
  return (
    <div>
        <Form {...form}>
                <form className='flex gap-2' onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField 
                        control={form.control}
                        name="content"
                        render={({ field }) => (
                            <FormItem>
                                <div className="flex gap-2">
                                    <div>
                                        <Avatar>
                                            <AvatarFallback>R</AvatarFallback>
                                        </Avatar>
                                    </div>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            type="text"
                                            className="w-[20rem]"
                                            placeholder="add comment here..." />
                                    </FormControl>
                                </div>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    <Button type="submit" className="w-full mt-5">Save</Button>
                </form>

            </Form>

    </div>
  )
}

export default CreateCommentForm