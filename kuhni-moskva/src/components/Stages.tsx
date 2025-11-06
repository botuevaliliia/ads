import s from "./Stages.module.css";

const STAGES = [
  { id: "01", title: "Заявка и консультация", desc: "Уточняем задачу и бюджет" },
  { id: "02", title: "Замер и дизайн-проект", desc: "Выезжаем и проектируем" },
  { id: "03", title: "Производство", desc: "Запускаем на своём производстве" },
  { id: "04", title: "Доставка и монтаж", desc: "Привезём и аккуратно соберём" },
  { id: "05", title: "Гарантия и сервис", desc: "12 месяцев поддержки" },
];

export default function Stages() {
  return (
    <section className={s.section} id="stages">
      <div className={s.overlay} />

      <div className={s.head}>
        <h2 className={s.title}>Этапы работы</h2>
        <p className={s.sub}>От первой заявки до законченной кухни. Прозрачно и по шагам.</p>
      </div>

      <div className={s.line}>
        {STAGES.map((stage) => (
          <div key={stage.id} className={s.circleWrap}>
            <div className={s.circle}>
              <span className={s.num}>{stage.id}</span>
              <h3 className={s.stageTitle}>{stage.title}</h3>
              <p className={s.stageDesc}>{stage.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
