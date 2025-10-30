


// export const loader = async () => {
//   let posts = [];
//   try {
//     const res  = await fetch('https://efoli.com/wp-json/wp/v2/posts?per_page=3');
//     if (!res.ok) {
//       throw new Error('Failed to fetch posts');
//     }
//     const data = await res.json();
//     console.log('data:',data);
//     if (data) {
//       posts = data;
//     }
//   } catch (error) {



    
//   }
  


//   return { posts  };
// }

import Homepage from "../component/homepage/homepage";
export function meta() {
  return [
    { title: "efoli" },
    { name: "description", content: "Welcome to Efoli" },
  ];
}

export default function Home() {
  // const {posts} = useLoaderData();
  // console.log('postsss:',posts.length);
  return <Homepage/>;
}
