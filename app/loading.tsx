import { Outfit } from "next/font/google"

const outfit = Outfit({ subsets: ["latin"] })

export default function Loading() {
  return (
    <div className={`${outfit.className} min-h-screen flex items-center justify-center bg-white`}>
      <div className="text-center">
        <div className="inline-block h-16 w-16 animate-spin rounded-full border-4 border-solid border-maroon-600 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
        <p className="mt-4 text-lg text-maroon-900 font-medium">Loading...</p>
      </div>
    </div>
  )
}
