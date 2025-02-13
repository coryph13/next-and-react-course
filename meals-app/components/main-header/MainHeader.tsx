import Link from 'next/link';

import logoImg from '@/assets/logo.png';
import classes from './MainHeader.module.css';
import ResponsiveImage from '@/components/images/ResponsiveImage';
import MainHeaderBackground from '@/components/main-header/MainHeaderBackground';

export default function MainHeader() {
  return <>
    <MainHeaderBackground />
    <header className={classes.header}>
      <Link href={`/`} className={`${classes.logo}`}>
        <ResponsiveImage
          containerStyle={{
            width: '5rem',
            height: '5rem',
          }}
          src={logoImg}
          alt={`A plate with food on it`}
          fill
          priority
        />
        NextLevel Food
      </Link>
      <nav className={classes.nav}>
        <ul>
          <li>
            <Link href={`/meals`}>Meals</Link>
          </li>
          <li>
            <Link href={`/community`}>Foodies Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  </>
}