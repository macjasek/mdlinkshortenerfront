import React from 'react';

import UtilsApi from '../utils/utils_api';
import { CFG_HTTP } from '../cfg/cfg_http';

class EditFormContainer extends React.Component {
    constructor(props) {
        const id = props.match.params.id;

        super();

        this.state = {
            id,
            fullLink: '',
        }

        if(id) {
            this.fetchLinkData();
        }
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState ({
            [name]: value
        });
    };

    handleSubmit = (event) => {
        const isRefresh = !!this.state.id;
        const request = this.state.id ? UtilsApi.put : UtilsApi.post;

        request(CFG_HTTP.URL_LINKS, this.state).then(() => {
            if(isRefresh) {
                this.props.history.push('/');
            } else {
                this.setState({
                    fullLink: ''
                })
            }
        });

        event.preventDefault();
    };

    fetchLinkData() {
        UtilsApi.get(CFG_HTTP.URL_LINKS + '/' + this.state.id).then((link) => {
            this.setState(link);
        })
    }

    render () {
        return (
            <form className="editForm"
                  onSubmit={this.handleSubmit}>
                <label className="editForm__label">
                <span className="editForm__desc">Full link</span>
                <input className="editForm__input"
                       name="fullLink"
                       type="text"
                       value={this.state.fullLink}
                       onChange={this.handleInputChange} />
                </label>
                <input className="editForm__submit" type="submit"
                       value="Submit" />
            </form>
        );
    }
}

export default EditFormContainer;