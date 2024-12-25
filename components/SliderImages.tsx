"use client";
import { ReactElement } from "react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import AutoPlay from "embla-carousel-autoplay";

const ImagesSlider = [
  {
    id: 1,
    src: "/slider/banner_desktop_01.jpg",
    alt: "Slider 1",
  },
  {
    id: 2,
    src: "/slider/banner_desktop_01.jpg",
    alt: "Slider 2",
  },
  {
    id: 3,
    src: "/slider/SLIDE-3380x850-POLERAS.jpg",
    alt: "Slider 3",
  },
];

const SliderImages = ({}): ReactElement => {
  return (
    <Carousel
      plugins={[
        AutoPlay({
          delay: 4000,
        }),
      ]}
    >
      <CarouselContent>
        {ImagesSlider.map(({ id, src, alt }) => (
          <CarouselItem key={id}>
            <img src={src} alt={alt} className="w-full h-full object-cover" />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default SliderImages;
