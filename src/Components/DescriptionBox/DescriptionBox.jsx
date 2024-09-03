import React from 'react'
import './DescriptionBox.css'
const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>
            E-commerce (electronic commerce) is the activity of electronically buying or selling products on online services or over the Internet. 
            E-commerce draws on technologies such as mobile commerce, electronic funds transfer, supply chain management, Internet marketing, 
            online transaction processing, electronic data interchange (EDI), inventory management systems, and automated data collection systems. 
            E-commerce is the largest sector of the electronics industry and is in turn driven by the technological advances of the semiconductor industry. 
            </p>
            <p>
            Text to Shop is seamlessly connected to your Walmart account, so we know your usual ordered items. Simply text the items you need, and they get 
            added to your cart. Choose from the full selection of Walmart's products, including items from your local store and from Walmart.com
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox;