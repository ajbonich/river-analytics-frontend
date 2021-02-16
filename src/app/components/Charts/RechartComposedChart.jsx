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

export default class RechartComposedChart extends React.Component {
    render() {
        return (
            <ResponsiveContainer height={260}>
                <ComposedChart data={this.props.data} syncId={'dailyData'}>
                    <CartesianGrid strokeDasharray="3 3" />
                    {this.props.xAxis}
                    {this.props.yAxis}
                    <Area
                        type="monotone"
                        dataKey="middleFifty"
                        stroke="#349dcf"
                        fill="#349dcf"
                        fillOpacity={0.5}
                    />
                    <Line
                        type="monotone"
                        dataKey="average"
                        stroke="#000000"
                        dot={false}
                    />
                    <Tooltip
                        label=""
                        formatter={(value, name, props) => {
                            if (name === 'middleFifty') {
                                return [
                                    `Middle 50%: ${props.payload.middleFifty[0]} - ${props.payload.middleFifty[1]} cfs`,
                                    '',
                                ]
                            } else {
                                return [`Average: ${Math.round(value)} cfs`, '']
                            }
                        }}
                        itemSorter={(item) => item.name}
                        separator=" "
                    />
                </ComposedChart>
            </ResponsiveContainer>
        )
    }
}

RechartComposedChart.propTypes = {
    data: PropTypes.any.isRequired,
    xAxis: PropTypes.element.isRequired,
    yAxis: PropTypes.element.isRequired,
}
