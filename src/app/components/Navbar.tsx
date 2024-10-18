import Image from 'next/image'
import {Download} from 'lucide-react'
import NavbarImage from '@/app/Images/Navbar.png'; // Assuming you use an alias for your images

const Navbar = () => {
  return (
    <div className="Navbar px-3 py-2">
      <Image
        src={NavbarImage}
        alt="Description of the image"
        width={40}
      />
      <a href='https://drive.google.com/file/d/1IozOrM8NmzgX5jSNKAQ_kGHeECsk0kpb/view?usp=sharing' target='_blank' className="flex text-customBlue cursor-pointer">Download Resume<Download className='ml-3' /></a>
    </div>
  )
}

export default Navbar
