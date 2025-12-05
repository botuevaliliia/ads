import s from "./Gallery.module.css";
import projects from "../data/projects.json";
import { Link } from "react-router-dom";

type Item = {
  slug: string;
  title: string;
  category?: string;
  cover?: string;   // optional; if missing we derive from slug
};


export default function Gallery({ limit = 9 }: { limit?: number }) {
  const items = (projects as Item[]).slice(0, limit);

  return (
    <div className={s.wrap}>
      {items.map((p) => {
        const thumb = p.cover || `/projects/${p.slug}.jpeg`; // or .jpeg/.webp if you prefer
        return (
          <Link to={`/project/${p.slug}`} key={p.slug} className={s.card}>
            <div className={s.media}>
              <img className={s.img} src={thumb} alt={p.title} loading="lazy" />
            </div>
            {/* <div className={s.caption}>
              {p.title}
            </div> */}
          </Link>
        );
      })}
    </div>
  );
}
