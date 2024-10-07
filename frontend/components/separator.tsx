import React from "react"

export function Separator({ margin = 10 }: { margin?: number }) {
  const marginYClasses = {
    4: "my-4",
    5: "my-5",
    8: "my-8",
    10: "my-10",
    20: "my-20",
  }

  const marginY = marginYClasses[margin] || "my-10"

  return (
    <hr className={`w-full mx-auto ${marginY} border-gray-300 max-w-7xl`} />
  )
}
