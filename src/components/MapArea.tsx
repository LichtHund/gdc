import {useEffect, useState} from "react"
import * as altlib from "alt1"
import MapTile from "./MapTile.tsx"
import {TileType} from "../util/Tile.tsx"

export default function MapArea() {

  const [width, setWidth] = useState<number>(window.innerWidth)
  const [image, setImage] = useState<ImageData | null>(null)

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerHeight))
  }, [width])

  /*useEffect(() => {
    const interval = setInterval(() => captureRs(width, width).then(data => setImage(data)), 500)
    return () => clearInterval(interval)
  }, [width, image])*/

  function backgroundImage() {
    if (image) return `url('${createImageUrl(image)}')`
    return "#000"
  }

  return (
    <>
      <div
        className="overflow-hidden bg-dark-background-secondary w-full aspect-square p-2"
        style={
          {
            background: backgroundImage(),
          }
        }
      >
        <div className="border-guideline border w-full h-full grid grid-cols-8 gap-1">
          {
            [...Array(64).keys()].map(key => (
              <MapTile key={key} display={TileType.EMPTY}/>
            ))
          }
        </div>
      </div>
    </>
  )
}

function createImageUrl(imageData: ImageData | null) {
  if (imageData) {
    // Create a canvas element
    const canvas = document.createElement("canvas")
    canvas.width = imageData.width
    canvas.height = imageData.height

    // Draw the ImageData onto the canvas
    const context = canvas.getContext("2d")
    if (context == null) return ""
    context.putImageData(imageData, 0, 0)

    // Convert the canvas to a data URL
    return canvas.toDataURL()
  }

  return ""
}

function captureRs(width: number, height: number): Promise<ImageData> {
  const screenPositionX = window.screenX
  const screenPositionY = window.screenY

  const windowPositionX = window.alt1.rsX
  const windowPositionY = window.alt1.rsY

  const startX = screenPositionX - windowPositionX
  const startY = screenPositionY - windowPositionY

  return altlib.captureAsync(startX, startY, width, height)
}

/*const screenPositionX = window.screenX
          const screenPositionY = window.screenY

          const windowPositionX = window.alt1.rsX
          const windowPositionY = window.alt1.rsY

          const startX = screenPositionX - windowPositionX
          const startY = screenPositionY - windowPositionY

          const endX = startX + displayWidth
          const endY = startY + displayHeight

          /!*console.log("Window position", windowPositionX, windowPositionY)
          console.log("Screen position", screenPositionX, screenPositionY)
          console.log("Start position", startX, startY)
          console.log("End position", endX, endY)*!/
          console.log("screenX: " + window.screenX + ", screenY: " + window.screenY)

          const img = baselib.captureHold(startX, startY, displayWidth, displayHeight)

          setImage(img.toData())
          setCount((count) => count + 1)*/
