var t1 = gsap.timeline({
  defaults: {
    opacity: 0,
    ease: "linear",
    duration: 2,
  },
});
t1.fromTo(
  ".sidebar",
  {
    width: 0,
  },
  {
    opacity: 1,
    width: "30%",
  }
);
t1.fromTo(
  ".main-img",
  {
    y: 200,
  },
  {
    y: 0,
    opacity: 1,
  }
);
t1.fromTo(
  ".content",
  {
    x: 0,
  },
  {
    x: 100,
    opacity: 1,
  }
);
t1.fromTo(
  ".ul",
  {
    x: 0,
  },
  {
    x: 100,
    opacity: 1,
  }
);
