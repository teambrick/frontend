import { useLoaderData } from "react-router-dom"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

export async function loader({ params }: {params: {recipeId: string}}) {
    // TODO: actually fetch, plus ingredients
    console.log(`Get recipe-id ${params.recipeId}`)
    const recipe = { "name": "Pina Coladas", "description": "everyone's favourite use of coconuts", "method": "1. coconut!!" };
    return { recipe };
}

const Recipe = () => {
    const {recipe} = useLoaderData();
    return <Card className="w-full">
        <CardHeader>
            <CardTitle>{recipe.name}</CardTitle>
            <CardDescription>{recipe.description}</CardDescription>
        </CardHeader>
        <CardContent>
            {recipe.method}
        </CardContent>
    </Card>
}

export default Recipe
