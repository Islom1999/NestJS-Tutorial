import { Form, Navbar } from "@/components";
import { FormValue } from "@/components/form/form.props";
import Layout from "@/layout";
import { BlogService } from "@/services/blog.service";
import { useState } from "react";

function CreateBlog() {

    const [error , setError] = useState()

    const onSubmit = async(formData: FormValue) => {
        const data = await BlogService.createBlog(formData)
        return data
    }

  return (
    // <Layout>
        <div className="container album py-5 bg-body-tertiary">
            <Navbar />
            <>
               <Form onSubmit={onSubmit} sectionTitle="Create blog"/> 
            </>
        </div>
    // </Layout>
  )
}

export default CreateBlog