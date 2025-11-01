import s from "./Advantages.module.css";

type Advantage = { k: string; t: string; d: string };

function Icon({ name }: { name: string }) {
  const common = { width: 28, height: 28, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" } as any;

  switch (name) {
    case "warranty": // shield-check
      return (
        <svg {...common}>
          <path d="M12 3l7 3v5c0 5-3.5 9-7 10-3.5-1-7-5-7-10V6l7-3z" />
          <path d="M9 12l2.2 2.2L15 10" />
        </svg>
      );
    case "time": // clock
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      );
    case "design": // ruler-pencil
      return (
        <svg {...common}>
          <path d="M15 4l5 5-9 9H6v-5l9-9z" />
          <path d="M13 6l5 5" />
          <path d="M7 17l4 4" />
        </svg>
      );
    case "materials": // layers
      return (
        <svg {...common}>
          <path d="M12 3l9 5-9 5-9-5 9-5z" />
          <path d="M21 12l-9 5-9-5" />
          <path d="M21 17l-9 5-9-5" />
        </svg>
      );
    case "price": // badge
      return (
        <svg {...common}>
          <path d="M7 7h10v10H7z" />
          <path d="M7 7l2-2h6l2 2" />
          <path d="M9 12h6" />
        </svg>
      );
    case "contract": // file-check
      return (
        <svg {...common}>
          <path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7l-5-5z" />
          <path d="M14 2v5h5" />
          <path d="M9 14l2 2 4-4" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
        </svg>
      );
  }
}

export default function Advantages() {
  const list: Advantage[] = [
    { k: "warranty",  t: "Гарантия 12 месяцев",  d: "Официальная гарантия на все изделия" },
    { k: "time",      t: "Точные сроки",          d: "Собственное производство, отлаженная логистика" },
    { k: "design",    t: "Дизайн под ключ",       d: "Бесплатный расчёт, 3D-проект, замер при заказе" },
    { k: "materials", t: "Премиальные материалы", d: "Boyard, Blum, Hettich и др." },
    { k: "price",     t: "Честные цены",          d: "Прозрачный расчёт без посредников" },
    { k: "contract",  t: "Работаем по договору",  d: "Документы и понятные условия" },
  ];

  return (
    <div className={s.grid}>
      {list.map((i) => (
        <div key={i.t} className={s.item}>
          <div className={s.iconWrap}><Icon name={i.k} /></div>
          <div className={s.title}>{i.t}</div>
          <div className={s.desc}>{i.d}</div>
        </div>
      ))}
    </div>
  );
}
