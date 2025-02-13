import Link from "next/link";
import Header from '@/components/layout/Header';
import Button from "@/components/ui/material/Button";

function HomePage() {
  return (
    // <div>
    //   <h1 className={`text-6xl text-center font-bold`}>The Home Page</h1>
    //   <ul className={`py-5 mt-10`}>
    //     <li className={`text-center text-3xl underline italic text-blue-500 hover:text-blue-300`}>
    //       <Link href="/about">About</Link>
    //     </li>
    //   </ul>
    // </div>
    <main>
      {/* <ul> */}
      <Header />
      <p>
        <Link href="/about">About</Link>
      </p>
      <p>
        <Button>
          Alert
        </Button>
      </p>
      {/* </ul> */}
    </main>
  )
}

export default HomePage;