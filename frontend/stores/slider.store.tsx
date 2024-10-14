import { create } from "zustand"

const iphones = [
  { name: "Noir", pictures: "black.webp" },
  { name: "Bleu foncé", pictures: "dark-blue.webp" },
  { name: "Violet foncé", pictures: "dark-purple.webp" },
  { name: "Gris", pictures: "gray.webp" },
  { name: "Vert", pictures: "green.webp" },
  { name: "Bleu clair", pictures: "light-blue.webp" },
]

const productSliderPresentation = [
  { name: "Noir", pictures: "black.webp" },
  { name: "1", pictures: "2.webp" },
  { name: "1", pictures: "3.webp" },
  { name: "1", pictures: "4.webp" },
  { name: "1", pictures: "5.webp" },
  { name: "1", pictures: "6.webp" },
  { name: "Bleu foncé", pictures: "dark-blue.webp" },
  { name: "Violet foncé", pictures: "dark-purple.webp" },
  { name: "Gris", pictures: "gray.webp" },
  { name: "Vert", pictures: "green.webp" },
  { name: "Bleu clair", pictures: "light-blue.webp" },
]

type Product = {
  name: string
  pictures: string
}
type SliderStoreProps = {
  slider: Product[]
  sliderPresentation: Product[]
  grandView: Product
  setGrandView: (grandView: Product) => void
}

export const useStoreSlider = create<SliderStoreProps>((set) => ({
  slider: iphones,
  sliderPresentation: productSliderPresentation,
  grandView: iphones[0],
  setGrandView: (grandView) => set({ grandView: grandView }),
}))
