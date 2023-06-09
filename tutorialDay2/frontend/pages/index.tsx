import Image from 'next/image'
import { Inter } from 'next/font/google'
import {GetServerSideProps} from 'next'
import { BlogType } from '@/interfaces/blog.interfase'
import { BlogService } from '@/services/blog.service'
import { calculateEstimatedTimeToRead } from '@/utils/time'
import { BlogCard, Navbar } from '@/components'
import Layout from '@/layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home({blogs}: HomePageProps) {
  console.log(blogs)
  return (
    // <Layout>
    <div className="album py-5 bg-body-tertiary">
        <div className="container">
         <Navbar />
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {blogs.map(elem => (
              <BlogCard elem={elem} key={elem._id}/>
            ))}
          </div>
        </div>
      </div>
    // </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const blogs = await BlogService.getAllBlog()
  return {
    props: {
      blogs
    }
  }
}

interface HomePageProps {
  blogs: BlogType[]
}

