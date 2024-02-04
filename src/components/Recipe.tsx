import React from 'react'
import { useLoaderData } from "react-router-dom"
import { Button } from './ui/button';

export async function loader({ params }: { params: string }) {
    // TODO: actually fetch, plus ingredients
    const recipe = { "name": "Pina Coladas", "description": "everyone's favourite use of coconuts", "method": "1. coconut!!" };
    return { recipe };
}

const Recipe = () => {
    return (
        <div><Button>test</Button></div>
    )
}

export default Recipe
