"use client"
import { useState } from "react"

export const TopTip = () => {
        const [topTip , setTopTip] = useState<null | string>(null)
    return (
        <div className="bg-white/30 backdrop-blur-2xl fixed right-5 top-1/2 -translate-y-1/2 w-10 h-2 ">
            Hero
        </div>
    )
}

export default TopTip;