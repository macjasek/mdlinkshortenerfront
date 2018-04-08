import Grid from 'material-ui/Grid';
import PropTypes from 'prop-types';
import React from 'react';
import Table, {
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from 'material-ui/Table';

import LinkInterface from '../interfaces/link';

import { CFG_HTTP } from '../cfg/cfg_http';

const LinksTable = (props) => {
    const links = props.links.map((link) => {
        let shortUrl = `${CFG_HTTP.URL_BASE}${link.shortLink}`
        return (
            <TableRow key={link.id}>
                <TableCell>{link.fullLink}</TableCell>
                <TableCell><a href={shortUrl} target="_blank">{CFG_HTTP.URL_BASE}{link.shortLink}</a></TableCell>
                <TableCell>{link.clicks}</TableCell>
                <TableCell>{link.uniqueClicks}</TableCell>
            </TableRow>
        );
    });

    return (
        <Grid className="linksTable" container>
            <Grid item xs={12} md={8}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Full Link</TableCell>
                            <TableCell>Short Link</TableCell>
                            <TableCell>Clicks</TableCell>
                            <TableCell>Unique Clicks</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {links}
                    </TableBody>
                </Table>
            </Grid>
        </Grid>
    );
};

LinksTable.propTypes = {
    links: PropTypes.arrayOf(LinkInterface)
};

export default LinksTable;