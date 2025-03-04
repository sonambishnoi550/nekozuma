"use client";

import React from "react";
import Image from "next/image";


const Slider = () => {
    return (
        <div id="overview" className="overflow-hidden">
            <div className="d-flex slider-left">
                <Image className="slider-image" src="/assets/images/webp/slider-image1.webp" alt="slider-one" width={320} height={320} />
                <Image className="slider-image" src="/assets/images/webp/slider-image2.webp" alt="slider-two" width={320} height={320} />
                <Image className="slider-image" src="/assets/images/webp/slider-image3.webp" alt="slider-three" width={320} height={320} />
                <Image className="slider-image" src="/assets/images/webp/slider-image4.webp" alt="slider-four" width={320} height={320} />
                <Image className="slider-image" src="/assets/images/webp/slider-image1.webp" alt="slider-one" width={320} height={320} />
                <Image className="slider-image" src="/assets/images/webp/slider-image2.webp" alt="slider-two" width={320} height={320} />
                <Image className="slider-image" src="/assets/images/webp/slider-image3.webp" alt="slider-three" width={320} height={320} />
                <Image className="slider-image" src="/assets/images/webp/slider-image4.webp" alt="slider-four" width={320} height={320} />
                <Image className="slider-image" src="/assets/images/webp/slider-image1.webp" alt="slider-five" width={320} height={320} />
                <Image className="slider-image" src="/assets/images/webp/slider-image2.webp" alt="slider-six" width={320} height={320} />
                <Image className="slider-image" src="/assets/images/webp/slider-image1.webp" alt="slider-five" width={320} height={320} />
                <Image className="slider-image" src="/assets/images/webp/slider-image2.webp" alt="slider-six" width={320} height={320} />
            </div>
            <div className="d-flex slider-right">
                <Image className="slider-image" src="/assets/images/webp/slider-image5.webp" alt="slider-one" width={320} height={320} />
                <Image className="slider-image" src="/assets/images/webp/slider-image6.webp" alt="slider-two" width={320} height={320} />
                <Image className="slider-image" src="/assets/images/webp/slider-image7.webp" alt="slider-three" width={320} height={320} />
                <Image className="slider-image" src="/assets/images/webp/slider-image8.webp" alt="slider-four" width={320} height={320} />
                <Image className="slider-image" src="/assets/images/webp/slider-image5.webp" alt="slider-one" width={320} height={320} />
                <Image className="slider-image" src="/assets/images/webp/slider-image6.webp" alt="slider-two" width={320} height={320} />
                <Image className="slider-image" src="/assets/images/webp/slider-image7.webp" alt="slider-three" width={320} height={320} />
                <Image className="slider-image" src="/assets/images/webp/slider-image8.webp" alt="slider-four" width={320} height={320} />
                <Image className="slider-image" src="/assets/images/webp/slider-image5.webp" alt="slider-one" width={320} height={320} />
                <Image className="slider-image" src="/assets/images/webp/slider-image6.webp" alt="slider-two" width={320} height={320} />
            </div>
        </div>
    );
};
export default Slider;
