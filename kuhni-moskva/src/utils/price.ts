// ✅ ensure both the type and function are exported
export type Material = "МДФ"|"Шпон"|"Эмаль"|"Пластик"|"Акрил"|"Массив"|"Стекло";

const basePerMeter = 25000;
const materialK: Record<Material, number> = {
  "МДФ": 1.0, "Шпон": 1.3, "Эмаль": 1.2, "Пластик": 0.9,
  "Акрил": 1.4, "Массив": 1.8, "Стекло": 1.5
};

export function estimatePrice(lengthMeters:number, mat:Material, complexity:number=1){
  const clean = Math.max(lengthMeters, 1);
  return Math.round(clean * basePerMeter * (materialK[mat] ?? 1) * (1 + 0.1*(complexity-1)));
}
