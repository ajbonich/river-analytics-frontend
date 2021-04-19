import React from 'react'
import PropTypes from 'prop-types'
import {
    Area,
    CartesianGrid,
    ComposedChart,
    Label,
    Line,
    ResponsiveContainer,
    Tooltip,
    YAxis,
} from 'recharts'

export default class HistoricAverageChart extends React.Component {
    render() {
        return (
            <div>
                <ResponsiveContainer height={260}>
                    <ComposedChart data={this.props.data} syncId={'dailyData'}>
                        <CartesianGrid strokeDasharray="3 3" />
                        {this.props.xAxis}
                        <YAxis>
                            <Label
                                value={this.props.yAxisLabelValue}
                                angle={-90}
                                position="insideBottomLeft"
                                offset={10}
                            />
                        </YAxis>
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
                                    return [
                                        `Average: ${Math.round(value)} cfs`,
                                        '',
                                    ]
                                }
                            }}
                            itemSorter={(item) => item.name}
                            separator=" "
                        />
                    </ComposedChart>
                </ResponsiveContainer>
            </div>
        )
    }
}

HistoricAverageChart.propTypes = {
    xAxis: PropTypes.element.isRequired,
}
