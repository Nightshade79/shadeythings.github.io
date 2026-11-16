(function () {
  var body = document.body;

  function store(key, value) {
    try {
      if (value === undefined) return window.localStorage.getItem(key);
      window.localStorage.setItem(key, value);
    } catch (e) {
      return null;
    }
  }

  // Theme toggle (HUD <-> plain)
  var toggle = document.getElementById("theme-toggle");
  function setPlain(on) {
    body.classList.toggle("plain", on);
    if (toggle) {
      toggle.textContent = on ? "HUD mode" : "Plain mode";
      toggle.setAttribute("aria-pressed", on ? "true" : "false");
    }
    store("plain", on ? "1" : "0");
  }
  setPlain(store("plain") === "1");
  if (toggle) {
    toggle.addEventListener("click", function () {
      setPlain(!body.classList.contains("plain"));
    });
  }

  // Cosmetic visit counter (per browser, not a real analytics number)
  var counter = document.getElementById("visit-counter");
  if (counter) {
    var n = parseInt(store("visits") || "1336", 10);
    var counted = false;
    try { counted = !!window.sessionStorage.getItem("counted"); } catch (e) {}
    if (!counted) {
      n += 1;
      store("visits", String(n));
      try { window.sessionStorage.setItem("counted", "1"); } catch (e) {}
    }
    counter.textContent = ("0000000" + n).slice(-7);
  }

  // Music player (only present when music_url is set in _config.yml)
  var song = document.getElementById("song");
  var btn = document.getElementById("play-btn");
  if (song && btn) {
    btn.addEventListener("click", function () {
      if (song.paused) { song.play(); btn.textContent = "Pause"; }
      else { song.pause(); btn.textContent = "Play"; }
    });
  }
})();
