"use client"
import {useState} from "react";
import {
    AppBar,
    AppBarSection,
    Drawer,
    DrawerContent, GridLayout, GridLayoutItem,
    Splitter,
    SplitterOnChangeEvent
} from "@progress/kendo-react-layout";

import {Chart, ChartLegend, ChartSeries, ChartSeriesItem, ChartSeriesLabels,} from "@progress/kendo-react-charts";

import {Map, MapLayers, MapTileLayer, TileUrlTemplateArgs} from "@progress/kendo-react-map";
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

const data = [{"kind": "Hydroelectric", "share": 0.175},
    {"kind": "Nuclear", "share": 0.238},
    {"kind": "Coal", "share": 0.118},
    {"kind": "Solar", "share": 0.052},
    {"kind": "Wind", "share": 0.225},
    {"kind": "Other", "share": 0.192}
]

const labelContent = (e: { category: any; }) => e.category;

export default function Home() {

    const [selected, setSelected] = useState(items.findIndex((x) => x.selected === true));
    const tileUrl = (e: TileUrlTemplateArgs) =>
        `https://${e.subdomain}.tile.openstreetmap.org/${e.zoom}/${e.x}/${e.y}.png`;

    const [mainPanes, setMainPanes] = useState<Array<any>>([{}, {
        id: 2, collapsible: false, size: "659px", resizable: false, keepMounted: false
    }])

    const onTogglePane = (event: SplitterOnChangeEvent) => {
        setMainPanes(event.newState);
    }

    const changeByClick = () => {
        const updatedState = [...mainPanes];
        updatedState[1].collapsed = !updatedState[1].collapsed;
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
                            <h2><span>JM</span> Detalhes da instalação portuária</h2>
                            <h3>Port - São Francisco do Sul</h3>

                            <GridLayout
                                rows={[
                                    {height: 120},
                                    {height: 120},
                                    {height: 120},
                                ]}
                                cols={[{width: 318}, {width: 272},]}
                                gap={{rows: 16, cols: 16}}

                                style={{padding: "24px"}}
                            >
                                <GridLayoutItem rowSpan={3} className={"big-chart-container"}>
                                    <Chart>
                                        <ChartSeries>
                                            <ChartSeriesItem
                                                type="donut"
                                                data={data}
                                                categoryField="kind"
                                                field="share"
                                            >
                                                <ChartSeriesLabels
                                                    color="#fff"
                                                    background="none"
                                                    content={labelContent}
                                                />
                                            </ChartSeriesItem>
                                        </ChartSeries>
                                        <ChartLegend visible={false}/>
                                    </Chart>
                                </GridLayoutItem>
                                <GridLayoutItem>
                                    <div>
                                        <h4>Total inportações</h4>
                                        <p>R$ 1.789.456.353,00</p>
                                    </div>
                                    <div>
                                        <h4>Total inportações</h4>
                                        <p>R$ 1.789.456.353,00</p>
                                    </div>
                                    <div>
                                        <h4>Total inportações</h4>
                                        <p>R$ 1.789.456.353,00</p>
                                    </div>
                                </GridLayoutItem>
                            </GridLayout>


                            <div>
                                ChartBar
                            </div>

                            <div>
                                <h4>Informações gerais</h4>
                                <div>Inputs</div>
                            </div>

                            <div>
                                <div>Big image</div>
                                <div>
                                    <div>small image</div>
                                    <div>small image</div>
                                    <div>small image</div>
                                </div>
                            </div>
                        </div>
                    </Splitter>
                </DrawerContent>
            </Drawer>


        </main>
    );
}
