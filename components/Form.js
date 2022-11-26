import { useRouter } from 'next/router'
import { useState } from 'react'

const domain = /^https?:\/\/thumbs2.imgbox.com/

const Form = ({ rugForm }) => {
  const router = useRouter()
  const contentType = 'application/json'
  const [errors, setErrors] = useState({})
  const [message, setMessage] = useState('')

  const [form, setForm] = useState({
    nft_pfp: rugForm.nft_pfp,
    nft_name: rugForm.nft_name,
    nft_rug_descr: rugForm.nft_rug_descr,
  })

  const postData = async (form) => {
    await fetch('api/rugs', {
      method: 'POST',
      headers: {
        Accept: contentType,
        'Content-type': contentType,
      },
      body: JSON.stringify(form),
    })
    .then((res) => { 
      if(!res.ok) { setMessage('Failed To Add Rug') }
      else { 
        setMessage('New Rug Submited Successfully')
        setForm({
          nft_pfp: '',
          nft_name: '',
          nft_rug_descr: '',
        })
      }
    })
    .catch((error) => setMessage('Failed to add rug'))
    .finally(() => {
      router.push('/')
    })
  }

  const handleChange = (e) => {
    const target = e.target
    const value = target.value
    const name = target.name

    setForm({
      ...form,
      [name]: value,
    })
  }

  const formValidate = () => {
    let err = {}
		if(!domain.test(form.nft_pfp)) err.nft_pfp = 'Use https://imgbox.com to host picture'
    return err
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = formValidate()
    if(Object.keys(errs).length === 0) {
      postData(form)
    } else {
      setErrors(errs)
    }
  }
  
  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-y-4 px-4">
				<div>
        	<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nft_name">NFT Name</label>
        	<input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          	type="text"
          	name="nft_name"
          	value={form.nft_name}
          	onChange={handleChange}
          	required
        	/>
				</div>
				<div>
        	<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nft_pfp">Picture</label>
        	<input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          	type="url"
          	name="nft_pfp"
          	value={form.nft_pfp}
          	onChange={handleChange}
						placeholder="use https://imgbox.com to host"
          	required
        	/>
          <a className="underline text-sm font-bold hover:text-blue-500" href="https://imgbox.com" target="_blank" rel="noopener noreferrer">Imgbox</a>
				</div>
				<div>
        	<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nft_rug_descr">Description</label>
        	<textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          	type="text"
          	name="nft_rug_descr"
          	value={form.nft_rug_descr}
          	onChange={handleChange}
          	required
						rows="10"
						cols="33"
        	/>
				</div>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
          Submit 
        </button>
      </form>
      <div className="flex justify-center pt-2">
        <p>{message}</p>
      </div>
      <div>
        {Object.keys(errors).map((err, index) => (
          <li key={index}>{errors[err]}</li>
        ))}
      </div>
    </>
  )
}

export default Form
