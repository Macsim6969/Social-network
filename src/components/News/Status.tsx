import React from "react";

class Statuse extends React.Component {

    state = {
        editMode : false,
        title : 'yo'
    }

    clickActivate(){
        this.setState({
            editMode : true
        }) 
    }
    clickUnctivate(){
        this.setState({
            editMode : false
        }) 
    }

    render(){
        return(
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.clickActivate.bind(this)}>{this.props.status}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input autoFocus={true} onBlur={this.clickUnctivate.bind(this)}  type="text" value={this.props.status} />
                </div>
                }
            </div>
        )
    }


}

export default Statuse;