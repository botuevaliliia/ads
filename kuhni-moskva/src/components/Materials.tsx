import { useState } from "react";
import s from "./Materials.module.css";
import materials from "../data/materials.json";

type MaterialItem = {
  slug: string;
  title: string;
  desc: string;
};

type MaterialGroup = {
  id: string;
  title: string;
  items: MaterialItem[];
};

// small helper component for per-card image fallback
function MaterialImage({ slug, alt }: { slug: string; alt: string }) {
  const [imgSrc, setImgSrc] = useState(`/materials/${slug}.jpg`);

  const handleError = () => {
    if (imgSrc.endsWith(".jpg")) {
      setImgSrc(`/materials/${slug}.jpeg`);
    } else if (imgSrc.endsWith(".jpeg")) {
      setImgSrc(`/materials/${slug}.png`);
    } else {
      setImgSrc("/materials/placeholder.jpg");
    }
  };

  return (
    <img
      className={s.img}
      src={imgSrc}
      alt={alt}
      loading="lazy"
      onError={handleError}
    />
  );
}

export default function Materials() {
  const groups = materials as MaterialGroup[];

  return (
    <div className={s.wrap}>
      {groups.map((group) => (
        <section key={group.id} className={s.group}>
          <h2 className={s.groupTitle}>{group.title}</h2>
          <div className={s.grid}>
            {group.items.map((m) => (
              <article key={m.slug} className={s.card}>
                <div className={s.media}>
                  <MaterialImage slug={m.slug} alt={m.title} />
                </div>
                <div className={s.body}>
                  <h3 className={s.title}>{m.title}</h3>
                  <p className={s.desc}>{m.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
