"use client";
import React from "react";
import Image from "next/image";

const Header = () => {
    return (
        <div className="bg-dark nav-pt position-relative">
            <Image className="position-absolute logo-image" src="/assets/images/png/header-image.png" alt="logo-image" width={540} height={83} />
            <div className="d-flex justify-content-between max-w-880 mx-auto px-3">
                    <a href="#" className="d-flex align-items-center nav-logo">
                    <h2 className="text-white nav-logo position-relative z-10"> NEKOZUMA </h2>
            </a>
                <ul className="ms-auto d-flex align-items-center justify-content-center links-gap mb-0 position-relative z-10">
                    <li> <a href="#overview" className="cursor-pointer nav-text">Overview</a>
                    </li>
                    <li> <a href="#story" className="cursor-pointer nav-text">Story</a>
                    </li>
                    <li> <a href="#team" className="cursor-pointer nav-text">Team</a>
                    </li>
                </ul>
                <div className="d-flex icons-ml icons-gap position-relative z-10">
                    <a className="icons" href="https://discord.com/channels"> <Image src="/assets/images/svg/discord.svg" alt="discord" width={32} height={32} /></a>
                    <a className="icons" href="https://x.com/?lang=en"> <Image src="/assets/images/svg/footer-twitter.svg" alt="twitter" width={32} height={32} /></a>
                </div>
            </div>
        </div>
    );
};

export default Header;
