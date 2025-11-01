import { useState } from "react";
import s from "./Calculator.module.css";

export default function Calculator() {
  const [length, setLength] = useState(3);
  const [material, setMaterial] = useState("МДФ");
  const [complexity, setComplexity] = useState(1);

  // basic formula for estimation
  const basePrices: Record<string, number> = {
    "МДФ": 50000,
    "Шпон": 65000,
    "Эмаль": 70000,
    "Пластик": 55000,
    "Акрил": 75000,
    "Массив": 90000,
    "Стекло": 80000,
  };
  const estimatePrice = (length: number, material: string, complexity: number) =>
    Math.round((basePrices[material] || 50000) * length * (0.8 + complexity * 0.2));

  const price = estimatePrice(length, material, complexity);

  return (
    <section className={s.section} id="calculator">
      <div className={s.overlay}></div>
      <div className={s.inner}>
        <h2 className={s.title}>Калькулятор стоимости кухни</h2>
        {/* <p className={s.sub}>
          Укажите длину, материал и примерную сложность — получите ориентировочную цену.
        </p> */}

        <div className={s.card}>
          <label className={s.label}>Длина кухни (п.м.)</label>
          <input
            className={s.input}
            type="number"
            min={0}
            step="0.5"
            value={length}
            onChange={(e) => setLength(parseFloat(e.target.value))}
          />

          <label className={s.label}>Материал</label>
          <select
            className={s.select}
            value={material}
            onChange={(e) => setMaterial(e.target.value)}
          >
            {["МДФ", "Шпон", "Эмаль", "Пластик", "Акрил", "Массив", "Стекло"].map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>

          <label className={s.label}>Сложность (1–3)</label>
          <input
            className={s.range}
            type="range"
            min={1}
            max={3}
            value={complexity}
            onChange={(e) => setComplexity(parseInt(e.target.value))}
          />

          <div className={s.result}>
            Оценка: <b>{price.toLocaleString("ru-RU")} ₽</b>
          </div>
          <div className={s.note}>
            *Черновая оценка. Итог зависит от материалов и комплектации.
          </div>
        
          <div className={s.contactTitle}>Связаться со специалистом</div>
          <div className={s.actions}>
            <a
              href="https://t.me/kuhnyashkaf"
              target="_blank"
              rel="noreferrer"
              className={`${s.btn} ${s.tg}`}
            >
              <svg className={s.icon} viewBox="0 0 24 24" fill="currentColor">
                <path d="M21.9 4.6c.3-.98-.6-1.86-1.54-1.5L2.62 10.06c-1.02.4-.97 1.86.08 2.18l4.56 1.41 1.76 5.64c.31.99 1.62 1.1 2.12.18l2.7-4.95 4.9 3.58c.84.61 2.02.16 2.25-.85L21.9 4.6zM8.3 12.9l9.2-5.67-6.63 6.86-.2 3.24-2.38-4.43z" />
              </svg>
              Telegram
            </a>
            <a
              href="https://wa.me/79958825191"
              target="_blank"
              rel="noreferrer"
              className={`${s.btn} ${s.wa}`}
            >
              <svg className={s.icon} viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.52 3.48A11.88 11.88 0 0 0 12.06 0C5.44 0 .1 5.35.1 11.97c0 2.11.55 4.15 1.6 5.98L0 24l6.2-1.63a11.86 11.86 0 0 0 5.87 1.55h.01c6.62 0 11.97-5.35 11.97-11.97 0-3.2-1.25-6.2-3.53-8.47zM12.07 21.2h-.01a9.2 9.2 0 0 1-4.69-1.28l-.34-.2-3.68.97.98-3.58-.22-.37a9.1 9.1 0 0 1-1.39-4.83c0-5.05 4.11-9.16 9.17-9.16 2.45 0 4.76.95 6.5 2.7a9.14 9.14 0 0 1 2.68 6.49c0 5.05-4.11 9.16-9.17 9.16zm5.27-6.85c-.29-.15-1.7-.84-1.96-.94-.26-.1-.45-.15-.64.15-.19.29-.74.94-.91 1.14-.17.2-.34.22-.63.07-.29-.15-1.23-.45-2.34-1.43-.86-.76-1.44-1.7-1.61-1.98-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.2-.29.29-.48.1-.2.05-.37-.02-.52-.07-.15-.64-1.55-.88-2.12-.23-.56-.47-.49-.64-.5l-.55-.01c-.2 0-.52.07-.79.37-.27.29-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.21 5.08 4.5.71.31 1.27.49 1.7.62.71.22 1.35.19 1.86.12.57-.09 1.7-.69 1.94-1.36.24-.67.24-1.25.17-1.37-.07-.12-.26-.19-.55-.34z" />
              </svg>
              WhatsApp
            </a>
          </div>
          </div>
      </div>
    </section>
  );
}
