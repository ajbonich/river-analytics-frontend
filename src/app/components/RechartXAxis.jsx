import React from 'react'
import { XAxis, Label } from 'recharts'
const RechartXAxis = () => {
    return (
        <XAxis dataKey="index" height={40}>
            <Label
                value={this.props.xLabel} //"Day of the Year"
                position="insideBottom"
                offset={3}
            />
        </XAxis>
    )
}

export default RechartXAxis
