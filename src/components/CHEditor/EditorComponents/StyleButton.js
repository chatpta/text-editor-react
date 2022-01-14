/******************************************************************************
 * Written by Peter Craftsmn                                                  *
 * Email: peter.craftsmn@gmail.com                                            *
 * All rights reserved Copyright (c) 2019.                                    *
 ******************************************************************************/

import React from "react";

class StyleButton extends React.Component {
    constructor( props ) {
        super( props );
        this.onToggle = ( e ) => {
            e.preventDefault();
            this.props.onToggle( this.props.style );
        };
    }

    render() {
        let className = 'RichEditor-styleButton';
        if ( this.props.active ) {
            className += ' RichEditor-activeButton';
        }

        return (
            <span className={ className } onMouseDown={ this.onToggle }>
              { this.props.label }
            </span>
        );
    }
}

export default StyleButton;

