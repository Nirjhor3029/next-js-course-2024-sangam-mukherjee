'use client';
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  console.log(router);

  function handleNavigate(url) {
    router.push(url);
  }
  
  return (
    <main className="flex  flex-col items-center p-24">
      <h1>Hello World</h1>

      <button onClick={() => handleNavigate('/products')}>Navigate to Products using useRouter</button>
    </main>
  );
}
