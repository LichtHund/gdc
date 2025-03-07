import {CSSProperties} from "react"

export type KeyProperties = {
  color: string,
}

const keyStyle: CSSProperties = {
  fillRule: "evenodd",
  clipRule: "evenodd",
  strokeLinejoin: "round",
  strokeMiterlimit: 2,
}

export function CornerKey({color}: KeyProperties) {
  return (
    <svg
      width="100%" height="100%" viewBox="0 0 64 64" version="1.1" xmlns="http://www.w3.org/2000/svg"
      style={keyStyle}
    >
      <path d="M64,64l-0,-64l-32,0l-0,32l-32,0l-0,32l64,0Z" style={{fill: color}}/>
    </svg>
  )
}

export function CrescentKey({color}: KeyProperties) {
  return (
    <svg
      width="100%" height="100%" transform="rotate(-90)" viewBox="0 0 64 64" version="1.1" xmlns="http://www.w3.org/2000/svg"
      style={keyStyle}
    >
      <path d="M63.5,47.75c-7.35,-5.216 -18.934,-9.45 -31.5,-9.45c-12.566,-0 -24.15,4.234 -31.5,9.45c0,-17.385 14.115,-31.5 31.5,-31.5c17.385,-0 31.5,14.115 31.5,31.5Z" style={{fill: color}}/>
    </svg>
  )
}

export function DiamondKey({color}: KeyProperties) {
  return (
    <svg
      width="100%" height="100%" viewBox="0 0 64 64" version="1.1" xmlns="http://www.w3.org/2000/svg"
      style={keyStyle}
    >
      <path d="M32,0l-32,32l32,32l32,-32l-32,-32Z" style={{fill: color}}/>
    </svg>
  )
}

export function PentagonKey({color}: KeyProperties) {
  return (
    <svg
      width="100%" height="100%" viewBox="0 0 64 64" version="1.1" xmlns="http://www.w3.org/2000/svg"
      style={keyStyle}
    >
      <path d="M32,1.699l31.86,23.148l-12.169,37.454l-39.382,0l-12.169,-37.454l31.86,-23.148Z" style={{fill: color}}/>
    </svg>
  )
}

export function TriangleKey({color}: KeyProperties) {
  return (
    <svg
      width="100%" height="100%" viewBox="0 0 64 64" version="1.1" xmlns="http://www.w3.org/2000/svg"
      style={keyStyle}
    >
      <path d="M32,0l32,64l-64,0l32,-64Z" style={{fill: color}}/>
    </svg>
  )
}

export function RectangleKey({color}: KeyProperties) {
  return (
    <svg
      width="100%" height="100%" transform="rotate(90)" viewBox="0 0 64 64" version="1.1" xmlns="http://www.w3.org/2000/svg"
      style={keyStyle}
    >
      <rect x="0" y="14" width="64" height="36" style={{fill: color}}/>
    </svg>
  )
}

export function ShieldKey({color}: KeyProperties) {
  return (
    <svg
      width="100%" height="100%" viewBox="0 0 64 64" version="1.1" xmlns="http://www.w3.org/2000/svg"
      style={keyStyle}
    >
      <path d="M32,64c0,0 -29.875,-3.568 -30,-57.5c0,0 19.121,12.137 30,-6.5c10.879,18.637 30,6.5 30,6.5c-0.125,53.932 -30,57.5 -30,57.5Z" style={{fill: color}}/>
    </svg>
  )
}

export function WedgeKey({color}: KeyProperties) {
  return (
    <svg
      width="100%" height="100%" transform="rotate(-90)" viewBox="0 0 64 64" version="1.1" xmlns="http://www.w3.org/2000/svg"
      style={keyStyle}
    >
      <path d="M64,43l-64,0l16,-22l32,0l16,22Z" style={{fill: color}}/>
    </svg>
  )
}
