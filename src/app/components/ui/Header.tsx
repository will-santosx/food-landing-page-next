import Image from "next/image"
import Logo from "@/images/brand_logo.svg"
import HeaderFood from "@/images/header_food.png"
import { Bike, MapPin, Package, Search, User } from "lucide-react"
import { open_sans } from "@/app/layout"

const Header = () => {
  return (
    <header>
          <TopNav />
          <div className="w-full 2xl:h-[620px] bg-gradient_4 xl:px-[220px] px-[40px] py-[132px] flex lg:flex-row flex-col-reverse items-center gap-x-[100px]">
              <div className="flex flex-col max-lg:items-center justify-center gap-y-[32px]">
                  <div>
                      <h1 className="text-white font-bold md:text-headline_1 my-0 text-headline_4">Are you starving?</h1>
                      <h6 className="md:text-headline_6 text-[14px] text-[#504F4F]">Within a few clicks, find meals that are accessible near you</h6>
                  </div>
                  <div className=" rounded-[16px] bg-white 2xl:w-[856px] w-full h-auto sm:px-[24px] px-[5px] flex flex-col overflow-hidden">
                      <div className="py-[24px] w-full flex gap-x-[9px]">
                          <button type="button" className="xl:w-[150px] h-[40px] hover:shadow-md hover:scale-105 transition-all text-warning bg-warning/15 rounded-lg flex justify-center items-center font-bold gap-[09px]">
                              <Bike />
                              <span>Delivery</span>
                          </button>
                          <button disabled type="button" className=" disabled:cursor-not-allowed w-[150px] h-[40px] text-gray-600 rounded-lg flex justify-center items-center font-bold gap-[09px]">
                              <Package />
                              <span>Pickup</span>
                          </button>
                      </div>
                      <div className="py-[24px] w-full flex items-center gap-x-[16px]">
                          <div className="flex gap-x-[12px] py-[8px] pl-[16px] w-full max-w-[590px]">
                              <MapPin className="text-[#FF7474]" />
                              <input type="text" className="placeholder:text-body_1 flex-1 outline-none placeholder:text-gray-500" placeholder="Enter your Address"/>
                          </div>
                          <button type="button" className="bg-[#F65900] hover:scale-105 hover:shadow-md hover:bg-opacity-90 transition-all sm:w-[200px] w-[120px] h-[60px] rounded-lg text-white font-bold flex gap-[2px] md:gap-x-[09px] items-center justify-center">
                              <Search />
                              <span className="sm:text-button text-[12px]">Find Food</span>
                          </button>
                      </div>
                  </div>
              </div>
              <div className="hidden 2xl:block">
                  <Image className="drop-shadow-lg w-[720px]" src={HeaderFood} alt="Prato Chefe"/>
              </div>
          </div>
    </header>
  )
}
const TopNav = () => {
    return (
        <div className="w-full bg-white h-[80px] flex items-center xl:px-[220px] px-[20px] py-[15px] xl:gap-x-[227px] xl:justify-center max-xl:justify-between">
            <Image className="lg:w-[190px] lg:h-[33px] w-[100px]" src={Logo} alt="Logo da Empresa" />
            <div className={`lg:flex text-nowrap lg:text-body_1 text-body_2 text-gray-800 gap-x-[12px] hidden ` + open_sans.className}>
                <span className="font-bold">Deliver to:</span>
                <div className="flex gap-x-[09px]">
                    <MapPin className="text-primary" />
                    <span>Current Location</span>
                    <span className="font-bold">Burlington, Vermont</span>
                </div>
            </div>
            <div className="flex items-center xl:gap-x-[30px] gap-[10px]">
                <div className="flex items-center gap-x-[09px]">                    
                    <Search className="text-primary" />
                    <span className="font-bold text-body_1 2xl:block hidden text-nowrap">Search Food</span>
                </div>
                <button type="button" className="hover:bg-black/5 hover:scale-105 transition-all flex items-center gap-x-[10px] justify-center w-[118px] h-[45px] bg-white text-primary shadow-md shadow-primary/25">
                    <User />
                    <span className="font-bold text-body_1">Login</span>
                </button>
            </div>
      </div>
    )
  }

export default Header