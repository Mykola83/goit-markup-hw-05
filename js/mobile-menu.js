(() => {
    const refs = {
      openmobile-menuBtn: document.querySelector("[data-mobile-menu-open]"),
      closemobile-menuBtn: document.querySelector("[data-mobile-menu-close]"),
      mobile-menu: document.querySelector("[data-mobile-menu]"),
    };
  
    refs.openmobile-menuBtn.addEventListener("click", togglemobile-menu);
    refs.closemobile-menuBtn.addEventListener("click", togglemobile-menu);
  
    function togglemobile-menu() {
      refs.mobile-menu.classList.toggle("is-hidden");
    }
  })();