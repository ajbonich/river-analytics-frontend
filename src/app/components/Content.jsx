import React from 'react'
import Scrollbar from 'react-perfect-scrollbar'

import USGSGaugeMap from 'app/components/USGSGaugeMap'
import RiverForm from 'app/forms/RiverForm'
import Footer from './Footer'

export default class Content extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            siteId: '',
        }
        this._scrollRef = 0
    }

    handleGauge = (gauge) => {
        this.setState({ siteId: gauge })
        this._scrollRef.scrollTop = 10000
    }

    render() {
        return (
            <Scrollbar
                className="scrollable-content"
                containerRef={(ref) => {
                    this._scrollRef = ref
                }}
            >
                <div className="content">
                    <USGSGaugeMap onSelectGauge={this.handleGauge} />
                    <Scrollbar className="scrollable-lower">
                        <RiverForm
                            className="content"
                            siteId={this.state.siteId}
                        />
                    </Scrollbar>
                </div>
                <div className="my-auto" />
                {this.props.settings && (
                    <Footer
                        theme={this.props.theme}
                        settings={this.props.settings}
                    />
                )}
            </Scrollbar>
        )
    }
}
