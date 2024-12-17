"use client"

import * as React from "react"
import Image from "next/image"
import { urlFor } from "@/lib/client"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import Autoplay from "embla-carousel-autoplay"

interface HeroCarouselProps {
  slides: {
    title: string
    description: string
    image: any
    buttonText?: string
    buttonLink?: string
  }[]
}

export default function HeroCarousel({ slides }: HeroCarouselProps) {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  )

  return (
    <section className="w-full">
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="relative h-[600px] w-full">
                <Image
                  src={urlFor(slide.image).width(700).height(700).url()}
                  alt={slide.title}
                  width={700}
                  height={700}
                  className="custom-image"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="container px-4 text-center text-white">
                    <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                      {slide.title}
                    </h1>
                    <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-200">
                      {slide.description}
                    </p>
                    {slide.buttonText && slide.buttonLink && (
                      <Button
                        size="lg"
                        asChild
                        className="bg-white text-gray-900 hover:bg-gray-100"
                      >
                        <a href={slide.buttonLink}>{slide.buttonText}</a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </section>
  )
} 