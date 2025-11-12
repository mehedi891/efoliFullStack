
const BenefitsCard = () => {
  const cards = [
    {
      title: 'Seamless Support',
      description: 'Get round-the-clock assistance and lifetime support. We’re always here when you need us.',
      Icon: () => (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M17.5 46.5C17.5 49.2614 15.2614 51.5 12.5 51.5C6.97713 51.5 2.5 47.0229 2.5 41.5V36.5C2.5 30.9771 6.97713 26.5 12.5 26.5C15.2614 26.5 17.5 28.7386 17.5 31.5V46.5Z" stroke="#170B26" strokeWidth="2.28571" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12.5 26.5001V17.5C12.5 9.21575 19.2157 2.5 27.5 2.5H37.5C45.7843 2.5 52.5 9.21575 52.5 17.5M32.5 61.5H20C15.8579 61.5 12.5 58.1421 12.5 54V51.5M42.5 36.5H51.5M56.5 26.5C59.25 26.5 61.5 28.75 61.5 31.5V41.5C61.5 44.25 59.25 46.5 56.5 46.5H44.5711C42.3293 46.5 40.1094 46.9415 38.0383 47.7994C35.9671 48.6574 34.0852 49.9148 32.5 51.5V31.5C32.5 28.75 34.75 26.5 37.5 26.5H56.5Z" stroke="#170B26" strokeWidth="2.28571" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: 'Affordable Pricing',
      description: 'Access premium solutions at fair prices, designed to fit businesses of every size.',
      Icon: () => (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_22_27695)">
            <path d="M1.88087 48.7925L8.22604 42.6286C10.7363 40.1202 14.1398 38.7112 17.6885 38.7113H36.3348C38.793 38.7113 40.7857 40.7029 40.7857 43.1595C40.7856 43.3085 40.7782 43.4575 40.7633 43.6057L54.5458 29.8314C56.2796 28.0985 59.0909 28.0985 60.8247 29.8314C62.5586 31.5642 62.5586 34.3737 60.8247 36.1065L42.3663 54.5545C40.4987 56.4207 37.9719 57.4774 35.3318 57.4962H8.12443L1.875 62.1213" stroke="#170B26" strokeWidth="2.28571" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M40.7642 43.606C40.5402 45.8531 38.6429 47.608 36.3355 47.608H22.4688" stroke="#170B26" strokeWidth="2.28571" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M34.4978 31.2105C42.5975 31.2105 49.1636 24.6444 49.1636 16.5447C49.1636 8.445 42.5975 1.87891 34.4978 1.87891C26.3981 1.87891 19.832 8.445 19.832 16.5447C19.832 24.6444 26.3981 31.2105 34.4978 31.2105Z" stroke="#170B26" strokeWidth="2.28571" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M37.5372 12.4024C37.5372 12.4024 35.6669 10.8303 33.4614 11.4946C31.4364 12.1046 31.1532 14.4397 32.6181 15.3948C32.6181 15.3948 34.0558 16.0362 35.6504 16.6244C39.4888 18.0401 37.8353 21.7536 34.7453 21.7536C33.198 21.7536 31.8992 21.0759 31.1133 20.2087M34.4975 11.3308V9.03418M34.4975 21.7536V24.0557" stroke="#170B26" strokeWidth="2.28571" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
          </g>
          <defs>
            <clipPath id="clip0_22_27695">
              <rect width="64" height="64" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      title: 'Expert Professionals',
      description: 'Work with a team of skilled specialists committed to excellence in every project.',
      Icon: () => (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_22_27706)">
            <path d="M14.375 54.625C14.375 58.7671 17.7329 62.125 21.875 62.125C26.0171 62.125 29.375 58.7671 29.375 54.625V9.375C29.375 5.23287 26.0171 1.875 21.875 1.875C17.7329 1.875 14.375 5.23287 14.375 9.375V9.5C9.5425 9.5 5.625 13.4175 5.625 18.25C5.62285 20.0119 6.15535 21.733 7.15212 23.1859C4.01162 24.8722 1.875 28.1858 1.875 32C1.875 35.8142 4.01162 39.1278 7.15212 40.8141C6.15533 42.267 5.62283 43.9881 5.625 45.75C5.625 50.5825 9.5425 54.5 14.375 54.5V54.625Z" stroke="#170B26" strokeWidth="2.28571" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M21.875 24.5C21.875 28.6421 25.2329 32 29.375 32C25.2329 32 21.875 35.3579 21.875 39.5M1.875 32C1.875 26.4771 6.35213 22 11.875 22M41.875 35.75H36.875V58.25L43.75 62.125L50.625 58.25L45.625 54.5M40.625 44.5H36.875M62.125 49.5L57.125 54.5L49.375 48.25V38.25M57.125 43.25L62.125 38.25V28.25L56.5 22.625M54 30.75H50L45 25.75M36.875 28.25V7L40.625 1.875H50.625L54.625 5.75M45.625 1.875V9.5M36.875 17H49.375L53.125 13.25H58.375M14.375 54.5C16.2355 54.5 17.9571 53.915 19.375 52.925" stroke="#170B26" strokeWidth="2.28571" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
          </g>
          <defs>
            <clipPath id="clip0_22_27706">
              <rect width="64" height="64" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      title: 'Custom Script & Coding',
      description: 'Enjoy tailored development to meet your specific business needs and integrations.',
      Icon: () => (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M41.9854 7.54884L55.0073 20.5708" stroke="#170B26" strokeWidth="2.28571" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8.13954 41.3054C11.7645 40.3054 16.7501 42.8751 16.7501 47.75C21.1336 47.75 23.6251 52 22.7501 55.625L22.7131 55.7638L2.51855 61.5L8.13954 41.3054ZM8.13954 41.3054L45.4809 3.95892C47.4345 2.01167 50.5959 2.0143 52.5463 3.96467L60.0428 11.4611C62 13.4183 61.9948 16.5931 60.031 18.5439L31.5048 47.0138" stroke="#170B26" strokeWidth="2.28571" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M18.4102 45.9102L41.6252 22.6253" stroke="#170B26" strokeWidth="2.28571" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: 'Smart Solutions',
      description: 'Leverage innovative tools and strategies built to help your business scale efficiently.',
      Icon: () => (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_22_27726)">
            <path d="M14.3243 62.125L19.3277 59.0349H38.0706C40.5483 58.9454 42.9474 57.8846 44.7495 56.0818L60.8181 40.0072C62.4916 38.3331 62.5678 35.6948 60.9882 34.1147C59.4086 32.5345 56.7715 32.6107 55.0978 34.2848C55.0978 34.2848 43.5718 45.566 43.5759 45.4246C43.6425 43.1177 41.827 41.3017 39.5211 41.3683H22.0287C18.6992 41.4644 15.4678 43.3854 13.0455 45.8087L1.875 56.9834" stroke="#170B26" strokeWidth="2.28571" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M43.5762 45.4246C43.5096 47.7314 41.5862 49.6555 39.2801 49.7222H26.2715" stroke="#170B26" strokeWidth="2.28571" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M32 16.8003V33.8384" stroke="#170B26" strokeWidth="2.28571" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M36.4347 20.7881L32 25.3828L27.5654 20.7881" stroke="#170B26" strokeWidth="2.28571" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M34.817 13.1378L31.9997 16.8003L29.1826 13.1378" stroke="#170B26" strokeWidth="2.28571" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M43.9021 18.807V19.673C43.9021 25.5035 38.5735 30.23 32.0003 30.23C25.4272 30.23 20.0986 25.5035 20.0986 19.673V18.807C20.0986 10.766 32.0003 1.87532 32.0003 1.87532C32.0003 1.87532 43.9021 10.766 43.9021 18.807Z" stroke="#170B26" strokeWidth="2.28571" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
          </g>
          <defs>
            <clipPath id="clip0_22_27726">
              <rect width="64" height="64" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      title: 'Budget-friendly plan',
      description: 'Flexible plans crafted to deliver high value while keeping your costs under control.',
      Icon: () => (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 7.5H32M51.5 7.5H56.5C59.2614 7.5 61.5 9.73863 61.5 12.5V56.5C61.5 59.2614 59.2614 61.5 56.5 61.5H7.5C4.73863 61.5 2.5 59.2614 2.5 56.5V12.5C2.5 9.73863 4.73863 7.5 7.5 7.5H12.5" stroke="#170B26" strokeWidth="2.28571" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M13.4999 45.0003C14.4121 46.2146 15.8644 47 17.5 47M17.5 47C20.2614 47 22.5 44.7614 22.5 42C22.5 39.2386 20.2614 37 17.5 37C14.7386 37 12.5 34.7614 12.5 32C12.5 29.2386 14.7386 27 17.5 27M17.5 47V52M17.5 27C19.1356 27 20.5879 27.7854 21.5001 28.9998M17.5 27V22M12.5 12.5V2.5M51.5 12.5V2.5M32 12.5V2.5M42 7.5H51.5" stroke="#170B26" strokeWidth="2.28571" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="29.143" cy="23.4286" r="1.71429" fill="#170B26" />
          <circle cx="29.143" cy="35.9999" r="1.71429" fill="#170B26" />
          <circle cx="29.143" cy="48.5712" r="1.71429" fill="#170B26" />
          <circle cx="40.5717" cy="23.4286" r="1.71429" fill="#170B26" />
          <circle cx="40.5717" cy="35.9999" r="1.71429" fill="#170B26" />
          <circle cx="40.5717" cy="48.5717" r="1.71429" fill="#170B26" />
          <circle cx="52.0004" cy="23.4286" r="1.71429" fill="#170B26" />
          <circle cx="52.0004" cy="35.9999" r="1.71429" fill="#170B26" />
          <circle cx="52.0004" cy="48.5717" r="1.71429" fill="#170B26" />
        </svg>
      ),
    },
  ];
  return (
    <section className="bg-[#f4f4f7] md:py-20 py-10">
      <div className="max-w-7xl mx-auto md:px-0 px-4">
        <h2 className="md:text-5xl/[1.25] text-3xl font-bold font-display text-center"> Everything You Need to <br /> Succeed and Scale</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
          {cards.map(({ title, description, Icon }, index) => (
            <div key={index} className="flex flex-col gap-8 bg-white rounded-xl px-5 py-8">
              <Icon />
              <div className="flex flex-col gap-4">
                <h3 className="text-2xl text-[#13181E] font-bold font-display">{title}</h3>
                <p className="text-[#4B5154] lg:text-[18px]/1.66">{description}</p>
              </div>
            </div>
          ))

          }
        </div>
      </div>
    </section>
  )
}

export default BenefitsCard