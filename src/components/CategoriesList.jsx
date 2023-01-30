import CategoryItem from "./CategoryItem"
export default function CategoriesList(props){
    const { catalog } = props 
    return <>
        {!catalog.length ? <div className="preloader-wrapper no-dishes">nothing could be found</div> : null}
        {catalog.map(category =>  <CategoryItem key={category.idCategory} category={category} />)}
    </>
}