import { useEffect } from "react";
import { setSEO } from "../utils/seo";
import s from "./Catalog.module.css";
import projects from "../data/projects.json";
import HeaderBlack from "../components/HeaderBlack";

type Project = {
  slug: string;
  title: string;
  category: string;
  cover: string;
  term: string;
  price: string;
  materials: string[];
  desc?: string;
};

export default function Catalog() {
  useEffect(() => {
    setSEO({
      title: "Каталог проектов кухонь и шкафов",
      description: "Готовые решения под ваши размеры: кухни, шкафы, гардеробные.",
    });
  }, []);

  const items = projects as Project[];

  return (
    <><HeaderBlack />
    <div className={s.page}>
      {/* filter bar */}
      <div className={s.filters}>
        <button className={`${s.filterBtn} ${s.filterBtnPrimary}`}>
          <span className={s.filterIcon}>⚙</span>
          Все фильтры
        </button>
        <button className={s.filterBtn}>Кухни</button>
        <button className={s.filterBtn}>Шкафы-купе</button>
        <button className={s.filterBtn}>Прихожие</button>
        <button className={s.filterBtn}>Гардеробные</button>
        <button className={s.filterBtn}>Мебель для гостиных</button>
        <button className={s.filterBtn}>Мебель для ванных</button>
      </div>

      {/* cards */}
      <div className={s.grid}>
        {items.map((item, idx) => (
          <article key={item.slug + idx} className={s.card}>
            <div className={s.media}>
              <img src={item.cover} alt={item.title} className={s.img} />
              {/* tags over image */}
              <div className={s.tags}>
                {item.materials.map((m) => (
                  <span key={m} className={s.tag}>
                    {m}
                  </span>
                ))}
              </div>

              {/* arrows like in screenshot (mock) */}
              <button className={`${s.arrow} ${s.arrowLeft}`} aria-label="Предыдущая">
                ‹
              </button>
              <button className={`${s.arrow} ${s.arrowRight}`} aria-label="Следующая">
                ›
              </button>

              {/* fullscreen icon */}
              <button className={s.full} aria-label="Открыть изображение">
                ⤢
              </button>

              {/* dots pagination mock */}
              <div className={s.dots}>
                <span className={`${s.dot} ${s.dotActive}`} />
                <span className={s.dot} />
                <span className={s.dot} />
                <span className={s.dot} />
              </div>
            </div>

            <div className={s.body}>
              <div className={s.category}>{item.category}</div>
              <h3 className={s.title}>{item.title}</h3>
              {item.desc ? <p className={s.desc}>{item.desc}</p> : null}
            </div>

            <div className={s.footer}>
              <div className={s.footerLeft}>
                <div className={s.priceLabel}>Цена за погонный метр —</div>
                <div className={s.price}>{item.price}</div>
              </div>
              <button className={s.cta}>Узнать цену вашей кухни</button>
            </div>
          </article>
        ))}
      </div>
    </div>
    </>
  );
}
