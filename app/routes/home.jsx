


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
  


  return { posts };
}

import { useLoaderData, useNavigation } from "react-router";
import Homepage from "../component/homepage/homepage";
import ElegantFloatingText from "../component/Loader/ElegantFloatingText";
export function meta() {
  return [
    {
      title: "B2B eCommerce Solutions & Shopify Apps | eFoli",
    },
    {
      name: "description",
      content:"Scalable Shopify apps and B2B eCommerce solutions built for growth. Power your business with intuitive products, custom development, and 24/7 support.",
    },
    {
      "script:ld+json": {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Organization",
            "@id": "https://efoli.com/#organization",
            name: "EFOLI",
            url: "https://efoli.com/",
            logo: {
              "@type": "ImageObject",
              url: "https://efoli.com/assets/logo-qfFYDzw2.svg",
            },
            description:
              "EFOLI is a software company specializing in Shopify apps and B2B eCommerce solutions for merchants worldwide.",
            email: "info@efoli.com",
            telephone: "+8801613333654",
            address: {
              "@type": "PostalAddress",
              streetAddress: "House 514, Road 7, Avenue 4, DOHS Mirpur",
              addressLocality: "Dhaka",
              postalCode: "1216",
              addressCountry: "BD",
            },
            sameAs: [
              "https://www.facebook.com/eFoli.llc",
              "https://www.linkedin.com/company/efoli",
            ],
          },
          {
            "@type": "WebSite",
            "@id": "https://efoli.com/#website",
            url: "https://efoli.com/",
            name: "EFOLI – B2B eCommerce Solutions to Empower Growth",
            publisher: {
              "@id": "https://efoli.com/#organization",
            },
            inLanguage: "en",
          },
          {
            "@type": "WebPage",
            "@id": "https://efoli.com/#webpage",
            url: "https://efoli.com/",
            name: "EFOLI – B2B eCommerce Solutions to Empower Growth",
            isPartOf: {
              "@id": "https://efoli.com/#website",
            },
            about: {
              "@id": "https://efoli.com/#organization",
            },
            description:
              "EFOLI builds Shopify apps like MultiVariants, DiscountRay, PushBundle, and EmbedUp to help merchants scale, optimize operations, and boost sales globally.",
            inLanguage: "en",
          },
        ],
      },
    },
  ];
}



export default function Home() {
  
  const {posts} = useLoaderData();
  // console.log('Blog URL:',URI);
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




