import React from 'react'
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'

function Footer() {
  const year = new Date().getFullYear()
  return (
    <div className="flex flex-col text-center justify-center items-center font-bold py-8 px-2 mt-4 text-[#324d67] space-y-4">
      <p>
        {year}{' '}
        <a
          href="https://www.williamgyekye.online/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          fyberlite
        </a>{' '}
        All Rights Reserved
      </p>
      <p className="flex gap-4">
        <AiFillInstagram className="text-red-500 text-2xl" />
        <AiOutlineTwitter className="text-blue-300 text-2xl" />
      </p>
    </div>
  )
}

export default Footer
