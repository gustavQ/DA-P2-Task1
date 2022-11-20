const AddButton = ({ handleButton }) => {
  return (
    <button onClick={() => handleButton()} type="button" className="px-6 py-2.5 bg-gray-600 text-white text-xl leading-tight rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700 focus: shadow-lg focus:outline-none active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out">+</button>
  )
}

export default AddButton
