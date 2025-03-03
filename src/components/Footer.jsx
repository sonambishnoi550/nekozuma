import React from 'react'

const Footer = () => {
  return (
      <div className='py-5 footer-bg position-relative'>
          <img className='position-absolute footer-left-image' src="/assets/images/png/footer-left-image.png" alt="left-image" />
          <img className='position-absolute footer-right-image' src="/assets/images/png/footer-right-image.png" alt="right-image" />
          <div className="container">
              <h2 className='footer-heading text-center pb-4'>NEKOZUMA</h2>
              <div className="d-flex align-items-center justify-content-center gap-4">
                  <img src="/assets/images/svg/discord.svg" alt="discord" />
                  <img src="/assets/images/svg/footer-twitter.svg" alt="twitter" />
              </div>
          </div>
    </div>
  )
}

export default Footer