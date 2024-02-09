import { useLoaderData } from "react-router-dom"
import { Separator } from "./ui/separator";

export async function loader({ params }) {
    // TODO: actually fetch, plus ingredients
    console.log(`Get recipe-id ${params.recipeId}`)
    const recipe = { "name": "Pina Coladas", "description": "everyone's favourite use of coconuts", "method": "1. coconut!!" };
    return { recipe };
}

const Recipe = () => {
    const {recipe} = useLoaderData();
    return <div>
            <b className="text-xl">{recipe.name}</b>
            <p className="text-sm text-muted-foreground">{recipe.description}</p>
            <Separator />
            {recipe.method}
        </div>
}

export default Recipe
