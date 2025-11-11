import Blogs from "./Blogs/Blogs"
import CustomerSuccess from "./CustomerSuccess/CustomerSuccess"
import Hero from "./Hero/Hero"
import Innovation from "./Innovation/Innovation"
import JoinTeam from "./JoinTeam/JoinTeam"
import Kivo from "./Kivo/Kivo"
import PBVideo from "./PBVideo/PBVideo"



const Homepage = ({posts}) => {

  return (
    <>
      <Hero/>
      <Innovation/>
      <Kivo/>
      <CustomerSuccess/>
      <PBVideo/>
      <JoinTeam/>
      <Blogs posts={posts}/>
    </>
  )
}

export default Homepage