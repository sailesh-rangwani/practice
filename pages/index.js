import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Anriyo</title>
        <meta name="description" content="Wed Development Services" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/photo.jpg" />
      </Head>


      <main className={styles.main}>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/logo_full.png"
            alt="Anriyo Logo"
            width={210}
            height={45}
            priority
          />
        </div>

        <div className={styles.blogs}>
          <h1><u>BLOGS</u></h1>
          <div className={styles.blogitem}>
            <h3>This is Title.</h3>
            <p>Here comes the paragraph of the blog.</p>
          </div>
          <div className={styles.blogitem}>
            <h3>This is Title.</h3>
            <p>Here comes the paragraph of the blog.</p>
          </div>
          <div className={styles.blogitem}>
            <h3>This is Title.</h3>
            <p>Here comes the paragraph of the blog.</p>
          </div>
        </div>  
      </main>
    </>
  )
}
