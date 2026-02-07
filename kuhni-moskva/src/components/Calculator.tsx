import { useState } from "react";
import s from "./Calculator.module.css";

type Material = "ПВХ" | "Пластик" | "Эмаль";
type KitchenHeight = "<1500" | "<2440" | ">2440";
type WardrobeHeight = "<2440" | ">2440";
type Fitting = "Boyard" | "Hettich" | "Blum";

export default function Calculator() {
  const [tab, setTab] = useState<"kitchen" | "wardrobe">("kitchen");
  const [length, setLength] = useState<number>(3);
  const [material, setMaterial] = useState<Material>("ПВХ");
  const [kitchenHeight, setKitchenHeight] = useState<KitchenHeight>("<1500");
  const [wardrobeHeight, setWardrobeHeight] = useState<WardrobeHeight>("<2440");
  const [fitting, setFitting] = useState<Fitting>("Boyard");

  const kitchenPrices: Record<Material, Record<KitchenHeight, number>> = {
    ПВХ: {
      "<1500": 49500,
      "<2440": 88000,
      ">2440": 93500,
    },
    Пластик: {
      "<1500": 60500,
      "<2440": 88000,
      ">2440": 102000,
    },
    Эмаль: {
      "<1500": 60500,
      "<2440": 101200,
      ">2440": 110000,
    },
  };

  const wardrobePrices: Record<Material, Record<WardrobeHeight, number>> = {
    ПВХ: {
      "<2440": 88000,
      ">2440": 93500,
    },
    Пластик: {
      "<2440": 88000,
      ">2440": 102000,
    },
    Эмаль: {
      "<2440": 101200,
      ">2440": 110000,
    },
  };

  const fittingCoef: Record<Fitting, number> = {
    Boyard: 1,
    Hettich: 1.15,
    Blum: 1.2,
  };

  const basePricePerMeter =
    tab === "kitchen"
      ? kitchenPrices[material][kitchenHeight]
      : wardrobePrices[material][wardrobeHeight];

  const pricePerMeterWithFitting = Math.round(
    basePricePerMeter * fittingCoef[fitting]
  );

  const totalPrice = Math.round(
    pricePerMeterWithFitting * (length > 0 ? length : 0)
  );
  const [lengthInput, setLengthInput] = useState<string>("3");

  // helper for encoded text
  const encode = (text: string) => encodeURIComponent(text);

  // construct message
  const message = `Здравствуйте! Хочу рассчитать проект ${
    tab === "kitchen" ? "кухни" : "шкафа"
  }.
  Длина: ${length} п.м.
  Материал: ${material}
  Высота: ${
    tab === "kitchen"
      ? kitchenHeight === "<1500"
        ? "до 1500 мм"
        : kitchenHeight === "<2440"
        ? "до 2440 мм"
        : "выше 2440 мм"
      : wardrobeHeight === "<2440"
      ? "до 2440 мм"
      : "выше 2440 мм"
  }
  Фурнитура: ${fitting}
  Ориентировочная цена: ${totalPrice.toLocaleString("ru-RU")} ₽`;

  const waLink = `https://wa.me/79958825191?text=${encode(message)}`;
  const tgLink = `https://t.me/kuhnishkafi77?text=${encode(message)}`;

  return (
    <section className={s.section} id="calculator">
      <div className={s.overlay}></div>
      <div className={s.inner}>
        <h2 className={s.title}>Калькулятор стоимости</h2>

        {/* tabs */}
        <div className={s.tabs}>
          <button
            type="button"
            onClick={() => setTab("kitchen")}
            className={`${s.tab} ${tab === "kitchen" ? s.activeTab : ""}`}
          >
            Кухни
          </button>
          <button
            type="button"
            onClick={() => setTab("wardrobe")}
            className={`${s.tab} ${tab === "wardrobe" ? s.activeTab : ""}`}
          >
            Шкафы
          </button>
        </div>

        <div className={s.card}>
          {/* длина */}
          <label className={s.label}>
            Длина {tab === "kitchen" ? "кухни" : "шкафа"} (п.м.)
          </label>
          <input
            className={s.input}
            type="number"
            min={0}
            step={0.5}
            value={lengthInput}
            onChange={(e) => {
              setLengthInput(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                const num = parseFloat(lengthInput);
                if (Number.isNaN(num) || num < 0) {
                  setLength(1);
                  setLengthInput("1");
                } else {
                  setLength(num);
                  setLengthInput(num.toString());
                }
              }
            }}
            onBlur={() => {
              const num = parseFloat(lengthInput);
              if (Number.isNaN(num) || num < 0) {
                setLength(1);
                setLengthInput("1");
              } else {
                setLength(num);
                setLengthInput(num.toString());
              }
            }}
          />

          {/* материал */}
          <label className={s.label}>Материал фасадов</label>
          <div className={s.optionGroup}>
            {(["ПВХ", "Пластик", "Эмаль"] as Material[]).map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => setMaterial(m)}
                className={`${s.optionBtn} ${
                  material === m ? s.optionBtnActive : ""
                }`}
              >
                {m}
              </button>
            ))}
          </div>

          {/* высота */}
          {tab === "kitchen" ? (
            <>
              <label className={s.label}>Высота кухни</label>
              <div className={s.optionGroup}>
                {[
                  { val: "<1500", label: "Меньше 1.5 м" },
                  { val: "<2440", label: "Меньше 2.5 м" },
                  { val: ">2440", label: "Больше 2.5 м" },
                ].map((h) => (
                  <button
                    key={h.val}
                    type="button"
                    onClick={() => setKitchenHeight(h.val as KitchenHeight)}
                    className={`${s.optionBtn} ${
                      kitchenHeight === h.val ? s.optionBtnActive : ""
                    }`}
                  >
                    {h.label}
                  </button>
                ))}
              </div>
            </>
          ) : (
            <>
              <label className={s.label}>Высота шкафа</label>
              <div className={s.optionGroup}>
                {[
                  { val: "<2440", label: "Меньше 2.5 м" },
                  { val: ">2440", label: "Больше 2.5 м" },
                ].map((h) => (
                  <button
                    key={h.val}
                    type="button"
                    onClick={() => setWardrobeHeight(h.val as WardrobeHeight)}
                    className={`${s.optionBtn} ${
                      wardrobeHeight === h.val ? s.optionBtnActive : ""
                    }`}
                  >
                    {h.label}
                  </button>
                ))}
              </div>
            </>
          )}

          {/* фурнитура */}
          <label className={s.label}>Фурнитура</label>
          <div className={s.optionGroup}>
            {(
              [
                { val: "Boyard", label: "Boyard NEO" },
                { val: "Hettich", label: "Hettich" },
                { val: "Blum", label: "Blum" },
              ] as { val: Fitting; label: string }[]
            ).map((f) => (
              <button
                key={f.val}
                type="button"
                onClick={() => setFitting(f.val)}
                className={`${s.optionBtn} ${
                  fitting === f.val ? s.optionBtnActive : ""
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* итоги */}
          <div className={s.result}>
            Итоговая цена: <b>{totalPrice.toLocaleString("ru-RU")} ₽</b>
          </div>
          <div className={s.note}>
            *Стоимость указана в базовой комплектации, свяжитесь с нами для
            точного расчёта
          </div>

          <div className={s.contactTitle}>Связаться со специалистом</div>
          <div className={s.actions}>
            <a
              href={tgLink}
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
              href={waLink}
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
