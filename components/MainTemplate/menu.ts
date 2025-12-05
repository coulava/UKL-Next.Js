import { ReactNode } from "react"

type profilType = {
   
    label: string,
    destination: string
}
export const profilItem: profilType[] = [
    {
        label: `home`,
        destination: `/home`,

    },

    {
        label: `Reading Book`,
        destination: `/reading`
    },

    {
        label: `Writer`,
        destination: `/writer`
    },
    
    
]