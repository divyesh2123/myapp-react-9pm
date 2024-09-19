import React, { Component } from 'react'

export default class ErrorBoundry extends Component {

    state = {
        isError: false,
        erroInfo: {}
    }

    componentDidCatch(error,errorInfo)
    {
        this.setState({
        ...this.state,
        isError:true,
        erroInfo: error
        })
    }
  render() {

    if(this.state.isError)
    {   
        return (<>Something Went Wront</>)

    }
    return (
            this.props.children
    )
  }
}
