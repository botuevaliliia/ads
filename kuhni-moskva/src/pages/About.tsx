import s from "./About.module.css";
import Header from "../components/Header";

export default function About() {
  const bg = "/og-cover.jpg";

  return (
    <>
      <Header />
      <section className={s.hero}>
        <div className={s.bg} style={{ backgroundImage: `url(${bg})` }}>
          {/* left-to-right scrim for contrast */}
          <div className={s.scrim} />
          <div className={s.inner}>
            <div className={s.content}>
              <h1 className="title">О компании</h1>
              <p className="sub">
                Мы — Андрей и Давлет, основатели ADS. Начав с небольшого цеха,
                мы создали современное производство в Пензе, где изготавливаем
                мебель полного цикла - от проекта до установки.
              </p>

              <p>
                Используем профессиональное оборудование и надёжные материалы
                EGGER, Kronospan, Boyard, Hettich, Blum. Контролируем качество
                на каждом этапе и предоставляем{" "}
                <strong>гарантию 12 месяцев</strong>.
              </p>

              <p>
                Наш подход — индивидуальность, честность и внимание к деталям.
                Мебель ADS создаётся не по шаблону, а под ваш стиль жизни.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
