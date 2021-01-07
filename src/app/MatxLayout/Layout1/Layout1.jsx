import React from 'react'
import PropTypes from 'prop-types'

import { withStyles, ThemeProvider } from '@material-ui/core/styles'
import Scrollbar from 'react-perfect-scrollbar'
import { classList } from 'utils'
import Layout1Topbar from './Layout1Topbar'
import Footer from '../SharedCompoents/Footer'

import { themeColors } from '../MatxTheme/themeColors'
import { createMuiTheme } from '@material-ui/core/styles'
import { forEach, merge } from 'lodash'
import themeOptions from '../MatxTheme/themeOptions'
import Content from 'app/components/Content'

const styles = (theme) => {
    return {
        layout: {
            backgroundColor: theme.palette.background.default,
        },
    }
}

function createMatxThemes() {
    const themes = {}

    forEach(themeColors, (value, key) => {
        themes[key] = createMuiTheme(merge({}, themeOptions, value))
    })
    return themes
}
const themes = createMatxThemes()
const Layout1Settings = {
    leftSidebar: {
        show: true,
        mode: 'close', // full, close, compact, mobile,
        theme: 'slateDark1', // View all valid theme colors inside MatxTheme/themeColors.js
        // bgOpacity: .96, // 0 ~ 1
        bgImgURL: '/assets/images/sidebar/sidebar-bg-dark.jpg',
    },
    topbar: {
        show: true,
        fixed: true,
        theme: 'purpleDark1', // View all valid theme colors inside MatxTheme/themeColors.js
    },
}

const MatxLayoutSettings = {
    activeLayout: 'layout1', // layout1, layout2
    activeTheme: 'purple1', // View all valid theme colors inside MatxTheme/themeColors.js
    perfectScrollbar: true,

    themes: themes,

    secondarySidebar: {
        show: true,
        open: true,
        theme: 'slateDark1', // View all valid theme colors inside MatxTheme/themeColors.js
    },
    // Footer options
    footer: {
        show: true,
        fixed: false,
        theme: 'slateDark1', // View all valid theme colors inside MatxTheme/themeColors.js
    },
}
const Layout1 = (props) => {
    const { classes, theme } = props
    const topbarTheme = themes[Layout1Settings.topbar.theme]
    const layoutClasses = {
        [classes.layout]: true,
        [`layout1 sidenav-${Layout1Settings.leftSidebar.mode} theme-${theme.palette.type} flex`]: true,
        'topbar-fixed': Layout1Settings.topbar.fixed,
    }

    return (
        <div className={classList(layoutClasses)}>
            <div className="content-wrap position-relative">
                {Layout1Settings.topbar.show && Layout1Settings.topbar.fixed && (
                    <ThemeProvider theme={topbarTheme}>
                        <Layout1Topbar fixed={true} className="elevation-z8" />
                    </ThemeProvider>
                )}

                <Scrollbar className="scrollable-content">
                    <div className="content">
                        <Content />
                    </div>
                    <div className="my-auto" />
                    {MatxLayoutSettings.footer.show &&
                        !MatxLayoutSettings.footer.fixed && (
                            <Footer
                                theme={theme}
                                settings={MatxLayoutSettings}
                            />
                        )}
                </Scrollbar>
            </div>
        </div>
    )
}

Layout1.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
}

export default withStyles(styles, { withTheme: true })(Layout1)
