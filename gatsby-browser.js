exports.onRouteUpdate = (route) => {
  const { location } = route

  if (location.hash) {
    setTimeout(() => {
      document.querySelector(`${location.hash}`).scrollIntoView();
    }, 0);
  }
};
