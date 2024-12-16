// components/HeroCarousel.jsx
"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { urlFor } from '@/sanity/lib/client';

export default function HeroCarousel({ slides }) {
  return (
    <div className="relative w-full h-[600px]">
      <Carousel className="w-full">
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="relative w-full h-auto">
                <Image
                  src={urlFor(slide.image).url()}
                  alt="image"
                  width={800} 
                  height={800}
                   className="custom-image"
                  priority
                />
                <div className="absolute inset-0 bg-black/50">
                  <div className="container mx-4 h-full flex items-center">
                    <div className="max-w-xl text-white">
                      <h1 className="text-5xl font-bold mb-4">
                        {slide.title}
                      </h1>
                      <p className="text-lg mb-8">
                        {slide.description}
                      </p>
                      {slide.buttonText && (
                        <a
                          href={slide.buttonLink}
                          className="bg-white text-black px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition"
                        >
                          {slide.buttonText}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2" />
        <CarouselNext className="absolute right-4 top-1/2" />
      </Carousel>
    </div>
  );
}