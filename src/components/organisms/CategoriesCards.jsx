import categories from "@/lib/categories";
import CategoryCard from "../molecules/CategoryCard";

function CategoriesCards() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[33px]">
            {
                categories.map((category, index) => {
                    return <CategoryCard key={index} className="min-h-[500px]" name={category.name} image={category.image} href={category.href} />
                })
            }
        </div>
    )
}

export default CategoriesCards
