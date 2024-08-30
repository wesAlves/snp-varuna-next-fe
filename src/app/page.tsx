"use client"
import {useState} from "react";
import {
    AppBar,
    AppBarSection,
    Drawer,
    DrawerContent
} from "@progress/kendo-react-layout";

import "./theme.scss";
import AnalyticPage from "@/app/analitico/page";
import MapPage from "@/app/mapa/page";
import AppLayoutWithDrawer from "@/app/components/appLayoutWithDrawer";

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

export default function Home() {
    const [selected, setSelected] = useState(items.findIndex((x) => x.selected === true));

    return (
        <AppLayoutWithDrawer>
            Home
        </AppLayoutWithDrawer>
    );
}
