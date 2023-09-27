
var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
  blur.style.left = dets.x - 250 + "px";
  blur.style.top = dets.y - 250 + "px";
});

var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function(elem){
    crsr.addEventListener("mouseenter",function(){
        crsr.style.scale = 3;
        crsr.style.border = "1px solid #fff";
        crsr.style.backgroundColor = "transparent";
    })
    crsr.addEventListener("mouseleave",function(){
        crsr.style.scale = 1;
        crsr.style.border = "0px solid #95c11e";
        crsr.style.backgroundColor = "#95c11e";
    })
})


gsap.to("#nav",{
    backgroundColor:"#000",
    height:"95px",
    duration:0.6,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1

    }
}) 

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -27%",
        end:"top -75%",
        scrub:2,

    }
})
gsap.from("#about-us img,#about-us-in",{
    y:90,
    opacity:0,
    duration:1,
    // stagger:1,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 66%",
        scrub:1.5

    }
})
gsap.from(".card",{
    // x:-90,
    opacity:0,
    duration:1,
    // stagger:0.1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 66%",
        scrub:1.5  
    }
})
gsap.from("#colon1",{
    x:-75,
    y:-75,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 50%",
        end:"top 47%",
        scrub:4
    }
})
gsap.from("#colon2",{
    x:75,
    y:75,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 50%",
        end:"top 47%",
        scrub:4
    }
})
gsap.from("#page4 h1",{
    y:55,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        start:"top 75%",
        end:"top 70%",
        scrub:3
    }
})