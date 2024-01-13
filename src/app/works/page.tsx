"use server"
import WorkCard from "@/components/workCard";
import { getAllWorks } from "@/utils/mdx";
import { ComponentProps } from "react";


const CardContainer = (props: ComponentProps<"div">) => (<div className="flex justify-center" {...props} />)


export default async function Works() {

    // get All Work from articles folder
    let articles: Works[] = await getAllWorks()

    const sortedArticles: Works[] = articles.map((article: Works) => article)

    return (
        <>
            <div className="mt-10 xl:px-[19%]">
                <div className="grid grid-cols-auto-fill grid-rows-auto gap-6 justify-center">
                    {sortedArticles.map((post: Works) => {
                        return (
                            <CardContainer key={post.title}>
                                <WorkCard
                                    image={post.cover_image === undefined ? '/assets/default.jpg' : post.cover_image}
                                    title={post.title}
                                    detail={post.detail}
                                    href={`/works/${post.slug}`} />
                            </CardContainer>);
                    })}
                </div>
            </div>
        </>
    )
}