"use client";

import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
// Autoplay module
import "swiper/css/autoplay";

interface Feedback {
  id: number;
  icon: {
    alt: string;
    url: string;
  };
  text: string;
  author: string;
}

interface CustomerFeedbacksProps {
  feedbacks: Feedback[];
}

export default function CustomerFeedbacks({
  feedbacks,
}: CustomerFeedbacksProps) {
  return (
    <section className="customer-feedbacks container px-2 mx-auto my-24">
      <Swiper
        centeredSlides
        slidesPerView={3}
        loop
        autoplay
        modules={[Autoplay]}
      >
        {feedbacks.map(({ id, icon, text, author }) => (
          <SwiperSlide key={id}>
            <article className="flex flex-col justify-center p-8 my-8 mx-3 border border-slate-100 shadow rounded-lg max-w-md">
              <Image
                alt={icon.alt}
                src={icon.url}
                loading="lazy"
                width={24}
                height={24}
              />
              <p className="text-gray-500 py-6">{text}</p>
              <p className="text-black-900 font-bold">{author}</p>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
