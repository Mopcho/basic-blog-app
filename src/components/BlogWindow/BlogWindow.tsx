import { useState } from "react"
import { SingleBlog } from "../SingleBlog/SingleBlog";
import { SingleItemProps } from "../SingleBlog/types";

export const BlogWindow = () => {
    const [blogs, setBlogs] = useState<SingleItemProps[]>([
        {
            title: "Hello World",
            text: "Da ssdasdasdasdasdasdsadasdasd assdasdasdasdassdasdas dadsasdasssdasdasdasdasdasdsadasdasd assdasdasdasdassdasdas dadsasdasssdasdasdasdasdasdsadasdasd assdasdasdasdassdasdas dadsasdas",
            id: "asdasdasdasdasdasdasdassdasd sd sadasdasdasdasdassdassdasdasdasdasdasdsadasdasd assdasdasdasdassdasdas dadsasdasdasd",
            imageUrl: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80"
        },
        {
            title: "Hello World",
            text: "Idk what to put here",
            id: "asdasdsa",
            imageUrl: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80"
        },
        {
            title: "Hello World",
            text: "Idk what to put here",
            id: "asdasdsa",
            imageUrl: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80"
        },
        {
            title: "Hello World",
            text: "Idk what to put here",
            id: "asdasdsa",
            imageUrl: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80"
        },
    ]);

    return (
        <section className="container flex justify-center lg:justify-between flex-wrap gap-7 items-start m-auto">
            {blogs.map(x => <SingleBlog {...x} key={x.id}/>)}
        </section>
    )
}