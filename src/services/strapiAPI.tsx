import { Post } from "@/interfaces/Post";

const STRAPI_URL = process.env.CMS_URL;
const PUBLIC_URL = process.env.PUBLIC_URL;
const STRAPI_BLOGS_ENDPOINT = `${STRAPI_URL}/blogs`;

export async function getPosts({ page = 1, limit = 25 }: { page?: number; limit?: number } = {}){
    //fetch data from a url endpoint
    const res = await fetch(`${STRAPI_BLOGS_ENDPOINT}?populate=*&pagination[page]=${page}&pagination[pageSize]=${limit}`, {
        cache: "no-cache",
    });

    const data = await res.json();
    const posts: Post[] = data.data;

    //add imgUrl
    posts.forEach((post) => {
        post.attributes.imgUrl = `${PUBLIC_URL}${post.attributes.img.data.attributes.url}`;
    });
    return posts;
  }

