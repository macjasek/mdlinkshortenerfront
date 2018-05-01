import React from 'react';
import { Icon } from 'material-ui';
import { Link } from 'react-router-dom';

class AddLink extends React.Component {
    render (){
        return(
            <div className="addlink">
                <div className="addlinkIcons">
                    <Link to="/add">
                        <Icon className='addlinkIcons-icon'>
                            add
                        </Icon>
                    </Link>
                </div>
            </div>
        );
    };
}

export default AddLink;


