import Link from "next/Link";
import users from "../../data/users";
import styles from "../../styles/Home.module.css";
import Head from "next/head";
import Image from "next/image";
const list = () => {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <h1>Target</h1>
          {
            // Usersでループさせる
            users.map((user, index) => (
              <div key={index} className={styles.grid}>
                <Image
                  src={`/images/human${user.account}.png`}
                  height={80}
                  width={80}
                  alt="Your Name"
                />
                <Link href={`./confirm/${user.account}`}>{user.name}</Link>
              </div>
            ))
          }
        </main>
      </div>
    </>
  );
};

export default list;
