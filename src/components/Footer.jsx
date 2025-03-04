import React from 'react'
import Image from 'next/image'
const Footer = () => {
  return (
      <div className='py-5 footer-bg position-relative'>
      <img className='position-absolute footer-left-image pointer-events-none' src="/assets/images/webp/footer-left-image.webp" alt="left-image" />
      <img className='position-absolute footer-right-image pointer-events-none' src="/assets/images/webp/footer-right-image.webp" alt="right-image" />
      <div className="container">
        <a href="#" className='footer-heading text-center pb-4 mb-0 d-flex align-items-center justify-content-center '>NEKOZUMA</a>
        <div className="d-flex align-items-center justify-content-center gap-4">
          <a className='icons' href="https://discord.com/channels" target='_blank'> <Image src="/assets/images/svg/discord.svg" alt="discord" width={32} height={32} /></a>
          <a className='icons' href="https://x.com/?lang=en" target='_blank'> <Image src="/assets/images/svg/footer-twitter.svg" alt="twitter" width={32} height={32} /></a>
              </div>
          </div>
    </div>
  )
}
export default Footer