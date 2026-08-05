import { useEffect } from "react";

export const useReveal = () => {
  useEffect(() => {

    const reveals = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(

      (entries)=>{

        entries.forEach((entry)=>{

          if(entry.isIntersecting){

            entry.target.classList.add("active");

          }

        })

      },

      {
        threshold:.15
      }

    )

    reveals.forEach(el=>observer.observe(el));

    return ()=>observer.disconnect();

  },[]);
};