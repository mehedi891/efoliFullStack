


export const loader = async () => {
  const featuredTagId = 33;
  const perPage = 3; // Number of posts to fetch
  let posts = [];
  // need to retrive the tags from https://efoli.com/wp-json/wp/v2/tags to get the ID of "featured" tag
  // const restg = await fetch(`${process.env.BLOG_API_URL}tags`);
  // const restData = await restg.json();
  // console.log('tag data:',restData);
  try {
    const res  = await fetch(`${process.env.BLOG_API_URL}/posts?per_page=${perPage}&tags=${featuredTagId}&_embed=1`
    );
    if (!res.ok) {
      throw new Error('Failed to fetch posts');
    }
    const data = await res.json();
    
    if (data) {
      posts = data;
    }
  } catch (error) {

    console.log('Something went wrong while fetching posts:', error);

    
  }
  


  return { posts  };
}

import { useLoaderData, useNavigation } from "react-router";
import Homepage from "../component/homepage/homepage";
import ElegantFloatingText from "../component/Loader/ElegantFloatingText";
export function meta() {
  return [
    { title: "efoli" },
    { name: "description", content: "Welcome to Efoli" },
  ];
}



export default function Home() {
  
  const {posts} = useLoaderData();
  //console.log('posttt:',posts);
   const navigation = useNavigation();
  return (navigation.state === "loading" ?
    <div className="h-lvh w-lvw bg-blue-50 flex items-center justify-center">
      <ElegantFloatingText text={"Loading..."} />
    </div>
    :
  <Homepage posts={posts}/>
);
}
