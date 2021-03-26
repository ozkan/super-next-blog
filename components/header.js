import Link from 'next/link'

function Header() {
  return (
    <header className="py-6">
      <div className="site-w">
        <nav className="flex space-x-2">
          <Link href="/">
            <a>About</a>
          </Link>
          <Link href="/posts">
            <a>Posts</a>
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
