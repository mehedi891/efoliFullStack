import AnimatedSection from "../AnimatedSection/AnimatedSection"
import Button from "../Button/Button"
import ButtonWithIcon from "../ButtonWithIcon/ButtonWithIcon"
import Timer3 from "./Countdown/Countdown"
import hero from "./hero.webp"
const Offerpage = () => {
  return (
    <>
    <section className="">
      <div className="grid ">
        <img src={hero} alt="Offerpage Hero" className="w-full h-auto col-start-1 row-start-1" />
        <div className="col-start-1 row-start-1 z-10 place-self-center pt-100">
          <Timer3 durationDays={30} persistKey="bfcm-countdown" />
          <Button
            text1="Explore Our Products"
            text2="Explore Our Products"
            pClass="bg-[#0D99FF] py-3.5 px-6 text-[#fff] rounded-lg mt-10 mb-10 mx-auto block shadow-md"
          />
        </div>
      </div>

      <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="127" viewBox="0 0 1600 127" fill="none">
          <path d="M-2.05377 70.2192L2.02875 72.6687H16.7257L35.097 53.8892H48.5693L59.1839 44.0911C64.355 45.9962 75.3506 49.7249 77.9634 49.3983C80.5762 49.0717 85.8563 43.8189 88.1697 41.2333H101.234C119.877 52.2561 166.472 74.2201 203.705 73.8935C240.937 73.5669 263.037 73.7574 269.433 73.8935C283.994 66.4089 314.831 49.3168 321.689 40.8251C328.548 32.3335 340.605 22.8621 345.776 19.1878L362.106 16.7383L371.088 19.1878H402.115L410.688 14.2887H424.16L434.367 21.6373L462.128 19.1878L473.967 27.3528H480.091L491.114 19.1878L495.196 14.2887H503.361L507.035 27.3528V40.8251L514.384 44.0911L577.255 36.7426L593.585 24.0868L668.295 14.2887L674.418 24.0868C677.685 25.8559 684.788 29.884 687.074 31.8436C689.36 33.8032 692.109 40.8251 693.198 44.0911C697.961 45.3159 708.63 48.2553 713.202 50.2149C717.775 52.1745 727.627 57.0191 731.982 59.1964L742.188 54.2974H756.069L760.968 64.0955H787.096L809.958 54.2974L843.843 50.2149L876.911 24.0868L896.507 18.3713C902.087 20.1404 913.98 24.2501 916.92 26.5363C919.859 28.8225 924.949 33.4766 927.126 35.5179L946.722 31.8436C962.508 24.4951 996.774 9.22649 1007.55 6.94028C1018.33 4.65407 1030.55 1.36084 1035.31 0L1101.45 19.596H1141.46L1149.62 13.0639H1157.38L1232.91 29.8022V43.6828L1278.22 37.559L1287.61 43.6828L1334.15 37.559C1336.47 37.1508 1342.81 35.0279 1349.67 29.8022C1356.52 24.5766 1363.14 18.6434 1365.59 16.33L1384.37 40.4168C1396.34 38.7838 1421.52 35.3545 1426.42 34.7013C1431.32 34.0481 1441.25 31.1631 1445.6 29.8022L1468.88 13.8804H1517.05L1565.22 27.3527L1591.35 29.8022L1599.52 34.7013V88.1822C1591.9 86.5492 1574.37 83.1199 1565.22 82.4667C1556.08 81.8135 1552.16 84.3718 1551.34 85.7327C1544.54 81.2419 1525.7 71.9338 1504.8 70.6274C1483.9 69.321 1467.51 72.5325 1461.94 74.3016V70.6274H1448.46L1402.33 107.778H1394.57C1394.44 109.003 1392.86 112.432 1387.63 116.352C1382.41 120.271 1374.84 122.067 1371.71 122.475C1374.43 121.387 1378.24 118.066 1371.71 113.494C1363.55 107.778 1350.48 104.92 1342.32 107.778C1335.79 110.064 1327.35 112.541 1323.95 113.494C1325.44 109.547 1322.64 101.083 1299.45 98.7967C1276.26 96.5105 1272.91 99.4771 1274.14 101.246L1241.89 75.9346C1237.94 74.9821 1229.4 72.9136 1226.78 72.2604C1224.17 71.6072 1219.71 71.9882 1217.8 72.2604L1207.59 68.9944L1188.81 75.9346H1178.61L1169.22 68.9944L1069.61 48.1736C1059.81 54.9777 1037.84 69.8925 1028.37 75.1181C1018.9 80.3438 1004.01 87.3657 997.753 90.2234H974.075L964.277 86.1409L880.177 109.003V120.842L865.072 124.517L861.398 120.842C840.849 123.972 797.22 129.089 787.096 124.517C776.971 119.944 758.654 112.269 750.761 109.003C750.489 110.092 748.394 112.514 742.188 113.494C735.983 114.474 731.165 116.079 729.532 116.76L698.914 101.246H665.437L634.818 84.0997H608.69L600.933 89.8152L598.076 86.5492L577.255 89.8152L571.131 93.4894L542.962 107.778H514.384L503.361 115.127L495.196 110.636H484.99L447.839 81.6502C446.281 81.9892 442.918 83.0632 441.928 84.6474C440.938 86.2315 440.361 88.7727 440.196 89.8453H435.493L421.137 64.3508L412.721 67.5685L405.543 80.192L399.355 74.4991H379.306C378.728 73.0139 377.425 69.5487 376.831 67.5685C376.237 65.5884 368.498 64.1032 364.702 63.6082L324.852 65.3408C323.366 67.1648 318.119 71.4289 309.01 73.8935C299.902 76.3581 294.984 78.4594 293.664 79.2019C288.714 81.8422 277.229 88.1127 270.892 92.073C264.556 96.0333 249.11 105.439 242.18 109.647C228.401 110.472 199.012 111.627 191.686 109.647C184.359 107.667 178.567 103.541 176.587 101.726L138.964 95.7858L113.965 97.7659C113.057 99.4161 108.767 103.409 98.866 106.182C88.9652 108.954 72.4638 112.452 65.4508 113.855L57.0351 104.201V109.647H44.6591C36.5735 105.604 18.026 96.7758 8.52122 93.8056C-0.490618 90.9894 -2.87562 90.8499 -2.99518 91.1625V91.2175C-3.00149 91.1981 -3.00172 91.1796 -2.99518 91.1625V70.2192H-2.05377Z" fill="white" />
        </svg>
      </div>
    </section>

    <section className="bg-[#0D0827]">
         <AnimatedSection>
      <div id="efProducts" className="mx-auto max-w-7xl px-4 md:px-0 ">
        <h3 className="text-lg text-center text-blue-500 font-[600]">Products</h3>
        <h2 className="font-display md:text-5xl text-3xl font-bold text-center pt-2 md:mb-20 mb-10">Our Innovative Shopify Apps</h2>

        <div className="mb-7 flex md:flex-wrap flex-wrap-reverse items-center justify-between shadow-lg p-8 rounded-2xl bg-linear-to-r from-[#fff] to-[#f2fbfa] transition ease-in duration-300 hover:scale-105 hover:cursor-pointer hover-drop-shadow-2xl">
          <div className="max-w-[550px]">
            <div className="flex items-center gap-2">
              <img src={mvIcon} alt="Multivariants" className="md:max-w-[42px] max-w-[35px] h-auto" />
              <h4 className="md:text-2xl text-xl text-[#13181E] font-bold font-display">MultiVariants ‑ Bulk Order</h4>
            </div>
            <p className="text-base/[1.75] text-[#4B5154] py-4">Privilege your clients with one-click bulk order placing system, apply business rules and win more sales with MultiVariants.</p>
            <Link to={"https://multivariants.com"} target="_blank" >
              <ButtonWithIcon text1="Go to product" text2="Go to product" pClass="text-base font-semibold" />
            </Link>
          



          </div>

          <div className="max-w-[400px]">
            <img className="object-cover" src={mv_demo} alt="Multivariants" />
          </div>

        </div>

        <div className="flex flex-wrap gap-7 justify-between flex-col">

          <div className=" flex md:flex-wrap flex-wrap-reverse flex-col-reverse gap-4 items-center justify-between shadow-lg p-8 rounded-2xl bg-linear-to-r from-[#fff] to-[#f2fbfa] max-w-full md:max-w-[50%] flex-1
          transition ease-in duration-300 hover:scale-105 hover:cursor-pointer hover-drop-shadow-2xl 
          ">
            <div className="max-w-[550px]">
              <div className="flex items-center gap-2">
                <img src={pbIcon} alt="Multivariants" className="md:max-w-[42px] max-w-[35px] h-auto rounded-sm" />
                <h4 className="md:text-2xl text-xl text-[#13181E] font-bold font-display">Push Bundle ‑ Build a Box</h4>
              </div>
              <p className="text-base/[1.75] text-[#4B5154] py-4">Privilege your clients with one-click bulk order placing system, apply business rules and win more sales with MultiVariants.</p>
              <Link to={"https://pushbundle.com"} target="_blank">
                <ButtonWithIcon text1="Go to product" text2="Go to product" pClass="text-base font-semibold" />
              </Link>
            </div>

            <div className="max-w-[400px]">
              <img className="object-cover" src={pb_demo} alt="Multivariants" />
            </div>

          </div>

          <div className=" flex md:flex-wrap flex-wrap-reverse flex-col-reverse gap-4 items-center justify-between shadow-lg p-8 rounded-2xl bg-linear-to-r from-[#fff] to-[#f2fbfa] max-w-full md:max-w-[50%]
          transition ease-in duration-300 hover:scale-105 hover:cursor-pointer hover-drop-shadow-2xl flex-1
          ">
            <div className="max-w-[550px]">
              <div className="flex items-center gap-2">
                <img src={drIcon} alt="Multivariants" className="md:max-w-[42px] max-w-[35px] h-auto" />
                <h4 className="md:text-2xl text-xl text-[#13181E] font-bold font-display">DiscountRay ‑ B2B Custom Pricing</h4>
              </div>
              <p className="text-base/[1.75] text-[#4B5154]  py-4">Privilege your clients with one-click bulk order placing system, apply business rules and win more sales with MultiVariants.</p>
              <Link to={"https://discountray.com"} target="_blank">
                 <ButtonWithIcon text1="Go to product" text2="Go to product" pClass="text-base font-semibold" />
              </Link>
            </div>

            <div className="max-w-[400px]">
              <img className="object-cover" src={dr_demo} alt="Multivariants" />
            </div>

          </div>

        </div>

        <div className="mt-7 flex md:flex-wrap flex-wrap-reverse items-center justify-between shadow-2xl p-8 rounded-2xl bg-linear-to-r from-[#fff] to-[#f2fbfa]
        transition ease-in duration-300 hover:scale-105 hover:cursor-pointer hover-drop-shadow-2xl
        ">
          <div className="max-w-[550px]">
            <div className="flex items-center gap-2">
              <img src={emIcon} alt="EmbedUp" className="md:max-w-[42px] max-w-[35px] h-auto" />
              <h4 className="md:text-2xl text-xl text-[#13181E] font-bold font-display">Embedup - sell anywherer</h4>
            </div>
            <p className="text-base/[1.75] text-[#4B5154] py-4">Turn any website or blog into a sales channel in minutes. Embed products on WordPress, Wix, Webflow, Squarespace & more.</p>
            <Link to={"https://embedup.com"} target="_blank" >
               <ButtonWithIcon text1="Go to product" text2="Go to product" pClass="text-base font-semibold" />
            </Link>
          </div>

          <div className="max-w-[500px]">
            <img className="object-cover" src={em_demo} alt="EmbedUp" />
          </div>

        </div>

      </div>
      </AnimatedSection>
    </section>

  </>
  )
}

export default Offerpage