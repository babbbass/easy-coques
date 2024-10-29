import { create } from "zustand"
import { UserType } from "@/utils/types/types"

type UserStoreProps = {
  user: UserType | null
  setUser: (user: UserType) => void
}

export const useUserStore = create<UserStoreProps>((set) => ({
  user: null,
  setUser: (user: UserType) => set({ user }),
}))
