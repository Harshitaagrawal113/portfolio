document.addEventListener("DOMContentLoaded", function () {
    const lenis = new Lenis();

    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
    gsap.registerPlugin(ScrollTrigger)

    gsap.from('main', {
        y: 50,
        opacity: 0,
        duration: .9,
        delay: .3,
        stagger: .2,
    })

    gsap.from('.hp-logo', {
        x: -50,
        opacity: 0,
        duration: .6,
        delay: .3,
        stagger: .2,
    })






    gsap.from('.hp-options', {
        x: 50,
        opacity: 0,
        duration: .6,
        delay: .3,
        stagger: .6,
    })

    gsap.from('.markey-text h1', {
        x: 60,
        y: 20,
        opacity: 0,
        duration: .9,
        delay: .7,
        stagger: .2,
    })

    gsap.from('.hp-card-text p', {
        x: 60,
        opacity: 0,
        duration: .9,
        delay: .7,
        stagger: .2,
    })



    let hr = document.querySelector(".hp-work-data-right img")
    gsap.to(hr, {
        rotation: 360, // Rotates 360 degrees
        ease: "none",  // Keeps the rotation speed consistent
        scrollTrigger: {
            // Starts when this element enters the viewport
            start: "top top",             // When the top of the container hits the top of the viewport
            end: "bottom bottom",         // When the bottom of the container leaves the viewport
            scrub: true,                  // Links the animation directly to the scrollbar
            pin: true                     // Optional: Pins the image in place while it rotates
        }
    });


    let tanubhaiii = document.querySelector(".markey-socials h1")
    gsap.from(tanubhaiii, {
        xPercent: -90,
        ease: "none",  // Keeps the rotation speed consistent
        scrollTrigger: {
            // Starts when this element enters the viewport
            start: "center 50%",             // When the top of the container hits the top of the viewport
            end: "95% bottom",         // When the bottom of the container leaves the viewport
            scrub: true,                  // Links the animation directly to the scrollbar
            stagger: 1                   // Optional: Pins the image in place while it rotates
        }
    });

    function dott() {
        let field = document.querySelector("body")
        let xray = document.querySelector(".xray")
        let blog = document.querySelector(".hp-card-img")
        let text = document.querySelector(".hp-card-text")
         let sec = document.querySelector(".hp-more-abt")
          let videos = document.querySelectorAll(".card-container-right-img video")

        field.addEventListener("mousemove", function (position) {

            gsap.to(".dot", {
                x: position.x,
                y: position.y,


            })
            


            

            xray.addEventListener("mouseenter", function () {
                gsap.to(".dot", {
                    scale: 3,
                    duration:.8,
                    mixBlendMode: "exclusion"
                })


            })
            videos.forEach(videoo => {
                videoo.addEventListener("mouseenter", function () {
                gsap.to(".dot", {
                    scale: 3,  
                    backgroundColor:"#fff"
                })
                gsap.to(".dot svg", {
                    scale:1,
                })


            })
                 videoo.addEventListener("mouseleave", function () {
                gsap.to(".dot", {
                    scale: 1,
                      backgroundColor:"#000",
                    mixBlendMode: "unset"
                })
                gsap.to(".dot svg", {
                    scale:0,
                })

            })
            });
            
            xray.addEventListener("mouseleave", function () {
                gsap.to(".dot", {
                    scale: 1,
                     
                    mixBlendMode: "unset"
                })
            })
            blog.addEventListener("mouseenter", function () {
                gsap.to(".dot", {

                    background: "#fff"
                })

            })
            blog.addEventListener("mouseleave", function () {
                gsap.to(".dot", {

                    background: "black"
                })

            })
            text.addEventListener("mouseenter", function () {
                gsap.to(".dot", {
                    scale: 3,
                   
                    mixBlendMode: "exclusion"

                })

            })
            text.addEventListener("mouseleave", function () {
                gsap.to(".dot", {
                    scale: 1,
                    
                    mixBlendMode: "unset"

                })

            })
        })
    }

    dott()






    let hi = document.querySelector(".hp-footer")
    gsap.to("body", {
        backgroundColor: "black",

        scrollTrigger: {
            trigger: ".hp-focus",
            start: "top top",
            end: "bottom center",
            scrub: 1,


        }
    })
});


// // @media only screen and (max-width: 1199px) and (min-width: 992px) {
//     .custom-container {
//         width: 80%;
//     }

//     .hero-section {
//         min-height: 30vh;
//     }

// }

// @media only screen and (max-width: 1450px) and (min-width: 1200px) {}

// @media only screen and (max-width: 1750px) and (min-width: 1451px) {}

// @media only screen and (max-width: 1950px) and (min-width: 1751px) {}
// @media only screen and (min-width: 1950px) {
//     .custom-container {