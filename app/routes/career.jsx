import Careerpage from "../component/careerpage/Careerpage"

export function meta() {
  return [
    { title: "Career" },
    { name: "description", content: "Carrer page" },
  ];
}
export const handle = { darkFooter: true};

const Career = () => {
  return (
    <Careerpage/>
  )
}

export default Career