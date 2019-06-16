import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Link = ({ active, children, onClick }) => (
    <Button
        onClick={onClick}
        disabled={active}
    >
        {children}
    </Button>
)

const Button = styled.button`
    margin-left: 4px
`

Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Link
