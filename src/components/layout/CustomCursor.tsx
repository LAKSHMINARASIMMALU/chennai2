"use client";

import React, { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      
      if (cursorRef.current && followerRef.current) {
        cursorRef.current.style.transform = `translate3d(${clientX - 10}px, ${clientY - 10}px, 0)`;
        followerRef.current.style.transform = `translate3d(${clientX - 20}px, ${clientY - 20}px, 0)`;
      }
    };

    const onMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('button') || 
        target.closest('a') ||
        target.classList.contains('interactive')
      ) {
        setIsHovering(true);
      }
    };

    const onMouseLeave = () => {
      setIsHovering(false);
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onMouseEnter);
    document.addEventListener('mouseout', onMouseLeave);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseEnter);
      document.removeEventListener('mouseout', onMouseLeave);
    };
  }, []);

  return (
    <>
      <div 
        ref={cursorRef} 
        className={`custom-cursor ${isHovering ? 'scale-150 bg-primary opacity-50' : ''}`} 
      />
      <div 
        ref={followerRef} 
        className={`custom-cursor-follower ${isHovering ? 'scale-[2.5] border-primary bg-primary/10' : ''}`} 
      />
    </>
  );
};

export default CustomCursor;
