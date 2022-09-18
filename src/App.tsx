
import { MagnifyingGlassPlus } from 'phosphor-react';

import logo from "./assets/Logo.svg";

function App() {
  return (
    <div className="max-w-screen-xl m-0 m-auto flex flex-col items-center my-20">
      <img src={logo} className="animation animate-pulse" />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu
        {'    '}
        <strong className="text-transparent bg-gradient bg-clip-text">
          dou
        </strong>
        {'   '}
        está aqui.
      </h1>

      <div className="grid grid-cols-6  gap-6 mt-16">
        <a href="" className="relative rounded-lg  hover:scale-110  hover:z-10 transition-all overflow-hidden">
          <img src="/games/game-1.png" alt="" />
          <div className="w-full flex flex-col pt-16 pb-4 px-4  bg-game absolute left-0 right-0 bottom-0">
            <strong className="font-bold text-white">League of Us</strong>
            <span className="text-zinc-300 text-sm mt-0">4 anúcios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg  hover:scale-110  hover:z-10 transition-all overflow-hidden">
          <img src="/games/game-6.png" alt="" />
          <div className="w-full flex flex-col pt-16 pb-4 px-4  bg-game absolute left-0 right-0 bottom-0">
            <strong className="font-bold text-white">League of Us</strong>
            <span className="text-zinc-300 text-sm mt-0">4 anúcios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg  hover:scale-110  hover:z-10 transition-all overflow-hidden">
          <img src="/games/game-2.png" alt="" />
          <div className="w-full flex flex-col pt-16 pb-4 px-4  bg-game absolute left-0 right-0 bottom-0">
            <strong className="font-bold text-white">League of Us</strong>
            <span className="text-zinc-300 text-sm mt-0">4 anúcios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg  hover:scale-110  hover:z-10 transition-all overflow-hidden">
          <img src="/games/game-3.png" alt="" />
          <div className="w-full flex flex-col pt-16 pb-4 px-4  bg-game absolute left-0 right-0 bottom-0">
            <strong className="font-bold text-white">League of Us</strong>
            <span className="text-zinc-300 text-sm mt-0">4 anúcios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg  hover:scale-110  hover:z-10 transition-all overflow-hidden">
          <img src="/games/game-4.png" alt="" />
          <div className="w-full flex flex-col pt-16 pb-4 px-4  bg-game absolute left-0 right-0 bottom-0">
            <strong className="font-bold text-white">League of Us</strong>
            <span className="text-zinc-300 text-sm mt-0">4 anúcios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg  hover:scale-110  hover:z-10 transition-all overflow-hidden">
          <img src="/games/game-5.png" alt="" />
          <div className="w-full flex flex-col pt-16 pb-4 px-4  bg-game absolute left-0 right-0 bottom-0">
            <strong className="font-bold text-white">League of Us</strong>
            <span className="text-zinc-300 text-sm mt-0">4 anúcios</span>
          </div>
        </a>
      </div>

      <div className="pt-1 bg-gradient self-stretch rounded-lg  mt-8 overflow-hidden">
        <div className="bg-[#2A2634] px-8 py-6 flex items-center justify-between">
            <div>
                <strong className="text-2xl font-bold text-white">Não encontrou seu duo?</strong>
                <span className="text-zinc-400 block mt-1">Publique um anúncio para encontrar novos players!</span>
            </div>
            <button className="py-3 px-4 bg-violet-500 text-white rounded 
            cursor-pointer hover:brightness-95 hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
              <MagnifyingGlassPlus size={24} />
              Publicar anúncio
              </button>
        </div>
      </div>
    </div>
  );
}

export default App;
