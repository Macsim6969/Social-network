import React from "react"


class StatusLog extends React.Component {
    state = {
        editeMode: false,
        status : this.props.status
    }


    clickChange(){
        this.setState({
            editeMode : true
        })
    }
    unclickChange(){
        this.setState({
            editeMode : false
        })
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e)=>{
        this.setState({
            status : e.currentTarget.value
        })
    }
    componentDidUpdate(prevProps , prevState){
        debugger;
        if(prevProps.status !== this.props.status){
            this.setState({
                status : this.props.status
            })
        }
        console.log('componentdidUpdate')
    }
    render() {
        console.log('render')
        return (
            <div>
                {!this.state.editeMode &&
                    <span onDoubleClick={this.clickChange.bind(this)}>{this.props.status || 'No status'}</span>
                }
                {this.state.editeMode &&
                    <input onChange={this.onStatusChange} onBlur={this.unclickChange.bind(this)} autoFocus={true} type="text" value={this.state.status} />
                }
            </div>
        )
    }
}

export default StatusLog