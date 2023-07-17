"use client"

import { redirect } from 'next/navigation'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col gap-2 items-center justify-center w-full">
      <span>Pick a Name:</span>
      <input type="text" className='border border-black rounded-2xl'/>
      <button className="bg-red-600" onClick={() => console.log('xd')}>Create Room</button>
      <input type="text" placeholder='room ID' className='border border-black rounded-2xl'/>
      <button className="bg-red-600">Join Room</button>
    </div>
  );
}
