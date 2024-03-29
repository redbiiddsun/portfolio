"use client"
import React from "react";
import { Icon } from '@iconify/react';
import Image from "next/image";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function Hero() {

  const router = useRouter();
  return (
    <>
      <section className="flex flex-col max-w-[800px] mt-10 w-full mx-auto text-center">
        <div className="flex flex-col md:flex-row gap-6">
            <div className="">
                <Image alt="logo" src={"/greating.png"} width={500} height={500}></Image> 
            </div>
            <div className="text-center md:text-left">
                <p className="text-[54px]"><b>Hi There!</b></p>
                <p className="text-2xl">I&apos;m Phanasorn Srisayam</p>
                <p className="text-2xl">A Software Developer</p>
                <p className="pt-4">I am currently studying Computer Engineering at King Mongkut&apos;s University of Technology Thonburi. And I have an 2 year experience in backend development</p>
                <div className="flex flex-row gap-3 mt-5 justify-center md:justify-start">
                    <Icon icon="vscode-icons:file-type-js-official" width="36" height="36" />
                    <Icon icon="vscode-icons:file-type-typescript-official" width="36" height="36" />
                    <Icon icon="file-icons:nextjs" width="36" height="36"  />
                    <Icon icon="skill-icons:expressjs-light" width="36" height="36" />
                    <Icon icon="vscode-icons:file-type-python" width="36" height="36" />
                    <Icon icon="skill-icons:docker" width="36" height="36" />
                    <Icon icon="skill-icons:linux-light" width="36" height="36" />
                </div>
                <div className="flex flex-row mt-6 gap-3">
                    <div className="w-60">
                    <Button color="default" onClick={() => router.push('/works')} fullWidth>
                        Works
                    </Button>
                    </div>
                    <div className="w-60"><Button color="default" fullWidth>
                        Contact
                    </Button>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
  );
}
