import React from "react"

export function PageContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex flex-col max-w-7xl mx-auto justify-center items-center flex-1 mt-10'>
      {children}
    </div>
  )
}
