import { useEffect } from "react";
import Hero from "../components/Hero";
import Materials from "../components/Materials";
import Gallery from "../components/Gallery";
import Advantages from "../components/Advantages";
import Calculator from "../components/Calculator";
import { setSEO } from "../utils/seo"; 
import Header from "../components/Header";
import Stages from "../components/Stages";

export default function Home() {
  useEffect(() => {
    setSEO({
      title: "Кухни и корпусная мебель на заказ в Москве и МО",
      description:
        "Премиум и бизнес-сегмент. Собственное производство, 3D-проект, бесплатный замер при заказе, гарантия 12 месяцев. Кухни, шкафы-купе, гардеробные.",
    });
  }, []);

  return (
    <>
    <Header />
      <Hero />

      <section className="section">
        <div className="container">
          <h2>Почему выбирают нас</h2>
          <p className="text-muted">
            Работаем по договору. Делаем 3D-проект, соблюдаем сроки и бюджет.
            Честные цены — без посредников, собственное производство.
          </p>
          <div style={{ marginTop: 12 }}>
            <Advantages />
          </div>
        </div>
      </section>

      <section className="section section">
        <div className="container">
          <h2>Выполненные проекты</h2>
          <p className="text-muted">
            Галерея реальных работ.
          </p>
          <div style={{ marginTop: 12 }}>
            <Gallery limit={9} />
          </div>
          <div style={{ marginTop: 16 }}>
            <a className="btn btn-outline" href="/reviews">
              Смотреть отзывы
            </a>
          </div>
        </div>
      </section>

      <Calculator/>

      <section className="section">
        <div className="container">
          <h2>Наши материалы</h2>
          <Materials />
        </div>
      </section>
      <Stages />

      <section className="section section">
        <div className="container">
          <div className="card" style={{ padding: 20, display: "flex", gap: 12, alignItems: "center", justifyContent: "space-between", flexWrap: "wrap" }}>
            <div>
              <h3 style={{ margin: 0 }}>Готовы обсудить ваш проект?</h3>
              <div className="text-muted">
                Бесплатная консультация и предварительный расчёт за 15 минут.
              </div>
            </div>
            <div style={{ display: "flex", gap: 10 }}>
              <a className="btn btn-primary" href="#contact">Оставить заявку</a>
              <a className="btn btn-outline" href="/reviews">Портфолио</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
