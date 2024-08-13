import React, { useRef, useState, useEffect } from 'react';
import './FileUploader.css';
import Cross from './Cross.png';
import Clinic from './Clinic.png';
import crossImage from './Cross.png';

const FileUploader = () => {
  const [isHidden, setIsHidden] = useState(true);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [scanImageSrc, setScanImageSrc] = useState(null);
  const [imageTitle, setImageTitle] = useState('');
  const [isContainerEnabled] = useState(true);
  const [isFrameVisible, setIsFrameVisible] = useState(false); // New state to control frame visibility
  const [selectedFile, setSelectedFile] = useState(null);

  
  const handleFileChanger = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.type !== 'image/jpeg' && file.type !== 'image/png') {
        setError(true);
        setErrorType('format');
        setErrorMessage('Неправильный формат файла. Разрешены JPG и PNG');
        return;
      }
      setError(false);
      setErrorType('');
      const reader = new FileReader();
      reader.onload = () => {
        setScanImageSrc(reader.result);
        setImageTitle(file.name);
        setSelectedFile(file); // Store the selected file
        setIsHidden(false);
        setIsButtonDisabled(false);
      };
      reader.readAsDataURL(file);
      //uploadImage(file); //это работает, надо сделать только отображение файла!!!! и чтобы он не отправлялся раньше времени
    }
    event.target.value = null;
  };

  const handleClick = () => {
    if (isHidden) {
      document.getElementById('file-input').click();
    }
    //toggleFrameVisibility();
  };

  const handleCross = () => {
    setIsHidden(true);
    setIsButtonDisabled(true);
    setScanImageSrc(null);
    setImageTitle('');
    setSelectedFile(null); // Reset the selected file
  };

  const handleUploadButtonClick = () => {
    if (selectedFile) {
      handleUploadButton(selectedFile); // Pass the stored file to the upload function
    }
  };

  const handleUploadButton = async (file) => {
    toggleFrameVisibility();
    await uploadImage(file);
  };

  const toggleFrameVisibility = () => {
    setIsFrameVisible((prev) => !prev);
  };

  const [blurred, setBlurred] = useState(false);
  const [error, setError] = useState(false);
  const [errorType, setErrorType] = useState('');
  const [imageUrl, setImageUrl] = useState(null);
  const [uploadStage, setUploadStage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [infoText, setInfoText] = useState('Программа поддерживает снимки формата JPG и PNG');
  const [showResultsLabel, setShowResultsLabel] = useState(false);
  const [abortController, setAbortController] = useState(null);
  const [imageName, setImageName] = useState(null);

  const fileInputRef = useRef(null);

  const handleTextClick = () => {
    setBlurred(true);
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.type !== 'image/jpeg' && file.type !== 'image/png') {
        setError(true);
        setErrorType('format');
        setErrorMessage('Неправильный формат файла. Разрешены JPG и PNG');
        return;
      }
      setError(false);
      setErrorType('');

      //
      setSelectedFile(file); // Store the selected file
      const reader = new FileReader();
      reader.onload = () => {
        setScanImageSrc(reader.result);
        setImageTitle(file.name);
        setIsHidden(false);
        setIsButtonDisabled(false);
      };
      reader.readAsDataURL(file);
      //
      toggleFrameVisibility(); // Ensure frame visibility is toggled
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    if (!uploadStage) {
      setBlurred(true);
    }
  };

  const handleDrop = async (event) => {
    event.preventDefault();
    setBlurred(false);
    const file = event.dataTransfer.files[0];
    if (file) {
      if (file.type !== 'image/jpeg' && file.type !== 'image/png') {
        setError(true);
        setErrorType('format');
        setErrorMessage('Неправильный формат файла. Разрешены JPG и PNG');
        return;
      }
      setError(false);
      setErrorType('');

      //
      setSelectedFile(file); // Store the selected file
      const reader = new FileReader();
      reader.onload = () => {
        setScanImageSrc(reader.result);
        setImageTitle(file.name);
        setIsHidden(false);
        setIsButtonDisabled(false);
      };
      reader.readAsDataURL(file);
      //

      toggleFrameVisibility(); // Ensure frame visibility is toggled
    }
  };

  const uploadImage = async (file) => {
    const controller = new AbortController();
    setAbortController(controller);

    const formData = new FormData();
    formData.append('file', file);

    try {
      setUploadStage('Отправка на сервер\nОбрабатываем запрос');
      setBlurred(false);
      await new Promise((resolve) => setTimeout(resolve, 500));

      const response = await fetch('http://158.160.168.126:8080/images/upload', {
        method: 'POST',
        body: formData,
        signal: controller.signal,
      });

      const result = await response.json();
      if (result && result.image_name) {
        setImageName(result.image_name);
        await fetchProcessedImage(result.image_name);
      } else {
        throw new Error('Не удалось получить имя изображения');
      }
    } catch (error) {
      console.error('Ошибка загрузки изображения:', error);
      setError(true);
      setErrorType('upload');
      setErrorMessage('Произошла ошибка. Попробуйте снова загрузить фотографию.');
      setInfoText('Напоминаем, программа поддерживает снимки формата JPG и PNG');
      setUploadStage('');
    }
  };

  const fetchProcessedImage = async (name, attempt = 1) => {
    const maxAttempts = 5;
    const delay = 2000;

    setUploadStage('Искусственный интеллект изучает фото');

    try {
      const response = await fetch(`http://158.160.168.126:8080/images/download?image_name=${name}`);

      if (response.status === 425 && attempt < maxAttempts) {
        console.log(`Попытка ${attempt} не удалась, повтор через ${delay} мс`);
        await new Promise(resolve => setTimeout(resolve, delay));
        return fetchProcessedImage(name, attempt + 1);
      } else if (response.ok) {
        setUploadStage('Загрузка результата');
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        setImageUrl(url);
        setShowResultsLabel(true);
      } else {
        throw new Error('Ошибка при скачивании файла');
      }
    } catch (error) {
      console.error('Ошибка при скачивании файла:', error);
      if (attempt >= maxAttempts) {
        setError(true);
        setErrorType('download');
        setErrorMessage('Произошла ошибка. Попробуйте снова загрузить фотографию.');
        setInfoText('Напоминаем, программа поддерживает снимки формата JPG и PNG');
        setUploadStage('');
      }
    }
  };

  const handleDownloadClick = () => {
    if (imageUrl) {
      const link = document.createElement('a');
      link.href = imageUrl;
      link.download = 'segmented_image.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const resetState = () => {
    if (abortController) {
      abortController.abort();
    }
    setImageUrl(null);
    setImageName(null);
    setUploadStage('');
    setError(false);
    setErrorType('');
    setErrorMessage('');
    setInfoText('Программа поддерживает снимки формата JPG и PNG');
    setShowResultsLabel(false);
    setBlurred(false);
  };

  const [isFadingOut, setIsFadingOut] = useState(false);

  const handleCrossClick = () => {
    setIsFadingOut(true); // Start fade-out animation

    // Wait for the animation to complete before resetting the state
    setTimeout(() => {
      resetState();
      setIsHidden(true);
      setIsButtonDisabled(true);
      setScanImageSrc(null);
      setImageTitle('');
      setSelectedFile(null);
      if (isFrameVisible) {
        toggleFrameVisibility();
      }
      //setIsFadingOut(false); // Ensure the element is reset after animation отмена
    }, 500); // Duration of the fade-out animation
  };



  return (
    
    <div className={`file-uploader-background ${isFadingOut ? 'fade-out' : ''}`} onDragOver={handleDragOver} onDrop={handleDrop}>
      {error && errorType === 'format' && (
        <div className={`frame51 ${error ? 'visible' : ''}`}>
          <div className="frame51-error-text">
            {errorMessage}
          </div>
          <img
            src={Cross}
            alt="Cross"
            className="frame51-cross-icon"
            onClick={() => setError(false)}
          />
        </div>
      )}
      <div className="frame4-container">
        {blurred && !error && !uploadStage && (
          <div className="frame4-border" onClick={() => setBlurred(false)}>
            <div className="drag-text">
              Просто перетащите изображение
            </div>
          </div>
        )}
        <div className={`frame4 ${blurred ? 'blurred' : ''}`}>
          <div className="frame5">
            <div className="frame7">
              <div className="text-top">
                {error && errorType !== 'format' ? 'Произошла ошибка \n Попробуйте снова загрузить фотографию' : 'Диагностика рентгеновских снимков легких у кошек и собак'}
              </div>
              <div className="text-bottom">
                {infoText}
              </div>
            </div>
            <div className="frame6">
              <button className="btn1" onClick={handleButtonClick}>Загрузить снимок</button>
              <div className="text-upload" onClick={handleTextClick}>
                или перетащите изображение в поле
              </div>
            </div>
          </div>
          {(uploadStage || imageUrl) && (
            <div className="upload-frame">
              {imageUrl ? (
                <div className="upload-content">
                  <div className="uploaded-image-container">
                    <div className="left-container">
                      {showResultsLabel && (
                        <div className="results-label">
                          Результаты исследования:
                        </div>
                      )}
                      <div className='frame53'>
                        <div className='frame52'>
                          <img src={imageUrl} alt="Uploaded" className="uploaded-image" />
                        </div>
                        <div className='frame48'>
                          <div className="health-status-text">Здоровые: 60%</div>
                          <div className="health-status-text">Пневмоторакс: 10%</div>
                          <div className="health-status-text">Коллапс трахеи: 5%</div>
                          <div className="health-status-text">Новообразование: 1%</div>
                        </div>
                      </div>
                      <button className="btn1" onClick={handleDownloadClick}>Скачать сегментированный снимок</button>
                    </div>
                    <div className="right-container">
                      <img src={Clinic} alt="Clinic" className="clinic-image" />
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <div className="loading-ellipse"></div>
                  <div className="upload-stage-text">
                    {uploadStage}
                  </div>
                </>
              )}
            </div>
          )}
        </div>
        <img
          src={Cross}
          alt="Cross"
          className="cross-icon"
          onClick={handleCrossClick}
        />
      </div>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      {isFrameVisible && (
        <div className="tmp-container">
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
            <button className={`button ${isButtonDisabled ? 'disabled' : ''}`} disabled={isButtonDisabled} onClick={handleUploadButtonClick}>
              {isButtonDisabled ? 'Отправить' : 'Отправить снимок'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FileUploader;
