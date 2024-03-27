import {PaletteGridProps} from "./PaletteGridProps.ts";
import GridItem from "./components/GridItem/GridItem.tsx";

const PaletteGrid = (props: PaletteGridProps) => {
    return (
        <div className="w-full h-palette-grid bg-item grid grid-cols-5">
            {props.palette.colors.map((element, index) => (
                <GridItem key={index} index={index} element={element}/>
            ))}
        </div>
    )
}

export default PaletteGrid