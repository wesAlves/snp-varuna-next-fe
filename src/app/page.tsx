"use client"
import {useState} from "react";
import {AppBar, AppBarSection, Drawer, DrawerContent, DrawerSelectEvent} from "@progress/kendo-react-layout";
import {Map, MapLayers, MapTileLayer, TileUrlTemplateArgs} from "@progress/kendo-react-map";

import styles from "./page.module.css";
import "./theme.scss";


const items = [
    {
        text: "Avatar",
        selected: true,
        route: "/",
    },
    {
        separator: true,
    },
    {
        text: "BottomNavigation",
        route: "/bottomnavigation",
    },
    {
        separator: true,
    }
]

export default function Home() {

    const [selected, setSelected] = useState(items.findIndex((x) => x.selected === true));
    const tileUrl = (e: TileUrlTemplateArgs) =>
        `https://${e.subdomain}.tile.openstreetmap.org/${e.zoom}/${e.x}/${e.y}.png`;

    return (
        <main>
            <AppBar>
                <AppBarSection>Jaca</AppBarSection>
            </AppBar>
            <Drawer expanded={true} mode="push" position={"start"} mini={true} items={items.map((item, index) => ({
                ...item,
                selected: index === selected,
            }))}>
                <DrawerContent>

                    <Map style={{height:"100vh"}} zoom={15} >
                        <MapLayers>
                            <MapTileLayer urlTemplate = {tileUrl}  />
                        </MapLayers>
                    </Map>


                </DrawerContent>
            </Drawer>
        </main>
    );
}
