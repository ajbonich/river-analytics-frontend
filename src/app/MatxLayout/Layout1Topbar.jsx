import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { classList } from 'utils'

const styles = (theme) => ({
    topbar: {
        '& .topbar-hold': {
            backgroundColor: theme.palette.primary.main,
            height: '80px',
            '&.fixed': {
                boxShadow: theme.shadows[8],
                height: '64px',
            },
        },
    },
    menuItem: {
        display: 'flex',
        alignItems: 'center',
        minWidth: 185,
    },
})

class Layout1Topbar extends Component {
    state = {}

    updateSidebarMode = (sidebarSettings) => {
        const { settings, setLayoutSettings } = this.props

        setLayoutSettings({
            ...settings,
            layout1Settings: {
                ...settings.layout1Settings,
                leftSidebar: {
                    ...settings.layout1Settings.leftSidebar,
                    ...sidebarSettings,
                },
            },
        })
    }

    render() {
        const { classes, fixed } = this.props

        return (
            <div className={`topbar ${classes.topbar}`}>
                <div
                    className={classList({ 'topbar-hold': true, fixed: fixed })}
                >
                    <div className="flex justify-between items-center h-full">
                        <div className="flex">
                            <p className="font-medium text-24 mx-4">
                                River Flow Analytics
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(styles, { withTheme: true })(
(
            Layout1Topbar
        )
    
)
