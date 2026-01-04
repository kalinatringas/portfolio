import * as React from "react"
import { SVGProps } from "react"
const ArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    xmlSpace="preserve"
    width={64.959}
    height={119.327}
    viewBox="0 0 17.187 31.572"
    {...props}
  >
    <defs>
      <linearGradient id="b">
        <stop
          offset={0}
          style={{
            stopColor: "#5279a5",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: "#275b70",
            stopOpacity: 1,
          }}
        />
      </linearGradient>
      <linearGradient id="a">
        <stop
          offset={0}
          style={{
            stopColor: "#b6e1f8",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: "#6ed9ff",
            stopOpacity: 1,
          }}
        />
      </linearGradient>
      <linearGradient
        xlinkHref="#a"
        id="c"
        x1={40.894}
        x2={57.415}
        y1={58.33}
        y2={63.067}
        gradientUnits="userSpaceOnUse"
      />
    </defs>
    <path
      d="M40.944 45.375c-.114-1.322 16.271 15.431 16.271 15.431s-16.009 16.66-16.041 15.2c-.039-1.717 1.914-11.84 1.91-15.2-.006-3.36-1.804-11.554-2.14-15.431z"
      style={{
        fill: "url(#c)",
        fillOpacity: 1,
        stroke: "url(#linearGradient17)",
        strokeWidth: 0.765,
        strokeDasharray: "none",
        strokeOpacity: 1,
      }}
      transform="translate(-40.56 -44.913)"
    />
  </svg>
)
export default ArrowRight


