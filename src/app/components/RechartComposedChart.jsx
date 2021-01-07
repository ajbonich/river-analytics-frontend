import React from 'react'
import PropTypes from 'prop-types'
import {
    ComposedChart,
    Area,
    CartesianGrid,
    Line,
    ResponsiveContainer,
    Tooltip,
} from 'recharts'

export default class RechartAreaChart extends React.Component {
    render() {
        return (
            <ResponsiveContainer height={260}>
                <ComposedChart data={this.props.data} syncId={'dailyData'}>
                    <CartesianGrid strokeDasharray="3 3" />
                    {this.props.xAxis}
                    {this.props.yAxis}
                    <Tooltip label=""
                        formatter={(value, name, props) => {
                            switch(name) {
                                case 'quantile80minus20':
                                    return [`80th Percentile: ${parseFloat(props.payload.quantile20) + parseFloat(props.payload.quantile80minus20)} cfs`, '']
                                case 'quantile20':
                                    return [`20th Percentile: ${value} cfs`, '']
                                default:
                                    return [`Average: ${value} cfs`, '']
                                }
                        }}
                        itemSorter= {item => item.name}
                        separator=" "
                    />
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
                </ComposedChart>
            </ResponsiveContainer>
        )
    }
}

RechartAreaChart.propTypes = {
    data: PropTypes.any.isRequired,
    xAxis: PropTypes.element.isRequired,
    yAxis: PropTypes.element.isRequired,
}
