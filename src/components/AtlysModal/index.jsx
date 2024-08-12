import PropTypes from 'prop-types';
import closeIcon from 'src/assets/close.svg';

const AtlysModal = (props) => {
  const { showAuthModal, children, setShowAuthModal } = props;

  const handleAuthModalView = () => {
    setShowAuthModal((prev) => !prev);
  };

  return (
    <div
      className={`fixed inset-0 bg-charcoal-dark bg-opacity-25 backdrop-blur-sm flex items-center justify-center transition-opacity duration-300 ease-in-out ${
        showAuthModal ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className=' p-0.5 rounded-[10px] bg-gradient-to-br from-[#969696] to-[#343434] duration-500'>
        <div className='relative bg-charcoal-light py-10 px-6 rounded-lg'>
          <div className='flex w-full justify-end'>
            <div
              onClick={handleAuthModalView}
              className='absolute top-4 right-4 hover:cursor-pointer w-8 h-8 bg-charcoal flex items-center justify-center rounded-full'
            >
              <img src={closeIcon} alt='close' />
            </div>
          </div>

          {children}
        </div>
      </div>
    </div>
  );
};

AtlysModal.propTypes = {
  children: PropTypes.node,
  showAuthModal: PropTypes.bool,
  setShowAuthModal: PropTypes.func,
};

export default AtlysModal;
