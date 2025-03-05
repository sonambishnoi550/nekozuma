"use client";
import React from "react";
import Image from "next/image";
import { SLIDER_LEFT_IMAGES_LIST } from "@/utils/helper";
import { SLIDER_RIGHT_IMAGES_LIST } from "@/utils/helper";

const Slider = () => {
    return (
        <div id="overview" className="overflow-hidden mx-auto max-w-1920">
            <div className="d-flex slider-left">
                {SLIDER_LEFT_IMAGES_LIST.map((src, index) => (
                    <Image key={index} className="slider-image pointer-events-none" src={src} alt={`slider-${index + 1}`} width={320} height={320} />
                ))}
            </div>
            <div className="d-flex slider-right">
                {SLIDER_RIGHT_IMAGES_LIST.map((src, index) => (
                    <Image key={index} className="slider-image pointer-events-none" src={src} alt={`slider-${index + 1}`} width={320} height={320} />
                ))}
            </div>
        </div>
    );
};

export default Slider;
