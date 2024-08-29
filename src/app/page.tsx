"use client"
import {useState} from "react";
import {
    AppBar,
    AppBarSection,
    Drawer,
    DrawerContent,
    DrawerSelectEvent, PanelBar, PanelBarItem,
    Splitter,
    SplitterOnChangeEvent, SplitterPane
} from "@progress/kendo-react-layout";
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

    // size?: string     min?: string     max?: string     resizable?: boolean     collapsible?: boolean     collapsed?: boolean     scrollable?: boolean     keepMounted?: boolean
    const [mainPanes, setMainPanes] = useState<Array<any>>([{}, {
        id:2, collapsible: false, size: "400px", resizable: false, keepMounted: false
    }])

    const onTogglePane = (event: SplitterOnChangeEvent) => {
        setMainPanes(event.newState);
    }

    const changeByClick = () => {
        const  updatedState = [...mainPanes];
        updatedState[1].collapsed=!updatedState[1].collapsed;
        setMainPanes(updatedState);

    }

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
                    <Splitter panes={mainPanes} onChange={onTogglePane}>
                        <div>
                            <button onClick={() => changeByClick()}>Change panel
                            </button>

                            <Map style={{height: "100vh"}} zoom={15}>
                                <MapLayers>
                                    <MapTileLayer urlTemplate={tileUrl}/>
                                </MapLayers>
                            </Map>
                        </div>
                        <div>
                            Right pane
                        </div>
                    </Splitter>
                </DrawerContent>
            </Drawer>
        </main>
    );
}
