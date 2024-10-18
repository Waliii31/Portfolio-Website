import Image from 'next/image'
import AbsoluteImage from '@/app/Images/Absolute.png'; // Assuming you use an alias for your images

const AbsoluteImg = () => {
  return (
    <div className='floating'>
      <Image src={AbsoluteImage} alt='Floating Image'/>
    </div>
  )
}

export default AbsoluteImg
