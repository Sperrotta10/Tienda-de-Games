import Offers from "./offerts/offerts";
import Games from "./games";
import Announcements from "./announcements";
import { Suspense } from "react";

import GoodCarousel from "./goodCarousel";
export default function Main() {
  return (
    <>
      <GoodCarousel></GoodCarousel>
      <Suspense fallback={<div>Cargando...</div>}>
        <Offers></Offers>
      </Suspense>
      <Games></Games>
      <Announcements></Announcements>
    </>
  );
}
