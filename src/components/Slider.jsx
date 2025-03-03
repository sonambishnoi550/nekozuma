"use client";

import React from "react";
import Image from "next/image";


const Slider = () => {
    return (
        <div className="overflow-hidden">
            <div className="d-flex slider-left">
                <Image className="slider-image" src="/assets/images/png/slider-image1.png" alt="slider-one" width={320} height={320} />
                <Image className="slider-image" src="/assets/images/png/team-image2.png" alt="slider-two" width={320} height={320} />
                <Image className="slider-image" src="/assets/images/png/team-image3.png" alt="slider-three" width={320} height={320} />
                <Image className="slider-image" src="/assets/images/png/team-image4.png" alt="slider-four" width={320} height={320} />
                <Image className="slider-image" src="/assets/images/png/slider-image1.png" alt="slider-one" width={320} height={320} />
                <Image className="slider-image" src="/assets/images/png/team-image2.png" alt="slider-two" width={320} height={320} />
                <Image className="slider-image" src="/assets/images/png/team-image3.png" alt="slider-three" width={320} height={320} />
                <Image className="slider-image" src="/assets/images/png/team-image4.png" alt="slider-four" width={320} height={320} />
                <Image className="slider-image" src="/assets/images/png/slider-image1.png" alt="slider-five" width={320} height={320} />
                <Image className="slider-image" src="/assets/images/png/team-image2.png" alt="slider-six" width={320} height={320} />
                <Image className="slider-image" src="/assets/images/png/slider-image1.png" alt="slider-five" width={320} height={320} />
                <Image className="slider-image" src="/assets/images/png/team-image2.png" alt="slider-six" width={320} height={320} />
            </div>
            <div className="d-flex slider-right">
                <Image className="slider-image" src="/assets/images/png/team-image5.png" alt="slider-one" width={320} height={320} />
                <Image className="slider-image" src="/assets/images/png/team-image6.png" alt="slider-two" width={320} height={320} />
                <Image className="slider-image" src="/assets/images/png/team-image7.png" alt="slider-three" width={320} height={320} />
                <Image className="slider-image" src="/assets/images/png/team-image8.png" alt="slider-four" width={320} height={320} />
                <Image className="slider-image" src="/assets/images/png/team-image5.png" alt="slider-one" width={320} height={320} />
                <Image className="slider-image" src="/assets/images/png/team-image6.png" alt="slider-two" width={320} height={320} />
                <Image className="slider-image" src="/assets/images/png/team-image7.png" alt="slider-three" width={320} height={320} />
                <Image className="slider-image" src="/assets/images/png/team-image8.png" alt="slider-four" width={320} height={320} />
                <Image className="slider-image" src="/assets/images/png/team-image5.png" alt="slider-one" width={320} height={320} />
                <Image className="slider-image" src="/assets/images/png/team-image6.png" alt="slider-two" width={320} height={320} />
            </div>
        </div>
    );
};

export default Slider;
