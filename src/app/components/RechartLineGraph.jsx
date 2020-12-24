import React from 'react'
import {
    Label,
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    ResponsiveContainer,
} from 'recharts'

export default class RechartLineGraph extends React.Component {
    render() {
        return (
            <ResponsiveContainer height={260}>
                <LineChart data={this.props.data} syncId={'dailyData'}>
                    <Line
                        type="monotone"
                        dataKey="value"
                        dot={false}
                        stroke="#8884d8"
                    />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="index" height={40}>
                        <Label
                            value={this.props.xLabel} //"Day of the Year"
                            position="insideBottom"
                            offset={3}
                        />
                    </XAxis>
                    {this.props.tooltip}
                    <YAxis>
                        <Label
                            value={this.props.yLabel}
                            angle={-90}
                            position="insideBottomLeft"
                            offset={10}
                        />
                    </YAxis>
                </LineChart>
            </ResponsiveContainer>
            //{/* <div className="py-6" />
            /*<ResponsiveContainer height={300}>
                    <LineChart
                        data={this.props.runnablePercentages}
                        syncId="dailyData"
                    >
                        <Line
                            type="monotone"
                            dataKey="value"
                            dot={false}
                            stroke="#8884d8"
                        />
                        <Label value="Day of the Year" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="index" height={40}>
                            <Label
                                value="Day of the Year"
                                position="insideBottom"
                                offset={3}
                            />
                        </XAxis>
                        <Tooltip
                            label=""
                            formatter={(value, name) => {
                                return [`${value} cfs`, '']
                            }}
                            separator=""
                        />
                        <YAxis>
                            <Label
                                value="Percent %"
                                angle={-90}
                                position="insideBottomLeft"
                                offset={10}
                            />
                        </YAxis>
                    </LineChart>
                </ResponsiveContainer> }*/
        )
    }
}
