import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import styles2 from '../../styles/user_list.module.css';
import Image from 'next/image';
import Link from 'next/link';

const users = [{id:"1",name:"A",yokin_zandaka:"12000"},{id:"2",name:"B",yokin_zandaka:"20000"},{id:"3",name:"C",yokin_zandaka:"3000"}]

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>送金相手を選択</h1>

        {users.map((user, index) => (
        <Link href={{pathname: "send/send_user", query: {user_id: user.id} }} as="/send/send_user">
            <div className={styles.grid}>
                <Image
                    src="/images/human1.png" // Route of the image file
                    height={144} // Desired size with correct aspect ratio
                    width={144} // Desired size with correct aspect ratio
                    alt="Your Name"
                />
                <p id = "user1">{user.name}</p>
            </div>
            </Link> 
            ))
        }
        </main>
        </div>

  );
}