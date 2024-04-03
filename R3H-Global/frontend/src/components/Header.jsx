import React from 'react'

export default function Header() {
  
    
  return (
    <div className='flex justify-between bg-slate-300 text-blue-900 py-8 px-4  shadow-md   shadow-slate-600 '>
        <div className='text-3xl font-bold font-mono'>R3H GLOBAL</div>
        <div className=''>
        <input className='text-blue-950 py-2 px-4 rounded-s-2xl w-96'  placeholder="e.g. Computer science"type="text" />
        <button className='rounded-e-2xl bg-blue-950 text-white py-2 px-4'>Search</button>
        </div>
        <div className='flex gap-5 text-2xl'>
            <p>About</p> 
            <p>Dashboard</p> 
            <p>Learning</p> 
            <p>Our Team</p> 
            <p>Contact Us</p> 
            
        </div>

    </div>
  )
}
