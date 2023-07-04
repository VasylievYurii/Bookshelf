import throttle from 'lodash.throttle';

function getViewportSize() {
  const width = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );
  return { width: width };
}

getViewportSize();
toggleForSidebar();

function toggleForSidebar() {
  const viewportSize = getViewportSize();
  const sidebarRef = document.querySelector('.sidebar');

  if (viewportSize.width < 1440) {
    sidebarRef.classList.add('visually-hidden');
  } else {
    sidebarRef.classList.remove('visually-hidden');
  }
}

window.addEventListener('resize', throttle(toggleForSidebar, 500));
