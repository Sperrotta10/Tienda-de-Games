
import Offers from "./offerts/offerts";
import Games from "./games";
import Announcements from "./announcements";

import GoodCarousel from "./goodCarousel";
export default function Main() {
  return (
    <>
      <GoodCarousel></GoodCarousel>
      <Offers></Offers>
      <Games></Games>
      <Announcements></Announcements>
    </>
  );
}
