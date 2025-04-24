"use client"; 
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronDown } from 'lucide-react';

export default function Nav() {
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [isPastPapersOpen, setIsPastPapersOpen] = useState(false);
  const [isLocalOpen, setIsLocalOpen] = useState(false);
  const [isEdexcelOpen, setIsEdexcelOpen] = useState(false);
  const [isCambridgeOpen, setIsCambridgeOpen] = useState(false);
  const router = useRouter(); 

  const handleNavigation = (path) => {
    router.push(path); 
    setIsCoursesOpen(false);
    setIsPastPapersOpen(false);
  };

  return (
    <nav className="relative flex justify-between items-center px-8 py-4 shadow-md bg-gradient-to-r from-green-600 via-black to-red-700 text-white">
      <div className="flex items-center space-x-5">
        <img src="/images/logo.png" alt="Logo" className="h-20 w-20" />
        <span className="text-4xl font-bold tracking-wide text-white">Institute of Alexandria</span>
      </div>
      <ul className="flex space-x-8 text-xl font-semibold">
        <li className="hover:text-green-400 transition duration-300 ease-in-out transform hover:scale-105">
          <Link href="/">Home</Link>
        </li>

        {/* Courses Dropdown */}
        <li className="relative group">
          <button 
            className="flex items-center gap-1 hover:text-green-400 transition-all duration-300 ease-in-out transform hover:scale-105"
            onClick={() => setIsCoursesOpen(!isCoursesOpen)}
          >
            Courses <ChevronDown size={16} />
          </button>
          {isCoursesOpen && (
            <ul className="absolute left-0 mt-2 bg-white text-black shadow-xl rounded-lg w-48 py-2 z-50 transition-all duration-200 ease-in-out">
              <li className="px-4 py-3 hover:bg-green-100 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer" onClick={() => handleNavigation('/courses/ages-10-14')}>Ages 10-14</li>
              <li className="px-4 py-3 hover:bg-green-100 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer" onClick={() => handleNavigation('/courses/ages-14-18')}>Ages 14-18</li>
              <li className="px-4 py-3 hover:bg-green-100 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer" onClick={() => handleNavigation('/courses')}>Above 18</li>
            </ul>
          )}
        </li>

        {/* Past Papers Dropdown */}
        <li className="relative group">
          <button 
            className="flex items-center gap-1 hover:text-green-400 transition-all duration-300 ease-in-out transform hover:scale-105"
            onClick={() => setIsPastPapersOpen(!isPastPapersOpen)}
          >
            Past Papers <ChevronDown size={16} />
          </button>
          {isPastPapersOpen && (
            <ul className="absolute left-0 mt-2 bg-white text-black shadow-xl rounded-lg w-48 py-2 z-50 transition-all duration-200 ease-in-out">
              {/* Local Dropdown */}
              <li className="relative">
                <button
                  className="w-full text-left px-4 py-3 hover:bg-green-100 transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
                  onClick={() => setIsLocalOpen(!isLocalOpen)}
                >
                  Local <ChevronDown size={16} />
                </button>
                {isLocalOpen && (
                  <ul className="absolute left-full top-0 mt-2 bg-white text-black shadow-xl rounded-lg w-48 py-2 z-50 transition-all duration-200 ease-in-out">
                    <li className="px-4 py-3 hover:bg-green-100 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer" onClick={() => handleNavigation('/pastPapers')}>OL</li>
                    <li className="px-4 py-3 hover:bg-green-100 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer" onClick={() => handleNavigation('/pastPapers')}>AL</li>
                  </ul>
                )}
              </li>

              {/* Edexcel Dropdown */}
              <li className="relative">
                <button
                  className="w-full text-left px-4 py-3 hover:bg-green-100 transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
                  onClick={() => setIsEdexcelOpen(!isEdexcelOpen)}
                >
                  Edexcel <ChevronDown size={16} />
                </button>
                {isEdexcelOpen && (
                  <ul className="absolute left-full top-0 mt-2 bg-white text-black shadow-xl rounded-lg w-48 py-2 z-50 transition-all duration-200 ease-in-out">
                    <li className="px-4 py-3 hover:bg-green-100 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer" onClick={() => handleNavigation('/pastPapers')}>OL</li>
                    <li className="px-4 py-3 hover:bg-green-100 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer" onClick={() => handleNavigation('/pastPapers')}>AS</li>
                    <li className="px-4 py-3 hover:bg-green-100 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer" onClick={() => handleNavigation('/pastPapers')}>A2</li>
                  </ul>
                )}
              </li>

              {/* Cambridge Dropdown */}
              <li className="relative">
                <button
                  className="w-full text-left px-4 py-3 hover:bg-green-100 transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
                  onClick={() => setIsCambridgeOpen(!isCambridgeOpen)}
                >
                  Cambridge <ChevronDown size={16} />
                </button>
                {isCambridgeOpen && (
                  <ul className="absolute left-full top-0 mt-2 bg-white text-black shadow-xl rounded-lg w-48 py-2 z-50 transition-all duration-200 ease-in-out">
                    <li className="px-4 py-3 hover:bg-green-100 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer" onClick={() => handleNavigation('/pastPapers')}>OL</li>
                    <li className="px-4 py-3 hover:bg-green-100 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer" onClick={() => handleNavigation('/pastPapers')}>AS</li>
                    <li className="px-4 py-3 hover:bg-green-100 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer" onClick={() => handleNavigation('/pastPapers')}>A2</li>
                  </ul>
                )}
              </li>
            </ul>
          )}
        </li>

        <li className="hover:text-green-400 transition duration-300 ease-in-out transform hover:scale-105">
          <Link href="/teacherPanel">Teacher Panel</Link>
        </li>
        <li className="hover:text-green-400 transition duration-300 ease-in-out transform hover:scale-105">
          <Link href="/aboutUs">About Us</Link>
        </li>
      </ul>
    </nav>
  );
}
