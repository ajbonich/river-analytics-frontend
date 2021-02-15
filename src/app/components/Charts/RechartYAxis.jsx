import React from 'react'
import { YAxis, Label } from 'recharts'
const RechartYAxis = () => {
    return (
        <YAxis>
            <Label
                value="Cubic Feet Per Second (CFS)"
                angle={-90}
                position="insideBottomLeft"
                offset={10}
            />
        </YAxis>
    )
}

export default RechartYAxis
