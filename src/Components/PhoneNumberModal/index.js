import './index.css';

function PhoneNumberModal({closeModal}) {
    return (
        <>
      <div className='phone-number-modal-backhround' />
            <div className="phone-number-modal">
                <div onClick={() => closeModal()} className='closeButton'>X
                </div>
          <div className='error-text'>You can't make calls from this device</div>
          <div className='ph-no'>+91 9381470268</div>
            </div>
            </>
  );
}

export default PhoneNumberModal;
