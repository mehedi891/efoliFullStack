
const Button = ({pClass="",text1="Button",text2="Button"}) => {
  return (

    <button
      className={`cursor-pointer relative group ${pClass}`}
    >
      <div className="relative overflow-hidden">
        <p
          className="group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]"
        >
         {text1}
        </p>
        <p
          className="absolute top-7 left-0 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]"
        >
          {text2}
        </p>
      </div>
    </button>


  )
}

export default Button