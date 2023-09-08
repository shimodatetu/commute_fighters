import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from "next/router";
import { useState } from "react";




export default function FirstPost() {
    const router = useRouter();
    console.log(router.query)
  return (
    <>
        <Image
            src="/images/approval.png" // Route of the image file
            height={144} // Desired size with correct aspect ratio
            width={144} // Desired size with correct aspect ratio
            alt="Your Name"
        />
        <p>{router.query.send_money}円の送金が完了しました</p>

      <h2>
        <Link href="/mainPage">トップ画面に戻る</Link>
      </h2>
    </>
  );
}