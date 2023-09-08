import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import styles2 from '../../styles/user_list.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>送金相手を選択</h1>

        <div className={styles.grid}>
            <Image
                src="/images/human1.png" // Route of the image file
                height={144} // Desired size with correct aspect ratio
                width={144} // Desired size with correct aspect ratio
                alt="Your Name"
            />
            <p id = "user1">ユアサシンタ</p>
        </div>

        <div className={styles.grid}>
            <Image
                src="/images/human2.png" // Route of the image file
                height={144} // Desired size with correct aspect ratio
                width={144} // Desired size with correct aspect ratio
                alt="Your Name"
            />
            <p id = "user2">ウエハラタクミ</p>
        </div>

        </main>
        </div>
  );
}