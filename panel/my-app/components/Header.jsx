import Image from "next/image";

const Header = () => {
  return (
    <header className="h-12 border-b-2 border-[rgb(0,0,0,100)]">
      <Image src="/public/logo.svg" width={200} height={120} className="absolute left-1" alt="logo header" />
    </header>
  )
};

export default Header; 