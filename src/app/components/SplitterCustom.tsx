"use client"
import {GridLayout, GridLayoutItem, Splitter, SplitterOnChangeEvent} from "@progress/kendo-react-layout";
import {Map, MapLayers, MapTileLayer, TileUrlTemplateArgs} from "@progress/kendo-react-map";
import {Chart, ChartLegend, ChartSeries, ChartSeriesItem, ChartSeriesLabels} from "@progress/kendo-react-charts";
import {Label} from "@progress/kendo-react-labels";
import {Input} from "@progress/kendo-react-inputs";
import {useState} from "react";


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


export default function SplitterCustom(props: {

    // panes: Array<any>,
    // onChange: (event: SplitterOnChangeEvent) => void,
    // onClick: () => void,
    // urlTemplate: (e: TileUrlTemplateArgs) => string
}) {

    const [panes, setPanes] = useState<Array<any>>([{}, {
        id: 2, collapsible: false, size: "659px", resizable: false, keepMounted: false, scrollable: true
    }])

    const onTogglePane = (event: SplitterOnChangeEvent) => {
        setPanes(event.newState);
    }

    const changeByClick = () => {
        const updatedState = [...panes];
        updatedState[1].collapsed = !updatedState[1].collapsed;
        setPanes(updatedState);

    }

    const tileUrl = (e: TileUrlTemplateArgs) =>
        `https://${e.subdomain}.tile.openstreetmap.org/${e.zoom}/${e.x}/${e.y}.png`;

    return <Splitter panes={panes} onChange={onTogglePane}>
        <div>
            <button onClick={changeByClick}
                    style={{position: "absolute", top: "44px", left: "300px", zIndex: 1000}}>Change panel
            </button>

            <Map style={{height: "calc(100vh - 48px"}} center={[-15.7975, -47.8985]} zoom={5}>
                <MapLayers>
                    <MapTileLayer urlTemplate={tileUrl}/>
                </MapLayers>
            </Map>
        </div>

        <div style={{padding: "24px", height: "100%", maxHeight: "calc(100vh - 48px"}}>
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
                style={{marginTop: "32px"}}
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

            <div style={{marginTop: "64px"}}>
                <h4>Informações gerais</h4>
                <div>
                    <div style={{marginTop: "16px"}}>
                        <Label>
                            Nome
                        </Label>
                        <Input valid={true} disabled={true} ariaDescribedBy={"jaca"}
                               value={"Nome da intalação portuária"}/>
                    </div>

                    <div style={{marginTop: "16px"}}>
                        <Label>
                            CNPJ
                        </Label>
                        <Input valid={true} disabled={true} ariaDescribedBy={"jaca"}
                               value={"12.456.789/0001-45"}
                               style={{}}/>
                    </div>

                    <div style={{marginTop: "24px"}}>
                        <h5>Localização</h5>

                        <div style={{display: "flex", gap: "16px"}}>
                            <div style={{maxWidth: "64px"}}>
                                <Label>
                                    UF
                                </Label>
                                <Input valid={true} disabled={true} ariaDescribedBy={"jaca"}
                                       value={"SC"}
                                       style={{}}
                                       maxLength={3}
                                />
                            </div>
                            <div style={{flex: 1, width: "100%"}}>
                                <Label>
                                    Município
                                </Label>
                                <Input valid={true} disabled={true} ariaDescribedBy={"jaca"}
                                       value={"Nome da intalação portuária"}
                                       style={{}}/>
                            </div>
                        </div>

                        <div>
                            <Label>
                                Endereço
                            </Label>
                            <Input valid={true} disabled={true} ariaDescribedBy={"jaca"}
                                   value={"Nome da intalação portuária"} style={{}}/>
                        </div>

                        <div style={{display: "flex", gap: "16px"}}>
                            <div>
                                <Label>
                                    Latitude
                                </Label>
                                <Input valid={true} disabled={true} ariaDescribedBy={"jaca"}
                                       value={"-26.237481331890866"}
                                       style={{}}/>
                            </div>
                            <div>
                                <Label>
                                    Longitude
                                </Label>
                                <Input valid={true} disabled={true} ariaDescribedBy={"jaca"}
                                       value={"-26.237481331890866"}
                                       style={{}}/>
                            </div>
                        </div>
                    </div>

                    <div style={{marginTop: "24px"}}>
                        <h5>Contato</h5>

                        <div style={{display: "flex", gap: "16px"}}>
                            <div>
                                <Label>
                                    Telefone
                                </Label>
                                <Input valid={true} disabled={true} ariaDescribedBy={"jaca"}
                                       value={"45 1234 56789"}
                                       style={{}}/>
                            </div>
                            <div>
                                <Label>
                                    E-mail
                                </Label>
                                <Input valid={true} disabled={true} ariaDescribedBy={"jaca"}
                                       value={"contato@portosfsul.br"}
                                       style={{}}/>
                            </div>
                        </div>

                        <div>
                            <Label>
                                Site
                            </Label>
                            <Input valid={true} disabled={true} ariaDescribedBy={"jaca"}
                                   value={"Nome da intalação portuária"}
                                   style={{}}/>
                        </div>
                    </div>


                </div>
            </div>

            <div style={{marginTop: "64px", paddingBottom: "32px"}}>
                <div style={{
                    width: "604px",
                    height: "310px",
                    borderRadius: "8px",
                    background: "#d9d9d9"
                }}>Big image
                </div>

                <div style={{
                    display: "flex",
                    width: "604px",
                    height: "140px",
                    gap: "8px",
                    marginTop: "16px"
                }}>
                    <div style={{
                        width: "196px",
                        height: "140px",
                        borderRadius: "8px",
                        background: "#d9d9d9"
                    }}>small image
                    </div>
                    <div style={{
                        width: "196px",
                        height: "140px",
                        borderRadius: "8px",
                        background: "#d9d9d9"
                    }}>small image
                    </div>
                    <div style={{
                        width: "196px",
                        height: "140px",
                        borderRadius: "8px",
                        background: "#d9d9d9"
                    }}>small image
                    </div>
                </div>
            </div>
        </div>
    </Splitter>;
}