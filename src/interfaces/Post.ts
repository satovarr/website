import {
    type BlocksContent,
} from "@strapi/blocks-react-renderer";
    
export interface Post {
    id: string;
    attributes: {
      Title: string;
      Description: BlocksContent;
      content: string;
      slug: string;
      imgUrl: string;
      img: {
        data: {
          attributes: {
            url: string;
          }
        }
      }
    };
  }
  