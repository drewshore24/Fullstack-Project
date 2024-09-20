import { getSortBy } from "../../websiteAPI"
import { useSearchParams} from "react-router-dom"
import { useEffect, useState } from "react";


function SortArticlesBy(){
    const [searchParams, setSearchParams] = useSearchParams()
    const [selectedSort, setSelectedSort] = useState('created_at')
    const sort_by = searchParams.get('sort_by')
    const order = searchParams.get('order')

      function changeHandler(e){
        const value = e.target.value
         setSearchParams({sort_by: value, order: 'desc' })
         setSelectedSort(value)
      }
      


      return(
        <section>
          <section>
            <button onClick={() => setSearchParams({sort_by: selectedSort, order: 'asc' })}>Ascending</button>
            <button onClick={() => setSearchParams({sort_by: selectedSort, order: 'desc' })}>Descending</button>
          </section>
          <section className="SortByCatagoriesList">
            <select id='options' name='options' onChange={changeHandler}>
            <option value="">Select Catagory to Sort By</option>
            <option value="created_at">date</option>
            <option value="author">author</option>
            <option value="title">title</option>
            {/* <option value="comment_count">comment count</option> broken due to BE */}
            <option value="votes"> votes</option>
            </select>
          </section>
        </section>
      )
}


export default SortArticlesBy
