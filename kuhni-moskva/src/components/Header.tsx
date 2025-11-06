import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import clsx from "clsx";
import s from "./Header.module.css";

export default function Header() {
  const [hidden, setHidden] = useState(false);
  const [solid, setSolid] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0;

      // direction with small threshold
      const dirDown = y > lastY.current + 6;
      const dirUp   = y < lastY.current - 6;

      // hide on scroll down after threshold
      const pastTop = y >= 80;
      if (dirDown && pastTop) {
        setHidden(true);
      } else if (dirUp) {
        setHidden(false);
      }

      // transparent near top; solid after 80px or when scrolling up
      setSolid(pastTop || dirUp);

      lastY.current = y;
    };

    onScroll(); // init
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const headerClass = clsx(
    s.root,
    hidden && s.hidden,
    solid ? s.solid : s.transparent
  );

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    clsx(s.link, isActive && s.active);

  // 👇 swap logo by header mode
  const logoSrc = solid ? "/logo-black.svg" : "/logo-white.svg";
  const logoText = solid ? "/LogoText-black.svg" : "/LogoText-white.svg";

  const encode = (text: string) => encodeURIComponent(text);

  // construct message
  const message = `Здравствуйте! Хочу рассчитать проект кухни или шкафа.`;

  const waLink = `https://wa.me/79958825191?text=${encode(message)}`;
  const tgLink = `https://t.me/kuhnishkafi77?text=${encode(message)}`;

  return (
    <header className={headerClass}>
      <div className={s.inner}>

        <Link to="/" className={s.brand} aria-label="На главную">
          <img
            src={logoSrc}
            alt="ADS"
            className={s.logo}
            loading="eager"
            decoding="async"
          />
          <img
            src={logoText}
            alt="ADS"
            className={s.logo}
            loading="eager"
            decoding="async"
          />
        </Link>

        <nav className={s.nav} aria-label="Главное меню">
          <NavLink to="/catalog"  className={linkClass}>Каталог</NavLink>
          <NavLink to="/about"    className={linkClass}>О компании</NavLink>
          <NavLink to="/reviews"  className={linkClass}>Отзывы</NavLink>
        </nav>

        <div className={s.actions}>
          {solid ? (
            <>
              <a className={s.btnGhostDark} href={tgLink} target="_blank" rel="noreferrer">Telegram</a>
              <a className={s.btnGhostDark} href={waLink} target="_blank" rel="noreferrer">WhatsApp</a>
              <a className={s.btnPrimary}   href="/#calculator">Рассчитать</a>
            </>
          ) : (
            <>
              <a className={s.btnGhostLight} href={tgLink} target="_blank" rel="noreferrer">Telegram</a>
              <a className={s.btnGhostLight} href={waLink} target="_blank" rel="noreferrer">WhatsApp</a>
              <a className={s.btnGhostLight} href="/#calculator">Рассчитать</a>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
