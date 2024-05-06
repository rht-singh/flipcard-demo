import React from 'react'

export default function FlipCard() {
  return (
    <>
      <div className="flex min-h-screen flex-col justify-center">
          <div className="group h-[56vh] w-[20vw] [perspective:1000px]">
              <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-1000 ease-in-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  <div className="absolute inset-0">
                      <img className="h-full w-full object-cover shadow-xl shadow-black/40" src="images/HotelsImg.jpg" alt="" />
                  </div>
                  <div className="absolute inset-0 h-full w-full bg-black/40 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <div className="flex min-h-full flex-col items-center justify-center">
                        <h1 className="text-3xl font-bold">Heading</h1>
                        <p className="text-lg">Write the text</p>
                    </div>
                  </div>
              </div>
          </div>
      </div>
    </>
  )
}
