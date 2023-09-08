import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from "next/router";
import { useState } from "react";


const users = [{id:"1",name:"ユアサシンタ",yokin_zandaka:"12000", url:"/images/human1.png"},{id:"2",name:"ウエハラタクミ",yokin_zandaka:"20000", url:"/images/human2.png"},{id:"3",name:"アンドウユウサク",yokin_zandaka:"3000", url:"/images/human3.png"}]


const login_user_id =  1

function clickBtn1() {
    const soukingaku = document.getElementById("soukingaku");
    document.getElementById("span2").textContent = soukingaku.value;
  }


function clickBtn3() {
    const number2 = document.getElementById("number2");
    document.getElementById("span2").textContent = number2.value;
    }



export default function Home() {
    const router = useRouter();
    const send_user_id = Number(router.query.user_id)
    const send_user = users[send_user_id]
    const login_user = users[login_user_id]

    const [money, setMoney] = useState("");
    console.log(send_user_id)
    
    console.log(send_user)
    
    const canSend = (e) => {
        setMoney(e.target.value)
        //router.push("/send/send_comp","/send/send_comp",{send_money:money})
      }
    
  
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
            src={send_user.url} // Route of the image file
            height={144} // Desired size with correct aspect ratio
            width={144} // Desired size with correct aspect ratio
            alt="Your Name"
        />
        <div>
        <p>送信上限額</p>
        <p>{login_user["yokin_zandaka"]}</p>
        </div>

        <div>
        <p>送信金額</p>
        <input type="text" id="soukingaku" value={money} onChange = {canSend} max="2000" />


        <p>
             <span id="span2"></span></p>
             <Link href={{ pathname: "/send/send_comp", query:{send_money:money} }} as = "/send/send_comp" >
          送金
        </Link>
        </div>




        



        
        
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
