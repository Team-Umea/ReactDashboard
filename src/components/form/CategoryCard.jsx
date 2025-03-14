import {
    Card,
    CardContent,
    CardFooter,
    CardTitle,
  } from "@/components/ui/card"
import useDataStore from "@/hooks/useDataStore"
  
  export default function CategoryCard({category}){
    const {editCategory,deleteCategory} = useDataStore();
    return( 
    <div className="min-w-24 max-w-32 h-min border-black border-2 rounded-lg flex flex-col items-center">
        <Card className="w-full flex flex-col p-1">
            <div className="h-2 rounded-xl mx-1 mt-1" style={{backgroundColor:category.color}}>
            </div>
            <CardContent className="mt-1 p-0 pb-1">
                <CardTitle className="text-slate-800">{category.category}</CardTitle>
            </CardContent>
            <CardFooter className="p-0">
                <button className="bg-slate-300 px-2 text-xs py-0 my-0 rounded-md" onClick={()=>editCategory(category.id)}>Edit</button>
                <button className="bg-red-500 px-2 text-xs py-0 my-0 rounded-md" onClick={()=>deleteCategory(category.id)} >Delete</button>
            </CardFooter>

    </Card>
    </div>
    
    )
}