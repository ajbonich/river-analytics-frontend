import React from 'react'
import PropTypes from 'prop-types'
import {
    AreaChart,
    Area,
    CartesianGrid,
    Line,
    ResponsiveContainer,
} from 'recharts'

export default class RechartAreaChart extends React.Component {
    render() {
        return (
            <ResponsiveContainer height={260}>
                <AreaChart data={this.props.data} syncId={'dailyData'}>
                    <CartesianGrid strokeDasharray="3 3" />
                    {this.props.xAxis}
                    {this.props.yAxis}
                    {this.props.tooltip}
                    <Area
                        type="monotone"
                        dataKey="quantile20"
                        stackId="1"
                        stroke="#8884d8"
                        fill="#FFFFFF"
                        fillOpacity={0}
                    />
                    <Line
                        type="monotone"
                        dataKey="average"
                        stroke="#000000"
                        dot={false}
                    />
                    <Area
                        type="monotone"
                        dataKey="quantile80minus20"
                        stackId="1"
                        stroke="#8884d8"
                        fill="#349dcf"
                        fillOpacity={0.5}
                    />
                </AreaChart>
            </ResponsiveContainer>
        )
    }
}

RechartAreaChart.propTypes = {
    data: PropTypes.any.isRequired,
    xAxis: PropTypes.element.isRequired,
    yAxis: PropTypes.element.isRequired,
    tooltip: PropTypes.element.isRequired,
}
