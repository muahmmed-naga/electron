import React, { useState } from 'react';

// styles
import './tabs.styles.scss';

const ProdductDescriptioTabs = () => {
  const [activeTab, setActiveTab] = useState('description');

  return (
    <div className="product-tabs-wrapper">
      <div className="product-decription">Product Description</div>
      <div className="tab-navigator flex-align-center flex-justify-center">
        <div
          onClick={() => setActiveTab('description')}
          className={activeTab === 'description' ? 'active-tab' : undefined}
        >
          Description
        </div>
        <div
          onClick={() => setActiveTab('specifications')}
          className={activeTab === 'specifications' ? 'active-tab' : undefined}
        >
          Specifications
        </div>
      </div>

      <div className="m-top-20">
        {activeTab === 'description' && (
          <div className="description-tab">
            <div className="item-wrapper">
              <p>
                <b>HPB12 / A12 battery</b> is rated at 2000mAh and designed to
                power up Black and Decker / FireStorm line of 12V tools allowing
                users to run multiple devices off the same battery pack. The
                HPB12 is compatible with the following Black and Decker power
                tool models:
              </p>
            </div>

            <div className="item-wrapper">
              <p>
                <b>Black & Decker Drills and Drivers:</b>
                BD12PSK, BDG1200K, BDGL12K, BDID1202, CD1200SK, CD12SFK,
                CDC1200K, CDC120AK, CDC120ASB, CP122K, CP122KB, CP12K, CP12KB,
                EPC12, EPC126, EPC126BK, EPC12CA, EPC12CABK, HP122K, HP122KD,
                HP126F2B, HP126F2K, HP126F3B, HP126F3K, HP126FBH, HP126FSC,
                HP126FSH, HP126K, HP128F3B, HP12K, HP12KD, HPD1200, HPD1202,
                HPD1202KF, HPD12K-2, PS122K, PS122KB, PS12HAK, SS12, SX3000,
                SX3500, XD1200, XD1200K, XTC121
              </p>
            </div>

            <div className="item-wrapper">
              <p>
                <b>Black & Decker Impact Wrenches:</b>
                SX5000, XTC12IK, XTC12IKH
              </p>
            </div>

            <div className="item-wrapper">
              <p>
                <b>Black & Decker Multi-Tools:</b>
                KC2000FK
              </p>
            </div>

            <div className="item-wrapper">
              <p>
                <b>Black & Decker Nailers:</b>
                BDBN1202
              </p>
            </div>
          </div>
        )}

        {activeTab === 'specifications' && (
          <ul className="specifications">
            <li>Chemistry: Ni-CD</li>
            <li>Voltage: 12V</li>
            <li>AmpHours: 2000mAh</li>
            <li>Dimensions: 109.75x79.55x62.20mm</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default ProdductDescriptioTabs;
