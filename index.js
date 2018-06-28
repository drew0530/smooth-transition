function animationDelay(resolve, sceneDelay){
  // useful for delaying heavy components to render. This helps transitions,
  // tab changes, etc
  if(sceneDelay) {
    const sceneDelay = new Promise((sceneResolve) => requestAnimationFrame(sceneResolve));
    const resolver = resolve(sceneDelay);
    requestAnimationFrame(resolver);
    return;
  }
  requestAnimationFrame(resolve);
};

// Returns a promise that will resolve on the next animation frame
export default (sceneDelay = false) => new Promise((resolve) => animationDelay(resolve));
