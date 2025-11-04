import { useNavigation } from "react-router";
import Aboutpage from "../component/aboutpage/Aboutpage"
import ElegantFloatingText from "../component/Loader/ElegantFloatingText";

export function meta() {
  return [
    { title: "About us" },
    { name: "description", content: "About us page" },
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
    <Aboutpage/>
  )
}

export default About