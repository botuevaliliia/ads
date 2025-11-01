import s from "./Hero.module.css";

export default function Hero() {
  const bg = "/og-cover.jpg"; // ensure this exists in /public
  return (
    <section className={s.hero}>
      <div className={s.bg} style={{ backgroundImage: `url(${bg})` }}>
        {/* left-to-right scrim for contrast */}
        <div className={s.scrim} />
        <div className={s.inner}>
          <div className={s.content}>
            <h1 className={s.title}>Кухни и корпусная мебель на заказ в Москве и МО</h1>
            <p className={s.sub}>
              От идеи до установки. Собственное производство, премиальные материалы, гарантия 12 месяцев.
            </p>
            <div className={s.actions}>
              <a href="/catalog" className={`${s.cta} ${s.ctaSecondary}`}>Портфолио</a>
              <a href="#contact" className={s.cta}>Рассчитать стоимость</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
