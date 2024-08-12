import PropTypes from 'prop-types';

import tickIcon from 'src/assets/tick.svg';
import warningIcon from 'src/assets/warning.svg';

const AtlysToast = ({ type = 'info', message = '' }) => {
  return (
    <div
      className={`flex items-center p-2 min-w-[120px] rounded bg-charcoal-medium gap-2 text-gray-light bg-opacity-10 text-sm border border-charcoal-light`}
    >
      {type === 'success' ? (
        <img src={tickIcon} alt='success' />
      ) : (
        <img src={warningIcon} alt='err' />
      )}
      {message}
    </div>
  );
};

AtlysToast.propTypes = {
  type: PropTypes.string,
  message: PropTypes.string,
};

export default AtlysToast;
