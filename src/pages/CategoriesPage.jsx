import useDataStore from "@/hooks/useDataStore"
import CategoryForm from "../components/form/CategoryForm"
import CategoryCard from "@/components/form/CategoryCard"
import useEditStore from "@/hooks/useEditStore";




export default function CategoriesPage() {
  const {categories} = useDataStore();
  const {editingCategory} = useEditStore();

  return (
    
    <div className="flex items-center flex-col w-full h-full">

      <div className="p-4"> 
        <h1 className="font-semibold text-2xl">Categories</h1>
      </div>

      <CategoryForm editingCategory={editingCategory} />

      <div className="flex-row flex max-w-3xl flex-wrap">
        {categories.map((category) => {
          return <CategoryCard category={category} key={category.id}/>
        })}
      </div>
      
    </div>
  )
  
}
