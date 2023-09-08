import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/Link";
import { useEffect, useState } from "react";

export default function Home() {
  // 自分のアカウント情報をローカルストレージから取得する
  // ローカルストレージになければセットする
  const [account, setAccount] = useState("");
  const [name, setName] = useState("");
  const [balance, setBalance] = useState("");
  // ローカルストレージなので、useEffectでとってくる
  useEffect(() => {
    if (!localStorage.getItem("account")) {
      localStorage.setItem("account", "0");
      localStorage.setItem("name", "hogehoge");
      localStorage.setItem("balance", 10000);
    }
    setAccount(localStorage.getItem("account"));
    setName(localStorage.getItem("name"));
    setBalance(localStorage.getItem("balance"));
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          <Link href={"/send/list"}>Send</Link>
        </h1>

        <h2>Your name:{name}</h2>
        <h2>Your account:{account}</h2>
        <h2>Your balance:{balance}</h2>
      </main>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
