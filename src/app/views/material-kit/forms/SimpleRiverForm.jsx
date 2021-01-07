import React from 'react'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import { Button, Grid } from '@material-ui/core'
import 'date-fns'
import PropTypes from 'prop-types'

class SimpleRiverForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            siteId: '06719505',
            minFlow: 300,
            maxFlow: 1000,
        }
    }

    handleInputChange = (event) => {
        event.persist()
        this.setState({ [event.target.name]: event.target.value })
    }

    handleStartDateChange = (startDate) => {
        this.setState({ startDate })
    }

    handleMinFlowChange = (minFlow) => {
        this.setState({ minFlow })
    }

    handleMaxFlowChange = (maxFlow) => {
        this.setState({ maxFlow })
    }

    handleEndDateChange = (endDate) => {
        this.setState({ endDate })
    }

    render() {
        const { siteId, minFlow, maxFlow } = this.state
        return (
            <div>
                <ValidatorForm
                    debounceTime={2000}
                    onError={(errors) => console.log(errors)}
                    onSubmit={() =>
                        this.props.handleFormSubmit(
                            // this.state.siteId,
                            this.state.minFlow,
                            this.state.maxFlow
                        )
                    }
                    ref="form"
                >
                    <Grid
                        container
                        direction="column"
                        justify="flex-start"
                        alignItems="flex-start"
                        spacing={3}
                    >
                        <Grid item xs>
                            <TextValidator
                                className="mb-4 w-full"
                                label="Must be a valid USGS station Id"
                                onChange={this.handleInputChange}
                                type="text"
                                name="siteId"
                                value={siteId}
                                validators={[
                                    'required',
                                    'minStringLength: 8',
                                    'maxStringLength: 8',
                                    'isNumber: true',
                                    'isPositive: true,',
                                ]}
                                errorMessages={['this field is required']}
                            />
                        </Grid>
                        <Grid item xs>
                            <TextValidator
                                className="mb-4 w-full"
                                label="Minimum Desired Flow"
                                onChange={this.handleInputChange}
                                type="text"
                                name="minFlow"
                                value={minFlow}
                                validators={[
                                    'required',
                                    'isNumber: true',
                                    'minNumber: 0',
                                    'maxNumber: 100000',
                                    'isPositive: true,',
                                ]}
                                errorMessages={['this field is required']}
                            />
                        </Grid>
                        <Grid item xs>
                            <TextValidator
                                className="mb-4 w-full"
                                label="Maximum Desired Flow"
                                onChange={this.handleInputChange}
                                type="text"
                                name="maxFlow"
                                value={maxFlow}
                                validators={[
                                    'required',
                                    'isNumber: true',
                                    'minNumber: 0',
                                    'maxNumber: 100000',
                                    'isPositive: true,',
                                ]}
                                errorMessages={['this field is required']}
                            />
                        </Grid>
                    </Grid>
                    <div className="py-3" />
                    <Button color="primary" variant="contained" type="submit">
                        <span className="pl-2 capitalize">Submit</span>
                    </Button>
                </ValidatorForm>
            </div>
        )
    }
}

SimpleRiverForm.propTypes = {
    handleFormSubmit: PropTypes.func.isRequired,
}

export default SimpleRiverForm
