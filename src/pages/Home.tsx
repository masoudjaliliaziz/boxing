import React from "react";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div
      className="w-full h-dvh bg-black relative flex justify-start pl-10 py-5 after:bg-center after:absolute after:inset-0  after:bg-cover after:bg-[url('./src/assets/images/view-pair-boxing-gloves.jpg')] after:z-10
      after:pointer-events-none after:opacity-20 "
    >
      <Navbar logo={true} />
    </div>
  );
}

export default Home;
// className: "h-2/3 w-full relative after:absolute after:z-10 after:inset-0
// after:bg-[url('./src/assets/image/onboarding-page-2.jpeg')]
// after:bg-cover after:left-[-2px] after:top-[-55px]  after:pointer-events-none"
// })
