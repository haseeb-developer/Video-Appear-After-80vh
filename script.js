document.addEventListener("DOMContentLoaded", function () {
  const heroSection = document.querySelector(".hero-section");
  const heroVideo = document.querySelector(".hero-video");
  const floatingContainer = document.querySelector(".floating-video-container");
  const floatingVideo = document.querySelector(".floating-video");
  const playBtn = document.querySelector(".play-btn");
  const closeBtn = document.querySelector(".close-btn");

  const triggerOffset = window.innerHeight * 0.8;

  function handleScroll() {
    const scrollPosition = window.scrollY;

    if (scrollPosition > triggerOffset) {
      floatingContainer.classList.add("visible");
    } else {
      floatingContainer.classList.remove("visible");
    }
  }
  playBtn.addEventListener("click", function () {
    if (floatingVideo.paused) {
      floatingVideo.play();
      playBtn.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
      floatingVideo.pause();
      playBtn.innerHTML = '<i class="fas fa-play"></i>';
    }
  });

  closeBtn.addEventListener("click", function () {
    floatingContainer.classList.remove("visible");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  heroVideo.addEventListener("timeupdate", function () {
    if (!floatingVideo.paused) {
      floatingVideo.currentTime = heroVideo.currentTime;
    }
  });

  floatingVideo.currentTime = heroVideo.currentTime;

  let isScrolling;
  window.addEventListener(
    "scroll",
    function () {
      window.clearTimeout(isScrolling);
      isScrolling = setTimeout(handleScroll, 50);
    },
    false
  );

  handleScroll();

  window.addEventListener("resize", function () {
    triggerOffset = window.innerHeight * 0.8;
    handleScroll();
  });
});
