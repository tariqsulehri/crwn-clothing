import React from "react";
import { connect } from "react-redux";

const Test = ({ currentUser }) => {
    console.log(currentUser);
}

const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Test);