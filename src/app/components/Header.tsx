import Image from 'next/image'
import BlueTick from '@/app/Images/blue-tick.png'
import Profile from '@/app/Images/Profile.png';
import banner from "@/app/Images/banner.png"
import { Linkedin, BriefcaseBusiness, Cake, CalendarRange } from 'lucide-react'

const Header = () => {
  return (
    <section className='header relative'>
      <Image className='profile-banner w-full h-56 object-cover' src={banner} alt="" />
      <div className='container-sm profile-container'>
        <div className='profile-controls w-full'>
          <Image className='profile-image' src={Profile} alt="" />
          <a target='_blank' href='https://www.linkedin.com/in/wali-zafri-profile/' className='follow-button flex justify-center gap-2 items-center'>
            Connect <Linkedin className='w-4' />
          </a>
        </div>
        <div className='profile-info'>
          <div className='flex justify-start items-start w-full my-1'>
            <h1 className='my-1'>Wali Zafri</h1>
            <Image className='w-6 h-6 ml-2' src={BlueTick} alt='' />
          </div>
          <p>Bringing ideas to life with clean, modern code! ✨</p>
          <p>👨‍💻 <strong>Front-End Developer</strong>. 🎨 Creative Problem Solver.<br /> Building user-friendly web experiences with cutting-edge technologies. 🌐 <br /> Want to talk? 📩 Mail me at <span className='text-customBlue font-bold'>waliizafri@gmail.com</span> or message me <br /> on LinkedIn by clicking the connect button above. 🤝</p>
          <div className='additional-info my-3 w-full'>
            <div className='flex justify-center items-center gap-1 text-sm'>
              <BriefcaseBusiness className='w-4 icons' /><h4>Available</h4>
            </div>
            <div className='flex justify-center items-center gap-1 text-sm'>
              <Cake className='w-4 icons' /><h4>August 31st</h4>
            </div>
            <div className='flex justify-center items-center gap-1 text-sm'>
              <CalendarRange className='w-4 icons' /><h4>Joined Oct 2024</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header
