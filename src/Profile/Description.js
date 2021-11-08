
import React from 'react'

class Description extends React.Component{
    render (props){
        return (
            <div>
                <h1>{this.props.FullName}</h1>
                <h2>{this.props.Bio}</h2>
                <h3>{this.props.Profession}</h3>
                <img src={this.props.Img} alt="" />
            
            </div>
            
        )
    }
        
}


export default Description;