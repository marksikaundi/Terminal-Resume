import React from 'react'
import Link from 'next/link'
function ProjectBox() {
  return (
    <div className="w-96 rounded-xl border border-slate-800 p-4 shadow-xl shadow-pink-700/40 lg:w-[450px]">
      <div className="flex flex-col items-center justify-between ">
        <div className="flex w-full flex-grow items-center justify-between pb-2">
          <span className="text-amber-500">
            {' '}
            Project: <a className="text-slate-500">Dealers</a>
          </span>
          <span className="text-sm text-slate-500"> 100 commits</span>
        </div>
      </div>
      <div className="w-full rounded-lg bg-[#010409] text-slate-500">
        <div className="flex space-x-6 px-2">
          <div className=" pl-2">
            <a>/**</a>
            <div className="border-l border-gray-700/50 pl-4">
              <text className="text-center">
                {' '}
                * Server Side Rendering
                <br />* Next Authentication
                <br />* React Hooks
                <br />* Firebase Database
                <br />* HeadlesUI components
                <br />
              </text>
            </div>
            <a>*/</a>
          </div>
        </div>
        <button className="mb-4 w-full bg-amber-600/90 text-left text-[#010409]">
          <Link href="https://marksikaundi.vercel.app/">
            <a className="px-4 text-sm font-semibold">see the project</a>
          </Link>
        </button>
      </div>
    </div>
  )
}

export default ProjectBox
