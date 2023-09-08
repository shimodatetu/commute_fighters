import Link from 'next/link';
import { useEffect } from "react";

useEffect(() => {
  // Perform localStorage action
  const item = localStorage.getItem('key')
}, [])
console.log(item);

export default function FirstPost() {
  return (
    <>
      <h1>First Post</h1>
      <h2>
        <Link href="/mainPage">戻る</Link>
      </h2>
    </>
  );
}