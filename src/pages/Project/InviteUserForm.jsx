import React from 'react'
import { Form, useForm, FormControl, FormMessage, FormItem } from '../../components/ui/form'
import { DialogClose } from '../../components/ui/dialog'

const InviteUserForm = () => {

    const form = useForm({
        defaultValues: {
            email: ""
        }
    })

    const onSubmit = (data) => {
        console.log('create project data------', data)
    }

    return (
        <>
            <Form {...form}>
                <form className='space-y-5' onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField control={form.control}
                        name="name"
                        render={({ field }) => <FormItem>
                            <FormControl>
                                <Input {...field}
                                    type="text"
                                    className="border w-full border-gray-700 py-5 px-5"
                                    placeholder="project name..." />
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