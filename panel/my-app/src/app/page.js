import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
      <div className="flex flex-row justify-between items-center overflow-hidden">
        <div className="flex justify-center items-center pl-24 flex-col gap-6">
          <h1 className="text-[32px]">Welcome Back!</h1>
          <input type="text" name="cpf" placeholder="cpf da criança" 
          className="p-2 rounded-2xl border-2" />
          
          <input type="text" name="codigo" placeholder="cód. da criança" 
          className="p-2 rounded-2xl border-2" />
          
          <Link href="/dashboard" className="rounded-2xl p-1 w-36 text-center bg-[#07FF02]">Entrar</Link>
        </div>
        <Image src="/logo.svg" alt="logo" width={600} height={720} />
      </div>
  );
}
