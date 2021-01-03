import React from 'react'
import { Tooltip } from 'recharts'

const RechartTooltip = () => {
    return (
        <Tooltip
            label=""
            formatter={(value) => {
                return [`${value} %`, '']
            }}
            separator=""
        />
    )
}

export default RechartTooltip
