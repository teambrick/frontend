import { GlobalContext } from "@/context"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "./ui/navigation-menu"
import { useContext } from "react";
import ThemeToggle from "./ThemeToggle";
import { Link } from "react-router-dom";
import { Apple } from "lucide-react";
import { cn } from "@/lib/utils";
import React from "react";

const ListItem = React.forwardRef(( props : any ) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <Link
                    to={props.to}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        props.className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{props.title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {props.children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"

const Menus:{title:string, items:{title:string, href:string, desc:string}[]}[] = [
    {
        "title":"Households",
        "items": [
            {
                "title":"Inventory",
                "href":"/inv",
                "desc":"Your household's current inventory"
            },
            {
                "title":"Donate",
                "href":"/donate",
                "desc":"Items you could donate"
            },
            {
                "title":"Available",
                "href":"/avail",
                "desc":"Items available nearby"
            },

        ]
    },
    {
        title:"User",
        items: [
            {
                title: "Suggestions",
                href: "/suggest",
                desc: "Meal suggestions"
            },
            {
                title: "History",
                href: "/history",
                desc: "Meal history"
            }
        ]
    }
]

const NavigationBar = () => {
    const globalCtx = useContext(GlobalContext);
    return <>
        <NavigationMenu className="w-full relative">
            <NavigationMenuList className="relative w-full">
                <NavigationMenuItem>
                    <NavigationMenuTrigger>{globalCtx.brand.name}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-3">
                                <NavigationMenuLink asChild>
                                    <Link className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md" to="/">
                                        <Apple className="h-6 w-6" />
                                        <div className="mb-2 mt-4 text-lg font-medium">
                                            {globalCtx.brand.name}
                                        </div>
                                        <p className="text-sm leading-tight text-muted-foreground">
                                            {globalCtx.brand.tagline}
                                        </p>
                                    </Link>
                                </NavigationMenuLink>
                            </li>
                            <ListItem to="/about" title="About">
                                {globalCtx.brand.desc}
                            </ListItem>
                            <ListItem to="/credits" title="Credits">
                                Credits, attributions, and licenses.
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                {Menus.map(({title, items}) => {
                    return <NavigationMenuItem>
                        <NavigationMenuTrigger>{title}</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                {items.map((component) => (
                                    <ListItem
                                        key={component.title}
                                        title={component.title}
                                        href={component.href}
                                    >
                                        {component.desc}
                                    </ListItem>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                })}
                <NavigationMenuItem>
                    <Link to="/scan">
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Scan
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem className="ml-auto">
                    <ThemeToggle />
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    </>
}

export default NavigationBar
