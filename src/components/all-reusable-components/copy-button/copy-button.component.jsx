import React from "react";

import ReactTooltip from "react-tooltip";

import './copy-button.styles.scss'

const CopyButton = ({text1, text2}) => {
    <div>
    
        <div className="col-auto hover-scale-change" 
            data-tip='saved!' data-event='click focus'
        >

            <i class="bi bi-clipboard fs-5" data-tip data-for="copy-btn"></i>
        </div>
        {/* copy button tooltip hover*/}
        <ReactTooltip class="col-auto fs-6" id="copy-btn" place="bottom" effect="solid">
        Copy the Quote!
        </ReactTooltip>
        {/* copy button tooltip onClick*/}
        <ReactTooltip 
        class="col-auto bg-success fs-6" 
        place="right" effect="solid"
        afterShow = {() => navigator.clipboard.writeText(`${text1} - ${text2}`)}
        globalEventOff={"click"}

        />
    </div>

}

export default CopyButton;
