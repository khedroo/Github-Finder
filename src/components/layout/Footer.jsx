import React from 'react'
import {FaHashtag} from 'react-icons/fa'

function Footer() {
    const year = new Date().getFullYear()
  return (
    <div>
        <footer className="footer footer-center bg-neutral text-neutral-content p-2">
            <div className="container mx-auto">
                <FaHashtag className="text-4xl" />
                <p>copy rights &copy; {year} all rights reserved</p>
            </div>
        </footer>
    </div>
  )
}

export default Footer