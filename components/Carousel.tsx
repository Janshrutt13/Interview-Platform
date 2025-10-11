"use client";

import { useEffect, useState, useRef, useCallback } from 'react';
import { motion, PanInfo, useMotionValue, useTransform } from 'motion/react';
import React, { JSX } from 'react';

// replace icons with your own if needed
import { FiCircle, FiCode, FiFileText, FiLayers, FiLayout } from 'react-icons/fi';
export interface CarouselItem {
  title: string;
  description: string;
  id: number;
  icon: React.ReactNode;
}

export interface CarouselProps {
  items?: CarouselItem[];
  baseWidth?: number;
  autoplay?: boolean;
  autoplayDelay?: number;
  pauseOnHover?: boolean;
  loop?: boolean;
  round?: boolean;
}

const DEFAULT_ITEMS: CarouselItem[] = [
  {
    title: 'Text Animations',
    description: 'Cool text animations for your projects.',
    id: 1,
    icon: <FiFileText className="h-[16px] w-[16px] text-white" />
  },
  {
    title: 'Animations',
    description: 'Smooth animations for your projects.',
    id: 2,
    icon: <FiCircle className="h-[16px] w-[16px] text-white" />
  },
  {
    title: 'Components',
    description: 'Reusable components for your projects.',
    id: 3,
    icon: <FiLayers className="h-[16px] w-[16px] text-white" />
  },
  {
    title: 'Backgrounds',
    description: 'Beautiful backgrounds and patterns for your projects.',
    id: 4,
    icon: <FiLayout className="h-[16px] w-[16px] text-white" />
  },
  {
    title: 'Common UI',
    description: 'Common UI components are coming soon!',
    id: 5,
    icon: <FiCode className="h-[16px] w-[16px] text-white" />
  }
];

const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;
const GAP = 16;
const SPRING_OPTIONS = { type: 'spring' as const, stiffness: 300, damping: 30 };

export default function Carousel({
  items = DEFAULT_ITEMS,
  baseWidth = 300,
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = false,
  loop = false,
  round = false
}: CarouselProps): JSX.Element {
  const containerPadding = 16;
  const itemWidth = baseWidth - containerPadding * 2;
  const trackItemOffset = itemWidth + GAP;

  const carouselItems = loop ? [...items, items[0]] : items;
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isResetting, setIsResetting] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (pauseOnHover && containerRef.current) {
      const container = containerRef.current;
      const handleMouseEnter = () => setIsHovered(true);
      const handleMouseLeave = () => setIsHovered(false);
      container.addEventListener('mouseenter', handleMouseEnter);
      container.addEventListener('mouseleave', handleMouseLeave);
      return () => {
        container.removeEventListener('mouseenter', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [pauseOnHover]);

  const autoAdvance = useCallback(() => {
    setCurrentIndex(prev => (prev + 1) % items.length);
  }, [items.length]);

  useEffect(() => {
    if (!autoplay) return;
    if (pauseOnHover && isHovered) return;
    
    const timer = setInterval(autoAdvance, autoplayDelay);
    return () => clearInterval(timer);
  }, [autoplay, autoplayDelay, isHovered, pauseOnHover, autoAdvance]);

  const effectiveTransition = isResetting ? { duration: 0 } : SPRING_OPTIONS;

  const handleAnimationComplete = () => {
    if (loop && currentIndex === carouselItems.length - 1) {
      setIsResetting(true);
      x.set(0);
      setCurrentIndex(0);
      setTimeout(() => setIsResetting(false), 50);
    }
  };

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo): void => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    if (offset < -DRAG_BUFFER || velocity < -VELOCITY_THRESHOLD) {
      if (loop && currentIndex === items.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setCurrentIndex(prev => Math.min(prev + 1, carouselItems.length - 1));
      }
    } else if (offset > DRAG_BUFFER || velocity > VELOCITY_THRESHOLD) {
      if (loop && currentIndex === 0) {
        setCurrentIndex(items.length - 1);
      } else {
        setCurrentIndex(prev => Math.max(prev - 1, 0));
      }
    }
  };

  const dragProps = loop
    ? {}
    : {
        dragConstraints: {
          left: -trackItemOffset * (carouselItems.length - 1),
          right: 0
        }
      };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full flex items-center justify-center overflow-visible"
      style={{ width: '100%', maxWidth: `${baseWidth}px`, height: '300px' }}
    >
      <div className="flex items-center justify-center gap-2 sm:gap-4 lg:gap-8">
        {/* Previous card */}
        <motion.div
          className="relative flex flex-col items-center justify-center bg-gradient-to-br from-purple-900/20 to-black/40 border border-purple-500/20 rounded-2xl p-3 sm:p-6 cursor-pointer hidden sm:flex"
          style={{ width: '120px', height: '180px' }}
          animate={{ opacity: 0.6, scale: 0.85, rotateY: -15 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          onClick={() => setCurrentIndex(prev => (prev - 1 + items.length) % items.length)}
        >
          {items[(currentIndex - 1 + items.length) % items.length] && (
            <>
              <div className="text-2xl sm:text-4xl mb-2 sm:mb-4">{items[(currentIndex - 1 + items.length) % items.length].icon}</div>
              <div className="text-purple-300 text-lg sm:text-2xl font-bold mb-1 sm:mb-2">{(currentIndex - 1 + items.length) % items.length + 1}</div>
              <h3 className="text-white text-sm sm:text-lg font-semibold text-center mb-1 sm:mb-2">{items[(currentIndex - 1 + items.length) % items.length].title}</h3>
              <p className="text-gray-300 text-xs sm:text-sm text-center">{items[(currentIndex - 1 + items.length) % items.length].description}</p>
            </>
          )}
        </motion.div>

        {/* Current card */}
        <motion.div
          className="relative flex flex-col items-center justify-center bg-gradient-to-br from-purple-800/30 to-black/60 border border-purple-400/30 rounded-2xl p-4 sm:p-8 shadow-2xl"
          style={{ width: '240px', height: '280px' }}
          animate={{ scale: 1, opacity: 1, rotateY: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {items[currentIndex] && (
            <>
              <div className="text-3xl sm:text-5xl mb-3 sm:mb-6">{items[currentIndex].icon}</div>
              <div className="text-purple-200 text-2xl sm:text-3xl font-bold mb-2 sm:mb-4">{currentIndex + 1}</div>
              <h3 className="text-white text-lg sm:text-xl font-bold text-center mb-2 sm:mb-4">{items[currentIndex].title}</h3>
              <p className="text-gray-200 text-sm sm:text-base text-center">{items[currentIndex].description}</p>
            </>
          )}
        </motion.div>

        {/* Next card */}
        <motion.div
          className="relative flex flex-col items-center justify-center bg-gradient-to-br from-purple-900/20 to-black/40 border border-purple-500/20 rounded-2xl p-3 sm:p-6 cursor-pointer hidden sm:flex"
          style={{ width: '120px', height: '180px' }}
          animate={{ opacity: 0.6, scale: 0.85, rotateY: 15 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          onClick={() => setCurrentIndex(prev => (prev + 1) % items.length)}
        >
          {items[(currentIndex + 1) % items.length] && (
            <>
              <div className="text-2xl sm:text-4xl mb-2 sm:mb-4">{items[(currentIndex + 1) % items.length].icon}</div>
              <div className="text-purple-300 text-lg sm:text-2xl font-bold mb-1 sm:mb-2">{(currentIndex + 1) % items.length + 1}</div>
              <h3 className="text-white text-sm sm:text-lg font-semibold text-center mb-1 sm:mb-2">{items[(currentIndex + 1) % items.length].title}</h3>
              <p className="text-gray-300 text-xs sm:text-sm text-center">{items[(currentIndex + 1) % items.length].description}</p>
            </>
          )}
        </motion.div>
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {items.map((_, index) => (
          <motion.div
            key={index}
            className={`h-2 w-2 rounded-full cursor-pointer transition-colors duration-300 ${
              currentIndex === index ? 'bg-purple-400' : 'bg-purple-800/40'
            }`}
            animate={{ scale: currentIndex === index ? 1.3 : 1 }}
            onClick={() => setCurrentIndex(index)}
            transition={{ duration: 0.2 }}
          />
        ))}
      </div>
    </div>
  );
}