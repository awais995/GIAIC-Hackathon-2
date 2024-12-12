import { SearchIcon } from "lucide-react"



{/********Nav Search Start*********** */}
export const Header = () => {
    return (
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center pl-6 pb-0 mb-0 py-4">
          
          {/* Sort and Filter Options */}
          <div className="flex items-center gap-4">
            Sortby: 
            <select className="border p-2 rounded">
              <option>Newest</option>
              {/* Add other sort options */}
            </select>
            <select  className="border p-1 rounded">
              Show
              <option>Default</option>
              {/* Add other filter options */}
            </select>
          </div>
         
        </div>
      </nav>
    )
  }




