import useSWR from 'swr'
import ImageFallback from './ImageFallback'

const fetcher = async (api) => 
   await fetch(api)
    .then((res) => { 
        if(!res.ok)
          throw Error("Something went wrong")
        return res.json()
    })
    .then((json) => json.data)

const RugModal= ({ Id }) => {
  const {data: rug, error } = useSWR(`/api/rugs/${Id}`, fetcher)

  if(error) return <p>{error.message}</p>
  if(!rug) return <p>Loading...</p>

  return (
    <div className='max-w-md flex flex-col gap-y-4'>
      <div className='content-start'>
        <ImageFallback  src={rug.nft_pfp} 
									alt="none" 
									width="100%" 
									height="100%" 
									layout="responsive" 
									objectFit="contain"/>

      </div>
      <div>
        <p>{rug.nft_rug_descr}</p>
      </div>
    </div>
  )
}

export default RugModal
