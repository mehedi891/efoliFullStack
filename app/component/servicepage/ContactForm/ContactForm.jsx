import Form from "../../Form/Form"

const ContactForm = () => {
  return (
    <section className="py-15 bg-[#EBEEF0] text-[#13181E] z-20 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between">
          <div className="md:max-w-2/6 w-full">
            <h2 className="text-3xl md:text-5xl/[1.25] font-bold font-display tracking-[-1.44px] max-w-[430px]">Have a project idea in mind? Let's get started.</h2>
            <p className="text-base md:text-xl/[1.6] mt-6">We'll schedule a call to discuss your idea. After discovery sessions, we'll send a proposal, and upon approval, we'll get started.</p>
          </div>

          <div className="w-full md:w-1/2">
            <Form
            fClass="w-full bg-white p-8 rounded-sm"
            btnClass="bg-[#0D99FF] text-white"
            btnTxt='Submit Message'
            />
          </div>

        </div>
      </div>
    </section>
  )
}

export default ContactForm