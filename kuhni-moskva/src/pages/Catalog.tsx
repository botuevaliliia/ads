import { useMemo, useState } from "react";
import projects from "../data/projects.json";
import Gallery from "../components/Gallery";

const cats = ["Все","Кухни","Шкафы-купе","Прихожие","Гардеробные","Гостиные","Ванные"];

export default function Catalog(){
  const [cat, setCat] = useState("Все");
  const filtered = useMemo(
    () => cat==="Все" ? projects : projects.filter(p=>p.category===cat),
    [cat]
  );
  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-semibold mb-6">Портфолио</h1>
      <div className="flex flex-wrap gap-2 mb-6">
        {cats.map(c=>(
          <button key={c} onClick={()=>setCat(c)}
            className={"px-4 py-2 rounded-xl border "+(c===cat?"bg-brand-accent text-white":"")}>
            {c}
          </button>
        ))}
      </div>
      <Gallery />
    </section>
  );
}
