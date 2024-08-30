import {Splitter, SplitterOnChangeEvent} from "@progress/kendo-react-layout";
import {useState} from "react";

export default function CustomDrawer(props: any) {

    const [panes, setPanes] = useState<Array<any>>([{
        id: "drawer", collapsible: false, size: "250px", resizable: false, keepMounted: false, scrollable: true
    }, {}])

    const onTogglePane = (event: SplitterOnChangeEvent) => {
        setPanes(event.newState);
    }

    const changeByClick = () => {
        const updatedState = [...panes];
        updatedState[1].collapsed = !updatedState[1].collapsed;
        setPanes(updatedState);

    }

    return (
        <Splitter panes={panes}>
            <div>
                <nav>
                    <ul>
                        <li>Obras</li>
                        <li>Setor portuário</li>
                        <li>Monitoramento portuário</li>
                    </ul>
                </nav>

            </div>
            <div>{props.children}</div>
        </Splitter>
    )
}