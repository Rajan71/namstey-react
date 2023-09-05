import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props)
        console.log('Props______', props)
        this.state = {
            count: 0,
            count2: 2,
            userInfo: {
                name: '',
                location: '',
                avatar_url: ''
            }
        }
        console.log(this.props.name + 'Child Constructor')
    }
    async componentDidMount() {
        // console.log(this.props.name + 'Child componentDidMount')
        const data = await fetch('https://api.github.com/users/Rajan71')
        const json = await data.json()
        console.log(json)
        this.setState({
            userInfo: json
        })
    }
    componentDidUpdate() {
        console.log('Child componentDidUpdate')
    }

    componentWillUnmount() {
        console.log('Child componentWillUnmount')
    }
    render() {
        console.log(this.props.name + 'Child Render')
        // const { name } = this.props
        const { login, location, avatar_url } = this.state.userInfo
        return (
            <div className="user-card">
                {/* <h1>Count : {this.state.count}</h1>
                <button onClick={() => this.setState({
                    count: this.state.count + 1,
                    count2: this.state.count2 + 1
                })}
                >Count Increase</button> */}
                {/* <h1>Count2 : {this.state.count2}</h1> */}
                <img src={avatar_url} />
                <h2>Name:{login}</h2>
                <h3>Location : {location}</h3>
                <h4>Contact</h4>
            </div>
        )
    }
}

export default UserClass;