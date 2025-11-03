
const NavButton = ({text="Home"}) => {
  // className="overflow-hidden w-32 p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group"
  return (
    <button
      className="overflow-hidden px-4 py-0 h-9.5 border-none rounded-md text-base font-normal cursor-pointer relative z-10 group"
    >
      {text}
      <span
        className="absolute w-36 h-32 -top-8 -left-2 bg-[#050404] rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"
      ></span>
      <span
        className="absolute w-36 h-32 -top-8 -left-2 bg-[#839bdc] rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"
      ></span>
      <span
        className="absolute w-36 h-32 -top-8 -left-2  bg-[#0D99FF] rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left"
      ></span>
      <span
        className="group-hover:opacity-100 text-white group-hover:duration-1000 duration-100 opacity-0 absolute  z-10 px-4 py-1 w-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
      >{text}</span>
    </button>
  )
}

export default NavButton