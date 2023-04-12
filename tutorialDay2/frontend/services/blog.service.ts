import { FormValue } from "@/components/form/form.props"
import { BlogType } from "@/interfaces/blog.interfase"
import axios from "axios"

export const BlogService = {
    async getAllBlog(){
        const {data} = await axios.get<BlogType[]>(
            `${process.env.NEXT_PUBLIC_DOMAIN_NAME}/blog`
        )
        return data
    },

    async getBlogByID(slug:string){
        const {data} = await axios.get<BlogType>(
            `${process.env.NEXT_PUBLIC_DOMAIN_NAME}/blog/${slug}`
        )
        return data
    },

    async deleteBlog(id:string){
        const {status} = await axios.delete<number>(
            `${process.env.NEXT_PUBLIC_DOMAIN_NAME}/blog/${id}`, {data: id}
        )
        return status
    },

    async createBlog(dataForm: FormValue){
        const {data} = await axios.post(
            `${process.env.NEXT_PUBLIC_DOMAIN_NAME}/blog/create`, dataForm
        )
        return data
    },

    async editBlog(dataForm: FormValue, id:string){
        const {data} = await axios.patch(
            `${process.env.NEXT_PUBLIC_DOMAIN_NAME}/blog/${id}`, dataForm
        )
        return data
    }
}






