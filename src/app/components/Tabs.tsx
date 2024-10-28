"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ReusableCard } from "./ReusableCard";
import FirstPost from '../Images/FirstPost.png';
import Post2 from '../Images/Post2.png';
import Acorn from '../Images/Acorn.png';
import Days30 from '../Images/30days.png';
import About from "./About";
import Content from "./Content";
import Athens from "../Images/Athens.png"
import post4 from "../Images/30days30projects/4.png";
import post5 from "../Images/30days30projects/5.png";
import post6 from "../Images/30days30projects/6.png";
import post7 from "../Images/30days30projects/7.png";
import post8 from "../Images/30days30projects/8.png";
import post9 from "../Images/30days30projects/9.png";
import post10 from "../Images/30days30projects/10.png";
import post11 from "../Images/30days30projects/11.png";
import post12 from "../Images/30days30projects/12.png";
import post13 from "../Images/30days30projects/13.png";
import post14 from "../Images/30days30projects/14.png";
import post15 from "../Images/30days30projects/15.png";
import post16 from "../Images/30days30projects/16.png";
import post17 from "../Images/30days30projects/17.png";
import post18 from "../Images/30days30projects/18.png";
import post19 from "../Images/30days30projects/19.png";
import post20 from "../Images/30days30projects/20.png";
import post21 from "../Images/30days30projects/21.png";
import post22 from "../Images/30days30projects/22.png";
import post23 from "../Images/30days30projects/23.png";
import post24 from "../Images/30days30projects/24.png";
import post25 from "../Images/30days30projects/25.png";
import post26 from "../Images/30days30projects/26.png";
import post27 from "../Images/30days30projects/27.png";
import post28 from "../Images/30days30projects/28.png";
import post29 from "../Images/30days30projects/29.png";
import post30 from "../Images/30days30projects/30.png";
import post31 from "../Images/30days30projects/31.png";
import post33 from "../Images/30days30projects/33.png";


export function TabsDemo() {
    const cardData = [
        {
            date: "18 Oct 2024",
            mood: "🌴 Feeling Fresh",
            description: "This is where I share updates on what I’m working on and explore various coding topics. You can stay updated by Following me on Linkedin with the 'Follow' button above.",
            imageSrc: FirstPost,
            linkTo: "", // Added 'https://' prefix
            showGreeting: true,
        },
        {
            date: "28 Oct 2024",
            mood: "🎨 Creative",
            description: "Created an elegant online art gallery showcasing a curated collection of original paintings. Features include a gallery view with detailed artwork descriptions and artist profiles. Built with React and modern CSS to create a sophisticated platform for art enthusiasts to explore and appreciate fine art.",
            imageSrc: Athens,
            linkTo: "https://athens-k6v3445sz-wali-zafris-projects.vercel.app/",
            showGreeting: false
        },
        {
            date: "21 Jan 2023",
            mood: "🌟 Excited",
            description: "This project was a fantastic opportunity for me to practice my skills in designing and developing a visually appealing and user-friendly landing page using React, Bootstrap, and GSAP for smooth animations. My goal was to create an inviting atmosphere that reflects the brand’s aesthetic and encourages visitors to explore the product offerings.",
            imageSrc: Post2,
            linkTo: "https://eren-website.netlify.app/", // Added 'https://' prefix
            showGreeting: false,
        },
        {
            date: "24 Mar 2023",
            mood: "😌 Satisfied",
            description: "This project allowed me to design and develop a clean, user-friendly landing page for Acorn, a digital services website. Using React and Bootstrap, I focused on creating a modern, responsive design that showcases Acorn's services and provides a smooth user experience.",
            imageSrc: Acorn,
            linkTo: "https://acorn-website.netlify.app/",
            showGreeting: false
        },
        {
            date: "01 Sep 2024",
            mood: "🔥 Determined",
            description: "As part of the 30 Days of 30 Projects Challenge, I developed one project each day using Next.js, React, Tailwind CSS, and Shadcn UI. This challenge, guided by my mentor Asharib Ali, helped me rapidly improve my web development skills while building a diverse range of applications. Each project pushed me to explore new concepts, enhance my problem-solving abilities, and create responsive, dynamic applications.",
            imageSrc: Days30,
            linkTo: "https://github.com/your-github-profile/30-days-30-projects",
            showGreeting: true
        },
        {
            date: "02 Sep 2024",
            mood: "🔥 Determined",
            description: "Built a Countdown Timer with user-set timers and alert functionality.",
            imageSrc: post4,
            linkTo: "https://time-91e5gayb1-wali-zafris-projects.vercel.app/",
            showGreeting: false
        },
        {
            date: "03 Sep 2024",
            mood: "🌦️ Curious",
            description: "Created a Weather Widget App using API to display current weather conditions.",
            imageSrc: post5,
            linkTo: "https://vercel.live/link/weather-widget-app-snowy.vercel.app/",
            showGreeting: false
        },
        {
            date: "04 Sep 2024",
            mood: "🎉 Joyful",
            description: "Designed a Birthday Wish App with customizable greetings and animations.",
            imageSrc: post6,
            linkTo: "https://vercel.live/link/birthday-wish-app-pied.vercel.app/",
            showGreeting: false
        },
        {
            date: "05 Sep 2024",
            mood: "🧠 Focused",
            description: "Developed a Number Guessing Game with user input validation and feedback.",
            imageSrc: post7,
            linkTo: "https://vercel.live/link/number-guessing-game-phi-gray.vercel.app/",
            showGreeting: false
        },
        {
            date: "06 Sep 2024",
            mood: "📐 Methodical",
            description: "Created a Simple Calculator App with basic arithmetic functionality.",
            imageSrc: post8,
            linkTo: "https://vercel.live/link/simple-calculator-app-eight.vercel.app/",
            showGreeting: false
        },
        {
            date: "07 Sep 2024",
            mood: "⏰ Timely",
            description: "Built a Digital Clock App with real-time clock display.",
            imageSrc: post9,
            linkTo: "https://vercel.live/link/digital-clock-app-pi.vercel.app/",
            showGreeting: false
        },
        {
            date: "08 Sep 2024",
            mood: "😂 Amused",
            description: "Developed a Random Joke Generator App to fetch jokes from an API.",
            imageSrc: post10,
            linkTo: "https://vercel.live/link/random-joke-generator-app-two.vercel.app/",
            showGreeting: false
        },
        {
            date: "09 Sep 2024",
            mood: "🎨 Creative",
            description: "Created a Color Picker App to choose and display colors in various formats.",
            imageSrc: post11,
            linkTo: "https://vercel.live/link/color-picker-app-iota.vercel.app/",
            showGreeting: false
        },
        {
            date: "10 Sep 2024",
            mood: "💰 Practical",
            description: "Built a Tip Calculator App to calculate tips based on bill amounts.",
            imageSrc: post12,
            linkTo: "https://vercel.live/link/tip-calculator-app-indol.vercel.app/",
            showGreeting: false
        },
        {
            date: "11 Sep 2024",
            mood: "🔐 Secure",
            description: "Developed a Password Generator App to create strong passwords.",
            imageSrc: post13,
            linkTo: "https://vercel.live/link/password-generator-neon-nu-13.vercel.app/",
            showGreeting: false
        },
        {
            date: "12 Sep 2024",
            mood: "📊 Health-Conscious",
            description: "Created a BMI Calculator App to compute body mass index.",
            imageSrc: post14,
            linkTo: "https://vercel.live/link/bmi-calculator-nu-nine.vercel.app/",
            showGreeting: false
        },
        {
            date: "13 Sep 2024",
            mood: "🔄 Flexible",
            description: "Built a Unit Converter App for converting between various measurement units.",
            imageSrc: post15,
            linkTo: "https://vercel.live/link/unit-converter-app-weld.vercel.app/",
            showGreeting: false
        },
        {
            date: "14 Sep 2024",
            mood: "💻 Informative",
            description: "Developed an HTML Previewer App to visualize HTML code in real-time.",
            imageSrc: post16,
            linkTo: "https://vercel.live/link/html-previewer-app.vercel.app/",
            showGreeting: false
        },
        {
            date: "15 Sep 2024",
            mood: "⏲️ Productive",
            description: "Created a Pomodoro Timer App to manage work and break sessions.",
            imageSrc: post17,
            linkTo: "https://vercel.live/link/pomodoro-timer-app-five.vercel.app/",
            showGreeting: false
        },
        {
            date: "16 Sep 2024",
            mood: "💵 Organized",
            description: "Built an Expense Tracker App to manage and track personal expenses.",
            imageSrc: post18,
            linkTo: "https://vercel.live/link/expense-tracker-app-teal-ten.vercel.app/",
            showGreeting: false
        },
        {
            date: "17 Sep 2024",
            mood: "🎬 Cinematic",
            description: "Developed a Movie Search App to fetch and display movie details.",
            imageSrc: post19,
            linkTo: "https://vercel.live/link/movie-search-app-five-opal.vercel.app/",
            showGreeting: false
        },
        {
            date: "18 Sep 2024",
            mood: "😂 Fun",
            description: "Created a Meme Generator App to customize and share memes.",
            imageSrc: post20,
            linkTo: "https://vercel.live/link/meme-generator-app-seven.vercel.app/",
            showGreeting: false
        },
        {
            date: "19 Sep 2024",
            mood: "💱 Global",
            description: "Built a Currency Converter App to convert between different currencies.",
            imageSrc: post21,
            linkTo: "https://vercel.live/link/currency-converter-app-pied.vercel.app/",
            showGreeting: false
        },
        {
            date: "20 Sep 2024",
            mood: "👤 Profile-Driven",
            description: "Developed a GitHub Profile Viewer App to fetch user profiles and repositories.",
            imageSrc: post22,
            linkTo: "https://vercel.live/link/github-profile-viewer-app-eight.vercel.app/",
            showGreeting: false
        },
        {
            date: "21 Sep 2024",
            mood: "📝 Reflective",
            description: "Created a Notes App to manage and organize personal notes.",
            imageSrc: post23,
            linkTo: "https://vercel.live/link/notes-app-beryl-pi.vercel.app/",
            showGreeting: false
        },
        {
            date: "22 Sep 2024",
            mood: "🍳 Culinary",
            description: "Built a Recipe Search App to find and display recipes by ingredients.",
            imageSrc: post24,
            linkTo: "https://vercel.live/link/recipe-search-app-tawny.vercel.app/",
            showGreeting: false
        },
        {
            date: "23 Sep 2024",
            mood: "✍️ Analytical",
            description: "Developed a Word Counter App to count words and characters in text.",
            imageSrc: post25,
            linkTo: "https://vercel.live/link/word-counter-app-tau.vercel.app/",
            showGreeting: false
        },
        {
            date: "24 Sep 2024",
            mood: "🎞️ Visual",
            description: "Created an Image Slider App to showcase images with transition effects.",
            imageSrc: post26,
            linkTo: "https://vercel.live/link/image-slider-app-delta.vercel.app/",
            showGreeting: false
        },
        {
            date: "25 Sep 2024",
            mood: "🧠 Quizzy",
            description: "Built a Quiz App to test knowledge with multiple-choice questions.",
            imageSrc: post27,
            linkTo: "https://vercel.live/link/quiz-app-six-blond.vercel.app/",
            showGreeting: false
        },
        {
            date: "26 Sep 2024",
            mood: "⏳ Timed",
            description: "Developed a Stop Watch App for tracking elapsed time.",
            imageSrc: post28,
            linkTo: "https://vercel.live/link/stop-watch-app-lilac.vercel.app/",
            showGreeting: false
        },
        {
            date: "27 Sep 2024",
            mood: "🐍 Playful",
            description: "Created a Snake Game App for entertainment and skill development.",
            imageSrc: post29,
            linkTo: "https://vercel.live/link/snake-game-app-nu.vercel.app/",
            showGreeting: false
        },
        {
            date: "28 Sep 2024",
            mood: "🔗 Connected",
            description: "Built a URL Shortener App to create short links for easy sharing.",
            imageSrc: post30,
            linkTo: "https://vercel.live/link/url-shortener-app-eosin.vercel.app/",
            showGreeting: false
        },
        {
            date: "29 Sep 2024",
            mood: "✅ Organized",
            description: "Developed a Todo List App to manage daily tasks effectively.",
            imageSrc: post31,
            linkTo: "https://vercel.live/link/todo-list-app-seven-beryl.vercel.app/",
            showGreeting: false
        },
        {
            date: "30 Sep 2024",
            mood: "🎶 Melodic",
            description: "Created an Audio Player App to play and manage audio files.",
            imageSrc: post33,
            linkTo: "https://vercel.live/link/audio-player-app-swart.vercel.app/",
            showGreeting: false
        }
    ];

    // State to track the active tab, with "feed" as the default
    const [activeTab, setActiveTab] = useState("feed");

    // Handler to update active tab
    const handleTabChange = (value: string) => {
        setActiveTab(value);
    };

    return (
        <Tabs defaultValue="feed" className="w-full flex justify-center items-center flex-col container-sm">
            <TabsList className="w-full flex items-center">
                <TabsTrigger
                    className={`navigation w-1/3 ${activeTab === "feed" ? "active-nav" : ""}`}
                    value="feed"
                    onClick={() => handleTabChange("feed")}
                >
                    Feed
                </TabsTrigger>
                <TabsTrigger
                    className={`navigation w-1/3 ${activeTab === "about" ? "active-nav" : ""}`}
                    value="about"
                    onClick={() => handleTabChange("about")}
                >
                    About
                </TabsTrigger>
                <TabsTrigger
                    className={`navigation w-1/3 ${activeTab === "content" ? "active-nav" : ""}`}
                    value="content"
                    onClick={() => handleTabChange("content")}
                >
                    Content
                </TabsTrigger>
            </TabsList>
            <TabsContent value="feed">
                {cardData.map((card, index) => (
                    <ReusableCard
                        key={index}
                        date={card.date}
                        mood={card.mood}
                        description={card.description}
                        imageSrc={card.imageSrc}
                        linkTo={card.linkTo} // Make sure to pass linkTo to ReusableCard
                        showGreeting={card.showGreeting}
                    />
                ))}
            </TabsContent>
            <TabsContent value="about"><About /></TabsContent>
            <TabsContent value="content"><Content /></TabsContent>
        </Tabs>
    );
}
