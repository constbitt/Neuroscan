import React, {
  useRef,
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";
import "./SectorMain.css";
import dogVet from "./dog_vet.png";
import Cross from "./Cross.png";
import Clinic from "./Clinic.png";
import crossImage from "./Cross.png";

const SectorMain = forwardRef((props, ref) => {
  const [healthStatus, setHealthStatus] = useState("");

  const [btnState, setBtnState] = useState("default");
  const [showFileUploader, setShowFileUploader] = useState(false);
  const [fadeClass, setFadeClass] = useState("");
  const [uploadError, setUploadError] = useState(false);

  const [explanation, setExplanation] = useState("Проценты указывают на уверенность модели в наличии того или иного заболевания, где 0% - точно нет, 100% - точно есть");

  useImperativeHandle(ref, () => ({
    handleClic,
  }));

  useEffect(() => {
    if (showFileUploader) {
      setFadeClass("fade-in");
    } else {
      setFadeClass("fade-out");
    }
  }, [showFileUploader]);

  const handleMouseEnter = () => {
    if (btnState !== "inactive") {
      setBtnState("hover");
    }
  };

  const handleMouseLeave = () => {
    if (btnState !== "inactive") {
      setBtnState("default");
    }
  };

  const handleClic = () => {
    if (btnState !== "inactive") {
      setBtnState("click");
      setShowFileUploader(true);
      setTimeout(() => {
        setBtnState("default");
        //
        resetState();
        setIsHidden(true);
        setIsButtonDisabled(true);
        setScanImageSrc(null);
        setImageTitle("");
        setSelectedFile(null);
        //
      }, 700);
    }
  };

  const handleCrossClic = () => {
    setFadeClass("fade-out"); // Start fade-out animation

    setTimeout(() => {
      setShowFileUploader(false); // Hide file uploader after fade-out
    }, 700); // Match this with the duration of the fade-out animation
    setSelectedFile(null);
  };

  //

  const [isHidden, setIsHidden] = useState(true);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [scanImageSrc, setScanImageSrc] = useState(null);
  const [imageTitle, setImageTitle] = useState("");
  const [isContainerEnabled] = useState(true);
  const [isFrameVisible, setIsFrameVisible] = useState(false); // New state to control frame visibility
  const [selectedFile, setSelectedFile] = useState(null); // New state to store the selected file

  const handleFileChanger = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.type !== "image/jpeg" && file.type !== "image/png") {
        setError(true);
        setErrorType("format");
        setErrorMessage("Неправильный формат файла. Разрешены JPG и PNG");
        setSelectedFile(null);
        return;
      }
      setError(false);
      setErrorType("");
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
      document.getElementById("file-input").click();
    }
    //toggleFrameVisibility();
  };

  const handleCross = () => {
    setIsHidden(true);
    setIsButtonDisabled(true);
    setScanImageSrc(null);
    setImageTitle("");
    setSelectedFile(null); // Reset the selected file
  };

  const handleUploadButtonClick = () => {
    if (selectedFile) {
      setUploadError(false); // Reset upload error state
      handleUploadButton(selectedFile);
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
  const [errorType, setErrorType] = useState("");
  const [imageUrl, setImageUrl] = useState(null);
  const [uploadStage, setUploadStage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [infoText, setInfoText] = useState(
    "Программа поддерживает снимки формата JPG и PNG"
  );
  const [showResultsLabel, setShowResultsLabel] = useState(false);
  const [abortController, setAbortController] = useState(null);
  const [imageName, setImageName] = useState(null);

  const fileInputRef = useRef(null);

  const handleTextClick = () => {
    setBlurred(true);
  };

  const resetFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleButtonClick = () => {
    resetFileInput();
    fileInputRef.current.click();
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.type !== "image/jpeg" && file.type !== "image/png") {
        setError(true);
        setErrorType("format");
        setErrorMessage("Неправильный формат файла. Разрешены JPG и PNG");
        setSelectedFile(null);
        return;
      }
      setError(false);
      setErrorType("");

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
    } else {
      // If no file is selected (user cancelled), reset the state
      resetState();
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
      if (file.type !== "image/jpeg" && file.type !== "image/png") {
        setError(true);
        setErrorType("format");
        setErrorMessage("Неправильный формат файла. Разрешены JPG и PNG");
        return;
        setSelectedFile(null);
      }
      setError(false);
      setErrorType("");

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
    formData.append("file", file);

    try {
      setUploadStage("Отправка на сервер\nОбрабатываем запрос");
      setBlurred(false);
      await new Promise((resolve) => setTimeout(resolve, 500));

      const response = await fetch(
        "https://нейроскан.рф:8080/images/upload",
        {
          method: "POST",
          body: formData,
          signal: controller.signal,
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      if (result && result.image_name) {
        setImageName(result.image_name);
        await fetchProcessedImage(result.image_name);
      } else {
        throw new Error("Не удалось получить имя изображения");
      }
    } catch (error) {
      console.error("Ошибка загрузки изображения:", error);
      setError(true);
      setErrorType("upload");
      setErrorMessage(
        "Произошла ошибка при загрузке. Пожалуйста, попробуйте снова."
      );
      setInfoText(
        "Напоминаем, программа поддерживает снимки формата JPG и PNG"
      );
      setUploadStage("");
      setUploadError(true);
      setSelectedFile(null);
    }
  };

  const fetchImageDescription = async (name) => {
    try {
      const response = await fetch(
        `https://нейроскан.рф:8080/images/download_description?image_name=${name}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const result = await response.json();
      const formattedDescription = Object.entries(result)
      .map(([key, value]) => {
        const capitalizedKey = key.charAt(0).toUpperCase() + key.slice(1);
        const strValue = String(value);
        const formattedValue = strValue.includes("%")
          ? `${parseFloat(strValue).toFixed(2)}%`
          : strValue;
        return (
          <div key={key}>
            {capitalizedKey}: {formattedValue}
          </div>
        );
      });
      if (formattedDescription[0].key == "Найдено болезней") {
        setHealthStatus("Система не обнаружила болезней");
        setExplanation("");
      }
      else {
        //setExplanation("Проценты указывают на уверенность модели в наличии того или иного заболевания, где 0% - точно нет, 100% - точно есть");
        setHealthStatus(formattedDescription);
      }
    
    } catch (error) {
      console.error("Ошибка при получении описания изображения:", error);
      setHealthStatus("Не удалось загрузить результаты");
    }
  };
  

  const fetchProcessedImage = async (name) => {
    const delay = 2000;
    let attempt = 1;
    
    setUploadStage("Искусственный интеллект изучает фото");
  
    while (true) {
      try {
        const response = await fetch(
          `https://нейроскан.рф:8080/images/download?image_name=${name}`
        );

        if (response.status === 425) {
          console.log(`Попытка ${attempt} не удалась, повтор через ${delay} мс`);
          await new Promise((resolve) => setTimeout(resolve, delay));
          attempt++;
        } else if (response.ok) {
          setUploadStage("Загрузка результата");
          const blob = await response.blob();
          const url = URL.createObjectURL(blob);
          setImageUrl(url);
          setShowResultsLabel(true);
          await fetchImageDescription(name);
          break;
        } else {
          throw new Error("Ошибка при скачивании файла");
        }
      } catch (error) {
        console.error("Ошибка при скачивании файла:", error);
        setError(true);
        setErrorType("download");
        setErrorMessage(
          "Произошла ошибка. Попробуйте снова загрузить фотографию."
        );
        setInfoText("Напоминаем, программа поддерживает снимки формата JPG и PNG");
        setUploadStage("");
        setSelectedFile(null);
        break;
      }
    }
  };
  

  const handleDownloadClick = () => {
    if (imageUrl) {
      const link = document.createElement("a");
      link.href = imageUrl;
      link.download = "segmented_image.png";
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
    setUploadStage("");
    setError(false);
    setErrorType("");
    setErrorMessage("");
    setInfoText("Программа поддерживает снимки формата JPG и PNG");
    setShowResultsLabel(false);
    setBlurred(false);
    setUploadError(false); // Reset upload error state
  };

  const [isFadingOut, setIsFadingOut] = useState(false);

  const handleCrossClick = () => {
    setIsFadingOut(true); // Start fade-out animation
    setFadeClass("fade-out");
    // Wait for the animation to complete before resetting the state
    setTimeout(() => {
      resetState();
      setIsHidden(true);
      setIsButtonDisabled(true);
      setScanImageSrc(null);
      setImageTitle("");
      setSelectedFile(null);
      if (isFrameVisible) {
        toggleFrameVisibility();
      }
      setShowFileUploader(false);
      //setIsFadingOut(false); // Ensure the element is reset after animation отмена
    }, 500); // Duration of the fade-out animation
  };

  //

  return (
    <div className="sector-main">
      <div className="frame3">
        <div className="frame2">
          <div className="frame1">
            <div className="main-text">
              AI—инструмент для диагностики патологий дыхательной системы на
              рентгеновских снимках в ветеринарии
            </div>
            <div className="sub-text">
              Компания «Нейроскан» представляет уникальный инструмент для вашей
              клиники
            </div>
            <button
              className={`btn1-new ${btnState}`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={handleClic}
            >
              Приступить
            </button>
          </div>
        </div>
        <img src={dogVet} alt="Dog Vet" className="dog-vet-image" />
      </div>

      {/* Conditionally render file-uploader with fade effect */}
      {showFileUploader && (
        <div
          className={`file-uploader ${fadeClass}`}
          onDragOver={handleDragOver}
          onDrop={handleDrop} // Apply fade class
        >
          {error && errorType === "format" && (
            <div className={`frame51 ${error ? "visible" : ""}`}>
              <div className="frame51-error-text">{errorMessage}</div>
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
                <div className="drag-text">Просто перетащите изображение</div>
              </div>
            )}
            <div className={`frame4 ${blurred ? "blurred" : ""}`}>
              <div className="frame5">
                <div className="frame7">
                  <div className="text-top">
                    {error && errorType !== "format"
                      ? "Произошла ошибка \n Попробуйте снова загрузить фотографию"
                      : "Диагностика рентгеновских снимков кошек и собак в боковой проекции"}
                  </div>
                  <div className="text-bottom">{infoText}</div>
                </div>
                <div className="frame6">
                  <button className="btn1" onClick={handleButtonClick}>
                    Загрузить снимок
                  </button>
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
                          <div className="frame53">
                            <div className="frame52">
                              <img
                                src={imageUrl}
                                alt="Uploaded"
                                className="uploaded-image"
                              />
                              <div className={`uploaded-title`}>
                                {imageTitle}
                              </div>
                            </div>
                            <div className="frame48">
                              <div                               
                              className = "explanation_text">
                              {explanation}
                              </div>
                              <div 
                              className="health-status-text">
                              {healthStatus}
                              </div>
                            </div>
                          </div>
                          <button
                            className="btn1-ne"
                            onClick={handleDownloadClick}
                          >
                            Скачать сегментированный снимок
                          </button>
                        </div>
                        <div className="right-container">
                          <img
                            src={Clinic}
                            alt="Clinic"
                            className="clinic-image"
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="loading-ellipse"></div>
                      <div className="upload-stage-text">{uploadStage}</div>
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
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
          {isFrameVisible && (
            <div className="tmp-container">
              <div className="tmp-frame-new" onClick={handleClick}>
                <div className={`frame7-new ${isHidden ? "fade-out" : ""}`}>
                  {scanImageSrc && (
                    <img
                      src={scanImageSrc}
                      alt="Scan"
                      className={`scan-image ${isHidden ? "fade-out" : ""}`}
                    />
                  )}
                  <div className={`image-title ${isHidden ? "fade-out" : ""}`}>
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
                      className={`cross ${isHidden ? "fade-out" : ""}`}
                      onClick={handleCross}
                    />
                  )}
                </div>
                <input
                  type="file"
                  id="file-input"
                  style={{ display: "none" }}
                  onChange={handleFileChanger}
                  accept="*/*"
                  disabled={!isHidden || !isContainerEnabled}
                />
                <button
                  className={`button ${isButtonDisabled ? "disabled" : ""}`}
                  disabled={isButtonDisabled && !uploadError} 
                  onClick={handleUploadButtonClick}
                >
                  {uploadError
                    ? "Повторить отправку"
                    : isButtonDisabled
                    ? "Отправить"
                    : "Отправить снимок"}
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
});

export default SectorMain;