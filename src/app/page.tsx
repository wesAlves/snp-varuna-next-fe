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

const [firstSeries, secondSeries]: number[][] = [
    [1, 3, 5, 7, 6, 4, 2],
    [2, 4, 6, 8, 5, 3, 1],
];

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
                        <div style={{padding: "24px"}}>
                            <h2><span>JM</span> Detalhes da instalação portuária</h2>
                            <h3>Port - São Francisco do Sul</h3>

                            <GridLayout
                                rows={[
                                    {height: 96},
                                    {height: 96},
                                    {height: 96},
                                ]}
                                cols={[{width: 318}, {width: 272},]}
                                gap={{rows: 16, cols: 16}}
                            >
                                <GridLayoutItem rowSpan={3} row={1} col={1} className={"big-chart-container"}>
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

                                <GridLayoutItem row={1} col={2} className={"big-numbers-container"}>
                                    <h4>Total inportações</h4>
                                    <p>R$ 1.789.456.353,00</p>
                                </GridLayoutItem>
                                <GridLayoutItem row={2} col={2} className={"big-numbers-container"}>
                                    <h4>Total inportações</h4>
                                    <p>R$ 1.789.456.353,00</p>
                                </GridLayoutItem>
                                <GridLayoutItem row={3} col={2} className={"big-numbers-container"}>
                                    <h4>Total inportações</h4>
                                    <p>R$ 1.789.456.353,00</p>
                                </GridLayoutItem>
                            </GridLayout>


                            <div style={{minHeight: "280px", padding: "16px", marginTop: "32px"}}
                                 className={"big-chart-container"}>
                                <div style={{display: "flex", marginBottom: "32px"}}>
                                    <h4 style={{flex: 1}}>Ranking de produtos movimentados</h4>
                                    <div style={{justifySelf: "self-end"}}>
                                        icons
                                    </div>

                                </div>


                                <Chart style={{maxHeight: "232px"}}>
                                    <ChartSeries>
                                        <ChartSeriesItem type="column" data={firstSeries}/>
                                        <ChartSeriesItem type="column" data={secondSeries}/>
                                    </ChartSeries>
                                </Chart>
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
