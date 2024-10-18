"use client";

import { useState, ReactNode } from 'react';
import { Card } from "@/components/ui/card";
import Image, { StaticImageData } from 'next/image';
import Avatar from '../Images/Avatar.png';
import { Heart, Link as LinkIcon } from 'lucide-react';

// Define the props interface
interface ReusableCardProps {
  date: string;
  mood: string;
  description: ReactNode;
  imageSrc: string | StaticImageData; // Allow both string and StaticImageData types
  linkTo: string;
  showGreeting?: boolean;
}

export const ReusableCard = ({ date, mood, description, linkTo, imageSrc, showGreeting = true }: ReusableCardProps) => {
  // State to track if the heart icon is clicked
  const [isLiked, setIsLiked] = useState(false);

  // Toggle the liked state
  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="container-sm">
      <Card className="my-2 flex justify-start items-start gap-1 border-none w-full py-3 px-5 rounded-xl hover:bg-gray-800 cursor-pointer">
        <Image src={Avatar} className='avatar-post' alt="Dp" />
        <div>
          <div className="headings">
            <h4>Wali ✨ <span>• {date}</span></h4>
            <h5>{mood}</h5>
          </div>
          <div className="description my-2">
            {showGreeting && <p><span>Hello World!</span></p>}
            <p>{description}</p>
          </div>
          {/* Render Image */}
          <Image className="w-full rounded-xl" src={imageSrc} alt="Post Image" />
          <div className="flex w-full justify-end items-center gap-2 my-1">
            {/* Clickable Link Icon */}
            <a target='_blank' rel="noopener noreferrer" href={linkTo}>
              <LinkIcon className="w-4 text-gray-300" />
            </a>
            {/* Clickable Heart Icon with dynamic color */}
            <Heart
              className={`w-4 cursor-pointer ${isLiked ? 'text-red-500' : 'text-gray-300'}`}
              onClick={handleLikeClick}
            />
          </div>
        </div>
      </Card>
    </div>
  );
};
