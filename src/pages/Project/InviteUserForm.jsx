import { Form, FormControl, FormMessage, FormItem, FormField } from '../../components/ui/form'
import { DialogClose } from '../../components/ui/dialog'
import { Input } from '../../components/ui/input'
import { Button } from '../../components/ui/button'
import { useForm } from "react-hook-form"
import { useDispatch } from 'react-redux'
import { inviteToProject } from '../../Redux/Project/Action'
import { useParams } from 'react-router-dom'

const InviteUserForm = () => {

    const dispatch = useDispatch()
    const {id} = useParams()

    const form = useForm({
        defaultValues: {
            email: ""
        }
    })

    const onSubmit = (data) => {
        console.log('invite user form------', data)
        dispatch(inviteToProject({email : data.email, projectId: id}))
    }

    return (
        <>
            <Form {...form}>
                <form className='space-y-5' onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField control={form.control}
                        name="email"
                        render={({ field }) => <FormItem>
                            <FormControl>
                                <Input {...field}
                                    type="email"
                                    className="border w-full border-gray-700 py-5 px-5"
                                    placeholder="Invitee email..." />
                            </FormControl>
                            <FormMessage />
                        </FormItem>}
                    />
                    <DialogClose>
                        <Button type="submit" className="w-full mt-5">Invite user</Button>
                    </DialogClose>
                </form>

            </Form>
        </>
    )
}

export default InviteUserForm