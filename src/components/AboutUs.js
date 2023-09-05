import React from "react";
import UserClass from "./UserClass";

class AboutUs extends React.Component {
    constructor(props) {
        super(props);
        console.log('Parent Constructor')
    }
    async componentDidMount() {
        console.log('Parent componentDidMount')
        //Api call

    }


    render() {
        console.log('Parent Render')
        return (
            <div>
                <h1>About Us</h1>
                <UserClass name="First" />
                {/* <UserClass name="Second" /> */}
            </div>
        )
    }
}

// const AboutUs = () => {
//     return (
//         <div>
//             <h1>About Us</h1>
//             <UserClass name="Rajan" />
//         </div>
//     )
// }

export default AboutUs;