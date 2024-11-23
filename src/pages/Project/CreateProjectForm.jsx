import React from 'react'
import { useForm } from 'react-hook-form'
import { Form, FormControl, FormField, FormItem } from '../../components/ui/form'
import { DialogClose } from '../../components/ui/dialog'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select'
import { tags } from './ProjectList'
import { CrossIcon } from 'lucide-react'


const CreateProjectForm = () => {

  const handleTagsChange = (newValue) => {
    const currentTags = form.getValues("tags")
    const updatedTags = currentTags.includes(newValue) ?
                        currentTags.filter(tag => tag !== newValue) :
                        [...currentTags, newValue]
    form.setValue("tags", updatedTags)

  }

  const form = useForm({
    defaultValues:{
      name:"",
      description: "",
      category: "",
      tags: ["javascript", "react"]
    }
  })

  const onSubmit = (data) => {
    console.log('create project data', data)
  }

  return (
    <div>
      <Form {...form}>
        <form className='space-y-5' onSubmit={form.handleSubmit(onSubmit)}>
          <FormField control={form.control}
            name="name"
            render={({field}) => <FormItem>
              <FormControl>
                <Input {...field}
                type="text"
                className="border w-full border-gray-700 py-5 px-5"
                placeholder="project name..."/>
              </FormControl>
              <FormMessage/>
            </FormItem>}
          />
          <FormField control={form.control}
            name="description"
            render={({field}) => <FormItem>
              <FormControl>
                <Input {...field}
                type="text"
                className="border w-full border-gray-700 py-5 px-5"
                placeholder="project description..."/>
              </FormControl>
              <FormMessage/>
            </FormItem>}
          />
          <FormField control={form.control}
            name="category"
            render={({field}) => <FormItem>
              <FormControl>
                <Select defaultValue='fullstack' value = {field.value} onValueChange={value=> {field.onChange(value)}}>
                  <SelectTrigger className='w-full'>
                    <SelectValue placeholder='category'/>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='fullstack'>Full Stack</SelectItem>
                    <SelectItem value='frontend'>Frontend</SelectItem>
                    <SelectItem value='backend'>Backend</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage/>
            </FormItem>}
          />
          <FormField control={form.control}
            name="tags"
            render={({field}) => <FormItem>
              <FormControl>
                <Select onValueChange={value=> {field.handleTagsChange(value)}}>
                  <SelectTrigger className='w-full'>
                    <SelectValue placeholder='Tags'/>
                  </SelectTrigger>
                  <SelectContent>
                    {tags.map(item => <SelectItem key={item} value={item}>{item}</SelectItem>)}
                  </SelectContent>
                </Select>
              </FormControl>
              <div className='flex gap-1 flex-wrap'>
                {field.value.map(item => <div key={item} onClick={handleTagsChange} className='cursor-pointer flex rounded-full items-center border gap-2 px-4 py-1'>
                  <span className='text-sm'>{item}</span>
                  <CrossIcon className='h3 w-3'/>
                  </div>
                )}
              </div>
              <FormMessage/>
            </FormItem>}
          />
          <DialogClose>
            {false ? 
            <div><p>You can create only 3 projects with free plan. Please upgrade your plan</p></div> :
            <Button type="submit" className="w-full mt-5">Create Project</Button>
            }
          </DialogClose>
        </form>

      </Form>
    </div>
  )
}

export default CreateProjectForm