import { useState, useEffect } from 'react';
import type { UnityContextHook } from "react-unity-webgl/distribution/types/unity-context-hook";
import './cameraSensitivity.css';

interface CameraSensitivityProps {
  unityContext: UnityContextHook;
}

export default function CameraSensitivity({ unityContext }: CameraSensitivityProps) {
  const [sensitivity, setSensitivity] = useState<number>(10);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(event.target.value);
    setSensitivity(value);
    unityContext.sendMessage("ReactCommandLogger", "ChangeCameraSensitivity", value);
    
    // スライダーの背景色を更新
    const percent = (value / 20) * 100;
    const slider = event.target;
    slider.style.background = `linear-gradient(to right, #1A80E5 0%, #1A80E5 ${percent}%, #334D66 ${percent}%, #334D66 100%)`;
  };

  // マウント時の初期背景色を設定
  useEffect(() => {
    const slider = document.querySelector('.camera-sensitivity__slider') as HTMLInputElement;
    if (slider) {
      const percent = (sensitivity / 20) * 100;
      slider.style.background = `linear-gradient(to right, #1A80E5 0%, #1A80E5 ${percent}%, #334D66 ${percent}%, #334D66 100%)`;
    }
  }, []);

  return (
    <section className="camera-sensitivity">
      <h2 className="sidebar-content-title">
        Camera Sensitivity
      </h2>
      <h3 className="camera-sensitivity__subtitle">
        Rotate Speed
      </h3>
      <div className="camera-sensitivity__container">
        <div className="camera-sensitivity__wrapper">
          <input
            type="range"
            min="0"
            max="20"
            step="0.1"
            value={sensitivity}
            onChange={handleChange}
            className="camera-sensitivity__slider"
          />
          <span className="camera-sensitivity__value">{sensitivity.toFixed(1)}</span>
        </div>
      </div>
    </section>
  );
}