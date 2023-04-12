import { calculateEstimatedTimeToRead } from "@/utils/time"
import { BlogCardProps } from "./blog-card.props"
import { useRouter } from "next/router"
import { BlogService } from "@/services/blog.service"

const BlogCard = ({elem}: BlogCardProps) => {
  const router = useRouter()

  const onHandler = async () => {
    try {
      const statusResponse = await BlogService.deleteBlog(elem._id)

      console.log(statusResponse)
      
      if(statusResponse == 200){
        router.replace(router.asPath)
      }

    } catch (error) {
      const result = error as Error
      console.log( result.message )
    }
  }

  return (
    <div className="col" key={elem._id}>
      <div className="card shadow-sm">
        <div className="card-body">
          <h5 className="card-title">{elem.title}</h5>
          <p className="card-text">{elem.expert}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button 
                onClick={() => router.push(`/${elem.slug}`)} 
                type="button" className="btn btn-sm btn-outline-secondary">View</button>
              <button 
                onClick={() => router.push(`/edit/${elem.slug}`)} 
                type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
              <button 
                onClick={onHandler} 
                type="button" className="btn btn-sm btn-outline-secondary">Delete</button>
            </div>
            <small className="text-body-secondary">{calculateEstimatedTimeToRead(elem.description)} mins</small>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogCard