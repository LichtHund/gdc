import {ColoredTile, EmptyTile, Keys, Tiles, TileType} from "../util/Tile.tsx"
import {KeyColors} from "../util/KeyColor.ts"
import {ReactNode, RefObject, useEffect, useRef, useState} from "react"
import {CSSTransition} from "react-transition-group"

export default function MapTile({display, updateTile}: {
  display: ColoredTile,
  updateTile: (tile: ColoredTile) => void
}) {

  const [open, setOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const toggle = () => setOpen(!open)

  const component = Tiles.components[display.tile](display.color)

  // When clicking outside the dropdown menu.
  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setOpen(false)
    }
  }

  // When the window loses focus, for example, clicking on RuneScape.
  const handleFocusLoss = () => setOpen(false)

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)
    window.addEventListener("blur", handleFocusLoss)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      window.addEventListener("blur", handleFocusLoss)
    }
  }, [])

  return (
    <div>
      <div
        className="relative map-tile rounded-xs w-[30px] h-[30px] p-1"
        onClick={toggle}
        onContextMenu={() => updateTile(EmptyTile)}
      >
        {component}
      </div>
      {
        open && <div ref={dropdownRef}><DropdownContent updateTile={updateTile} close={() => setOpen(false)}/></div>
      }
    </div>
  )
}

function DropdownContent({updateTile, close}: { updateTile: (tile: ColoredTile) => void, close: () => void }) {

  const [activeMenu, setActiveMenu] = useState("main")
  const transitionRef = useRef<HTMLDivElement>(null)

  function DropdownPageItem({type}: { type: TileType }) {
    return (
      <DropdownItem
        onContextMenu={close}
        onClick={() => setActiveMenu(type)}
        type={type}
        color="#fff"
      />
    )
  }

  return (
    <>
      {/* Main "page" of the dropdown with the base for keys and some direct tiles. */}
      <DropdownPage className="grid-cols-4" active={() => activeMenu == "main"} reference={transitionRef}>
        <DropdownPageItem type={TileType.CORNER}/>
        <DropdownPageItem type={TileType.CRESCENT}/>
        <DropdownPageItem type={TileType.DIAMOND}/>
        <DropdownPageItem type={TileType.PENTAGON}/>
        <DropdownPageItem type={TileType.TRIANGLE}/>
        <DropdownPageItem type={TileType.RECTANGLE}/>
        <DropdownPageItem type={TileType.SHIELD}/>
        <DropdownPageItem type={TileType.WEDGE}/>
        {/* <DropdownItem onClick={() => setActiveMenu(TileType.WEDGE)} type={TileType.WEDGE} color="#fff"/>
        <DropdownItem onClick={() => setActiveMenu(TileType.WEDGE)} type={TileType.WEDGE} color="#fff"/>*/}
      </DropdownPage>

      {/* Colors "page" which is a single key tile with the possible colors. */}
      {
        Keys.map(key => (
          <DropdownPage className="grid-cols-4" active={() => activeMenu == key} reference={transitionRef}>
            {
              KeyColors.map(color => (
                <DropdownItem
                  type={key}
                  color={color}
                  onClick={() => {
                    updateTile({tile: key, color: color})
                    close()
                  }}
                  onContextMenu={() => setActiveMenu("main")}
                />
              ))
            }
          </DropdownPage>
        ))
      }
    </>
  )
}

function DropdownPage({reference, active, children, className}: {
  reference: RefObject<HTMLDivElement | null>,
  active: () => boolean,
  children: ReactNode,
  className: string,
}) {

  const classes = "absolute grid gap-2 overflow-hidden z-50 bg-dark-background-secondary rounded-sm p-2 " + className

  return (
    <CSSTransition
      classNames="menu-primary"
      nodeRef={reference}
      in={active()}
      timeout={300}
      unmountOnExit
    >
      <div className={classes}>
        {children}
      </div>
    </CSSTransition>
  )
}

function DropdownItem({type, onClick, color, onContextMenu}: {
                        type: TileType,
                        onClick: () => void,
                        onContextMenu: () => void,
                        color: string
                      },
) {
  const component = Tiles.components[type](color)
  return <div className="drop-item w-6" onClick={onClick} onContextMenu={() => onContextMenu()}>{component}</div>
}
