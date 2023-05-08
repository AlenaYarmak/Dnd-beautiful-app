import React from 'react';
import { Component } from 'react';
import signOut from './img/log-out.png';

class SignOut extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isHovered: false
        };
    }

    handleMouseEnter = () => {
        this.setState({
            isHovered: true
        })
    }

    handleMouseLeave = () => {
        this.setState({
            isHovered: false
        })
    }
    render() {
        const { isHovered } = this.state;

        const styles = {
            border: '2px solid transparent',
            borderRadius: '6px',
            padding: '10px',
            transition: 'border .3s ease-in-out'
          };
          const stylesHover = {
            border: `2px solid ${isHovered ? 'orange' : 'transparent'}`,
            borderRadius: '6px',
            padding: '10px',
            transition: 'border .3s ease-in-out'
          };
        const pStyles = {
            'padding-right': '15px', 
            color: '#000', 
            fontWeight: '700'
        }

        return(
            <div className='d-flex justify-content-end align-items-baseline pt-4' style={{height: '60px'}}>
                <div onMouseEnter={this.handleMouseEnter}
                     onMouseLeave={this.handleMouseLeave}
                     style={isHovered ? stylesHover : styles}
                     className='d-flex justify-content-end align-items-baseline p-2'>
                    <a href='/' style={{textDecoration: 'none', height: '35px',}}>
                        <p style={pStyles}>Sign Out</p>
                    </a>
                    <a href='/'>
                        <img src={signOut} alt='signOut logo' style={{height: '35px'}} />
                    </a>
                </div>
            </div>
        )
    }
}

export default SignOut;