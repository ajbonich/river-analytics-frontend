import React from 'react'
import PropTypes from 'prop-types'
import {
    CartesianGrid,
    ComposedChart,
    Label,
    Line,
    ResponsiveContainer,
    Tooltip,
    YAxis,
} from 'recharts'

export default class ForecastChart extends React.Component {
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
                        <Line
                            connectnulls
                            type="monotone"
                            dataKey="past_value"
                            stroke="#000000"
                            dot={false}
                        />
                        <Line
                            connectNulls
                            type="monotone"
                            dataKey="forecast"
                            stroke="#349dcf"
                            dot={false}
                        />
                        <Tooltip
                            label=""
                            formatter={(value, name) => {
                                if (name === 'past_value') {
                                    return [
                                        `Flow: ${Math.round(value)} cfs`,
                                        '',
                                    ]
                                } else {
                                    return [
                                        `Forecast: ${Math.round(value)} cfs`,
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

ForecastChart.propTypes = {
    xAxis: PropTypes.element.isRequired,
}
