import { useEffect, useMemo, useState } from "react";
import HeaderBlack from "../components/HeaderBlack";
import { setSEO } from "../utils/seo";
import s from "./Reviews.module.css";

type Review = {
  title: string;
  quote: string;
  name: string;
  images: string[];
};

const reviews: Review[] = [
  {
    title: "Кухня из шпона",
    quote:
      "Ну что сказать… кухня просто супер. Думали что шпон будет капризный, а оказалось, всё отлично. Цвет дуба прям как на картинке, все шкафчики ровные, двери закрываются мягко. Монтажники тоже норм, всё сделали за день. Респект!",
    name: "Марина Т.",
    images: ["/reviews/Reviewer_01_01.jpg", "/reviews/Reviewer_01_02.jpg", "/reviews/Reviewer_01_03.jpg"],
  },
  {
    title: "Кухня в пленке IDM (ADS Foil)",
    quote:
      "Очень понравилась кухня, фасады матовые, не маркие, ухаживать просто. Дизайн классный, прям под нашу гостиную подошла. Сборка правда заняла чуть дольше, чем обещали, но результат стоит того.",
    name: "Андрей С.",
    images: ["/reviews/Reviewer_02_01.jpeg", "/reviews/Reviewer_02_02.jpeg", "/reviews/Reviewer_02_03.jpeg"],
  },
  {
    title: "Гарнитур ADS PLAST (Пластик & HPL)",
    quote:
      "Заказывали гарнитур в новом доме. Сделали быстро, качество на высоте. Особенно понравилась столешница и ящики, всё плавно открывается. В общем, советую!",
    name: "Ольга К.",
    images: ["/reviews/Reviewer_03_01.jpeg", "/reviews/Reviewer_03_02.jpeg", "/reviews/Reviewer_03_03.jpeg"],
  },
  {
    title: "Кухня ADS ENA (Эмалированные фасады)",
    quote:
      "Эмалированные фасады это нечто! Я сначала сомневался, думал будут царапины через месяц, но пока все супер. Цвет яркий, глянец блестит как новый. Монтаж сделали аккуратно. Очень доволен.",
    name: "Игорь М.",
    images: ["/reviews/Reviewer_04_01.jpeg", "/reviews/Reviewer_04_02.jpeg", "/reviews/Reviewer_04_03.jpeg", "/reviews/Reviewer_04_04.jpeg"],
  },
  {
    title: "Шкаф на заказ (модульный)",
    quote:
      "Шкаф прекрасен, все аккуратно, двери без зазоров, но одна полка чуть криво стояла - поправили быстро. В целом, очень доволен. Быстро сделали, монтаж прошёл гладко.",
    name: "Светлана Р.",
    images: ["/reviews/Reviewer_05_01.jpeg", "/reviews/Reviewer_05_02.jpeg", "/reviews/Reviewer_05_03.jpeg", "/reviews/Reviewer_05_04.jpeg"],
  },
];

export default function Reviews() {
  const [indices, setIndices] = useState<Record<number, number>>({});
  const [lightbox, setLightbox] = useState<{ images: string[]; index: number; title: string } | null>(null);

  useEffect(() => {
    setSEO({
      title: "Отзывы клиентов ADS",
      description:
        "Отзывы клиентов о кухнях ADS: удобство, материалы, сервис и монтаж. Реальные проекты и впечатления.",
    });
  }, []);

  const getStart = (cardIdx: number, total: number) => {
    const val = indices[cardIdx] ?? 0;
    return Math.min(Math.max(val, 0), total ? total - 1 : 0);
  };

  const next = (cardIdx: number, total: number) =>
    setIndices((prev) => ({
      ...prev,
      [cardIdx]: (getStart(cardIdx, total) + 1) % total,
    }));

  const prev = (cardIdx: number, total: number) =>
    setIndices((prev) => ({
      ...prev,
      [cardIdx]: (getStart(cardIdx, total) - 1 + total) % total,
    }));

  const openLightbox = (images: string[], index: number, title: string) => {
    setLightbox({ images, index, title });
  };

  const closeLightbox = () => setLightbox(null);

  const nextLightbox = () => {
    setLightbox((state) => {
      if (!state) return state;
      const nextIndex = (state.index + 1) % state.images.length;
      return { ...state, index: nextIndex };
    });
  };

  const prevLightbox = () => {
    setLightbox((state) => {
      if (!state) return state;
      const nextIndex = (state.index - 1 + state.images.length) % state.images.length;
      return { ...state, index: nextIndex };
    });
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!lightbox) return;
      if (e.key === "ArrowRight") {
        nextLightbox();
      } else if (e.key === "ArrowLeft") {
        prevLightbox();
      } else if (e.key === "Escape") {
        closeLightbox();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  return (
    <>
      <HeaderBlack />
      <section className={s.page}>
        <div className={s.container}>
          <div className={s.hero}>
            <div className={s.heroMain}>
              <h1 className={s.title}>Проекты ADS</h1>
              <p className={s.lead}>
                Показываем готовые кухни и шкафы, монтаж и условия эксплуатации.
                Каждое фото — из собранных объектов, без рендеров.
              </p>
            </div>

            <div className={s.sideCard}>
              <div className={s.sideLabel}>Нужен расчёт?</div>
              <p className={s.sideText}>
                Подскажем подходящую коллекцию, обсудим материалы и составим смету под ваш
                объект.
              </p>
              <a className={s.btnPrimary} href="/#calculator">
                Рассчитать проект
              </a>
            </div>
          </div>

          <div className={s.grid}>
            {reviews.map((review, idx) => {
              const start = getStart(idx, review.images.length);
              const first = review.images[start];
              const second = review.images[(start + 1) % review.images.length];

              return (
                <article key={review.title} className={s.card}>
                  <div className={s.carousel}>
                    <button
                      className={`${s.arrow} ${s.arrowLeft}`}
                      onClick={() => prev(idx, review.images.length)}
                      aria-label="Предыдущая фотография"
                    >
                      ‹
                    </button>

                    <div className={s.carouselTrack}>
                      {[first, second].map((img) => (
                        <button
                          key={img}
                          className={s.shot}
                          onClick={() => openLightbox(review.images, review.images.indexOf(img), review.title)}
                          aria-label="Открыть фото"
                        >
                          <img src={img} alt={review.title} loading="lazy" />
                        </button>
                      ))}
                    </div>

                    <button
                      className={`${s.arrow} ${s.arrowRight}`}
                      onClick={() => next(idx, review.images.length)}
                      aria-label="Следующая фотография"
                    >
                      ›
                    </button>
                  </div>

                  <div className={s.body}>
                    <h3 className={s.cardTitle}>{review.title}</h3>
                    <p className={s.quote}>“{review.quote}”</p>
                    <div className={s.person}>
                      <div className={s.avatar}>{review.name[0]}</div>
                      <div>
                        <div className={s.name}>{review.name}</div>
                        <div className={s.meta}>Реализованный объект</div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {lightbox && (
            <div className={s.lightboxOverlay} onClick={closeLightbox}>
              <button className={s.lightboxClose} onClick={closeLightbox} aria-label="Закрыть">
                ×
              </button>
              {lightbox.images.length > 1 && (
                <>
                  <button
                    className={s.lightboxPrev}
                    onClick={(e) => {
                      e.stopPropagation();
                      prevLightbox();
                    }}
                    aria-label="Предыдущее фото"
                  >
                    ‹
                  </button>
                  <button
                    className={s.lightboxNext}
                    onClick={(e) => {
                      e.stopPropagation();
                      nextLightbox();
                    }}
                    aria-label="Следующее фото"
                  >
                    ›
                  </button>
                </>
              )}
              <div className={s.lightboxContent} onClick={(e) => e.stopPropagation()}>
                <img src={lightbox.images[lightbox.index]} alt={lightbox.title} />
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
