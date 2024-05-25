import React , {useState} from 'react'
import Search from './Search'
import Cards from './Cards'
import toast from 'react-hot-toast'
const SearchBook = () => {
    const [searchResult , setSearchResult] = useState([])

    const handleSearchResults = (book) =>{
        if(book.length == 0)
        {
            toast.success("Not Found")
        }
        setSearchResult(book)
        console.log(searchResult)
    }

  return (
    <>
        <div className='mt-32 mb-10 flex flex-col items-center justify-center space-y-4'>
            <div className='text-2xl'>Search a Book </div>
            <p className='text-slate-400'>search book according to title,author or genre</p>
            <Search onSearchResults={handleSearchResults}/>
            {
                searchResult.map((book)=>(
                    <Cards key={book._id} item={book}/>
                ))
            }
        </div>
       
    </>
  )
}

export default SearchBook
