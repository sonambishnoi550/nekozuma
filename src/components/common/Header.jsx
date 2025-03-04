"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
    return (
        <div className="bg-dark nav-pt position-relative">
            <Image className="position-absolute logo-image" src="/assets/images/png/header-image.png" alt="logo-image" width={540} height={83} />
            <div className="d-flex justify-content-between max-w-880 mx-auto px-3">
                <div className="d-flex align-items-center">
                    <div
                        className="text-white nav-logo position-relative z-10"
                    >
                        NEKOZUMA
                    </div>
                </div>
                    <ul className="ms-auto d-flex align-items-center justify-content-center links-gap mb-0 position-relative z-10">
                        <li className=" nav-text" href="#overview">
                            Overview
                        </li>
                        <li className=" nav-text" href="#story">
                            Story
                        </li>
                        <li className=" nav-text" href="#team">
                            Team
                        </li>
                    </ul>
                    <div className="d-flex icons-ml icons-gap  position-relative z-10">
                        <a className="icons" href="https://discord.com/channels"> <Image src="/assets/images/svg/discord.svg" alt="discord" width={32} height={32} /></a>
                        <a className="icons" href="https://x.com/?lang=en"> <Image src="/assets/images/svg/footer-twitter.svg" alt="twitter" width={32} height={32} /></a>
                    </div>
                </div>
            </div>

    );
};

export default Header;
