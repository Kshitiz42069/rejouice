function logoScroll(){
    gsap.registerPlugin(ScrollTrigger);
    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
}
logoScroll()

function cursorEffect(){
    var page1Content = document.querySelector(".page1-content")
    var cursor = document.querySelector(".cursor")

    page1Content.addEventListener("mousemove",function(dets){
        gsap.to(cursor,{
            x:dets.x ,
            y:dets.y
        })
    })

    page1Content.addEventListener("mouseenter",function(){
        gsap.to(cursor,{
            scale:1,
            opacity:1
        })
    })

    page1Content.addEventListener("mouseleave",function(){
        gsap.to(cursor,{
            scale:0,
            opacity:0
        })
    })
}
cursorEffect()

function page2animation(){
    gsap.from(".elem h1",{
        y:120,
        stagger:0.2,
        duration:1,
        scrollTrigger:{
            trigger: ".page2",
            scroller: "#main",
            start: "top 40%",
            end: "top 37%",
            scrub: 2
        }
    })
}
page2animation()

function page4animation(){
    gsap.from(".elem1 h1",{
        y:120,
        stagger:0.2,
        duration:1,
        scrollTrigger:{
            trigger: ".page4",
            scroller: "#main",
            start: "top 40%",
            end: "top 37%",
            scrub: 2
        }
    })
}
page4animation()

function page3animation(){
    gsap.from(".elem1 h2",{
        y:120,
        stagger:0.2,
        duration:1,
        scrollTrigger:{
            trigger: ".page3",
            scroller: "#main",
            start: "top 70%",
            end: "top 67%",
            scrub: 2
        }
    })
}
page3animation()

function cursor5Effect(){
    var page5 = document.querySelector(".page5")
    var cursor5 = document.querySelector(".cursor5")

    page5.addEventListener("mousemove",function(dets){ 
        gsap.to(cursor5,{
            x:dets.x ,
            y:dets.y
        })
    }) 

    page5.addEventListener("mouseenter",function(){
        gsap.to(cursor5,{
            scale:1,
            opacity:1
        })
    })

    page5.addEventListener("mouseleave",function(){
        gsap.to(cursor5,{
            scale:0,
            opacity:0
        })
    })
}
cursor5Effect()

function page6animation(){
    gsap.from(".elem2 h1",{
        y:120,
        stagger:0.2,
        duration:1,
        scrollTrigger:{
            trigger: ".page6",
            scroller: "#main",
            start: "top 40%",
            end: "top 37%",
            scrub: 2
        }
    })
}
page6animation()

function swiper(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 1800,
            disableOnInteraction: true,
        },
    });
}
swiper()

function loader(){
    var tl = gsap.timeline()
    tl.from("#loader h3",{
        x:40,
        opacity:0,
        duration:1,
        stagger:0.1
    })
    tl.to("#loader h3",{
        opacity:0,
        x:-40,
        duration:1,
        stagger:0.1
    })
    tl.to("#loader",{
        opacity:0
    })
    tl.from(".page1-content span",{
        y:100,
        opacity:0,
        stagger:0.1,
        duration:0.5,
        delay:-0.5
    })
    tl.to("#loader",{
        display:"none"
    })
}
loader()

function page8animation(){
    gsap.from(".elem1 h4",{
        y:120,
        stagger:0.2,
        duration:1,
        scrollTrigger:{
            trigger: ".page8",
            scroller: "#main",
            start: "top 70%",
            end: "top 67%",
            scrub: 2
        }
    })
}
page8animation()