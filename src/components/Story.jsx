import React from 'react'
import Image from 'next/image'
const Story = () => {
  return (
      <div id='story' className='pt-5'>
          <h2 className='text-center story-heading px-3 mb-0'>Story</h2>
          <p className='story-pera text-center mx-auto px-3 fs-6 mb-0'>Nekozuma which means lightning cats in Japanese (Neko = Cats // Inazuma = Lightning) is a collection of 5555 NFTs on the Solana blockchain. The story centers around 3 eras of cats living in different timelines - past, present, future. In each timeline, there are 3 deities that are all powerful and are meant to protect the world of Nekos.</p>
          <p className='story-pera text-center mx-auto story-padding px-3 fs-6 mb-0'>However at every junction in time, there is always a darkness that is waiting to overthrow the good. Hence, each timeline has its own arch nemesis. This means that there will be a total of 4 godly nekos from each timeline making a total of 12 godly nekos that will be fully animated.</p>
      <Image className='story-image' src="/assets/images/png/story-image.png" alt="story-image" width={1280} height={357} />
      <div className="text-primary size-border mx-auto text-center"></div>
    </div>
  )
}
export default Story