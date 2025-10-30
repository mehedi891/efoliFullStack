import Aboutpage from "../component/aboutpage/Aboutpage"

export function meta() {
  return [
    { title: "About us" },
    { name: "description", content: "About us page" },
  ];
}

export const handle = { darkFooter: true, darkHeader: true };

const About = () => {
  return (
    <div><Aboutpage/></div>
  )
}

export default About