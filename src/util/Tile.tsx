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
import {KeyColor} from "./KeyColor.ts"

export enum TileType {
  EMPTY = "empty",
  CORNER = "corner",
  CRESCENT = "crescent",
  DIAMOND = "diamond",
  PENTAGON = "pentagon",
  TRIANGLE = "triangle",
  RECTANGLE = "rectangle",
  SHIELD = "shield",
  WEDGE = "wedge",
  BLOCKED = "blocked",
}

export const Keys = [
  TileType.CORNER,
  TileType.CRESCENT,
  TileType.DIAMOND,
  TileType.PENTAGON,
  TileType.TRIANGLE,
  TileType.RECTANGLE,
  TileType.SHIELD,
  TileType.WEDGE,
]

export interface Tile {
  components: { [key in TileType]: (color: string) => ReactElement };
}

export const Tiles: Tile = {
  components: {
    [TileType.EMPTY]: () => <></>,
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

export type ColoredTile = {
  color: KeyColor | undefined,
  tile: TileType,
}

export const EmptyTile: ColoredTile = {tile: TileType.EMPTY, color: undefined}
