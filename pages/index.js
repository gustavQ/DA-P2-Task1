import Meta from '../components/Meta'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { server } from '../config'
import RugList from '../components/RugList'
import homeStyles from '../styles/Home.module.scss'
import dbConnect from '../lib/dbConnect'
import Rug from '../models/RugsModel'
import FormModal from '../components/FormModal'

export default function Home({rugs}) {
  return (
    <>
      <Meta />
      <div className={homeStyles.container}>
      <main className={homeStyles.main}>
        <Header />
        <FormModal />
        <RugList rugs={rugs} />
      </main>
      <Footer />
    </div>
    </>
  )
}

// code will run on server side
export async function getServerSideProps() {
  await dbConnect();
  
  const result = await Rug.find({})
  const rugs = result.map((doc) => {
    const rug = doc.toObject()
    rug._id = rug._id.toString()
    return rug
  })

  return { props: { rugs: rugs } }
};
