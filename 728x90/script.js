gsap.timeline({ defaults: { ease: "power1.inOut" }, repeat: -1 ,repeatDelay:2})
    .fromTo('.slide_1 .element_1', {y:-100},{y:0, duration:1})
    .fromTo('.slide_1 .element_2', {opacity:0},{opacity:1, duration:.8}, ">-.1")
    .fromTo('.slide_1 .element_3', {opacity:0},{opacity:1, duration:.8}, ">-.2")