'use client'
import React, { useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import Image from "next/image";
import { ThemeSwitch } from "./theme-switch";
import { Icon } from "@iconify/react/dist/iconify.js";


export default function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        "Home",
        "Experience",
        "Github",
    ];

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <Image alt="logo" src={"/favicon.png"} width={36} height={36}></Image>
                    <p className="font-bold text-inherit">redbiiddsun</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link color="foreground" href="/">
                        {menuItems[0]}
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    <Link href="#" aria-current="page">
                        {menuItems[1]}
                    </Link>
                </NavbarItem>
                <NavbarItem>
                   <a href="https://github.com/redbiiddsun" target="_blank">
                        {menuItems[2]}
                    </a>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="lg:flex">
                    <Icon icon="fa-brands:linkedin" color="#8d8d95" width="22" height="22" onClick={()=>{window.location.replace("https://www.linkedin.com/in/phanasorn-srisayam/")}} />
                </NavbarItem>
                <ThemeSwitch />
            </NavbarContent>
            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            color={
                                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                            }
                            className="w-full"
                            href="#"
                            size="lg"
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}


