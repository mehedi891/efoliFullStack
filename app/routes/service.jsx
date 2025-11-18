import { useNavigation } from "react-router";
import Servicepage from "../component/servicepage/Servicepage"
import ElegantFloatingText from "../component/Loader/ElegantFloatingText";


export const handle = { darkFooter: true, darkHeader: true, isBannerHide: true };


export function meta() {
  return [
    { title: "Service" },
    { name: "description", content: "Service Page" }
  ];
}

const Service = () => {
  const navigation = useNavigation();
  return (navigation.state === "loading" ?
    <div className="h-lvh w-lvw bg-blue-50 flex items-center justify-center">
      <ElegantFloatingText text={"Loading..."} />
    </div>
    :
    <Servicepage />

  )
}

export default Service