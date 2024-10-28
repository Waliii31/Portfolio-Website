import React from 'react'

const Content = () => {

  const LatestProjects = [
    {
      ProjectName: "My Portfolio Website",
      link: "/",
      date: "17 Oct"
    },
    {
      ProjectName: "ATHENS | THE ART CONCIERGE",
      link: "https://athens-k6v3445sz-wali-zafris-projects.vercel.app/",
      date: "28 Oct 2024"
    },
    {
      ProjectName: "EREN - Lamps Ecommerce Website",
      link: "https://eren-website.netlify.app/",
      date: "Feb 2023"
    },
    {
      ProjectName: "ACORN - Digital Services Website",
      link: "https://acorn-website.netlify.app/",
      date: "July 2023"
    }
  ]

  const CodingChallenge = [
    {
      ProjectName: "Day 1: Countdown Timer App",
      link: "https://time-91e5gayb1-wali-zafris-projects.vercel.app/",
      date: "Sep 2024"
    },
    {
      ProjectName: "Day 2: Weather Widget App",
      link: "https://vercel.live/link/weather-widget-app-snowy.vercel.app/",
      date: "Sep 2024"
    },
    {
      ProjectName: "Day 3: Birthday Wish App",
      link: "https://vercel.live/link/birthday-wish-app-pied.vercel.app/",
      date: "Sep 2024"
    },
    {
      ProjectName: "Day 4: Number Guessing Game",
      link: "https://vercel.live/link/number-guessing-game-phi-gray.vercel.app/",
      date: "Sep 2024"
    },
    {
      ProjectName: "Day 5: Simple Calculator App",
      link: "https://vercel.live/link/simple-calculator-app-eight.vercel.app/",
      date: "Sep 2024"
    },
    {
      ProjectName: "Day 6: Digital Clock App",
      link: "https://vercel.live/link/digital-clock-app-pi.vercel.app/",
      date: "Sep 2024"
    },
    {
      ProjectName: "Day 7: Random Joke Generator App",
      link: "https://vercel.live/link/random-joke-generator-app-two.vercel.app/",
      date: "Sep 2024"
    },
    {
      ProjectName: "Day 8: Color Picker App",
      link: "https://vercel.live/link/color-picker-app-iota.vercel.app/",
      date: "Sep 2024"
    },
    {
      ProjectName: "Day 9: Tip Calculator App",
      link: "https://vercel.live/link/tip-calculator-app-indol.vercel.app/",
      date: "Sep 2024"
    },
    {
      ProjectName: "Day 10: Password Generator App",
      link: "https://vercel.live/link/password-generator-neon-nu-13.vercel.app/",
      date: "Sep 2024"
    },
    {
      ProjectName: "Day 11: BMI Calculator App",
      link: "https://vercel.live/link/bmi-calculator-nu-nine.vercel.app/",
      date: "Sep 2024"
    },
    {
      ProjectName: "Day 12: Unit Converter App",
      link: "https://vercel.live/link/unit-converter-app-weld.vercel.app/",
      date: "Sep 2024"
    },
    {
      ProjectName: "Day 13: HTML Previewer App",
      link: "https://vercel.live/link/html-previewer-app.vercel.app/",
      date: "Sep 2024"
    },
    {
      ProjectName: "Day 14: Pomodoro Timer App",
      link: "https://vercel.live/link/pomodoro-timer-app-five.vercel.app/",
      date: "Sep 2024"
    },
    {
      ProjectName: "Day 15: Expense Tracker App",
      link: "https://vercel.live/link/expense-tracker-app-teal-ten.vercel.app/",
      date: "Sep 2024"
    },
    {
      ProjectName: "Day 16: Movie Search App",
      link: "https://vercel.live/link/movie-search-app-five-opal.vercel.app/",
      date: "Sep 2024"
    },
    {
      ProjectName: "Day 17: Meme Generator App",
      link: "https://vercel.live/link/meme-generator-app-seven.vercel.app/",
      date: "Sep 2024"
    },
    {
      ProjectName: "Day 18: Currency Converter App",
      link: "https://vercel.live/link/currency-converter-app-pied.vercel.app/",
      date: "Sep 2024"
    },
    {
      ProjectName: "Day 19: GitHub Profile Viewer App",
      link: "https://vercel.live/link/github-profile-viewer-app-eight.vercel.app/",
      date: "Sep 2024"
    },
    {
      ProjectName: "Day 20: Notes App",
      link: "https://vercel.live/link/notes-app-beryl-pi.vercel.app/",
      date: "Sep 2024"
    },
    {
      ProjectName: "Day 21: Recipe Search App",
      link: "https://vercel.live/link/recipe-search-app-tawny.vercel.app/",
      date: "Sep 2024"
    },
    {
      ProjectName: "Day 22: Word Counter App",
      link: "https://vercel.live/link/word-counter-app-tau.vercel.app/",
      date: "Sep 2024"
    },
    {
      ProjectName: "Day 23: Image Slider App",
      link: "https://vercel.live/link/image-slider-app-delta.vercel.app/",
      date: "Sep 2024"
    },
    {
      ProjectName: "Day 24: Quiz App",
      link: "https://vercel.live/link/quiz-app-six-blond.vercel.app/",
      date: "Sep 2024"
    },
    {
      ProjectName: "Day 25: Stop Watch App",
      link: "https://vercel.live/link/stop-watch-app-lilac.vercel.app/",
      date: "Sep 2024"
    },
    {
      ProjectName: "Day 26: Snake Game App",
      link: "https://vercel.live/link/snake-game-app-nu.vercel.app/",
      date: "Sep 2024"
    },
    {
      ProjectName: "Day 27: URL Shortener App",
      link: "https://vercel.live/link/url-shortener-app-eosin.vercel.app/",
      date: "Sep 2024"
    },
    {
      ProjectName: "Day 28: Todo List App",
      link: "https://vercel.live/link/todo-list-app-seven-beryl.vercel.app/",
      date: "Sep 2024"
    },
    {
      ProjectName: "Day 29: Random User Generator App",
      link: "https://vercel.live/link/random-user-generator-app-nine.vercel.app/",
      date: "Sep 2024"
    },
    {
      ProjectName: "Day 30: Audio Player App",
      link: "https://vercel.live/link/audio-player-app-swart.vercel.app/",
      date: "Sep 2024"
    }
];


  return (
    <div className='w-full container-sm'>
      <p className='text-sm text-gray-200 mt-5'>When you make a lot of content, it&apos;s hard to keep tabs on all of it. Here are some links to various things I create or have been involved with.</p>
      <div className='mt-6 w-full'>
        <h1 className='text-xl font-bold text-white'>Latest Projects</h1>
        <p className='text-xs mb-5 text-white'>I share updates on my latest posts here.</p>
        <div className='w-100'>
          {LatestProjects.map((project, index) => (
            <div key={index} className='flex flex-col justify-center items-start mb-3'>
              <a target='_blank' rel='noopener noreferrer' className='text-customBlue font-medium text-sm hover:underline' href={project.link}>
                {project.ProjectName}
              </a>
              <span className='text-xs text-gray-400 mt-1 font-normal'>Developed - {project.date}</span>
            </div>
          ))}
        </div>
      </div>
      <div className='mt-6 w-full'>
        <h1 className='text-xl font-bold text-white'>30 Days 30 Projects Challenge</h1>
        <p className='text-xs mb-5 text-white'>I completed the 30 Days 30 Projects Challenge, guided by my teacher <a className='text-customBlue' href="https://www.linkedin.com/in/asharibali/">Asharib Ali</a>, building a new web project daily using Next.js, React, and Tailwind CSS. This challenge helped me sharpen my skills and create practical applications quickly.</p>
        <div className='w-100'>
          {CodingChallenge.map((project, index) => (
            <div key={index} className='flex flex-col justify-center items-start mb-3'>
              <a target='_blank' rel='noopener noreferrer' className='text-customBlue font-medium text-sm hover:underline' href={project.link}>
                {project.ProjectName}
              </a>
              <span className='text-xs text-gray-400 mt-1 font-normal'>Developed - {project.date}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Content


