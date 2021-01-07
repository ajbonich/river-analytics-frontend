import React from 'react'
import USGSGaugeMap from 'app/components/USGSGaugeMap'
import RiverForm from 'app/views/forms/RiverForm'

export default class Content extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            siteId: '',
        }
    }

    handleGauge = (gauge) => {
        this.setState({ siteId: gauge })
        console.log(gauge)
    }

    render() {
        return (
            <div>
                <USGSGaugeMap onSelectGauge={this.handleGauge} />
                <RiverForm siteId={this.state.siteId} />
            </div>
        )
    }
}
