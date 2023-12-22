import { getWorkFromSlug } from "@/utils/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";


export default async function WorkContent({ params }: { params: { slug: string } }) {

    const { content, frontmatter } = await getWorkFromSlug(params.slug);

    return (
        <>
            <div className="flex flex-col content-center items-center text-justify mt-10 xl:px-[19%]">
                <div className="">
                    <Image src={frontmatter.cover_image}
                        width={500}
                        height={350}
                        alt="img"
                        priority className="rounded-lg" />
                </div>
                <div className="mt-10">
                    <MDXRemote source={content}/>
                </div>

            </div>
        </>
    )
}