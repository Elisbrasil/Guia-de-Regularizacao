document.addEventListener("DOMContentLoaded", function () {
  // Mapeamento de imagens
  var imgMap = {
    __MOCKUP_HERO__: "img/tablet_guia.webp",
    __LOGO__: "img/logo.webp",
    __NEWS__: "img/noticia_g1.webp",
    __DOCTOR__: "img/paraquem.webp",
    __T1__: "img/primeiro_comentario.webp",
    __T2__: "img/segundo_comentario.webp",
    __T3__: "img/terceiro_comentario.webp",
    __T4__: "img/quarto_comentario.webp",
    __LEARN1__: "img/1.webp",
    __LEARN2__: "img/2.webp",
    __LEARN3__: "img/3.webp",
    __LEARN4__: "img/4.webp",
  };
  document.querySelectorAll("img[data-src]").forEach(function (img) {
    var k = img.getAttribute("data-src");
    if (imgMap[k]) img.src = imgMap[k];
  });

  // Scroll reveal
  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) e.target.classList.add("visible");
      });
    },
    { threshold: 0.12 },
  );
  document
    .querySelectorAll(".reveal,.reveal-left,.reveal-right")
    .forEach(function (el) {
      observer.observe(el);
    });

  // ========== CARROSSEL DE DEPOIMENTOS ==========
  (function () {
    var track = document.getElementById("testiTrack");
    var dots = document.querySelectorAll(".carousel-dot");
    var prev = document.getElementById("testiPrev");
    var next = document.getElementById("testiNext");
    if (!track) return;
    var current = 0,
      total = track.children.length,
      timer;
    function goTo(idx) {
      current = (idx + total) % total;
      track.style.transform = "translateX(-" + current * 100 + "%)";
      dots.forEach(function (d, i) {
        d.classList.toggle("active", i === current);
      });
    }
    function startAuto() {
      timer = setInterval(function () {
        goTo(current + 1);
      }, 4000);
    }
    function stopAuto() {
      clearInterval(timer);
    }
    prev.addEventListener("click", function () {
      stopAuto();
      goTo(current - 1);
      startAuto();
    });
    next.addEventListener("click", function () {
      stopAuto();
      goTo(current + 1);
      startAuto();
    });
    dots.forEach(function (d) {
      d.addEventListener("click", function () {
        stopAuto();
        goTo(+d.dataset.index);
        startAuto();
      });
    });
    var sx = 0;
    track.addEventListener(
      "touchstart",
      function (e) {
        sx = e.touches[0].clientX;
        stopAuto();
      },
      { passive: true },
    );
    track.addEventListener(
      "touchend",
      function (e) {
        var dx = sx - e.changedTouches[0].clientX;
        if (Math.abs(dx) > 40) goTo(dx > 0 ? current + 1 : current - 1);
        startAuto();
      },
      { passive: true },
    );
    startAuto();
  })();

  // ========== CARROSSEL LEARN (NOVO) ==========
  (function () {
    var track = document.getElementById("learnTrack");
    var dots = document.querySelectorAll(".learn-dot");
    var prev = document.getElementById("learnPrev");
    var next = document.getElementById("learnNext");
    if (!track) return;
    var current = 0,
      total = track.children.length,
      timer;

    function goTo(idx) {
      current = (idx + total) % total;
      track.style.transform = "translateX(-" + current * 100 + "%)";
      dots.forEach(function (d, i) {
        d.classList.toggle("active", i === current);
      });
    }

    function startAuto() {
      timer = setInterval(function () {
        goTo(current + 1);
      }, 4000);
    }

    function stopAuto() {
      clearInterval(timer);
    }

    prev.addEventListener("click", function () {
      stopAuto();
      goTo(current - 1);
      startAuto();
    });

    next.addEventListener("click", function () {
      stopAuto();
      goTo(current + 1);
      startAuto();
    });

    dots.forEach(function (d) {
      d.addEventListener("click", function () {
        stopAuto();
        goTo(+d.dataset.index);
        startAuto();
      });
    });

    var sx = 0;
    track.addEventListener(
      "touchstart",
      function (e) {
        sx = e.touches[0].clientX;
        stopAuto();
      },
      { passive: true },
    );

    track.addEventListener(
      "touchend",
      function (e) {
        var dx = sx - e.changedTouches[0].clientX;
        if (Math.abs(dx) > 40) goTo(dx > 0 ? current + 1 : current - 1);
        startAuto();
      },
      { passive: true },
    );

    startAuto();
  })();
  // ========== FIM CARROSSEL LEARN ==========
});
