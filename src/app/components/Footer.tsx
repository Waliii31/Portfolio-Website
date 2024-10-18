import { Linkedin, Github, Link, Mail } from 'lucide-react';

export default function Footer() {

    return (
        <footer className="w-full container-sm flex-col flex justify-center items-center mb-3 mt-12">
            <div className='flex justify-center items-center gap-10 w-full'>
                <a target='_blank' href="https://www.linkedin.com/in/wali-zafri-profile/"><Linkedin className='w-5 text-gray-700 hover:text-white' /></a>
                <a target='_blank' href="https://github.com/Waliii31"><Github className='w-5 text-gray-700 hover:text-white' /></a>
                <a href="mailto:waliizafri@gmail.com"><Mail className='w-5 text-gray-700 hover:text-white' /></a>
                <a href="/"><Link className='w-5 text-gray-700 hover:text-white' /></a>
            </div>
            <p className='text-gray-600 text-sm my-4'>Wali Zafri &copy; 2024</p>
        </footer>
    )
}
