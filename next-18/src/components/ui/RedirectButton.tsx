'use client'

import { useRouter } from "next/navigation"

function RedirectButton({
  url,
  text
}: {
  url: string,
  text: string,
}) {
  const router = useRouter();

  return (
    <button onClick={() => router.push(url)}>
      {text}
    </button>
  )
}

export default RedirectButton