import { Form, FormControl, FormMessage, FormItem, FormField } from '../../components/ui/form'
import { Button } from '../../components/ui/button'
import { Input } from '../../components/ui/input'
import { useForm } from 'react-hook-form'


const CreateCommentForm = () => {

    const form = useForm({
        defaultValues: {
            email: ""
        }
    })

    const onSubmit = (data) => {
        console.log('create project data------', data)
    }
    
  return (
    <div>
        <Form {...form}>
                <form className='space-y-5' onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField control={form.control}
                        name="content"
                        render={({ field }) => <FormItem>
                            <FormControl>
                                <Input {...field}
                                    type="text"
                                    className="border w-full border-gray-700 py-5 px-5"
                                    placeholder="content..." />
                            </FormControl>
                            <FormMessage />
                        </FormItem>}
                    />
                    <Button type="submit" className="w-full mt-5">Invite user</Button>
                </form>

            </Form>

    </div>
  )
}

export default CreateCommentForm