import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from "next/router";


const users = [{id:0,name:"A",yokin_zandaka:"12000"},{id:1,name:"B",yokin_zandaka:"20000"},{id:2,name:"C",yokin_zandaka:"3000"}]

const login_user_id =  1



export default function Home() {
    const router = useRouter();
    const send_user_id = Number(router.query.user_id)
    const send_user = users[send_user_id]
    const login_user = users[login_user_id]

    console.log(send_user.name)
  
    return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      

      <main>

        <p>送信先</p>
        <p>{send_user_id}</p>
        <p>ユーザ名：</p><div>{send_user["name"]}</div>

        <Image
            src="/images/approval.png" // Route of the image file
            height={144} // Desired size with correct aspect ratio
            width={144} // Desired size with correct aspect ratio
            alt="Your Name"
        />
        <div>
        <p>送信上限額</p>
        <p>{login_user["yokin_zandaka"]}</p>
        </div>

        <p>送信金額</p>
        


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