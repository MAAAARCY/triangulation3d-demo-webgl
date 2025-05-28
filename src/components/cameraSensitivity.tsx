import { useState, useEffect } from 'react';
import type { UnityContextHook } from "react-unity-webgl/distribution/types/unity-context-hook";
import './cameraSensitivity.css';

interface CameraSensitivityProps {
  unityContext: UnityContextHook;
}

export default function CameraSensitivity({ unityContext }: CameraSensitivityProps) {
  const [rotateSensitivity, setRotateSensitivity] = useState<number>(3);
  const [moveSensitivity, setMoveSensitivity] = useState<number>(3);
  const [zoomSensitivity, setZoomSensitivity] = useState<number>(3);

  const updateSliderBackground = (slider: HTMLInputElement, value: number) => {
    const percent = (value / 10) * 100;
    slider.style.background = `linear-gradient(to right, #1A80E5 0%, #1A80E5 ${percent}%, #334D66 ${percent}%, #334D66 100%)`;
  };

  const handleRotateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(event.target.value);
    setRotateSensitivity(value);
    unityContext.sendMessage("CameraSensitivityView", "ChangeRotateSensitivity", value);
    updateSliderBackground(event.target, value);
  };

  const handleMoveChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(event.target.value);
    setMoveSensitivity(value);
    unityContext.sendMessage("CameraSensitivityView", "ChangeMoveSensitivity", value);
    updateSliderBackground(event.target, value);
  };

  const handleZoomChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(event.target.value);
    setZoomSensitivity(value);
    unityContext.sendMessage("CameraSensitivityView", "ChangeZoomSensitivity", value);
    updateSliderBackground(event.target, value);
  };

  useEffect(() => {
    const sliders = document.querySelectorAll('.camera-sensitivity__slider') as NodeListOf<HTMLInputElement>;
    sliders.forEach((slider, index) => {
      const value = index === 0 ? rotateSensitivity : index === 1 ? moveSensitivity : zoomSensitivity;
      updateSliderBackground(slider, value);
    });
  }, []);

  return (
    <section className="camera-sensitivity">
      <h2 className="sidebar-content-title">Camera Sensitivity</h2>
      
      <h3 className="camera-sensitivity__subtitle">Move Left/Right Speed</h3>
      <div className="camera-sensitivity__container">
        <div className="camera-sensitivity__wrapper">
          <input
            type="range"
            min="0"
            max="10"
            step="0.1"
            value={rotateSensitivity}
            onChange={handleRotateChange}
            className="camera-sensitivity__slider"
          />
          <span className="camera-sensitivity__value">{rotateSensitivity.toFixed(1)}</span>
        </div>
      </div>

      <h3 className="camera-sensitivity__subtitle">Move Up/Down Speed</h3>
      <div className="camera-sensitivity__container">
        <div className="camera-sensitivity__wrapper">
          <input
            type="range"
            min="0"
            max="10"
            step="0.1"
            value={moveSensitivity}
            onChange={handleMoveChange}
            className="camera-sensitivity__slider"
          />
          <span className="camera-sensitivity__value">{moveSensitivity.toFixed(1)}</span>
        </div>
      </div>

      <h3 className="camera-sensitivity__subtitle">Zoom In/Out Speed</h3>
      <div className="camera-sensitivity__container">
        <div className="camera-sensitivity__wrapper">
          <input
            type="range"
            min="0"
            max="10"
            step="0.1"
            value={zoomSensitivity}
            onChange={handleZoomChange}
            className="camera-sensitivity__slider"
          />
          <span className="camera-sensitivity__value">{zoomSensitivity.toFixed(1)}</span>
        </div>
      </div>
    </section>
  );
}