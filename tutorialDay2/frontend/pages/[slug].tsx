import { BlogType } from "@/interfaces/blog.interfase"
import { BlogService } from "@/services/blog.service"
import { GetServerSideProps, NextPage } from "next"
import { useRouter } from "next/router"

const DetailedBlog: NextPage<DetailedBlogProps> = ({blog}) => {

  const router = useRouter()

  return (
    <div className="container">
      <button onClick={() => router.push('/')} className="btn btn-outline-primary mt-5">Back</button>
      <h1 className="mt-5">{blog.title}</h1>
      <h5 className="mt-4">{blog.expert}</h5>
      <p className="mt-2">{blog.description}</p>
    </div>
  )
}

export default DetailedBlog

export const getServerSideProps: GetServerSideProps<DetailedBlogProps> = async ({query}) => {
  const blog = await BlogService.getBlogByID(query.slug as string)
  console.log(query.slug)
  return {
    props: {blog}
  }
}

interface DetailedBlogProps{
  blog: BlogType
}

