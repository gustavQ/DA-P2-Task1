import Meta from '../components/Meta'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { server } from '../config'
import RugList from '../components/RugList'
import homeStyles from '../styles/Home.module.scss'

export default function Home({rugs}) {
  return (
    <>
      <Meta />
      <div className={homeStyles.container}>
      <main className={homeStyles.main}>
        <Header />
        <RugList rugs={rugs} />
      </main>
      <Footer />
    </div>
    </>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/rugs`)
  const rugs = await res.json()
  return {
    props: {
      rugs
    },
  }
};
