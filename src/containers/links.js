import React from 'react';

import Pagination from '../components/Pagination';
import LinksTable from '../components/LinksTable';
import AddLink from '../components/AddLink';
import { CFG_HTTP } from '../cfg/cfg_http';
import { UtilsApi } from '../utils/utils_api';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as linksActions from '../actions/linksActions';

class LinksContainerStub extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            pagesLimit: 0,
            currentPage: 1
        };
    }

    componentWillReceiveProps(nextProps) {

        if (this.props.state.page !== nextProps.state.page) {
          this.fetchLinks(nextProps.state.page);
        }
       }

    handlePageChange = (pageNumber) => {

        this.props.actions.changePage(pageNumber);
        
    };

    fetchLinks = (currentPage = 1) => {
        let sendData = {page: currentPage};

        UtilsApi
            .get(CFG_HTTP.URL_LINKS, sendData)
            .then((links) => {
                this.props.actions.linksLoaded(links.items);

                this.setState({
                    pagesLimit: links.pageInfo.maxPage,
                    currentPage: currentPage
                });
            });
    };


    componentDidMount() {
        this.fetchLinks();
    }

    render () {
        return (
            <React.Fragment>
                <AddLink />
                <Pagination currentPage = {this.state.currentPage}
                            pagesLimit = {this.state.pagesLimit}
                            onPageChange = {this.handlePageChange} />
                <LinksTable links={this.props.state.links} 
                            fetchLinks={this.fetchLinks}/>
            </React.Fragment>
        );
    }
};

function mapStateToProps (state, ownProps) {
    return {
        state: state,
        page: state.currentPage
    };
};

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(linksActions, dispatch)
    };
}

const LinksContainer = connect(mapStateToProps, mapDispatchToProps) (LinksContainerStub);

export default LinksContainer;