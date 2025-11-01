import { useParams } from "react-router-dom";
import projects from "../data/projects.json";

export default function Project(){
  const { slug } = useParams();
  const p = projects.find(x=>x.slug===slug);
  if(!p) return <div className="max-w-6xl mx-auto px-4 py-10">Проект не найден</div>;
  return (
    <section className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-semibold">{p.title}</h1>
      <div className="text-gray-600 mt-1">{p.category} • Сроки: {p.term} • Стоимость: {p.price}</div>
      <div className="grid md:grid-cols-2 gap-4 mt-6">
        {p.photos.map((ph:string)=>(
          <img key={ph} src={ph} alt={p.title} className="rounded-xl border"/>
        ))}
      </div>
      <div className="mt-6 text-gray-800 whitespace-pre-line">{p.desc}</div>
    </section>
  );
}
