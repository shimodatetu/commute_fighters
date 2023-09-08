import { useRouter } from "next/router";
import users from "../../../data/users";
import { useEffect } from "react";
import { useState } from "react";
import styles from "../../../styles/Home.module.css";
import Head from "next/head";

const confirm = () => {
  // 動的パラメータで取得する
  const router = useRouter();
  // 振込先の情報、振込金額、自分の口座残高、エラー変数をセット
  const [target, setTarget] = useState({});
  const [amount, setAmount] = useState(0);
  const [myBalance, setMyBalance] = useState(0);
  const [error, setError] = useState("");
  // Routingを取得するため、useEffectで待つ
  useEffect(() => {
    if (!router.isReady) return;
    // Usersから対象の口座番号にて検索してセットする
    setTarget(users.find((user) => user.account == router.query.account));
    // localStorageから自分の口座残高を取得する
    setMyBalance(localStorage.getItem("balance"));
  }, [router.isReady]);

  // 送信処理
  const handleSubmit = (e) => {
    e.preventDefault();
    // 口座残高が振り込み残高より多い場合は問題ないので、complete画面へ飛ばす
    if (myBalance > amount) {
      router.push({
        pathname: "complete",
        query: { account: target.account, amount: amount },
      });
    } else {
      // 口座残高が振り込み残高より少ない場合はエラーなので、エラー出力
      setError(" Total exceeds the balance ");
    }
  };
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <h1>Detail</h1>
          <h2>TargetName: {target.name}</h2>
          <h2>TargetAccount: {target.account}</h2>
          <hr />
          <h2>MyBalance: {myBalance}</h2>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <button onClick={handleSubmit}>GO</button>
          <p>{error}</p>
        </main>
      </div>
    </>
  );
};

export default confirm;
