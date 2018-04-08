import PropTypes from 'prop-types';

const LinkInterface = PropTypes.shape ({
    id: PropTypes.number.required,
    fullLink: PropTypes.string.required,
    shortLink: PropTypes.string.required,
    clicks: PropTypes.number.required,
    uniqueClicks: PropTypes.number.required
});

export default LinkInterface;