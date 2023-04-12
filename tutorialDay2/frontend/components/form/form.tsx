import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import { FormProps, FormValue } from "./form.props"
import { BlogService } from "@/services/blog.service"
import { data } from "autoprefixer"
import { useRouter } from "next/router"

function Form({onSubmit, sectionTitle, values}: FormProps) {

    const router = useRouter()

    const [formValue, setFormValue] = useState<FormValue>({
        title:'', expert: '', description: ''
    })

    const onChange = (name:string) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) => {
        setFormValue({...formValue, [name]: e.target.value })
    }

    const submitHandler = async(e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const response = await onSubmit(formValue)
            console.log(response)
            router.push('/')
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        setFormValue({title: values?.title, expert: values?.expert, description: values?.description})
    }, [router.query.slug])

  return (
    <form  onSubmit={submitHandler} className="col-6 m-auto my-5 py-5">
        <h1 className="text-center mb-4">{sectionTitle}</h1>
        <div className="mb-3">
            <h3>Title</h3>
            <input type="text" onChange={onChange('title')} name="title" value={formValue.title} className="form-control" placeholder=""/>
        </div>
        <div className="mb-3">
            <h3>Expert</h3>
            <input type="text" onChange={onChange('expert')} name="expert" value={formValue.expert} className="form-control" placeholder=""/>
        </div>
        <div className="mb-3">
            <h3>description</h3>
            <textarea name="description" onChange={onChange('description')} value={formValue.description} className="form-control"></textarea>
        </div>
        <div className="mb-3 text-center">
            <button type="submit" className="btn btn-primary btn-lg">Submit</button>
        </div>
    </form>
  )
}

export default Form