import React from 'react'
import Typist from 'react-typist'

function Hello() {
  return (
    <div className="relative m-auto flex flex-1 flex-col items-center justify-center">
      <Typist>
        <a className="text-xl text-slate-600">
          <a className="text-2xl">{'>'}</a>{' '}
          <a className="text-sky-700"> Location:</a> Lusaka, Zambia
          <br />
          <a className="text-2xl">{'>'}</a>{' '}
          <a className="text-sky-700"> Email: </a>
          sikaundimark@gmail.com
          <br />
          <a className="text-2xl">{'>'}</a>{' '}
          <a className="text-sky-700"> Phone: </a>
          <a className="text-md">+260 77657 8583</a>
        </a>
      </Typist>
    </div>
  )
}

export default Hello
