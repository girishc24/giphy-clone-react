import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
    const [categoires, setCategoires] = useState([]);
    const [showCategoires, setshowCategoires] = useState(false);

  return (
    <nav>
        <div>
            <Link to="/" className='flex gap-2'>
                <img src="/logo.svg" className="w-8" />
                <h1 className="text-5xl font-bold tracking-tight cursor-pointer">GIPHY</h1>
            </Link>
            {/* Render a Categories */}
            <Link className="px-4 py-1 hover:gradient">Reactions</Link>
        </div>
    </nav>
  )
}

export default Header