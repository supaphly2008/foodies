import sql from "better-sqlite3";

const db = sql("meals.db");

export async function getMeals() {
  const meals = db.prepare("SELECT * FROM meals").all();
  await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate delay
  // throw new Error("Failed to fetch meals"); // Simulate error
  return meals;
}

export async function getMeal(slug) {
  const meal = db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
  await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate delay
  // throw new Error("Failed to fetch meal"); // Simulate error
  return meal;
}
