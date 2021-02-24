import React from 'react'
import PropTypes from 'prop-types'
import { LineChart, Line, CartesianGrid, ResponsiveContainer } from 'recharts'

export default class RechartLineChart extends React.Component {
    render() {
        return (
            <div>
                <h4>{this.props.title}</h4>
                <ResponsiveContainer height={260}>
                    <LineChart data={this.props.data} syncId={'dailyData'}>
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        {this.props.xAxis}
                        {this.props.yAxis}
                        {this.props.tooltip}
                        <Line
                            type="monotone"
                            dataKey={this.props.dataKey}
                            dot={false}
                            stroke="#000000"
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        )
    }
}

RechartLineChart.propTypes = {
    data: PropTypes.any.isRequired,
    dataKey: PropTypes.any.isRequired,
    xAxis: PropTypes.any.isRequired,
    yAxis: PropTypes.any.isRequired,
    tooltip: PropTypes.any.isRequired,
}
