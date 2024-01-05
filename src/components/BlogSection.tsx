import { getPosts } from '@/services/strapiAPI'
import { Post } from '@/interfaces/Post';
import BlogCard from './BlogCard';
import Link from 'next/link';

export default async function BlogSection() {
     //get posts with limit 3
     const posts: Post[] = await getPosts({limit: 3})
  return (
    <section className='flex w-full h-screen py-32'>
         <div className='basis-1/4'>
                <div className='rounded-3xl  size-auto  flex flex-col justify-center gap-5 my-5 ml-10 p-5 border border-background transition duration-700 ease-in-out hover:border-primary hover:bg-background-dark hover:-translate-y-1 hover:scale-110'>
            <Link href="/blog">
                    <h1 className='text-6xl font-semibold pb-5'>Blog</h1>
                    <p className=''><span className='text-primary'>Here</span> I post some of my thoughts and ideas about <span className='text-secondary'> programming, technology and life</span>.</p>
            </Link>
                </div>
        </div>
        <div className='basis-3/4 flex gap-10 px-10'>
            {posts.map((post) => {
                return <BlogCard post={post} key={post.id}/>
            })
            }
        </div>
       
    </section>
    )
}
