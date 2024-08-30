"use client"
import {AppBar, AppBarSection, Drawer, DrawerContent} from "@progress/kendo-react-layout";
import MapPage from "@/app/mapa/page";
import {useState} from "react";

const items = [
    {
        text: "Obras",
        selected: true,
        route: "/",
    },
    {
        separator: true,
    },
    {
        text: "Setor portuário nacional",
        route: "/bottomnavigation",
    },
    {
        separator: true,
    }
]

export default function AppLayout({
                                      children,
                                  }: Readonly<{
    children: React.ReactNode;
}>) {

    const [selected, setSelected] = useState(items.findIndex((x) => x.selected === true));
    return (
        <>
            <AppBar>
                <AppBarSection>Jaca</AppBarSection>
            </AppBar>
            <Drawer expanded={true} mode="push" position={"start"} mini={true} items={items.map((item, index) => ({
                ...item,
                selected: index === selected,
            }))}>
                <DrawerContent>
                    {children}
                </DrawerContent>
            </Drawer>
        </>
    )
}