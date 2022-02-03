import React from "react";
import { connect } from 'react-redux'

const SingleItem = (props) => {

    return (
        <div>
            <div>You're in the single item page!</div>
            <div>This is item ID:  </div>
        </div>
    )
}

const mapState = (state) => {
    return state
}

export default connect( mapState )( SingleItem )