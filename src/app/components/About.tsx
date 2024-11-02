import Image from 'next/image';
import Sign from '../Images/Sign.png';

const About = () => {
  return (
    <div className='About'>
      <h1 className='my-3'>Hello! 👋</h1>
      <p>I&apos;m Wali Zafri, a passionate front-end developer with a solid foundation in HTML, CSS, JavaScript, TypeScript, React, Bootstrap, Tailwind CSS, GIT, and now, Next.js. I&apos;ve built various frontend websites using these technologies, which you can check out in the Posts and Content sections. This portfolio website you&apos;re currently viewing is actually one of those projects! It was given to me by my teacher, <a target='_blank' className='text-blue-800 font-bold' href="https://www.linkedin.com/in/asharibali/">Asharib Ali</a>, as part of the challenge.</p>
      <p>Currently, I&apos;m diving deeper into the MERN stack, learning through YouTube, while also exploring Generative AI through the GIAIC program. This program consists of four quarters, each focusing on a specific area of development. In Quarter 1, I focused on mastering TypeScript. Now, in Quarter 2, I&apos;m honing my skills in Next.js, shadcn UI, Tailwind CSS, deploying websites on Vercel, and much more. </p>
      <p>Additionally, I recently started a new role as a Junior Frontend Developer at Eurosoft Tech Limited, where I’m excited to apply my skills in a professional setting and learn even more through real-world projects.</p>
      <p>On top of that, I&apos;m participating in the 30 Days 30 Projects Challenge, where I aim to build 30 projects in 30 days using Next.js. Each day, I create a new project from scratch, covering a wide range of use cases like apps, tools, and utilities. The challenge is designed to push my skills and creativity, allowing me to improve my ability to build quickly and efficiently while learning new concepts in the process.</p>
      <p>Feel free to explore, and don&apos;t hesitate to reach out and say hi—I&apos;m always open to connect and chat about web development and new ideas!</p>
      <Image width={200} height={200} src={Sign} alt="" />
    </div>
  )
}

export default About
