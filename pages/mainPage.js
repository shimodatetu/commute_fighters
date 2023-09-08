import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import Link from 'next/link';
import style2 from '../styles/user_list.module.css'

const login_user = {id:"1",name:"タテイシミノリ",yokin_zandaka:"50000", url:"/images/human4.png", kouza_number:1234567}
const users = [{id:"1",name:"ユアサシンタ",yokin_zandaka:"12000", url:"/images/human1.png",kouza_number:1234567},{id:"2",name:"ウエハラタクミ",yokin_zandaka:"20000", url:"/images/human2.png", kouza_number:1234567},{id:"3",name:"アンドウユウサク",yokin_zandaka:"3000", url:"/images/human3.png",kouza_number:1234567}]


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.grid}>
        <Image
            src={login_user["url"]} // Route of the image file
            height={144} // Desired size with correct aspect ratio
            width={144} // Desired size with correct aspect ratio
            alt="Your Name"
        />
        <p>{login_user["name"]}</p>
        </div>

        <div className={styles.grid}>
        <p>口座番号</p>
        <p>{login_user["kouza_number"]}</p>
        </div>

        <div className={style2.box1}>
        <div className={styles.grid}>
        <p>預金残高</p>
        <p>{login_user["yokin_zandaka"]}</p>
        </div>
        </div>

        <h2>
        <Link href="/send/page2">送金</Link>
        </h2>
        
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer>

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
          font-family:
            Menlo,
            Monaco,
            Lucida Console,
            Liberation Mono,
            DejaVu Sans Mono,
            Bitstream Vera Sans Mono,
            Courier New,
            monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
