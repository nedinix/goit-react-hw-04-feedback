import React from 'react';
import PropTypes from 'prop-types';

const NotificationMessage = ({ message }) => <span>{message}</span>;

NotificationMessage.propTypes = {
  message: PropTypes.string,
};
export default NotificationMessage;
