import React from 'react'
import {
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
} from 'recharts'

export default class RechartLineGraph extends React.Component {
    render() {
        return (
            <LineChart
                width={1200}
                height={300}
                data={this.props.data}
                margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
            >
                <Line type="monotone" dataKey="value" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="index" />
                <Tooltip />
                <Legend />
                <YAxis />
            </LineChart>
        )
    }
}
