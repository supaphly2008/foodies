import Link from "next/link";
import classes from "./page.module.css";
import { Suspense } from "react";

import Loading from "./loading";

import Meals from "@/components/meals/Meals";
import { getMeals } from "@/lib/meals";

async function MealsGrid() {
  const meals = await getMeals();

  return <Meals meals={meals} />;
}

export default function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created <span className={classes.highlight}>by you</span>
        </h1>
        <p>Choose your favorite recipe and cook it yourself.</p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<Loading />}>
          <MealsGrid />
        </Suspense>
      </main>
    </>
  );
}
