import Link from "next/Link";
import { useEffect } from "react";
import styles from "../../../styles/Home.module.css";
import Head from "next/head";
import { useRouter } from "next/router";

const complete = () => {
  // パラメータから振込先情報と振込金額を取得する
  const router = useRouter();
  // Routerを使うので、useEffectで待つ
  useEffect(() => {
    if (!router.isReady) return;
    // 今の口座残高をローカルストレージから取得する
    const nowBalance = localStorage.getItem("balance");
    // 振込金額をひいて自分の口座残高にセットする。
    localStorage.setItem("balance", nowBalance - router.query.amount);
  }, [router.isReady]);

  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <h1>Complete!</h1>
          <Link href={"/"}>go to top</Link>
        </main>
      </div>
    </>
  );
};

export default complete;
