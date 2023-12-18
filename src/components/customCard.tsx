"use client"
import React from "react";
import Image from "next/image";
import { Accordion, AccordionItem, Button, Card, CardBody, CardFooter } from "@nextui-org/react";

const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

export default function CustomCard({ image, title, detail }: { image: string, title: string, detail: string }) {
    return (
        <>
            <Card className="w-full md:w-[300px] p-4">
                <CardBody className="overflow-hidden p-0 object-cover">
                    <Image src='/IMG_1780.JPG' width={400} height={250} alt="work-img" priority className="rounded-lg" />
                </CardBody>
                <CardFooter className="flex flex-col items-start">
                    <Accordion className="md:hidden">
                        <AccordionItem key="1" aria-label="Accordion 1" title={title}>
                            {defaultContent}
                        </AccordionItem>
                    </Accordion>

                    <div className="hidden md:flex flex-col items-start">
                        <b className="text-sm">{title}</b>
                        <Button className="mt-2 text-tin"  color="default" radius="lg" size="sm">
                            more detail
                        </Button>
                    </div>
                </CardFooter>
            </Card>
        </>
    )
} 