import {ReactElement} from "react"
import {
  CornerKey,
  CrescentKey,
  DiamondKey,
  PentagonKey,
  RectangleKey,
  ShieldKey,
  TriangleKey, WedgeKey,
} from "../components/Keys.tsx"

export enum TileType {
  EMPTY,
  CORNER,
  CRESCENT,
  DIAMOND,
  PENTAGON,
  TRIANGLE,
  RECTANGLE,
  SHIELD,
  WEDGE,
  BLOCKED,
}

export interface Tile {
  components: { [key in TileType]: (color: string) => ReactElement };
}

export const Tiles: Tile = {
  components: {
    [TileType.EMPTY]: () =>  <></>,
    [TileType.CORNER]: (color) => <CornerKey color={color}/>,
    [TileType.CRESCENT]: (color) => <CrescentKey color={color}/>,
    [TileType.DIAMOND]: (color) => <DiamondKey color={color}/>,
    [TileType.PENTAGON]: (color) => <PentagonKey color={color}/>,
    [TileType.TRIANGLE]: (color) => <TriangleKey color={color}/>,
    [TileType.RECTANGLE]: (color) => <RectangleKey color={color}/>,
    [TileType.SHIELD]: (color) => <ShieldKey color={color}/>,
    [TileType.WEDGE]: (color) => <WedgeKey color={color}/>,
    [TileType.BLOCKED]: () => <></>,
  },
}
