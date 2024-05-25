import React , {useState} from 'react'
import axios from 'axios'
const Search = ({onSearchResults}) => {

    const[query , setQuery] = useState('')

    const handleSubmit = async(e) =>{
        e.preventDefault();
        console.log(query)
        try{
            const res = await axios.get('http://localhost:5001/books/search' , { params: { query } })
            console.log(res)
            onSearchResults(res.data)
            setQuery('')
        }catch(error){
            console.error('Error searching books:', error);
        }
    }

  return (
    <>
        <div>
            <form onSubmit={handleSubmit}>
                <div className='flex flex-col md:flex-row gap-y-4 md:gap-x-4'>
                    <input
                        value={query}
                        type="text"
                        placeholder='Search book'
                        onChange = {(e) => setQuery(e.target.value)}
                        className='w-96 px-2 py-1 outline-none border border-slate-200'
                        >
                    </input>
                    <button 
                        type="submit"
                        className='px-2 py-1 text-white bg-green-500 rounded hover:bg-green-600'
                        >
                        Search
                    </button>
                </div>
                
            </form>
            
        </div>
    </>
  )
}

export default Search
