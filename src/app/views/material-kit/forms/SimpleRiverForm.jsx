import React from 'react'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import { Button, Grid } from '@material-ui/core'
import PropTypes from 'prop-types'

class SimpleRiverForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            minFlow: 300,
            maxFlow: 1000,
        }
    }
    
    handleInputChange = (event) => {
        event.persist()
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {
        const { minFlow, maxFlow } = this.state
        return (
            <div>
                <ValidatorForm
                    debounceTime={2000}
                    onError={(errors) => console.log(errors)}
                    onSubmit={() =>
                        this.props.handleFormSubmit(
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
                                label="Minimum cfs"
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
                                label="Maximum cfs"
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
