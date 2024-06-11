'use client'
import Services from "./components/Services";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { useEffect } from "react";
import Menu from "./components/Menu";


export default function Home() {
  useEffect(() => {
    let services = document.querySelector("#services")
    let menu = document.querySelector("#menu")
    // let gallery = document.querySelector(".gallery")
    // let hopes = document.querySelector(".hopes")

    window.onscroll = () => {
      if (window.scrollY >= services.offsetTop - 600) {
        services.classList.remove("opacity-0")
        services.classList.remove("translate-y-10")
        for (let index = 0; index < services.children[2].children.length; index++) {
          services.children[2].children[index].classList.remove("opacity-0")
          services.children[2].children[index].classList.remove("translate-y-10")
        }
      }
      if (window.scrollY >= menu.offsetTop - 600) {
        menu.classList.remove("opacity-0")
        menu.classList.remove("translate-y-10")
      }
      // if (window.scrollY >= gallery.offsetTop - 600) {
      //   gallery.classList.remove("opacity-0")
      //   gallery.classList.remove("translate-y-10")
      //   for (let index = 0; index < gallery.children[2].children.length; index++) {
      //     gallery.children[2].children[index].classList.remove("opacity-0")
      //     gallery.children[2].children[index].classList.remove("translate-y-10")
      //   }
      // }
      // if (window.scrollY >= hopes.offsetTop - 600) {
      //   hopes.classList.remove("opacity-0")
      //   hopes.classList.remove("translate-y-10")
      // }
    }
    let isDragStart = false, prevPageX, PrevScrollLeft
    let leftBtn = document.querySelector(".left-btn")
    let rightBtn = document.querySelector(".right-btn")
    let slider = document.querySelector(".slider")
    slider.children[0].style.cssText= `width: ${slider.scrollWidth}px; transform: translateX(-${slider.scrollWidth - slider.clientWidth}px);`
    console.log(slider.scrollWidth);
    let firstImageWidth = slider.children[1].children[0].children[0].clientWidth
    rightBtn.onclick = () => {
        slider.scrollLeft += firstImageWidth + (slider.children[0].clientWidth * .1)
    }
    leftBtn.onclick = () => {
      slider.scrollLeft -= firstImageWidth + (slider.children[0].clientWidth * .1)
    }
    slider.addEventListener("mousemove", (e) => {
      if (!isDragStart) return;
      e.preventDefault();
      slider.scrollLeft = PrevScrollLeft - e.pageX + prevPageX
    })

    slider.addEventListener("mousedown", (e) => {
      isDragStart = true
      prevPageX = e.pageX
      PrevScrollLeft = slider.scrollLeft
      slider.classList.add("slider-grabbing")
    })

    slider.addEventListener("mouseup", (e) => {
      isDragStart = false
      slider.classList.remove("slider-grabbing")
    })
  
}, [])
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <Menu />
    </div>
  );
}

