
import Header1 from "./component/header1/page";
import Header2 from "./component/header2/page";
import Section1 from "./component/section1/page";
import Footer1 from "./component/footer-01/page";
import HeroSec2 from "./component/hero-sec-02/page";
import HeroSec3 from "./component/hero-sec-03/page";
import HeroSec4 from "./component/Hero-sec-04/page";
import HeroSec5 from "./component/hero-sec-05/page"
import Section6 from "./component/section6/page";

export default function Home() {
  return (
   <div>
      <Header1></Header1>
      <Header2></Header2>
      <Section1></Section1>
      <Footer1/>
      <HeroSec2/>
      <HeroSec3/>
      <HeroSec4/>
      <HeroSec5/>
      <Section6></Section6>
   </div>
  );
}
