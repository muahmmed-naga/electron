import React from 'react';

// Components
import AlignTinyProduct from '../../../align-tiny-product/align-tiny-product.comp';

// Assets
import VIDEO_CAMRERS from '../../data/videos_camers';

const VideoCameraTabContent = () => {
  return (
    <div className="tab-content">
      {VIDEO_CAMRERS.map((item) => (
        <AlignTinyProduct key={item.id} {...item} />
      ))}
    </div>
  );
};

export default VideoCameraTabContent;
