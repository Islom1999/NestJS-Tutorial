import { Form, Navbar } from "@/components"
import { FormValue } from "@/components/form/form.props"
import { BlogType } from "@/interfaces/blog.interfase"
import { BlogService } from "@/services/blog.service"
import { GetServerSideProps, NextPage } from "next"
import { useRouter } from "next/router"

const EditBlog: NextPage<EditBlogPage> = ({blog}) => {

    const onSubmit = async(formData: FormValue) => {
        const data = await BlogService.editBlog(formData, blog._id)
        return data
    }

    const router = useRouter()

  return (
    
    <div className="container album py-5 bg-body-tertiary">
        <Navbar/>

        <div className="my-5 text-center">

            <h1 className="mt-5 text-primary">Blog Post Update</h1>

            <h2 className="mt-5">{blog.title}</h2>
            <h5 className="mt-4">{blog.expert}</h5>
            <p className="mt-2">{blog.description}</p>
        </div>

        <>
            <Form onSubmit={onSubmit} sectionTitle="Edit blog" values={blog}/> 
        </>

    </div>
  )
}

export default EditBlog

export const getServerSideProps: GetServerSideProps<EditBlogPage> = async ({query}) => {
    const blog = await BlogService.getBlogByID(query.slug as string)
    return {
      props: {blog}
    }
}
  
  interface EditBlogPage{
    blog: BlogType
}