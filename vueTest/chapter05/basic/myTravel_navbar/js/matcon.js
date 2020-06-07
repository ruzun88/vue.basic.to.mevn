const sideNav = document.querySelector('.sidenav');
M.Sidenav.init(sideNav, {});

const slider = document.querySelector('.slider');
M.Slider.init(slider, {
  indicators: false,
  height: 485,
  duration: 500,
  interval: 6000
});

const ac = document.querySelector('.autocomplete');
M.Autocomplete.init(ac, {
    data: {
        "Paris": null, "Venice": null, "Praha": null, "Rome": null, "Vinne": null, "Amsterdam": null
    }
});

const sp = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(sp, {});