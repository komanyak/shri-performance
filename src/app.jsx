document.addEventListener("DOMContentLoaded", function () {
  "use strict";
  let e = {
    all: {
      title: "Все",
      items: [
        {
          icon: "light2",
          iconLabel: "Освещение",
          title: "Xiaomi Yeelight LED Smart Bulb",
          subtitle: "Включено",
        },
        {
          icon: "light",
          iconLabel: "Освещение",
          title: "D-Link Omna 180 Cam",
          subtitle: "Включится в 17:00",
        },
        {
          icon: "temp",
          iconLabel: "Температура",
          title: "Elgato Eve Degree Connected",
          subtitle: "Выключено до 17:00",
        },
        {
          icon: "light",
          iconLabel: "Освещение",
          title: "LIFX Mini Day & Dusk A60 E27",
          subtitle: "Включится в 17:00",
        },
        {
          icon: "light2",
          iconLabel: "Освещение",
          title: "Xiaomi Mi Air Purifier 2S",
          subtitle: "Включено",
        },
        {
          icon: "light",
          iconLabel: "Освещение",
          title: "Philips Zhirui",
          subtitle: "Включено",
        },
        {
          icon: "light",
          iconLabel: "Освещение",
          title: "Philips Zhirui",
          subtitle: "Включено",
        },
        {
          icon: "light2",
          iconLabel: "Освещение",
          title: "Xiaomi Mi Air Purifier 2S",
          subtitle: "Включено",
        },
      ],
    },
    kitchen: {
      title: "Кухня",
      items: [
        {
          icon: "light2",
          iconLabel: "Освещение",
          title: "Xiaomi Yeelight LED Smart Bulb",
          subtitle: "Включено",
        },
        {
          icon: "temp",
          iconLabel: "Температура",
          title: "Elgato Eve Degree Connected",
          subtitle: "Выключено до 17:00",
        },
      ],
    },
    hall: {
      title: "Зал",
      items: [
        {
          icon: "light",
          iconLabel: "Освещение",
          title: "Philips Zhirui",
          subtitle: "Выключено",
        },
        {
          icon: "light2",
          iconLabel: "Освещение",
          title: "Xiaomi Mi Air Purifier 2S",
          subtitle: "Выключено",
        },
      ],
    },
    lights: {
      title: "Лампочки",
      items: [
        {
          icon: "light",
          iconLabel: "Освещение",
          title: "D-Link Omna 180 Cam",
          subtitle: "Включится в 17:00",
        },
        {
          icon: "light",
          iconLabel: "Освещение",
          title: "LIFX Mini Day & Dusk A60 E27",
          subtitle: "Включится в 17:00",
        },
        {
          icon: "light2",
          iconLabel: "Освещение",
          title: "Xiaomi Mi Air Purifier 2S",
          subtitle: "Включено",
        },
        {
          icon: "light",
          iconLabel: "Освещение",
          title: "Philips Zhirui",
          subtitle: "Включено",
        },
      ],
    },
    cameras: {
      title: "Камеры",
      items: [
        {
          icon: "light2",
          iconLabel: "Освещение",
          title: "Xiaomi Mi Air Purifier 2S",
          subtitle: "Включено",
        },
      ],
    },
  };
  for (let t = 0; t < 6; ++t) e.all.items = [...e.all.items, ...e.all.items];
  let l = Object.keys(e);
  function i(e) {
    let t = document.createElement("li");
    t.className = e.slim ? "event event_slim" : "event";
    let l = document.createElement("button");
    l.className = "event__button";
    let i = document.createElement("span");
    (i.className = `event__icon event__icon_${e.icon}`),
      i.setAttribute("role", "img"),
      e.iconLabel && i.setAttribute("aria-label", e.iconLabel),
      l.appendChild(i);
    let a = document.createElement("h4");
    if (
      ((a.className = "event__title"),
      (a.textContent = e.title),
      l.appendChild(a),
      e.subtitle)
    ) {
      let n = document.createElement("span");
      (n.className = "event__subtitle"),
        (n.textContent = e.subtitle),
        l.appendChild(n);
    }
    return t.appendChild(l), t;
  }
  let a = document.getElementById("app");
  a.appendChild(
    (function e() {
      let t = document.createElement("header");
      t.className = "header";
      let l = document.createElement("a");
      (l.href = "/"),
        (l.className = "header__logo"),
        l.setAttribute("aria-label", "Яндекс.Дом"),
        t.appendChild(l);
      let i = document.createElement("button");
      (i.className = "header__menu"), i.setAttribute("aria-expanded", "false");
      let a = document.createElement("span");
      (a.className = "header__menu-text a11y-hidden"),
        (a.textContent = "Открыть меню"),
        i.appendChild(a),
        t.appendChild(i);
      let n = document.createElement("ul");
      (n.className = "header__links"),
        [
          { text: "Сводка", href: "/", current: !0 },
          { text: "Устройства", href: "/devices" },
          { text: "Сценарии", href: "/scripts" },
        ].forEach((e) => {
          let t = document.createElement("li");
          t.className = "header__item";
          let l = document.createElement("a");
          (l.className = "header__link"),
            (l.href = e.href),
            (l.textContent = e.text),
            e.current &&
              (l.classList.add("header__link_current"),
              l.setAttribute("aria-current", "page")),
            t.appendChild(l),
            n.appendChild(t);
        }),
        t.appendChild(n);
      let s = !1,
        c = !1;
      return (
        i.addEventListener("click", () => {
          c || (c = !0),
            (s = !s),
            i.setAttribute("aria-expanded", s ? "true" : "false"),
            (a.textContent = s ? "Закрыть меню" : "Открыть меню"),
            n.classList.toggle("header__links_opened", s),
            c && n.classList.add("header__links-toggled");
        }),
        t
      );
    })()
  ),
    a.appendChild(
      (function t() {
        let a = document.createElement("main");
        a.className = "main";
        let n = document.createElement("section");
        n.className = "section main__general";
        let s = document.createElement("h2");
        (s.className =
          "section__title section__title-header section__main-title"),
          (s.textContent = "Главное"),
          n.appendChild(s);
        let c = document.createElement("div");
        c.className = "hero-dashboard";
        let r = document.createElement("div");
        r.className = "hero-dashboard__primary";
        let d = document.createElement("h3");
        (d.className = "hero-dashboard__title"),
          (d.textContent = "Привет, Геннадий!"),
          r.appendChild(d);
        let o = document.createElement("p");
        (o.className = "hero-dashboard__subtitle"),
          (o.textContent = "Двери и окна закрыты, сигнализация включена."),
          r.appendChild(o);
        let h = document.createElement("ul");
        h.className = "hero-dashboard__info";
        let m = document.createElement("li");
        m.className = "hero-dashboard__item";
        let p = document.createElement("div");
        (p.className = "hero-dashboard__item-title"),
          (p.textContent = "Дома"),
          m.appendChild(p);
        let b = document.createElement("div");
        (b.className = "hero-dashboard__item-details"),
          (b.innerHTML = '+23<span class="a11y-hidden">\xb0</span>'),
          m.appendChild(b);
        let u = document.createElement("li");
        u.className = "hero-dashboard__item";
        let E = document.createElement("div");
        (E.className = "hero-dashboard__item-title"),
          (E.textContent = "За окном"),
          u.appendChild(E);
        let C = document.createElement("div");
        (C.className = "hero-dashboard__item-details"),
          (C.innerHTML = '+19<span class="a11y-hidden">\xb0</span>');
        let L = document.createElement("div");
        (L.className = "hero-dashboard__icon hero-dashboard__icon_rain"),
          L.setAttribute("role", "img"),
          L.setAttribute("aria-label", "Дождь"),
          C.appendChild(L),
          u.appendChild(C),
          h.appendChild(m),
          h.appendChild(u),
          r.appendChild(h),
          c.appendChild(r);
        let f = document.createElement("ul");
        (f.className = "hero-dashboard__schedule"),
          [
            {
              icon: "temp",
              iconLabel: "Температура",
              title: "Philips Cooler",
              subtitle: "Начнет охлаждать в 16:30",
            },
            {
              icon: "light",
              iconLabel: "Освещение",
              title: "Xiaomi Yeelight LED Smart Bulb",
              subtitle: "Включится в 17:00",
            },
            {
              icon: "light",
              iconLabel: "Освещение",
              title: "Xiaomi Yeelight LED Smart Bulb",
              subtitle: "Включится в 17:00",
            },
          ].forEach((e) => {
            f.appendChild(i(e));
          }),
          c.appendChild(f),
          n.appendChild(c),
          a.appendChild(n);
        let g = document.createElement("section");
        g.className = "section main__scripts";
        let N = document.createElement("h2");
        (N.className = "section__title section__title-header"),
          (N.textContent = "Избранные сценарии"),
          g.appendChild(N);
        let v = document.createElement("ul");
        (v.className = "event-grid"),
          [
            {
              slim: !0,
              icon: "light2",
              iconLabel: "Освещение",
              title: "Выключить весь свет в доме и во дворе",
            },
            {
              slim: !0,
              icon: "schedule",
              iconLabel: "Расписание",
              title: "Я ухожу",
            },
            {
              slim: !0,
              icon: "light2",
              iconLabel: "Освещение",
              title: "Включить свет в коридоре",
            },
            {
              slim: !0,
              icon: "temp2",
              iconLabel: "Температура",
              title: "Набрать горячую ванну",
              subtitle: "Начнётся в 18:00",
            },
            {
              slim: !0,
              icon: "temp2",
              iconLabel: "Температура",
              title: "Сделать пол тёплым во всей квартире",
            },
          ].forEach((e) => {
            v.appendChild(i(e));
          }),
          g.appendChild(v),
          a.appendChild(g);
        let $ = document.createElement("section");
        $.className = "section main__devices";
        let A = document.createElement("div");
        A.className = "section__title";
        let y = document.createElement("h2");
        (y.className = "section__title-header"),
          (y.textContent = "Избранные устройства"),
          A.appendChild(y);
        let x = document.createElement("select");
        (x.className = "section__select"),
          l.forEach((t) => {
            let l = document.createElement("option");
            (l.value = t), (l.textContent = e[t].title), x.appendChild(l);
          }),
          (x.value = "all"),
          A.appendChild(x);
        let _ = document.createElement("ul");
        (_.className = "section__tabs"),
          _.setAttribute("role", "tablist"),
          l.forEach((t) => {
            let l = document.createElement("li");
            (l.className = "section__tab"),
              "all" === t && l.classList.add("section__tab_active"),
              l.setAttribute("role", "tab"),
              l.setAttribute("aria-selected", "all" === t ? "true" : "false"),
              l.setAttribute("tabindex", "all" === t ? "0" : "-1"),
              (l.id = `tab_${t}`),
              l.setAttribute("aria-controls", `panel_${t}`),
              (l.textContent = e[t].title),
              (l.dataset.tabkey = t),
              _.appendChild(l);
          }),
          A.appendChild(_),
          $.appendChild(A);
        let k = document.createElement("div");
        (k.className = "section__panel-wrapper"),
          l.forEach((t) => {
            let l = document.createElement("div");
            (l.className =
              "all" === t
                ? "section__panel"
                : "section__panel section__panel_hidden"),
              l.setAttribute("role", "tabpanel"),
              l.setAttribute("aria-hidden", "all" === t ? "false" : "true"),
              (l.id = `panel_${t}`),
              l.setAttribute("aria-labelledby", `tab_${t}`);
            let a = document.createElement("ul");
            (a.className = "section__panel-list"),
              e[t].items.forEach((e) => {
                let t = i(e);
                a.appendChild(t);
              }),
              l.appendChild(a),
              k.appendChild(l);
          });
        let S = document.createElement("div");
        (S.className = "section__arrow"),
          (S.style.display = "none"),
          k.appendChild(S),
          $.appendChild(k),
          a.appendChild($);
        let D = "all",
          X = _.querySelectorAll(".section__tab");
        function M() {
          let e = k.querySelector(
            ".section__panel:not(.section__panel_hidden)"
          );
          if (!e) return;
          let t = e.querySelector(".section__panel-list");
          if (!t) return;
          let l = 0;
          Array.from(t.children).forEach((e) => {
            l += e.offsetWidth;
          });
          let i = l > e.offsetWidth;
          S.style.display = i ? "block" : "none";
        }
        function P(e) {
          if (D === e) return;
          let t = document.querySelector(`.section__tab[data-tabkey="${D}"]`);
          t &&
            (t.classList.remove("section__tab_active"),
            t.setAttribute("aria-selected", "false"),
            t.setAttribute("tabindex", "-1")),
            (D = e);
          let l = document.querySelector(`.section__tab[data-tabkey="${e}"]`);
          l &&
            (l.classList.add("section__tab_active"),
            l.setAttribute("aria-selected", "true"),
            l.setAttribute("tabindex", "0")),
            (x.value = e);
          let i = k.querySelectorAll(".section__panel");
          i.forEach((t) => {
            let l = t.id === `panel_${e}`;
            t.classList.toggle("section__panel_hidden", !l),
              t.setAttribute("aria-hidden", l ? "false" : "true");
          }),
            setTimeout(M, 0);
        }
        return (
          x.addEventListener("input", (e) => P(e.target.value)),
          X.forEach((e) => {
            e.addEventListener("click", () => P(e.dataset.tabkey));
          }),
          S.addEventListener("click", () => {
            let e = k.querySelector(
              ".section__panel:not(.section__panel_hidden)"
            );
            e && e.scrollBy({ left: 400, behavior: "smooth" });
          }),
          setTimeout(() => {
            M(), window.addEventListener("resize", M);
            let e = new URLSearchParams(window.location.search),
              t = e.get("tab");
            t && l.includes(t) && P(t);
          }, 100),
          a
        );
      })()
    );
});