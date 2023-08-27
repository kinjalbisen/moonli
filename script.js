var tl = gsap.timeline();

tl.from("#nav img, #part2 h3, #nav button",{
    y:-100,
    duration:1,
    delay:1,
    opacity:0,
    stagger:0.5,
})
tl.from("#page1 h1, #page1 p,#i1 img, #i2 img",{
    y:100,
    opacity:0,
    stagger:1,
    
})
gsap.to("#page1 i", {
    y:"10px",
    repeat:-1,
    yoyo:true,
    duration:0.5,

})
// gsap.to("#network",{
//     opacity:0,
//     scrollTrigger:{            
//         trigger:"#network",
//         scroller:"#page2",
//         markers:true,
//         start:"top 150%",
//         end:"top 20%",
//         scrub:2,
//         pin:true,
//     }    
// })
gsap.to("#page2 .box",{
    x:-50,
    scrollTrigger:{            
        trigger:".box",
        scroller:"#page2",
        start:"left 20%",
        end:"right -10%",
        scrub:2,
        // pin:true,
    }    
})

gsap.from("#page3 h1, #page3 span",{
    scale:0,
    opacity:0,
    duration:1,
    stagger:0.5,

    scrollTrigger:{
        trigger:"#page3 h1, #page3 span",
        scroller:"body",
        start:"top 150%",
        end:"top 20%",
        scrub:2,
    }
})
gsap.from("#u1",{
    x:"-100%",
    duration:1,
    opacity:0,
    scrollTrigger:{
        trigger:"#u1",
        scroller:"body",
        start:"top 150%",
        end:"top 20%",
        scrub:2,
    }
})
gsap.from("#d1",{
    y:-100,
    duration:1,
    opacity:0,
    scrollTrigger:{
        trigger:"#d1",
        scroller:"body",
        start:"top 150%",
        end:"top 20%",
        scrub:2,
    }
})
gsap.from("#u2",{
    x:"100%",
    duration:1,
    opacity:0,
    scrollTrigger:{
        trigger:"#u2",
        scroller:"body",
        start:"top 150%",
        end:"top 20%",
        scrub:2,
    }
})
gsap.from("#page4 h1, #page4 span",{
    scale:0,
    opacity:0,
    duration:1,
    stagger:0.5,

    scrollTrigger:{
        trigger:"#page4 h1, #page4 span",
        scroller:"body",
        start:"top 150%",
        end:"top 20%",
        scrub:2,
    }
})
gsap.from("#reliability",{
    x:"-100%",
    duration:1.5,
    opacity:0,
    scrollTrigger:{
        trigger:"#reliability",
        scroller:"body",
        start:"top 90%",
        end:"top 20%",
        scrub:2,
    }
})
gsap.from("#picture img",{
    scale:2,
    opacity:0,
    duration:1,

    scrollTrigger:{
        trigger:"#picture img",
        scroller:"body",
        start:"top 90%",
        end:"top 20%",
        scrub:2,
    }
})
gsap.from("#l6",{
    y:100,
    duration:1,
    opacity:0,
    scrollTrigger:{
        trigger:"#l6",
        scroller:"body",
        start:"top 90%",
        end:"top 20%",
        scrub:2,
    }
})
gsap.from("#image",{
    duration:2,
    opacity:0,
    scale:2,
    scrollTrigger:{
        trigger:"#image",
        scroller:"body",
        start:"top 50%",
        end:"top 90%",
        scrub:2,
    }
})