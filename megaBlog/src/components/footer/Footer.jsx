import React from 'react'
  import { Link } from "react-router-dom";
  import {Logo} from '../index.js'
function Footer() {
  return (
  

<footer className="w-full bg-white border-t border-gray-200">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

      {/* Logo Section */}
     <Link><Logo/></Link>

      {/* Quick Links */}
      <div className="flex flex-col gap-3">
        <h3 className="text-gray-900 font-semibold mb-1">
          Quick Links
        </h3>

        <Link to="/" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
          Home
        </Link>

        <Link to="/all-posts" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
          All Posts
        </Link>

        <Link to="/create-post" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
          Create Post
        </Link>


   
      </div>

      {/* Resources */}
      <div className="flex flex-col gap-3">
        <h3 className="text-gray-900 font-semibold mb-1">
          Resources
        </h3>

        <Link to="/privacy-policy" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
          Privacy Policy
        </Link>

        <Link to="/terms" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
          Terms & Conditions
        </Link>

        <Link to="/help" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
          Help / Support
        </Link>
      </div>

    </div>

    {/* Copyright */}
    <div className="mt-10 pt-6 border-t border-gray-200 text-center">
      <p className="text-sm text-gray-500">
        © 2026 Your Blog. All rights reserved.
      </p>
    </div>

  </div>
</footer>
  )
}

export default Footer