import useSWR from 'swr'

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
    <p>{rug.nft_rug_descr}</p>
  )
}

export default RugModal
