"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
    image: "/work/1.png",
    category: "React Js",
    name: "E-commerce Website",
    description: "A simple e-commerce website built using React Js.",
    link: "/work/1",
    github: "https://github.com",
  },
  {
    image: "/work/2.png",
    category: "React Js",
    name: "E-commerce Website",
    description: "A simple e-commerce website built using React Js.",
    link: "/work/2",
    github: "https://github.com",
  },
  {
    image: "/work/3.png",
    category: "Next Js",
    name: "E-commerce Website",
    description: "A simple e-commerce website built using React Js.",
    link: "/work/3",
    github: "https://github.com",
  },
  {
    image: "/work/4.png",
    category: "Full Stack",
    name: "E-commerce Website",
    description: "A simple e-commerce website built using React Js.",
    link: "/work/4",
    github: "https://github.com",
  },
  {
    image: "/work/3.png",
    category: "Full Stack",
    name: "E-commerce Website",
    description: "A simple e-commerce website built using React Js.",
    link: "/work/5",
    github: "https://github.com",
  },
];

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        <div className="mx-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
            eius?
          </p>
          <Link href="/projects">
            <Button>All Projects</Button>
          </Link>
        </div>
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-[25%]">
          <Swiper
            className="h-[480px]"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            pagination={{ clickable: true }}
            modules={[Pagination]}
          >
            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
