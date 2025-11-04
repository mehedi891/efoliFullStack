


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

import { useNavigation } from "react-router";
import Homepage from "../component/homepage/homepage";
import ElegantFloatingText from "../component/Loader/ElegantFloatingText";
export function meta() {
  return [
    { title: "efoli" },
    { name: "description", content: "Welcome to Efoli" },
  ];
}

export default function Home() {
  
  // const {posts} = useLoaderData();
  // console.log('postsss:',posts.length);
   const navigation = useNavigation();
  return (navigation.state === "loading" ?
    <div className="h-lvh w-lvw bg-blue-50 flex items-center justify-center">
      <ElegantFloatingText text={"Loading..."} />
    </div>
    :
  <Homepage/>
);
}
