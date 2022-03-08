import React, { useState } from 'react'
import Banner from './Banner'
import Footer from './Footer'
import { MdCircle } from 'react-icons/md'
import AboutMe from './AboutMe'
import Projects from './Projects'

function Header() {
  const [activ, setActiv] = useState('hello')
  return (
    <div className="flex h-full flex-col justify-between font-mono text-white">
      <div className="flex items-center justify-between p-1 text-center font-mono text-slate-500">
        <p className="flex space-x-1 text-xs">
          <MdCircle className="cursor-pointer text-red-600" />
          <MdCircle className="cursor-pointer text-yellow-600" />
          <MdCircle className="cursor-pointer text-green-600" />
        </p>
        <p>Mark_Sikaundi</p>
        <p className="w-8"></p>
      </div>
      <div className="flex bg-[#010409] text-sm">
        <a
          className={`cursor-pointer border-r border-slate-900 ${
            activ === 'hello'
              ? 'border-t border-b border-t-rose-700 border-b-[#0d1117] bg-[#0d1117] text-amber-500 '
              : 'border-t border-b text-slate-500 shadow-md shadow-slate-900'
          }  py-2 px-8 md:px-10`}
          onClick={() => setActiv('hello')}
        >
          Hello
        </a>

        <a
          className={`cursor-pointer border-r border-slate-900 ${
            activ === 'about'
              ? 'border-t border-b border-t-rose-700 border-b-[#0d1117] bg-[#0d1117] text-amber-500'
              : 'border-t border-b text-slate-500 shadow-md shadow-slate-900'
          }  px-8 py-2 md:px-10`}
          onClick={() => setActiv('about')}
        >
          About_me
        </a>

        <button
          className={`border-r border-slate-900 ${
            activ === 'projects'
              ? 'border-t border-b border-t-rose-700 border-b-[#0d1117] bg-[#0d1117] text-amber-500'
              : 'border-t border-b text-slate-500 shadow-md shadow-slate-900'
          }  px-9 py-2 md:px-10`}
          onClick={() => setActiv('projects')}
        >
          Snippets
        </button>
        <a className="w-full border-b border-t border-l border-slate-900 px-10 py-2 text-slate-500 shadow-md shadow-slate-900"></a>
      </div>

      {activ === 'hello' ? (
        <Banner />
      ) : activ === 'about' ? (
        <AboutMe />
      ) : (
        <Projects />
      )}

      <Footer />
    </div>
  )
}

export default Header
