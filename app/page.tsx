'use client';

import { useState } from 'react';
import Navbar from './components/Navbar';
import { Send } from 'lucide-react';

export default function HomePage() {
  const [input, setInput] = useState('');
  // const [messages, setMessages] = useState<string[]>([]);

  return (
    <div className="h-screen flex flex-col text-[#ffffffe9] ">
      <Navbar />
      {/* Chat area */}
       <div className='mt-28 text-left flex justify-center flex-col items-center'>

          <h1 style={{wordSpacing:'0.1em', letterSpacing:'0.06em'}} className='text-xl font-[600]'>Chat With Solana Blockchain</h1>
          <p className='text-sm text-[#ffffff82]'>A tool to help you perform task on blockchain using nlp.</p>

        </div>
      <main className="flex-1 overflow-y-auto px-6 py-4 space-y-4">



          <div className='flex items-center justify-center mt-28 gap-3 flex-wrap max-w-md mx-auto '>
        <Item text="Send 1 SOL" />
        <Item text="Show My Balance" />
        <Item text="Show My NFT" />
        <Item text="1SOL Value in USDT" />
        <Item text="Create a token" />
         <Item text="Price of NFT" />
        </div>
      </main>

      {/* Input area */}
     <div className='relative'>
      <div className='w-80 h-20 bg-green-400  bottom-[380px] rounded-full left-[620px] blur-[70px]  -z-10 absolute '></div>
  <form className="
    p-1 flex gap-3
    shadow-[0_10px_30px_rgba(0,0,0,0.6)]
    border border-zinc-600
    absolute justify-center items-center
    bottom-96 left-1/2 transform -translate-x-1/2
    bg-[#202225] rounded-full
    w-[90%] max-w-lg
    ring-1 ring-white/10
    backdrop-blur-sm
  ">
    <input
      type="text"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      placeholder="Ask something like 'Send 1 SOL to ...'"
      className="flex-1 px-4 py-3 rounded-xl text-white placeholder-zinc-400 focus:outline-none"
    />
    <button
      type="submit"
      className="bg-gradient-to-r from-green-300 to-green-800 px-3 py-2 mr-1 rounded-full text-white"
    >
      <Send className='text-white' />
    </button>
  </form>
</div>


    </div>
  );
}


function Item({text}: {text: string}) {
  return(
      <div

      className='text-xs text-center  bg-green-800/30 text-green-500 w-fit rounded-full px-2 py-1 border-green-400 border-1 items-center flex justify-center'
      >{text}</div>
  )
}