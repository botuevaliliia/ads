import { useEffect, useState } from "react";
import HeaderBlack from "../components/HeaderBlack";
import { setSEO } from "../utils/seo";
import s from "./Catalog.module.css";

type Showcase = {
  title: string;
  description: string;
  location?: string;
  type: string;
  tags: string[];
  image: string;
  gallery: string[];
  details: string;
  materials: {
    facades: string;
    shpon?: string;
    corpus: string;
    coating: string;
    tabletop: string;
    hardware: string;
  };
  benefits: string[];
  price?: string;
};

const showcases: Showcase[] = [
  {
    title: "ADS Nature",
    description:
      "Кухня из шпона — это идеальное решение для тех, кто ценит естественную красоту дерева, современный дизайн и высокую практичность. Благодаря уникальному природному рисунку каждая кухня получается неповторимой, а прочные материалы и профессиональная обработка обеспечивают длительный срок службы.",
    type: "Шпон",
    tags: ["Натуральные фактуры", "Тёплое освещение", "Минимализм", "Без ручек"],
    image: "/catalog/nature/Nature_01.jpg",
    gallery: ["/catalog/nature/Nature_01.jpg", "/catalog/nature/Nature_02.jpg", "/catalog/nature/Nature_03.jpg", "/catalog/nature/Nature_04.jpg", "/catalog/nature/Nature_05.jpg"],
    details:
      "Фасады с тёплой текстурой, встроенные ручки, цельная подсветка по периметру. Максимум хранения и лёгкая уборка благодаря ровным плоскостям.",
    materials: {
      facades: "МДФ + натуральный шпон (дуб / орех / ясень)",
      shpon: "Тонировка, шлифование, лакировка (мат или полумат)",
      corpus: "ЛДСП Egger / МДФ, кромка в цвет",
      coating: "Полиуретановый лак, стойкий к влаге и УФ",
      tabletop: "Кварц / акрил / HPL / массив",
      hardware: "Blum / Hettich / Boyard / GTV (доводчики)",
    },
    benefits: [
      "Живой рисунок дерева и тёплая фактура.",
      "Защитная обработка против влаги и перепадов температуры.",
      "Скрытые ручки и ровные плоскости для лёгкой уборки.",
      "Настраиваемые тона — от светлого сканди до насыщённых оттенков.",
    ],
    price: "От 110 тыс. руб за м/п",
  },
  {
    title: "ADS Foil",
    description:
      "Кухня в пленке IDM (ADS Foil) — это современное решение для тех, кто ценит стильный дизайн, практичность и долговечность. Гладкая поверхность фасадов создаёт эффект дорогой дизайнерской мебели, легко ухаживается и сохраняет насыщенные цвета даже при ежедневной эксплуатации.",
    type: "Пленка & IDM",
    tags: ["Глянец", "Контраст", "LED-подсветка", "Современный стиль"],
    image: "/catalog/foil/Foil_01.jpg",
    gallery: ["/catalog/foil/Foil_01.jpg", "/catalog/foil/Foil_02.jpg", "/catalog/foil/Foil_03.jpeg", "/catalog/foil/Foil_04.jpeg", "/catalog/foil/Foil_05.jpeg"],
    details:
      "Глянцевые плоскости усиливают свет и подчёркивают линии. Продуманное хранение с доводчиками, интегрированная подсветка рабочей зоны.",
    materials: {
      facades: "МДФ + плёнка IDM (мат / глянец)",
      shpon: "Ровная плёнка без стыков, стойкая к царапинам",
      corpus: "ЛДСП Egger / МДФ, кромка 2мм",
      coating: "Плёнка IDM (ADS Foil), устойчива к влаге и химии",
      tabletop: "Кварц / акрил / HPL / натуральный камень",
      hardware: "Blum / Hettich / Boyard / GTV (плавное закрывание)",
    },
    benefits: [
      "Гладкая современная поверхность без видимых стыков.",
      "Мат и глянец — легко подобрать под интерьер и освещение.",
      "Хорошо переносит влагу и бытовую химию, не выцветает.",
      "Чёткая геометрия и подсветка подчёркивают линии кухни.",
    ],
    price: "От 65 тыс. руб за м/п",
  },
  {
    title: "ADS Ena",
    description:
      "Кухня с эмалированными фасадами — это классическое решение, сочетающее в себе элегантность, практичность и долговечность. Благодаря качественному покрытию и профессиональной обработке, такая кухня прослужит долгие годы, сохраняя первоначальный вид и насыщенные цвета.",
    type: "Эмалированные фасады",
    tags: ["Сканди", "Интегрированные ручки", "Матовое покрытие", "Комфорт"],
    image: "/catalog/ena/Ena_01.jpg",
    gallery: ["/catalog/ena/Ena_01.jpg", "/catalog/ena/Ena_02.jpg", "/catalog/ena/Ena_03.jpg", "/catalog/ena/Ena_04.jpg", "/catalog/ena/Ena_05.jpg"],
    details:
      "Матовое покрытие без бликов, скрытые ручки и умная внутренняя фурнитура. Спокойные тона поддерживают визуальный порядок на кухне.",
    materials: {
      facades: "МДФ + эмаль (мат / глянец, любой RAL/NCS)",
      shpon: "Гладкое покрытие без фактуры, цвет на заказ",
      corpus: "ЛДСП Egger / МДФ, влагостойкая кромка",
      coating: "Эмаль, устойчивая к влаге и царапинам",
      tabletop: "Кварц / акрил / HPL / натуральный камень",
      hardware: "Blum / Hettich / Boyard / GTV",
    },
    benefits: [
      "Ровное матовое или глянцевое покрытие без швов.",
      "Точная окраска в нужный оттенок, легко поддержать дизайн.",
      "Защита от влаги и сколов, удобно ухаживать.",
      "Скрытые ручки и спокойная палитра дают визуальный порядок.",
    ],
    price: "От 80 тыс. руб за м/п",
  },
  {
    title: "ADS Plast",
    description: "Кухня с пластиковыми фасадами (HPL) — это практичное решение для тех, кто ценит высокую износостойкость, стильный дизайн и простоту в уходе. Благодаря современным технологиям обработки, такая кухня прослужит долгие годы, сохраняя первоначальный вид и насыщенные цвета даже при ежедневной эксплуатации.",
    type: "Пластик & HPL",
    tags: ["Износостойкие материалы", "Практичность", "Лёгкий уход", "Функционал"],
    image: "/catalog/plast/Plast_01.jpg",
    gallery: ["/catalog/plast/Plast_01.jpg", "/catalog/plast/Plast_02.jpg", "/catalog/plast/Plast_03.jpg", "/catalog/plast/Plast_04.jpg", "/catalog/plast/Plast_05.jpg"],
    details:
      "Устойчивые к царапинам поверхности, влагостойкие материалы и эргономичная планировка. Лёгкая очистка и надёжная фурнитура под ежедневные нагрузки.",
    materials: {
      facades: "МДФ + пластик HPL (мат / глянец)",
      shpon: "Кромка в цвет, устойчивая к ударам",
      corpus: "ЛДСП Egger / МДФ, влагостойкие торцы",
      coating: "Пластик HPL с высокой износостойкостью",
      tabletop: "Кварц / акрил / HPL / натуральный камень",
      hardware: "Blum / Hettich / Boyard / GTV",
    },
    benefits: [
      "Поверхность держит удары, влагу и высокую температуру.",
      "Простая уборка — пятна и жир легко снимаются.",
      "Мат и глянец с большими выбором фактур и декоров.",
      "Надёжная фурнитура выдерживает ежедневные нагрузки.",
    ],
    price: "От 75 тыс. руб за м/п",
  },
];

export default function Catalog() {
  const [selected, setSelected] = useState<Showcase | null>(null);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);
  const [carouselIndex, setCarouselIndex] = useState<number>(0);

  const buildWALink = (item: Showcase) => {
    const text = encodeURIComponent(
      `Здравствуйте! Хочу обсудить коллекцию "${item.title}" (${item.type}) и рассчитать проект.`
    );
    return `https://wa.me/79958825191?text=${text}`;
  };

  useEffect(() => {
    setSEO({
      title: "Коллекции ADS: Nature, Foil, Ena, Plast",
      description:
        "Четыре готовые коллекции ADS: от тёплого Nature до практичного Plast. Подбирайте стиль и рассчитывайте проект под свой интерьер.",
    });
  }, []);

  useEffect(() => {
    if (selected) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selected]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxImage) {
        if (e.key === 'ArrowLeft') {
          prevImage();
        } else if (e.key === 'ArrowRight') {
          nextImage();
        } else if (e.key === 'Escape') {
          closeLightbox();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxImage, lightboxIndex, selected]);

  const openLightbox = (image: string, index: number) => {
    setLightboxImage(image);
    setLightboxIndex(index);
  };

  useEffect(() => {
    if (selected) setCarouselIndex(0);
  }, [selected]);

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const nextImage = () => {
    if (selected && lightboxIndex < selected.gallery.length - 1) {
      const newIndex = lightboxIndex + 1;
      setLightboxIndex(newIndex);
      setLightboxImage(selected.gallery[newIndex]);
    }
  };

  const prevImage = () => {
    if (selected && lightboxIndex > 0) {
      const newIndex = lightboxIndex - 1;
      setLightboxIndex(newIndex);
      setLightboxImage(selected.gallery[newIndex]);
    }
  };

  const nextSlide = () => {
    if (!selected) return;
    setCarouselIndex((prev) => (prev + 1) % selected.gallery.length);
  };

  const prevSlideMain = () => {
    if (!selected) return;
    setCarouselIndex((prev) =>
      prev === 0 ? selected.gallery.length - 1 : prev - 1
    );
  };

  return (
    <>
      <HeaderBlack />
      <section className={s.page}>
        <div className={s.container}>
          <div className={s.hero}>
            <div>
              <h1 className={s.title}>Решения для разных сценариев</h1>
              <p className={s.lead}>
                Четыре коллекции, в каждой — свой акцент: от природных текстур до
                глянцевых фасадов. Выбирайте атмосферу, мы адаптируем под размеры и
                планировку вашего пространства.
              </p>
            </div>
          </div>

          <div className={s.list}>
            {showcases.map((item) => (
              <article key={item.title} className={s.card}>
                <div className={s.text}>
                  <p className={s.series}>Коллекция</p>
                  <h3 className={s.cardTitle}>{item.title}</h3>
                  <p className={s.desc}>{item.description}</p>

                  <div className={s.meta}>
                    <div className={s.metaBlock}>
                      <div className={s.metaLabel}>Покрытие</div>
                      <div className={s.metaValue}>{item.type}</div>
                    </div>
                  </div>

                  {/* <div className={s.tags}>
                    {item.tags.map((tag) => (
                      <span key={tag} className={s.tag}>
                        {tag}
                      </span>
                    ))}
                  </div> */}

                  <div className={s.actions}>
                    <button
                      className={s.btnPrimary}
                      type="button"
                      onClick={() => setSelected(item)}
                    >
                      Подробнее
                    </button>
                    <a
                      className={s.btnGhost}
                      href={buildWALink(item)}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Обсудить детали
                    </a>
                  </div>
                </div>

                <div className={s.media}>
                  <img src={item.image} alt={item.title} loading="lazy" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {selected ? (
        <div className={s.modalOverlay} onClick={() => setSelected(null)}>
          <div
            className={s.modal}
            role="dialog"
            aria-modal="true"
            aria-label={`Подробнее о ${selected.title}`}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={s.close} onClick={() => setSelected(null)} aria-label="Закрыть">
              ×
            </button>

            <div className={s.modalHeader}>
              <p className={s.series}>Коллекция</p>
              <h3 className={s.cardTitle}>{selected.title}</h3>
              <p className={s.desc}>{selected.details}</p>
            </div>

            <div className={s.modalMeta}>
              <div>
                <div className={s.metaLabel}>Тип проекта</div>
                <div className={s.metaValue}>{selected.type}</div>
              </div>
              {selected.price && (
                <div>
                  <div className={s.metaLabel}>Стоимость</div>
                  <div className={s.metaValue}>{selected.price}</div>
                </div>
              )}
            </div>

            {/* <div className={s.modalTags}>
              {selected.tags.map((tag) => (
                <span key={tag} className={s.tag}>
                  {tag}
                </span>
              ))}
            </div> */}

            <div className={s.carousel}>
              <button className={s.carouselArrow} onClick={prevSlideMain} aria-label="Предыдущий снимок">
                ‹
              </button>
              <div
                className={s.carouselMain}
                onClick={() => openLightbox(selected.gallery[carouselIndex], carouselIndex)}
              >
                <img src={selected.gallery[carouselIndex]} alt={selected.title} loading="lazy" />
              </div>
              <button className={s.carouselArrow} onClick={nextSlide} aria-label="Следующий снимок">
                ›
              </button>
            </div>

            <div className={s.carouselThumbs}>
              {selected.gallery.map((img, idx) => (
                <button
                  key={img}
                  className={`${s.carouselThumb} ${idx === carouselIndex ? s.thumbActive : ""}`}
                  onClick={() => setCarouselIndex(idx)}
                  aria-label={`Показать фото ${idx + 1}`}
                >
                  <img src={img} alt={selected.title} loading="lazy" />
                </button>
              ))}
            </div>

            <div className={s.modalSections}>
              <div className={s.modalSection}>
                <div className={s.sectionTitle}>Материалы</div>
                <div className={s.materialGrid}>
                  <div className={s.materialRow}>
                    <span className={s.materialLabel}>Фасады</span>
                    <span className={s.materialValue}>{selected.materials.facades}</span>
                  </div>
                  {selected.materials.shpon && (
                    <div className={s.materialRow}>
                      <span className={s.materialLabel}>Шпон / отделка</span>
                      <span className={s.materialValue}>{selected.materials.shpon}</span>
                    </div>
                  )}
                  <div className={s.materialRow}>
                    <span className={s.materialLabel}>Корпус</span>
                    <span className={s.materialValue}>{selected.materials.corpus}</span>
                  </div>
                  <div className={s.materialRow}>
                    <span className={s.materialLabel}>Покрытие</span>
                    <span className={s.materialValue}>{selected.materials.coating}</span>
                  </div>
                  <div className={s.materialRow}>
                    <span className={s.materialLabel}>Столешница</span>
                    <span className={s.materialValue}>{selected.materials.tabletop}</span>
                  </div>
                  <div className={s.materialRow}>
                    <span className={s.materialLabel}>Фурнитура</span>
                    <span className={s.materialValue}>{selected.materials.hardware}</span>
                  </div>
                </div>
              </div>

              <div className={s.modalSection}>
                <div className={s.sectionTitle}>Преимущества</div>
                <ul className={s.benefitsList}>
                  {selected.benefits.map((line, idx) => (
                    <li key={idx}>{line}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className={s.modalActions}>
              <a className={s.btnPrimary} href={buildWALink(selected)} target="_blank" rel="noreferrer">
                Рассчитать проект
              </a>
            </div>
          </div>
        </div>
      ) : null}

      {lightboxImage && (
        <div className={s.lightboxOverlay} onClick={closeLightbox}>
          <button
            className={s.lightboxClose}
            onClick={closeLightbox}
            aria-label="Закрыть"
          >
            ×
          </button>

          {selected && lightboxIndex > 0 && (
            <button
              className={s.lightboxPrev}
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              aria-label="Предыдущее изображение"
            >
              ‹
            </button>
          )}

          <div className={s.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <img src={lightboxImage} alt="Увеличенное изображение" />
          </div>

          {selected && lightboxIndex < selected.gallery.length - 1 && (
            <button
              className={s.lightboxNext}
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              aria-label="Следующее изображение"
            >
              ›
            </button>
          )}
        </div>
      )}
    </>
  );
}
