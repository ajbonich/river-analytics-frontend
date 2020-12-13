import React, { Component } from 'react'
import SimpleRiverForm from '../material-kit/forms/SimpleRiverForm'
import { SimpleCard } from 'matx'

class RiverForm extends Component {
    render() {
        return (
            <div className="m-sm-30">
                <SimpleCard title="Average Flow">
                    <SimpleRiverForm />
                </SimpleCard>
                <div className="py-3" />
                <SimpleCard title="Runnable Percentage">
                    <SimpleRiverForm />
                </SimpleCard>
            </div>
        )
    }
}

export default RiverForm
