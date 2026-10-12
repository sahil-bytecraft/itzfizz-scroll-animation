
gsap.registerPlugin(ScrollTrigger);

const letters = gsap.utils.toArray(".letter");
const stats = gsap.utils.toArray(".stat");

const hero = document.querySelector(".hero");
const car = document.querySelector(".car");
const road = document.querySelector(".road");
const trail = document.querySelector(".road-trail");

// Intro text appears on page load.
gsap.fromTo(
    [".hero .eyebrow", ".intro"],
    {
        autoAlpha: 0,
        y: 18
    },
    {
        autoAlpha: 1,
        y: 0,
        duration: 0.65,
        stagger: 0.15,
        ease: "power2.out"
    }
);

// Reveal the headline letters once.
gsap.fromTo(
    letters,
    {
        autoAlpha: 0,
        y: 18
    },
    {
        autoAlpha: 1,
        y: 0,
        duration: 0.45,
        stagger: 0.035,
        delay: 0.1,
        ease: "power2.out"
    }
);

// Reveal the statistics one after another.
gsap.fromTo(
    stats,
    {
        autoAlpha: 0,
        y: 16
    },
    {
        autoAlpha: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.15,
        delay: 0.65,
        ease: "power2.out"
    }
);

// Coordinate car movement and trail growth on one timeline.
// The page scrolls naturally; the hero is not pinned.
if (hero && car && road && trail) {
    const drivingTimeline = gsap.timeline({
  
scrollTrigger: {
    trigger: hero,
    start: "top top",
    end: "bottom top",
    scrub: 0.6,
    invalidateOnRefresh: true
}

    });

    drivingTimeline.to(
        car,
        {
            x: () => Math.max(
                0,
                road.clientWidth - car.offsetWidth
            ),
            ease: "none"
        },
        0
    );

    drivingTimeline.to(
        trail,
        {
            scaleX: 1,
            ease: "none"
        },
        0
    );
}

// Reveal the dark section when it enters the viewport.
gsap.fromTo(
    [".about h2", ".about > p:last-child"],
    {
        autoAlpha: 0,
        y: 24
    },
    {
        autoAlpha: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".about",
            start: "top 80%",
            once: true
        }
    }
);

// Recalculate positions after the page has loaded.
window.addEventListener("load", () => {
    ScrollTrigger.refresh();
});
