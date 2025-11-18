import { useNavigation } from "react-router";
import Aboutpage from "../component/aboutpage/Aboutpage"
import ElegantFloatingText from "../component/Loader/ElegantFloatingText";

export function meta() {
  return [
    { title: "About eFoli | Global B2B eCommerce Innovators" },
    { name: "description", content: "Discover eFoli’s 15+ year journey in building Shopify apps, SaaS products, and digital solutions that help global businesses scale with innovation and reliability." },
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": "https://efoli.com/#organization",
          "name": "EFOLI",
          "url": "https://efoli.com/",
          "logo": {
            "@type": "ImageObject",
            "url": "https://efoli.com/assets/logo-qfFYDzw2.svg"
          },
          "description": "EFOLI is a software company specializing in Shopify apps and B2B eCommerce solutions for merchants worldwide.",
          "foundingDate": "2010",
          "numberOfEmployees": 50,
          "areaServed": [
            "Worldwide",
            "Bangladesh",
            "North America",
            "Europe"
          ],
          "email": "info@efoli.com",
          "telephone": "+8801613333654",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "House 514, Road 7, Avenue 4, DOHS Mirpur",
            "addressLocality": "Dhaka",
            "postalCode": "1216",
            "addressCountry": "BD"
          },
          "sameAs": [
            "https://www.facebook.com/eFoli.llc",
            "https://www.linkedin.com/company/efoli"
          ]
        },
        {
          "@type": "WebSite",
          "@id": "https://efoli.com/#website",
          "url": "https://efoli.com/",
          "name": "EFOLI – B2B eCommerce Solutions to Empower Growth",
          "publisher": {
            "@id": "https://efoli.com/#organization"
          },
          "inLanguage": "en"
        },
        {
          "@type": "AboutPage",
          "@id": "https://efoli.com/about-us/#aboutpage",
          "url": "https://efoli.com/about-us/",
          "name": "About EFOLI – Your Complete B2B Solution for Sustainable Business Growth",
          "isPartOf": {
            "@id": "https://efoli.com/#website"
          },
          "about": {
            "@id": "https://efoli.com/#organization"
          },
          "description": "Discover EFOLI’s story, culture, and mission. Learn how our team of experts builds scalable SaaS products, Shopify apps, and B2B eCommerce solutions that help businesses grow, evolve, and thrive.",
          "inLanguage": "en"
        },
        {
          "@type": "BreadcrumbList",
          "@id": "https://efoli.com/about-us/#breadcrumb",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://efoli.com/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "About Us",
              "item": "https://efoli.com/about-us/"
            }
          ]
        },
        {
          "@type": "ItemList",
          "@id": "https://efoli.com/about-us/#key-metrics",
          "name": "EFOLI Key Company Metrics",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "item": {
                "@type": "QuantitativeValue",
                "name": "Years in business",
                "value": 15,
                "unitText": "Years"
              }
            },
            {
              "@type": "ListItem",
              "position": 2,
              "item": {
                "@type": "QuantitativeValue",
                "name": "Clients",
                "value": 15000,
                "unitText": "Businesses"
              }
            },
            {
              "@type": "ListItem",
              "position": 3,
              "item": {
                "@type": "QuantitativeValue",
                "name": "Experts",
                "value": 50,
                "unitText": "Team members"
              }
            }
          ]
        },
        {
          "@type": "ItemList",
          "@id": "https://efoli.com/about-us/#value-proposition",
          "name": "Why Businesses Choose EFOLI",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "item": {
                "@type": "Service",
                "name": "Seamless Support",
                "description": "Round-the-clock assistance and lifetime technical support for merchants and partners."
              }
            },
            {
              "@type": "ListItem",
              "position": 2,
              "item": {
                "@type": "Service",
                "name": "Affordable Pricing",
                "description": "Premium SaaS and eCommerce solutions priced for businesses of every size."
              }
            },
            {
              "@type": "ListItem",
              "position": 3,
              "item": {
                "@type": "Service",
                "name": "Expert Professionals",
                "description": "A team of experienced designers, developers, and strategists focused on excellence."
              }
            },
            {
              "@type": "ListItem",
              "position": 4,
              "item": {
                "@type": "Service",
                "name": "Custom Script & Coding",
                "description": "Tailored development, integrations, and scripts for unique business requirements."
              }
            },
            {
              "@type": "ListItem",
              "position": 5,
              "item": {
                "@type": "Service",
                "name": "Smart Solutions",
                "description": "Innovative tools and automation designed to help businesses scale efficiently."
              }
            },
            {
              "@type": "ListItem",
              "position": 6,
              "item": {
                "@type": "Service",
                "name": "Budget-friendly Plans",
                "description": "Flexible plans that deliver high value while keeping costs under control."
              }
            }
          ]
        },
        {
          "@type": "ItemList",
          "@id": "https://efoli.com/about-us/#timeline",
          "name": "EFOLI Company Timeline",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "item": {
                "@type": "Event",
                "name": "2010 – Simplifying eCommerce for All",
                "startDate": "2010",
                "description": "Founded EFOLI with the mission of simplifying eCommerce for merchants by solving real business problems."
              }
            },
            {
              "@type": "ListItem",
              "position": 2,
              "item": {
                "@type": "Event",
                "name": "2012 – Expanding Creative Commerce",
                "startDate": "2012",
                "description": "Launched T-Shirt Designer v4.1 with affiliate shop creation, design-selling features, and integrations for Magento and Joomla/VirtueMart."
              }
            },
            {
              "@type": "ListItem",
              "position": 3,
              "item": {
                "@type": "Event",
                "name": "2016 – Reimagining Product Customization",
                "startDate": "2016",
                "description": "Released a new Product Configurator and a WooCommerce T-Shirt Customizer Plugin, opening advanced customization for print shops and brands."
              }
            },
            {
              "@type": "ListItem",
              "position": 4,
              "item": {
                "@type": "Event",
                "name": "2020 – Simplifying Bulk Buying",
                "startDate": "2020",
                "description": "Launched MultiVariants – Bulk Order for complex variant sales and later won the BASIS National ICT Award."
              }
            },
            {
              "@type": "ListItem",
              "position": 5,
              "item": {
                "@type": "Event",
                "name": "2024 – Powering Smarter Discounts",
                "startDate": "2024",
                "description": "Expanded the Shopify ecosystem with DiscountRay, enabling personalized discounts, volume bundling, and pricing automation."
              }
            },
            {
              "@type": "ListItem",
              "position": 6,
              "item": {
                "@type": "Event",
                "name": "2025 – Building a Connected Shopify Ecosystem",
                "startDate": "2025",
                "description": "Launched PushBundle, EmbedUp, and KivoSupport to create a connected Shopify ecosystem and white-label customer support for apps."
              }
            }
          ]
        },
        {
          "@type": "Person",
          "@id": "https://efoli.com/about-us/#founder",
          "name": "Jahangir Alam",
          "jobTitle": "Founder & CEO",
          "worksFor": {
            "@id": "https://efoli.com/#organization"
          },
          "description": "Founder and CEO of EFOLI, leading the team in building merchant-focused features and long-term, impact-driven solutions."
        }
      ]
    }
  ];
}

export const handle = { darkFooter: true, darkHeader: true };

const About = () => {
  const navigation = useNavigation();
  return (navigation.state === "loading" ?
    <div className="h-lvh w-lvw bg-blue-50 flex items-center justify-center">
      <ElegantFloatingText text={"Loading..."} />
    </div>
    :
    <Aboutpage />
  )
}

export default About