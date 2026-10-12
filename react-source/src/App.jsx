import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './App.css';

gsap.registerPlugin(ScrollTrigger);

const metrics = [
  {
    id: 'metric1',
    value: '68%',
    label: 'Faster digital journeys',
    note: 'MOVE WITH PURPOSE',
  },
  {
    id: 'metric2',
    value: '42%',
    label: 'Higher engagement',
    note: 'MAKE IT MATTER',
  },
  {
    id: 'metric3',
    value: '3.2×',
    label: 'Smoother experiences',
    note: 'BUILT FOR FLOW',
  },
  {
    id: 'metric4',
    value: '91%',
    label: 'Experience quality',
    note: 'DESIGNED TO CONNECT',
  },
];

const word = 'WELCOMEITZFIZZ';

function SportsCar() {
  return (
    <svg
      className="car-art"
      viewBox="0 0 160 82"
      role="img"
      aria-label="Blue aerodynamic sports car viewed from above"
    >
      <defs>
        <linearGradient id="carPaint" x1="0" y1="0" x2="0.8" y2="1">
          <stop offset="0%" stopColor="#9ce9ff" />
          <stop offset="18%" stopColor="#35b8f9" />
          <stop offset="48%" stopColor="#087bd0" />
          <stop offset="78%" stopColor="#0860ad" />
          <stop offset="100%" stopColor="#043b78" />
        </linearGradient>

        <linearGradient id="glass" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#102333" />
          <stop offset="35%" stopColor="#42677e" />
          <stop offset="55%" stopColor="#152c40" />
          <stop offset="100%" stopColor="#081722" />
        </linearGradient>

        <linearGradient id="tire" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#080b10" />
          <stop offset="50%" stopColor="#303740" />
          <stop offset="100%" stopColor="#090c10" />
        </linearGradient>

        <linearGradient id="hood" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#0560a7" />
          <stop offset="50%" stopColor="#51caff" />
          <stop offset="100%" stopColor="#0872c4" />
        </linearGradient>
      </defs>

      {/* Racing tires */}
      <g fill="url(#tire)" stroke="#05080c" strokeWidth="1">
        <rect x="28" y="5" width="25" height="17" rx="5" />
        <rect x="108" y="5" width="25" height="17" rx="5" />
        <rect x="28" y="60" width="25" height="17" rx="5" />
        <rect x="108" y="60" width="25" height="17" rx="5" />
      </g>

      {/* Tire tread and rim highlights */}
      <g fill="none" strokeLinecap="round">
        <path d="M33 9 L48 9 M33 13 L48 13 M33 17 L48 17"
          stroke="#737d87" strokeWidth="1" />
        <path d="M113 9 L128 9 M113 13 L128 13 M113 17 L128 17"
          stroke="#737d87" strokeWidth="1" />
        <path d="M33 65 L48 65 M33 69 L48 69 M33 73 L48 73"
          stroke="#737d87" strokeWidth="1" />
        <path d="M113 65 L128 65 M113 69 L128 69 M113 73 L128 73"
          stroke="#737d87" strokeWidth="1" />
      </g>

      {/* Side mirrors */}
      <path d="M66 13 L72 8 L80 9 L77 15 Z"
        fill="#086cb4" stroke="#092c48" strokeWidth="1" />
      <path d="M66 69 L72 74 L80 73 L77 67 Z"
        fill="#086cb4" stroke="#092c48" strokeWidth="1" />

      {/* Main aerodynamic chassis */}
      <path
        d="
          M8 34
          L19 29
          L30 21
          Q39 12 57 12
          L104 12
          Q125 12 137 24
          L150 32
          Q159 37 159 41
          Q159 45 150 50
          L137 58
          Q125 70 104 70
          L57 70
          Q39 70 30 61
          L19 53
          L8 48
          Q3 41 8 34 Z
        "
        fill="#052b4a"
        stroke="#071827"
        strokeWidth="1.5"
      />

      {/* Painted outer body */}
      <path
        d="
          M10 34
          L23 29
          L34 22
          Q42 16 59 16
          L104 16
          Q122 16 133 27
          L149 35
          Q155 39 155 41
          Q155 44 149 47
          L133 55
          Q122 66 104 66
          L59 66
          Q42 66 34 60
          L23 53
          L10 48
          Q6 41 10 34 Z
        "
        fill="url(#carPaint)"
        stroke="#7adfff"
        strokeWidth="1"
      />

      {/* Rear engine ventilation */}
      <path
        d="M22 33 L37 27 L49 28 L45 35 L23 37 Z"
        fill="#08243a"
        stroke="#52bced"
        strokeWidth="0.8"
      />
      <path
        d="M22 45 L37 51 L49 50 L45 43 L23 41 Z"
        fill="#08243a"
        stroke="#52bced"
        strokeWidth="0.8"
      />

      <g stroke="#9adfff" strokeWidth="1" opacity="0.85">
        <path d="M27 32 L39 30" />
        <path d="M27 35 L42 32" />
        <path d="M27 47 L39 49" />
        <path d="M27 44 L42 47" />
      </g>

      {/* Front and rear windshields */}
      <path
        d="
          M53 22
          Q59 18 69 18
          L87 18
          L87 31
          L49 31
          Z
        "
        fill="url(#glass)"
        stroke="#9de8ff"
        strokeWidth="1"
      />

      <path
        d="
          M91 18
          L105 18
          Q118 19 127 30
          L91 31
          Z
        "
        fill="url(#glass)"
        stroke="#9de8ff"
        strokeWidth="1"
      />

      {/* Glass reflections */}
      <path
        d="M57 22 L67 20 L67 28 L52 28 Z"
        fill="#c6f5ff"
        opacity="0.16"
      />
      <path
        d="M96 21 L104 21 L118 28 L96 28 Z"
        fill="#d2f6ff"
        opacity="0.22"
      />

      {/* Windshield divider */}
      <path
        d="M89 18 L89 31"
        stroke="#071d32"
        strokeWidth="2"
      />

      {/* Door and body panel lines */}
      <g
        fill="none"
        stroke="#bcefff"
        strokeWidth="0.8"
        strokeOpacity="0.75"
      >
        <path d="M53 33 L124 33" />
        <path d="M53 49 L124 49" />
        <path d="M53 33 L53 49" />
        <path d="M127 33 L127 49" />
      </g>

      {/* Hood contours */}
      <path
        d="M130 30 L143 35 L150 39 L143 41 L130 37 Z"
        fill="url(#hood)"
      />
      <path
        d="M130 52 L143 47 L150 43 L143 41 L130 45 Z"
        fill="url(#hood)"
      />

      <path
        d="M136 35 L148 40 M136 47 L148 42"
        fill="none"
        stroke="#c4f5ff"
        strokeWidth="1"
      />

      {/* Front headlights */}
      <path
        d="M145 35 L155 38 L154 40 L143 39 Z"
        fill="#e9fcff"
        stroke="#8be8ff"
        strokeWidth="0.7"
      />
      <path
        d="M145 47 L155 44 L154 42 L143 43 Z"
        fill="#d8faff"
        stroke="#8be8ff"
        strokeWidth="0.7"
      />

      {/* Rear lights */}
      <path d="M9 34 L17 33 L17 37 L9 39 Z" fill="#ff354f" />
      <path d="M9 44 L17 45 L17 49 L9 48 Z" fill="#ff354f" />

      {/* Rear diffuser */}
      <path
        d="M12 38 L19 39 L19 43 L12 44 Z"
        fill="#101923"
      />
      <path
        d="M13 40 L18 40 M13 42 L18 42"
        stroke="#697f91"
        strokeWidth="0.8"
      />

      {/* Center racing stripe */}
      <path
        d="M55 33 L125 33 L125 35 L55 35 Z"
        fill="#d9f7ff"
        opacity="0.65"
      />
      <path
        d="M55 47 L125 47 L125 49 L55 49 Z"
        fill="#05284a"
        opacity="0.8"
      />
    </svg>
  );
}
function App() {
  const experienceRef = useRef(null);
  const roadRef = useRef(null);
  const carRef = useRef(null);
  const trailRef = useRef(null);
  const progressNumberRef = useRef(null);
  const progressFillRef = useRef(null);

  useLayoutEffect(() => {
    const experience = experienceRef.current;
    const road = roadRef.current;
    const car = carRef.current;
    const trail = trailRef.current;

    if (!experience || !road || !car || !trail) {
      return undefined;
    }

    let roadWidth = 0;
    let carWidth = 0;
    let carStartX = 0;
    let maxTravel = 0;
    let letterCenters = [];

    const cardRevealAt = [0.12, 0.29, 0.51, 0.70];

    const clamp = (value, min, max) =>
      Math.min(max, Math.max(min, value));

    const context = gsap.context(() => {
      const letters = gsap.utils.toArray(
        '.value-letter',
        experience
      );

      const cards = gsap.utils.toArray(
        '.metric-card',
        experience
      );

      function measureScene() {
        const roadRect = road.getBoundingClientRect();

        roadWidth = road.clientWidth;
        carWidth = car.getBoundingClientRect().width;
        carStartX = car.offsetLeft;

        maxTravel = Math.max(
          0,
          roadWidth - carWidth - carStartX - 8
        );

        letterCenters = letters.map((letter) => {
          const rect = letter.getBoundingClientRect();

          return rect.left + rect.width / 2 - roadRect.left;
        });
      }

      function renderScene(progress) {
        const value = clamp(progress, 0, 1);
        const carX = maxTravel * value;
        const carLeft = carStartX + carX;

        // Keep the car under direct scroll control.
        gsap.set(car, { x: carX });

        // Start with no green trail at 00%.
        const trailEnd = value === 0
          ? 0
          : carX + carWidth * 0.58;

        const trailScale = roadWidth > 0
          ? clamp(trailEnd / roadWidth, 0, 1)
          : 0;

        gsap.set(trail, {
          scaleX: trailScale,
          transformOrigin: 'left center',
        });

        // Reveal individual letters only after the car passes them.
        letters.forEach((letter, index) => {
          const center = letterCenters[index];

          const revealed =
            value > 0 &&
            Number.isFinite(center) &&
            carLeft > center;

          letter.classList.toggle('is-revealed', revealed);
        });

        // Stagger the metric cards along the journey.
        cards.forEach((card, index) => {
          const threshold = cardRevealAt[index] ?? 0.75;

          card.classList.toggle(
            'is-visible',
            value >= threshold
          );
        });

        if (progressNumberRef.current) {
          progressNumberRef.current.textContent = String(
            Math.round(value * 100)
          ).padStart(2, '0');
        }

        if (progressFillRef.current) {
          gsap.set(progressFillRef.current, {
            scaleX: value,
            transformOrigin: 'left center',
          });
        }
      }

      // Hide all animated elements on the initial frame.
      gsap.set(letters, {
        autoAlpha: 0,
        y: 8,
      });

      gsap.set(cards, {
        autoAlpha: 0,
        y: 12,
      });

      measureScene();
      renderScene(0);

      // CSS handles the sticky scene.
      // Do not add pin:true or pinSpacing here.
      ScrollTrigger.create({
        trigger: experience,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
        invalidateOnRefresh: true,

        onUpdate: (self) => {
          renderScene(self.progress);
        },

        onRefresh: (self) => {
          measureScene();
          renderScene(self.progress);
        },
      });

      const refreshScene = () => {
        measureScene();
        ScrollTrigger.refresh();
      };

      window.addEventListener('resize', refreshScene);
      window.addEventListener('load', refreshScene, { once: true });

      // Remove listeners when React cleans up the scene.
      return () => {
        window.removeEventListener('resize', refreshScene);
        window.removeEventListener('load', refreshScene);
      };
    }, experience);

    return () => context.revert();
  }, []);

  return (
    <main className="site-shell">
      <section
        className="experience"
        id="experience"
        ref={experienceRef}
      >
        <div className="stage">
          <header className="topbar">
            <a className="brand" href="#experience" aria-label="Itzfizz home">
              ITZFIZZ<span>.</span>
            </a>

            <p className="topbar-caption">
              IDEAS IN MOTION
            </p>

            <a className="topbar-link" href="#experience">
              SCROLL TO EXPLORE <span>↘</span>
            </a>
          </header>

          <div className="scene-content">
            <div className="intro-row">
              <div className="intro-copy">
                <p className="eyebrow">
                  DIGITAL EXPERIENCE <span> / 01</span>
                </p>

                <h1>
                  Make every move
                  <br />
                  <span>matter.</span>
                </h1>
              </div>

              <div className="scene-note">
                <span className="status-dot" />
                <p>
                  A little motion.
                  <br />
                  A lasting impression.
                </p>
              </div>
            </div>

            <div className="road" id="road" ref={roadRef}>
              <div className="road-grid" aria-hidden="true" />
              <div className="road-edge road-edge-top" aria-hidden="true" />
              <div className="road-edge road-edge-bottom" aria-hidden="true" />
              <div className="road-center-line" aria-hidden="true" />

              <div
                className="road-trail"
                id="trail"
                ref={trailRef}
                aria-hidden="true"
              />

              <div className="road-word" aria-label="WELCOME ITZFIZZ">
                {'WELCOME'.split('').map((letter, index) => (
                  <span className="value-letter" key={`welcome-${index}`}>
                    {letter}
                  </span>
                ))}

                <span className="word-space" aria-hidden="true" />

                {'ITZFIZZ'.split('').map((letter, index) => (
                  <span className="value-letter" key={`itzfizz-${index}`}>
                    {letter}
                  </span>
                ))}
              </div>

              <div
                className="car"
                id="car"
                ref={carRef}
                aria-hidden="true"
              >
                <SportsCar />
              </div>
            </div>

            <div className="road-caption-row">
              <span>THE JOURNEY STARTS HERE</span>
              <span>SCROLL TO DRIVE ↓</span>
            </div>

            <div className="metrics-heading">
              <p>DESIGNED TO MAKE AN IMPACT</p>
              <span>ILLUSTRATIVE METRICS</span>
            </div>

            <div className="metrics-grid">
              {metrics.map((metric, index) => (
                <article
                  className="metric-card"
                  id={metric.id}
                  key={metric.id}
                >
                  <div className="metric-card-top">
                    <span>0{index + 1}</span>
                    <span className="metric-arrow">↗</span>
                  </div>

                  <h2>{metric.value}</h2>
                  <p>{metric.label}</p>
                  <span className="metric-note">{metric.note}</span>
                </article>
              ))}
            </div>

            <footer className="progress-footer">
              <span>SCROLL PROGRESS</span>

              <div className="progress-track">
                <div
                  className="progress-fill"
                  id="progressFill"
                  ref={progressFillRef}
                />
              </div>

              <span className="progress-number">
                <span id="progressNumber" ref={progressNumberRef}>
                  00
                </span>
                %
              </span>
            </footer>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;