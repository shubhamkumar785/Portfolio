import React from 'react'

// Paytm wordmark, drawn as SVG text in the brand colours.
// Swap for the official SVG if you have it.
const PaytmLogo = ({ className = 'paytm-logo' }) => (
  <svg className={className} viewBox="0 0 132 40" role="img" aria-label="Paytm">
    <text x="66" y="30" textAnchor="middle" fontFamily="Manrope, Arial, sans-serif" fontSize="34" fontWeight="800" letterSpacing="-1.5">
      <tspan fill="#002E6E">pay</tspan>
      <tspan fill="#00BAF2">tm</tspan>
    </text>
  </svg>
)

export default PaytmLogo
