"use client"
import React from "react";
import Image from "next/image";
import { Accordion, AccordionItem, Button, Card, CardBody, CardFooter } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function WorkCard({ image, title, detail, href }: { image: string, title: string, detail: string, href: string }) {
    const router = useRouter()
    return (
        <>
            <Card className="w-full md:w-[300px] md:h-[210px] p-4">
                <CardBody className="overflow-hidden p-0 object-cover">
                    <Image src={image}
                        width={400}
                        height={250}
                        alt="work-img"
                        priority className="rounded-lg" />
                </CardBody>
                <CardFooter className="flex flex-col items-start">
                    <Accordion className="md:hidden">
                        <AccordionItem key="1" aria-label="Accordion 1" title={title}>
                            {detail}
                        </AccordionItem>
                    </Accordion>

                    <div className="hidden md:flex flex-col items-start">
                        <b className="text-sm">{title}</b>
                        <Button className="mt-2 text-tin" color="default" radius="lg" size="sm" onClick={() => { router.push(href) }}>
                            more detail
                        </Button>
                    </div>
                </CardFooter>
            </Card>
        </>
    )
} 