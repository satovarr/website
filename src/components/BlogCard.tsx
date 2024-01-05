import { Post } from "@/interfaces/Post";
import Image from "next/image";
import Link from "next/link";

export default function BlogCard({ post }: { post: Post }) {
  return (
    <div className="flex flex-col border-2 h-max max-h-min overflow-hidden rounded-lg shadow-xl bg-background border-background-dark  transition duration-700 ease-in-out hover:border-primary hover:bg-background-dark hover:-translate-y-1 hover:scale-110'">
      <div className="object-cover">
      <Link href={`/blog/${post.attributes.slug}`} className="">
        <Image
          className="rounded-t-lg object-cover max-h-60 "
          src={post.attributes.imgUrl}
          alt=""
          width={500}
          height={300}
        />
      </Link>
      </div>
      <div className="p-5 flex flex-col justify-between h-max">
        <div className="m-auto">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {post.attributes.Title}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 max-h-22 overflow-hidden text-ellipsis">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </div>

        <div>
          <Link
            href={`/blog/${post.attributes.slug}`}
            className="flex-grow inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-background rounded-lg hover:bg-backring-background-dark focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-background dark:hover:bg-background dark:focus:ring-background-dark"
          >
            View{" "}
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
