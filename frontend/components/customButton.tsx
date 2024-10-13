import React from "react"
import { Button } from "./ui/button"

type CustomButtonProps = {
  textButton: string
  verticalMargin?: number
  width?: number
}

export default function CustomButton({
  textButton,
  verticalMargin = 10,
  width = 25,
}: CustomButtonProps) {
  const marginYClasses = {
    4: "my-4",
    5: "my-5",
    8: "my-8",
    10: "my-10",
    20: "my-20",
  }

  const widthClasses = {
    25: "w-1/4",
    33: "w-1/3",
    50: "w-1/2",
    100: "w-full",
  }

  const marginY = marginYClasses[verticalMargin] || "my-10"
  const widthButton = widthClasses[width]
  return (
    <Button
      className={`bg-blue-600 ${marginY} ${widthButton} mx-auto rounded-full`}
    >
      {textButton}
    </Button>
  )
}
