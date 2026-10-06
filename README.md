# CareAlert 3D Beacon

## What I built

CareAlert is an interactive healthcare emergency-alert beacon built with Vite, React, React Three Fiber, Three.js, and drei. It uses a rounded red beacon dome, dark base, glowing ring, floor plane, lights, soft contact shadows, and touch-friendly orbit/zoom controls. Activate Alert makes the beacon pulse and rotate; Change Color cycles red, amber, and blue; Reset View returns the alert and color to the starting state.

The 3D canvas is lazy-loaded with `React.lazy` and `Suspense`. Users who prefer reduced motion receive a static beacon illustration with the same alert status text.

## Run it

```bash
npm install
npm run dev
```

Open the local URL shown by Vite. To create a production build:

```bash
npm run build
```

## Performance note

The scene uses simple primitive geometry only—no large downloaded model. The Canvas caps device pixel ratio at 1.5, the 3D experience is lazy-loaded, and a static fallback avoids 3D work for reduced-motion users. The scene keeps its geometry intentionally small and focused for a responsible browser experience.

## With more time

I would add keyboard-friendly scene presets, a configurable alert timeline, richer healthcare status data, and automated visual/performance checks across representative mobile devices.

## Deploy on Netlify

Create a new Netlify site from this GitHub repository. Netlify will detect the Vite project; use `npm run build` as the build command and `dist` as the publish directory. This project has not been deployed here.
