import React from 'react'
import {FaHome} from "react-icons/fa"
import {Link} from "react-router-dom"

function NotFound() {
  return (
    <div className="hero">
        <div className="text-center hero-content">
            <div className="max-w-lg">
                <p className="text-6xl mb-8 font-bold">Oops!</p>
                <p className="text-5xl mb-8">404 - page not found</p>
                <Link to="/" className="btn btn-primary btn-lg">
                    <FaHome className="mr-2" />
                    <p>Back to home page</p>
                </Link>
            </div>
            
    </div>
    </div>
    
  )
}

export default NotFound