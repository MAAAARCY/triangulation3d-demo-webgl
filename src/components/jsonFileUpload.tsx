import { useRef } from 'react';
import type { UnityContextHook } from "react-unity-webgl/distribution/types/unity-context-hook";
import './jsonFileUpload.css';

interface JsonFileUploadProps {
  unityContext: UnityContextHook;
}

export default function JsonFileUpload({ unityContext }: JsonFileUploadProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const jsonString = e.target?.result as string;
      unityContext.sendMessage("JsonFileUploadView", "OnJsonFileUploadButtonClicked", jsonString);
      // console.log("JSON file content:", jsonString);
    };
    reader.readAsText(file);
  };

  return (
    <section className="json-file-upload">
      <h2 className="sidebar-content-title">
        JSON File Upload
      </h2>
      <div className="json-file-upload__dropzone">
        <div className="json-file-upload__content">
          <p className="json-file-upload__title">Drag & drop a file or browse</p>
          <p className="json-file-upload__subtitle">Supported file types: .JSON</p>
          <input
            type="file"
            accept=".json"
            onChange={handleFileChange}
            ref={fileInputRef}
            style={{ display: 'none' }}
          />
          <button 
            className="json-file-upload__button"
            onClick={handleButtonClick}
          >
            Browse Files
          </button>
        </div>
      </div>
      <p className="json-file-upload__description">
        Generate a custom 3D object using a JSON file.
      </p>
    </section>
  );
}