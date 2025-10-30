import pbThumbnail from "./pbVthumbnail.webp";
const PBVideo = () => {
  return (
    <section className="pt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 pb-14 sm:pb-20 lg:pb-24 pt-10">
        <div className="relative">
          <img src={pbThumbnail} alt="PushBundle" className="object-cover" />
          <div
          className="py-9 px-7 text-2xl font-bold bg-white rounded-full shadow max-w-max cursor-pointer absolute  top-2/4 right-2/4  hover:bg-amber-200 hover:animate-pulse transition delay-150 duration-300 ease-in-out hover:-translate-y-6 hover:scale-110 ">Play</div>
        </div>
      </div>
    </section>
  )
}

export default PBVideo