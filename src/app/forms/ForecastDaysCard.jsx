import React from 'react'
import { ValidatorForm } from 'react-material-ui-form-validator'
import { Button, Grid } from '@material-ui/core'
import PropTypes from 'prop-types'

class SimpleRiverForm extends React.Component {
    render() {
        return (
            <div>
                <ValidatorForm
                    debounceTime={2000}
                    onError={(errors) => console.log(errors)}
                    onSubmit={() => this.props.handleFormSubmit()}
                    ref="form"
                >
                    <Grid
                        container
                        alignItems="flex-end"
                        justify="center"
                        spacing={2}
                    >
                        <Grid item xs={4} style={{ paddingBottom: 30 }}>
                            <Button
                                color="primary"
                                variant="contained"
                                type="submit"
                            >
                                <span className="pl-2 capitalize">
                                    {this.props.buttonTitle}
                                </span>
                            </Button>
                        </Grid>
                    </Grid>
                </ValidatorForm>
            </div>
        )
    }
}

SimpleRiverForm.propTypes = {
    handleFormSubmit: PropTypes.func.isRequired,
}

export default SimpleRiverForm
