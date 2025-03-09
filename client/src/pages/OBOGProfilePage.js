import React from 'react';

function OBOGProfilePage() {
  return (
    <div id="profile" className="big-bg">
      <div className="profile-content">
        <h3>OBOG・その他の紹介</h3>
        <div className="profile-explain">
          <div>
            <img src="kyudobu_img/shamen.jpg" alt="斜面打起し" />
            <h2>斜面打起しで引いている方</h2>
          </div>
          <div>
            <img src="kyudobu_img/syoumen1.jpg" alt="正面打起し" />
            <h2>正面打起しで引いている方</h2>
          </div>
        </div>
        <div>
          <p>名簿が手に入り次第、随時更新していきます。</p>
          {/* 追加の OBOG 情報 */}
        </div>
      </div>
    </div>
  );
}

export default OBOGProfilePage;
