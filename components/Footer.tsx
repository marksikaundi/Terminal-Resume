import React from 'react'
import { BsGithub, BsFacebook, BsInstagram } from 'react-icons/bs'
import Link from 'next/link'

function Footer() {
  return (
    <div className="flex items-center justify-between border-t border-slate-900 p-2 text-slate-600">
      <div className="flex items-center space-x-4 ">
        <p>find me in:</p>
        <Link href="https://www.facebook.com/">
          <a>
            <BsFacebook />
          </a>
        </Link>
        <Link href="https://github.com/">
          <a>
            <BsGithub />
          </a>
        </Link>
        <Link href="https://www.instagram.com/">
          <a>
            <BsInstagram />
          </a>
        </Link>
      </div>
      <a>{new Date().toDateString()}</a>
    </div>
  )
}

export default Footer
