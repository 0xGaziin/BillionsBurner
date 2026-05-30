import Link from 'next/link';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.headerContainer}>
      <nav>
          <p>BillionsBurner</p>
        <li>
          <Link href="/">Home</Link>
        </li>

        <li>
          <Link href="/a">Aaaa</Link>
        </li>

        <li>
          <Link href="/a">Aaaa</Link>
        </li>

        <li>
          <Link href="/a">Aaaa</Link>
        </li>

        <li>
          <Link href="/profile">My Account</Link>
        </li>
      </nav>
    </header>
  )
}

export default Header;