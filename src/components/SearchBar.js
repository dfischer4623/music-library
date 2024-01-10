import { useState } from "react"

function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('')
    return (
        <form>
            <input placeholder="Enter band name here" />
            <input type="submit" />
        </form>
    )
}

export default SearchBar