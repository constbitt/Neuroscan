import React, { useState } from 'react';
import './Tmp.css';
import crossImage from './Cross.png';

function Tmp() {
  const [isHidden, setIsHidden] = useState(true);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [scanImageSrc, setScanImageSrc] = useState(null);
  const [imageTitle, setImageTitle] = useState('');
  const [isContainerEnabled] = useState(true);
  const [isFrameVisible, setIsFrameVisible] = useState(false); // New state to control frame visibility

  const handleFileChanger = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setScanImageSrc(reader.result);
        setImageTitle(file.name);
        setIsHidden(false);
        setIsButtonDisabled(false);
      };
      reader.readAsDataURL(file);
    }
    event.target.value = null;
  };

  const handleClick = () => {
    if (isHidden) {
      document.getElementById('file-input').click();
    }
  };

  const handleCross = () => {
    setIsHidden(true);
    setIsButtonDisabled(true);
    setScanImageSrc(null);
    setImageTitle('');
  };

  const toggleFrameVisibility = () => {
    setIsFrameVisible((prev) => !prev);
  };

  return (
    <div className="tmp-containe">
      {isFrameVisible && (
        <div className="tmp-frame-new" onClick={handleClick}>
          <div className={`frame7-new ${isHidden ? 'fade-out' : ''}`}>
            {scanImageSrc && (
              <img src={scanImageSrc} alt="Scan" className={`scan-image ${isHidden ? 'fade-out' : ''}`} />
            )}
            <div className={`image-title ${isHidden ? 'fade-out' : ''}`}>
              {imageTitle}
            </div>
            <div className="group6">
              <div className="rectangle6"></div>
              <div className="rectangle7"></div>
            </div>
            {!isHidden && (
              <img
                src={crossImage}
                alt="Cross"
                className={`cross ${isHidden ? 'fade-out' : ''}`}
                onClick={handleCross}
              />
            )}
          </div>
          <input
            type="file"
            id="file-input"
            style={{ display: 'none' }}
            onChange={handleFileChanger}
            accept="*/*"
            disabled={!isHidden || !isContainerEnabled}
          />
          <button className={`button ${isButtonDisabled ? 'disabled' : ''}`} disabled={isButtonDisabled}>
            {isButtonDisabled ? 'Отправить' : 'Отправить снимок'}
          </button>
        </div>
      )}
      <button className="toggle-frame-button" onClick={toggleFrameVisibility}>
        {isFrameVisible ? 'Скрыть' : 'Показать'} Frame
      </button>
    </div>
  );
}

export default Tmp;
