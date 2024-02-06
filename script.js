function Locomotive()
{
gsap.registerPlugin(ScrollTrigger);


const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".container"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".container", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".container").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
Locomotive()
function navbar (){
  var  flag = 0; // Use let to declare the flag variable

  var navmenu = document.querySelector(".navmenu");
  var menuabr = document.querySelector(".menuar");
  var lines = document.querySelector(".lines");
 navmenu.addEventListener("click", function() { 
  if (flag == 0) { // Use the equality operator here
    
      gsap.to(".menubar", {
        y:"100%",
        duration: 0.5,
        ease: "power4",
      });
      gsap.to("#rightnav",
      {
        opacity:0,
        display:"none",
        ease:"power4"
      })
      gsap.to(".menu", {
        opacity: 0,
        ease: "power4",
      });
      gsap.to(".close", {
        opacity: 1,
        ease: "power4",
      });
      gsap.to(".line1", {
        top:"10px",
        transform:'rotate(-45deg)',
        ease:"power4",
      });
      gsap.to(".line2", {
        top:"10px",
        transform:'rotate(45deg)',
        ease:"power4",
      });

      var menutl = gsap.timeline()
      menutl.to(".menua",
      {
        y:-5,
        opacity:1,
        stagger:0.1,
        duration:1,
        ease:"power5.inOut"
      })
      .to(".fotterh1",
      {
        opacity:1,
        stagger:0.1,
        duration:.5,
        ease:"power4.inOut"
      })
      
    flag = 1;
    console.log(flag);

  } 
  else
   {
      gsap.to(".menubar", {
        y: "-100%",
        duration: 0.5,
        ease: "power4.inOut",
      });
      gsap.to("#rightnav",
      {
        opacity:1,
        display:"initial",
        ease:"power4"
      })
      gsap.to(".close", {
        opacity: 0,
        ease: "power4",
      });
      gsap.to(".menu", {
        opacity: 1,
        ease: "power4",
      });
      gsap.to(".line1", {
        top:"30%",
        rotate:0,
        ease:"power3",
      });
      gsap.to(".line2", {
        top:"60%",
        rotate:0,
        ease:"power3",
       
      });


      flag = 0;  
    }

})
}
navbar()
 function menuhover()
 {

var mainmenu = document.querySelector(".mainmenu");

mainmenu.addEventListener("mouseenter", function () {
  var menua = document.querySelectorAll(".menua");

  menua.forEach(function (val) {
    val.addEventListener("mousemove", function () {
      val.style.filter = "none";
      // Apply blur effect on mousemove
      menua.forEach(function (otherElement) {
        if (otherElement !== val) {
          otherElement.style.filter = "blur(5px)"; // Adjust the blur value as needed
        }
      });
    });
  });
});

mainmenu.addEventListener("mouseleave", function () {
  var menua = document.querySelectorAll(".menua");

  // Remove blur effect on mouseleave
  menua.forEach(function (val) {
    val.style.opacity = 1;
    val.style.filter = "none";
  });
});
var mainmenu = document.querySelector(".mainmenu");
var sections = document.querySelectorAll("section");
var menua = document.querySelectorAll(".menua");



}
menuhover()

function hover()
{


  document.addEventListener("DOMContentLoaded", function() {
    var menuLinks = document.querySelectorAll(".menua");
  
    menuLinks.forEach(function(link) {
      link.addEventListener("mousemove", function(event) {
        event.preventDefault(); // Prevent default link behavior
  
        var targetId = link.getAttribute("href"); // Get the href attribute
        var targetImage = document.getElementById(targetId); // Find the target image by its ID
  
        if (targetImage) {
          // If the target image exists
          var images = document.querySelectorAll(".menuimage img"); // Find all images within the menu image container
  
          images.forEach(function(image) {
            image.style.display = "none"; // Hide all images
          });
  
          targetImage.style.display = "block"; // Show the target image
        }
      });
    });
  });
 
}
hover()

function loadeding()
{
  const loader = document.querySelector(".persent");
  var percentText = document.querySelector(".percenttext");
  // Set the starting percentage to 0
  var currentPercentage = 0;

  // Animate the percentage from 0 to 100 over 3 seconds

  setTimeout(function () {
      if (currentPercentage < 100) {
          currentPercentage = 100;
          percentText.textContent =` ${currentPercentage}%`;
             var splittext = percentText.textContent.split("");
             console.log(splittext);
             clutter = ""
             splittext.forEach(function(val)
             {
              clutter += `<span class ="percentspan inline-block">${val}</span> `
             })
             percentText.innerHTML = clutter;
            
        
            var persentspan = document.querySelectorAll(".percentspan")
             persentspan.forEach(function(val)
             {  
                 gsap.to(persentspan,
                 {
                  y:-300,
                  stagger:.1,
                  duration:.8,
                  delay:1,
                  ease:"power3.inOut", 
                 })
             }) 
         

   
           var h1=  document.querySelector(".text")
            var h1split =  h1.textContent.split("")
              clutter2 = ""
            h1split.forEach(function(val2)
            {
               clutter2 += `<span class="loaderprops  inline-block">${val2}</span>`
            })
            h1.innerHTML = clutter2

            var propsspan = document.querySelectorAll(".loaderprops");
            propsspan.forEach(function()
            {    
                          
            var tl = gsap.timeline() 
                tl.to(".text",
                {
                 opacity:1,
                 duration:.8,
                 delay:1.7,
                })
                tl
                .to(propsspan,
                  {
                    y:-300,
                    stagger:.1,
                    duration:.8,
                    ease:"power3.inOut", 
                  }) 
                 
              .to(".image-holder img",
              {
              left:"100%",
              width:"100%",
              stagger:0.1,
              ease:"power4.out",
              duration:1.7,
              delay:2,
              },".5") 
 
              .to(".loader",
                {
                  height:"0vh",
                  top:"-100vh",
                  duration:1.3,

                }) 
               
  
                })
            
              }
            },1000)              
         

}
loadeding()
gsap.to(".video",
{
  scale:1,
  scrollTrigger:{
    trigger:".sectextbox",
    scroller:".container",
    start:"top 80%" ,
    end:"top top",
    scrub:true,
    // markers:true,
  }
})
function page1()
{
var props = document.querySelector(".props")
propssplit = props.textContent.split("");
clutter = "";
propssplit.forEach(function(val) {
  clutter +=` <span class="spaneffect inline-block  opacity-0 relative " > ${val}</span>`
})
props.innerHTML = clutter;
var spaneffect = document.querySelectorAll(".spaneffect")
spaneffect.forEach(function(val)
{
var tl2 = gsap.timeline()
tl2
.to(".video",
{
  opacity:1,
})
.to(spaneffect,
{
  y:-50,
  opacity:1,
  stagger:.1,
  duration:.8,
  delay:5.6,
  ease:"power3.inOut",
  
})  

var p =  document.querySelector("p")
psplit = p.textContent.split("1")
clutter2 = ""
psplit.forEach(function(val)
{
  clutter2 +=  `<span class="pspan inline-block opacity-0">${val}</span>`
})
p.innerHTML = clutter2

var pspan =  document.querySelectorAll(".pspan")
pspan.forEach(function(val)
{
  tl2.to(pspan,
  {
    y:-50,
    opacity:1,
    stagger:.1,
    duration:.8,
    ease:"power3.inOut",

  })
  .to("#btn",
  {
    y:-40,
    opacity:1,
    duration:.8,
    ease:"power3.inOut",
   
  })
  var h1 = document.querySelectorAll(".midcontent h1")
h1.forEach(function(val)
{
  gsap.to(".sectextbox",
  {
    y:-100,
    duration:2,
    scrollTrigger:
    {
      trigger:".sectextbox",
      scroller:".container",
      start:"top 50%",
      end:"top 10%",
      scrub:4,
      // markers:true,
    }
  })
  gsap.to(h1,
  {
  y:-60,
  opacity:1,
  stagger:.1,
  duration:.8,
  ease:"power3.inOut",
  scrollTrigger:
  {
    trigger:".midcontent",
    scroller:".container",
    start:"top 80%",
    end:"top 60%",
    scrub:4,
    // markers:true,
  }
   
  })
  gsap.to(".lastheading",
  {
   y:-100,
   scrollTrigger:
   {
    trigger:".imgbox",
    scroller:".container",
    start:"top 50%",
    end:"top 0%",
    scrub:4,
   } 
  })
})

var imabox =  document.querySelector(".imgbox")
imabox.addEventListener("mouseleave",function()
{
  gsap.to(imabox,
    {
      height:"45vh",
      width:"24vw"

    })
    gsap.to(".imgtext",
    {
      opacity:0,
    })
})

imabox.addEventListener("mouseenter",function()
{
  gsap.to(imabox,
  {
    height:"50vh",
    width:"25vw"
  })
  gsap.to(".imgtext",
  {
    opacity:1,
  })
})

})
})

}
page1()


var btn =document.querySelectorAll(".btn")
   btn.forEach(function(val)
   {

  val.addEventListener('mouseenter', function () {
    val.querySelector('.up').style.top = '4px';
    val.querySelector('.down').style.top = '100%';
    val.querySelector('.arrow .fist').style.left = '100%';
    val.querySelector('.arrow .second').style.left = '4px';
  });
  
  val.addEventListener('mouseleave', function () {
    val.querySelector('.up').style.top = '-100%';
    val.querySelector('.down').style.top = '4px';
    val.querySelector('.arrow .fist').style.left = '4px';
    val.querySelector('.arrow .second').style.left = '-100%';

    });
    
  })  


function page2()
{
gsap.to(".secimg",
{
  y:-90,
  scrollTrigger:
  {
    trigger:".up",
    scroller:".container",
    start:"top 50%",
    end:"top 20%",
    // markers:true,
    scrub:4,

  }
})
  gsap.to(".pera",
  {
   y:-10,
   opacity:1,
   stagger:.3,
   duration:.5,
   scrollTrigger:
   {
    trigger:".page2",
    scroller:".container",
    start:"top 50%",
    end:"top 45%",
    scrub:2,
   }
  })
 
}
page2()
function page3()
{

  gsap.to(".productbox", {
    x: -700,
    ease: "linear",
    duration: 12,
    repeat: -1,
    // yoyo: true
});
}
page3()
function page4()
{
  gsap.to(".product",
  {
    x:"-250vw",
    duration:.4,
    ease:"power4",
    scrollTrigger:
    {
      trigger:".page4",
      scroller:".container",
      start:"top top",
      end:"top -120%",
      scrub:3,
      pin:true,
      // markers:true
    }
  })
}
page4()
 function page5()
 {
  gsap.to(".scroll",
  {
    y:"-90vh",
    scrollTrigger:
    {
      trigger:".page5",
      scroller:".container",
      start:"top 50%",
      end:'top  20%',
      scrub:3,
      // markers:true
    }
  })
  gsap.to(".about",
  {
    y:"-200",
    scrollTrigger:
    {
      trigger:".page5",
      scroller:".container",
      start:"50% 50%",
      end:"50% 0%",
      // markers:true,
      scrub:3
    }
  })
  gsap.from(".since2 , .since1",
  {
    y:"100%",
    stagger:.2,
    opacity:1,
    duration:.5,
    ease:"power4",
    scrollTrigger:
    {
    trigger:".page5",
    scroller:".container",
    start:"top 20%",
    end:"top 0%",
    // markers:true,
    scrub:3,
    }
  })


    
 }

 page5()
 function page6()
 {
  gsap.to(".texts",
  {
  y:'5',

  scrollTrigger:
  {
    trigger:".rightside",
    scroller:'.container',
    start:"top 10%",
    end:"top -110%",
    scrub:3,
    pin:true,
  }
 })
 }
 page6()
 function page7()
 {
  gsap.to(".page7text",
  {
   y:-50,
   opacity:1,
   stagger:.5,
   duration:.8,
   scrollTrigger:
   {
     trigger:".page7",
     scroller:".container",
     start:"top 60%",
     end:"top 40%",
    //  markers:true,
     scrub:4,
   }
  })
  gsap.to(".card",
  {
    y:-200,
    scrollTrigger:
    {
      trigger:".page7",
      scroller:".container",
      start:"50% 80%",
      end:"50% 60%",
      // markers:true,
      scrub:4,
    }
  })
  
 }
 page7()



 function page8()
{

  
  var fotteraBoxes = document.querySelectorAll('.fottera .box');


  fotteraBoxes.forEach(function (box) {
     
    box.addEventListener('mouseenter', function () {
          box.querySelector('.up').style.top = '0%';
          box.querySelector('.down').style.top = '100%';
          
      });

      box.addEventListener('mouseleave', function () {
          box.querySelector('.up').style.top = '-100%';
          box.querySelector('.down').style.top = '0%';

      });

  });
 
       
 }
page8()





Shery.imageEffect(".shery", {
  style: 4,
  config:{"uColor":{"value":false},"uSpeed":{"value":0.6,"range":[0.1,1],"rangep":[1,10]},"uAmplitude":{"value":1.5,"range":[0,5]},"uFrequency":{"value":3.5,"range":[0,10]},"geoVertex":{"range":[1,64],"value":32},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":1},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":6.34,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":711}},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
  gooey:true,
});