import Link from 'next/link'
export default function Home() {
  return (
    <div>
        <Link href="/home">
          <a>Home</a>
        </Link><br/>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
    </div>
  )
}
