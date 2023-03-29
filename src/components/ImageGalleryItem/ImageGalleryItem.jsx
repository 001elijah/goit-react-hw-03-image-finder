import PropTypes from 'prop-types';

import s from './ImageGalleryItem.module.scss';

function ImageGalleryItem({ smallPictureUrl, largePictureUrl, openModal }) {
    return (
        <li className={s.ImageGalleryItem} onClick={() => openModal({ largePictureUrl })}>
            <img src={smallPictureUrl} alt="" data-large={largePictureUrl} className={s.ImageGalleryItemImage}/>
        </li>
    );
};

ImageGalleryItem.propTypes = {
    smallPictureUrl: PropTypes.string.isRequired,
    largePictureUrl: PropTypes.string.isRequired
};

export default ImageGalleryItem;