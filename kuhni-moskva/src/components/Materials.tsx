import s from "./Materials.module.css";
import materials from "../data/materials.json";

type Item = {
  slug: string;
  title: string;
  desc: string;
};

export default function Materials() {
  return (
    <div className={s.grid}>
      {(materials as Item[]).map((m) => {
        const img = `/materials/${m.slug}.jpg`;
        return (
          <article key={m.slug} className={s.card}>
            <div className={s.media}>
              <img className={s.img} src={img} alt={m.title} loading="lazy" />
            </div>
            <div className={s.body}>
              <h3 className={s.title}>{m.title}</h3>
              <p className={s.desc}>{m.desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
