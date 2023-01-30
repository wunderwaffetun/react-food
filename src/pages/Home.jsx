import { getAllCategories } from '../api'
import { useNavigate, useLocation } from 'react-router-dom'
import {useState, useEffect} from 'react'
import Preloader from '../components/Preloader'
import CategoriesList from '../components/CategoriesList'
import { Search } from '../components/Search'
import { Category } from './Category'

export function Home(){
    const [catalog, setCatalog] = useState([])
    const [filteredCatatalog, setFilteredCatalog] = useState([])
    const navigate = useNavigate()
    const {pathname, search} = useLocation()

    const handleSearch = (str) => {
        if(str !== ""){
            setFilteredCatalog(
                catalog.filter( (category) => 
                    category.strCategory.toLowerCase().includes(str.toLowerCase())
                )
            )
        } else {
            setFilteredCatalog(catalog)
        }
        navigate(`${pathname}?search=${str}`)
    }

    useEffect(()=>{
        getAllCategories()
        .then(data => {
            setCatalog(data.categories)
            setFilteredCatalog( search ? (
                    data.categories.filter(category => category.strCategory.toLowerCase().includes(search.split('=')[1].toLowerCase()))
                ) : data.categories
            )
        })
        console.log(search.split('=')[1])
    }, [search])
    return <>
        <Search cb={ handleSearch }> </Search>
        <div className='categories-parent'>
            {!catalog.length ? (
                <Preloader />
            ) : ( <CategoriesList catalog={filteredCatatalog} />)}
        </div>
    </>
}