import { Link, NavLink } from "react-router-dom";
import clsx from "clsx";
import s from "./HeaderBlack.module.css";

export default function HeaderBlack() {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    clsx(s.link, isActive && s.active);

  const encode = (text: string) => encodeURIComponent(text);
  const message = `Здравствуйте! Хочу рассчитать проект кухни или шкафа.`;
  const waLink = `https://wa.me/79958825191?text=${encode(message)}`;
  const tgLink = `https://t.me/kuhnishkafi77?text=${encode(message)}`;

  // always solid (scrolled) view
  const logoSrc = "/logo-black.svg";
  const logoText = "/LogoText-black.svg";

  return (
    <header className={clsx(s.root, s.solid)}>
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
          <NavLink to="/reviews" className={linkClass}>
            Отзывы
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            О компании
          </NavLink>
          <NavLink to="/catalog" className={linkClass}>
            Каталог
          </NavLink>
        </nav>

        <div className={s.actions}>
          <a
            className={s.btnGhostDark}
            href={tgLink}
            target="_blank"
            rel="noreferrer"
          >
            Telegram
          </a>
          <a
            className={s.btnGhostDark}
            href={waLink}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
          <a className={s.btnPrimary} href="/#calculator">
            Рассчитать
          </a>
        </div>
      </div>
    </header>
  );
}
