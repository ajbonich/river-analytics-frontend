import React from 'react'
import PropTypes from 'prop-types'
import {
    CartesianGrid,
    Label,
    Line,
    LineChart,
    Tooltip,
    ResponsiveContainer,
    YAxis,
} from 'recharts'

export default class PercentChanceChart extends React.Component {
    render() {
        return (
            <div>
                <h4>{this.props.title}</h4>
                <ResponsiveContainer height={260}>
                    <LineChart data={this.props.data} syncId={'dailyData'}>
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
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
                            type="monotone"
                            dataKey={this.props.dataKey}
                            dot={false}
                            stroke="#000000"
                        />
                        <Tooltip
                            label=""
                            formatter={(value) => {
                                return [`${Math.round(value)} %`, '']
                            }}
                            separator=""
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        )
    }
}

PercentChanceChart.propTypes = {
    dataKey: PropTypes.any.isRequired,
    xAxis: PropTypes.any.isRequired,
}
