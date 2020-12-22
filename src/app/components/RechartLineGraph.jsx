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
            <div>
                <LineChart
                    width={1200}
                    height={300}
                    data={this.props.dailyAverages}
                    margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
                    syncId={'dailyData'}
                >
                    <Line
                        type="monotone"
                        dataKey="value"
                        dot={false}
                        stroke="#8884d8"
                    />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="index" />
                    <Tooltip />
                    <Legend />
                    <YAxis />
                </LineChart>
                <LineChart
                    width={1200}
                    height={300}
                    data={this.props.runnablePercentages}
                    margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
                    syncId="dailyData"
                >
                    <Line
                        type="monotone"
                        dataKey="value"
                        dot={false}
                        stroke="#8884d8"
                    />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="index" />
                    <Tooltip />
                    <Legend />
                    <YAxis />
                </LineChart>
            </div>
        )
    }
}
