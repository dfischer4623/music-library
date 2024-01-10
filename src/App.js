import { useEffect, useState } from "react"
import Gallery from "./components/Gallery"
import SearchBar from "./components/SearchBar"

function App(){
  let [search, setSearch] = useState('')
  let [message, setMessage] = useState('Search for Music!')
  let [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://itunes.apple.com/search?term=black%20sabbath'
      const response = await fetch(url)
      const data = await response.json()
      console.log(data)

      if (data.results.length) {
        setData(data.results)
      } else {
        setMessage('No results found')
      }
    }

    fetchData()
  }, [search])

  return (
      <div>
          <SearchBar />
          {message}
          <Gallery />
      </div>
  )
}

export default App