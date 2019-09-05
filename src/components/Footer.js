import React, { Component } from 'react';

class Footer extends Component {
    render() {
        const classnames = this.props.bgcolorname+" page-footer";
        return(
            <footer className={classnames}>
                <div className="footer-copyright">
                    <div className="container center">
                        © 2019 Copyright
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;