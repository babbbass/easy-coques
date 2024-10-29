import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select"
import { LogOut } from "lucide-react"
import { disconnectedUser } from "@/api/fetchStrapi"
import { usePathname, useRouter } from "next/navigation"

export function UserAccountSelect({ user }: { user: string | null }) {
  const router = useRouter()
  const pathname = usePathname()
  return (
    <>
      {user ? (
        <Select>
          <SelectTrigger className='cursor-pointer w-8 h-8 border-0 focus:ring-0 focus:border-0 rounded-full bg-blue-600 text-white flex items-center justify-center text-center hover:bg-blue-700'>
            {user.charAt(0).toUpperCase()}
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='profile' className='cursor-pointer'>
              Profil
            </SelectItem>
            <SelectItem value='settings' className='cursor-pointer'>
              Paramètres
            </SelectItem>
            <SelectItem
              value='logout'
              className='text-red-500 cursor-pointer'
              onClick={() => {
                disconnectedUser(pathname)
              }}
            >
              <div className='flex items-center gap-2'>
                <LogOut size={16} />
                Déconnexion
              </div>
            </SelectItem>
          </SelectContent>
        </Select>
      ) : (
        <div
          className='text-sm cursor-pointer h-full flex items-end'
          onClick={() => router.push("/connexion")}
        >{`s'identifier`}</div>
      )}
    </>
  )
}
