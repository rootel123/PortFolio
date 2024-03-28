import React, { useEffect, useRef } from "react";
import Lottie from "lottie-web";
import animate from "lottie-web";

const Hero = () => {
  const container = useRef(null);

  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./astronaout.json"),
    });
    animate.setSpeed(0.5);
  }, []);

  return (
    <section className="my-16 px-5 md:my-32 flex flex-col flex-wrap space-y-16 md:space-y-0 patterns">
      <div className="ml-auto w-72 md:w-96 lg:w-2/5">
        <div className="container" ref={container}></div>
      </div>
      <div className="max-w-md mb-auto space-y-7">
        <h1 className="text-5xl font-bold md:text-6xl">
          안녕하세요 <br />
          신입 프론트엔드 개발자 <br />
          김기현 입니다.
        </h1>
        <p className="tracking-wide leading-relaxed">
          안녕하세요! 저는 열정 넘치는 프론트엔드 개발자 지망생입니다. 컴퓨터
          공학을 전공하며 프로그래밍에 대한 깊은 관심을 가지게 되었고, 특히 웹
          기술에 매료되어 프론트엔드 개발 분야에 집중하기로 결정했습니다. 또한
          새로운 기술을 배우는 것을 두려워하지 않고, 지속적인 자기 개발을 통해
          더 나은 개발자로 성장하기 위해 노력하고 있습니다.{" "}
        </p>
      </div>
    </section>
  );
};

export default Hero;
