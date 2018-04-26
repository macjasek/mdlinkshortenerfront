import Grid from 'material-ui/Grid';
import PropTypes from 'prop-types';
import React from 'react';
import Table, {
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from 'material-ui/Table';
import { Icon } from 'material-ui';
import { Link } from 'react-router-dom';

import LinkInterface from '../interfaces/link';
import UtilsApi from '../utils/utils_api';
import { CFG_HTTP } from '../cfg/cfg_http';

class LinksTable extends React.Component {
    handleDelete(id) {
        UtilsApi.delete(CFG_HTTP.URL_LINKS + '/' + id,{}).then(() => {
            console.log('success');
            this.props.fetchLinks();
        })
    };

    generateRow = (link) => {
            let shortUrl = `${CFG_HTTP.URL_BASE}${link.shortLink}`
        return (
            <TableRow key={link.id}>
                <TableCell>{link.fullLink}</TableCell>
                <TableCell><a href={shortUrl} target="_blank">{CFG_HTTP.URL_BASE}{link.shortLink}</a></TableCell>
                <TableCell>{link.clicks}</TableCell>
                <TableCell>{link.uniqueClicks}</TableCell>
                <TableCell className="linksTable__delete">
                    <Icon onClick={() => this.handleDelete(link.id)}>delete</Icon>
                </TableCell>
                <TableCell className="linksTable__edit">
                    <Link to={`/edit/${link.id}`}>
                        <Icon>mode_edit</Icon>
                    </Link>
                </TableCell>
            </TableRow>
        );
    };

    render () {
        const links = this.props.links.map(this.generateRow);

        return(
            <Grid className="linksTable" container>
            <Grid item xs={12} md={8}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Full Link</TableCell>
                            <TableCell>Short Link</TableCell>
                            <TableCell>Clicks</TableCell>
                            <TableCell>Unique Clicks</TableCell>
                            <TableCell>Delete</TableCell>
                            <TableCell>Edit</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {links}
                    </TableBody>
                </Table>
            </Grid>
        </Grid>
        );
    }
}

LinksTable.propTypes = {
    links: PropTypes.arrayOf(LinkInterface),
    fetchLinks: PropTypes.func
};

export default LinksTable;