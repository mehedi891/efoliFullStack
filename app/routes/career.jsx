import { useNavigation } from "react-router";
import Careerpage from "../component/careerpage/Careerpage"
import ElegantFloatingText from "../component/Loader/ElegantFloatingText";

export function meta() {
  return [
    { title: "Career" },
    { name: "description", content: "Carrer page" },
  ];
}
export const handle = { darkFooter: true};

const Career = () => {
   const navigation = useNavigation();
  return (navigation.state === "loading" ?
    <div className="h-lvh w-lvw bg-blue-50 flex items-center justify-center">
      <ElegantFloatingText text={"Loading..."} />
    </div>
    :
    <Careerpage/>
  )
}

export default Career