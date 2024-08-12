import { twMerge } from 'tailwind-merge';
import PropTypes from 'prop-types';

const Card = (props) => {
  const { children, className } = props;
  return (
    <div
      className={twMerge(
        'rounded-lg border-2 border-charcoal-medium px-5 py-6 bg-charcoal-light gap-4 flex flex-col w-full',
        className
      )}
    >
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Card;
