import s from "./About.module.css";
import Header from "../components/Header";

export default function About() {
  const bg = "/og-cover.jpg";

  const teamMembers = [
    {
      name: "Андрей",
      role: "Маркетолог",
      description:
        "Ваш первый контакт с нашей компанией. Я отвечаю за коммуникацию, рекламу и клиентский сервис. Помогу подобрать стиль, рассчитать стоимость, объясню все нюансы и проведу вас от первой заявки до готового проекта. Главная цель — чтобы каждая кухня или шкаф стали именно тем, что вы представляли.",
      image: "/team/andrei.jpg",
    },
    {
      name: "Довлет",
      role: "Технолог",
      description:
        "Мозг нашего производства. Отвечаю за техническую часть: проектирование, чертежи, точные размеры и подбор материалов. Каждая деталь мебели проходит проверку — от фрезеровки фасадов до финальной сборки корпуса. Благодаря мне кухня собирается идеально, как в проекте.",
      image: "/team/dovlet.jpg",
    },
    {
      name: "Александр",
      role: "Монтаж и установка",
      description:
        "Человек, который завершает всю работу. Я занимаюсь сборкой и установкой мебели на объекте. Главное — аккуратность, точность и уважение к вашему дому. Слежу, чтобы каждая петля, фасад и ручка стояли безупречно. Уезжаю только тогда, когда всё выглядит идеально.",
      image: "/team/alexander.jpg",
    },
  ];

  return (
    <>
      <Header />
      <section className={s.hero}>
        <div className={s.bg} style={{ backgroundImage: `url(${bg})` }}>
          <div className={s.scrim} />
          <div className={s.inner}>
            <div className={s.content}>
              <h1 className="title">О компании</h1>
              <p className="sub">
                ADS кухни шкафы — это команда профессионалов, которая создает
                функциональную и стильную мебель под ваш интерьер. Мы
                проектируем и изготавливаем кухни, шкафы, гардеробные, прихожие
                и тумбы на заказ, точно под размеры и стиль вашего помещения.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={s.teamSection}>
        <div className={s.teamContainer}>
          <div className={s.teamHeader}>
            <h2 className={s.teamTitle}>Команда</h2>
            <p className={s.teamSubtitle}>
              Сосредоточившись на ваших уникальных потребностях, наша команда
              предоставляет решения, которые сочетают глубокие знания отрасли и
              передовые стратегии для обеспечения долгосрочного роста.
            </p>
          </div>

          <div className={s.teamGrid}>
            {teamMembers.map((member, index) => (
              <div key={index} className={s.teamCard}>
                <div className={s.teamImageWrapper}>
                  <img
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    className={s.teamImage}
                  />
                </div>
                <div className={s.teamInfo}>
                  <h3 className={s.teamMemberName}>{member.name}</h3>
                  <p className={s.teamMemberRole}>{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
