import {DropdownMenu} from "radix-ui"
import {
  CornerKey,
  CrescentKey,
  DiamondKey,
  PentagonKey,
  RectangleKey,
  ShieldKey,
  TriangleKey,
  WedgeKey,
} from "./Keys.tsx"
import {Tiles, TileType} from "../util/Tile.tsx"
import {KeyColor} from "../util/KeyColor.ts"
import {useState} from "react"

export default function MapTile({display}: { display: TileType }) {

  const [mainOpen, setMainOpen] = useState(false)

  const component = Tiles.components[display]("red")

  const closeMain = (open: boolean) => setMainOpen(open)

  return (
    <DropdownMenu.Root open={mainOpen} onOpenChange={closeMain}>
      <DropdownMenu.Trigger>
        <div className="map-tile rounded-xs w-full h-full" onClick={() => setMainOpen(prev => !prev)}>{component}</div>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="grid grid-cols-4 gap-2 bg-dark-background-secondary rounded-sm p-1">
        <DropdownSubMenu onOpenChange={closeMain} type={TileType.CORNER}/>
        <DropdownSubMenu onOpenChange={closeMain} type={TileType.CRESCENT}/>
        <DropdownSubMenu onOpenChange={closeMain} type={TileType.DIAMOND}/>
        <DropdownSubMenu onOpenChange={closeMain} type={TileType.PENTAGON}/>
        <DropdownSubMenu onOpenChange={closeMain} type={TileType.TRIANGLE}/>
        <DropdownSubMenu onOpenChange={closeMain} type={TileType.RECTANGLE}/>
        <DropdownSubMenu onOpenChange={closeMain} type={TileType.SHIELD}/>
        <DropdownSubMenu onOpenChange={closeMain} type={TileType.WEDGE}/>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}

function DropdownItem({type}: { type: TileType }) {
  const component = Tiles.components[type]("#fff")
  return <DropdownMenu.Item className="drop-item w-6">{component}</DropdownMenu.Item>
}

function DropdownSubMenu({type, onOpenChange}: { type: TileType, onOpenChange: (open: boolean) => void }) {
  const componentFactory = Tiles.components[type]

  const keys = Object.values(KeyColor).map(color => componentFactory(color))

  return (
    <DropdownMenu.Root onOpenChange={onOpenChange}>
      <DropdownMenu.Trigger className="drop-item w-6">{componentFactory("#fff")}</DropdownMenu.Trigger>
      <DropdownMenu.Content className="flex flex-col bg-dark-background-secondary w-8 gap-2 rounded-sm p-1 z-50">
        {
          keys.map(key => <DropdownMenu.Item className="drop-item">{key}</DropdownMenu.Item>)
        }
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}


