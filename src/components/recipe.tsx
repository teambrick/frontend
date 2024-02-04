import { useLoaderData } from "react-router-dom"

export async function loader({ params }) {
    // TODO: actually fetch, plus ingredients
    const recipe = {"name":"Pina Coladas", "description":"everyone's favourite use of coconuts", "method":"1. coconut!!"};
    return { recipe };
}


export default function Recipe() {
    const { recipe } = useLoaderData();
    return <>
        <b className="text-xl">{recipe.name}</b>
    </>;
}
