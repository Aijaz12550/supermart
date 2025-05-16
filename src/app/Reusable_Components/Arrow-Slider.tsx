import { ChevronLeft, ChevronRight } from 'lucide-react'
import React from 'react'

const Arrowslider = () => {
  return (
    <div>
      <div className="flex justify-start items-center mt-8 space-x-4">
          <button >
            <ChevronLeft size={24} />
          </button>

          <button
          >
            <ChevronRight size={24} />
          </button>
          <div className="w-full h-1 rounded-full">
            <div
              className="h-1 bg-black rounded-full transition-all"
              style={{
                
                maxWidth: "100%",
              }}
            ></div>
          </div>
        </div>
    </div>
  )
}

export default Arrowslider
