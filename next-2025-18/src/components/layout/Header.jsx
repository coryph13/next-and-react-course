import logoSrc from '@/assets/logo.png';
import Image from 'next/image';

export default function Header() {
  return <>
    <Image src={logoSrc} alt="A server surrounded by magic sparkles." />
    <h1>Welcome to this NextJS Course!</h1>
  </>
}