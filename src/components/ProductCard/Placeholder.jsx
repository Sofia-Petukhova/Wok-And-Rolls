import React from "react"
import ContentLoader from "react-content-loader"

const Placeholder = (props) => (
  <ContentLoader 
    className="product-card"
    speed={2}
    width={280}
    height={390}
    viewBox="0 0 280 400"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="10" ry="10" width="280" height="187" /> 
    <rect x="0" y="205" rx="10" ry="10" width="280" height="20" /> 
    <rect x="0" y="244" rx="10" ry="10" width="280" height="87" /> 
    <rect x="2" y="360" rx="10" ry="10" width="51" height="27" /> 
    <rect x="130" y="352" rx="10" ry="10" width="150" height="45" />
  </ContentLoader>
)

export default Placeholder