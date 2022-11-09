import React from 'react'
import {Link} from "react-router-dom"
import {FaHome} from "react-icons/fa"

function About() {
  return (
    <div>
        <h1 className="text-6xl mb-6">Github Finder</h1>
        <p className="text-lg">This is a react project where you can search for github profiles.</p>
        <p className="text-lg">We will provide you what ever you want by using Github API</p>
        <p className="mb-12">version : 4.0.1</p>
        <Link to="/" className="btn btn-primary">
            <FaHome className="mr-2" />
            <p>Back to home page</p>
        </Link>

    </div>
  )
}

export default About