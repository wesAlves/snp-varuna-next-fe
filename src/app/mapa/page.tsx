import SplitterCustom from "@/app/components/SplitterCustom";
import AppLayoutWithDrawer, {AppLayoutWithCustomDrawer} from "@/app/components/appLayoutWithDrawer";

export default function MapPage (){
    return (
        <AppLayoutWithCustomDrawer>
            <SplitterCustom/>
        </AppLayoutWithCustomDrawer>
    )
}