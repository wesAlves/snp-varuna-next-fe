"use client"
import {AppBar, AppBarSection, Drawer, DrawerContent} from "@progress/kendo-react-layout";
import {useState} from "react";
import CustomDrawer from "@/app/components/CustomDrawer";

// children?: any
// className?: string
// style?: React.CSSProperties
// disabled?: boolean
// icon?: string
// svgIcon?: SVGIcon
// selected?: boolean
// separator?: boolean
// text?: string
// index?: number
// tabIndex?: number
// [p: string]: any
// level?: number
// onSelect?(target?: any, idx?: number, event?: React.SyntheticEvent<Element>): void }
const items = [
    {
        text: "Obras",
        route: "/",
        children: <div><h3>Amarelo</h3></div>,
        level: 1,
        selected: false
    },
    {
        text: "Mapa",
        route: "/mapa",
        level: 2,
        selected: true,

    },
    {
        text: "Analítico",
        route: "/analitico",
    },
]

export default function AppLayoutWithDrawer({
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

            {/*Drawer tende a não fincionar com a abordagem que estamos propondo pois não temos controle sobre os elementos e como devem se comportar*/}
            <Drawer expanded={true} mode="push" position={"start"} mini={true} items={items.map((item) => {
                return (
                    item
                )
            })}>
                <DrawerContent>
                    {children}
                </DrawerContent>
            </Drawer>
        </>
    )
}

export function AppLayoutWithCustomDrawer({
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

            <CustomDrawer>
                {children}
            </CustomDrawer>

        </>
    )
}