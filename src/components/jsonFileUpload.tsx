import { useCallback, useRef } from 'react';
import { useDropzone } from 'react-dropzone';
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

  const onDrop = useCallback((acceptedFiles: File[]) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onabort = () => console.log('file reading was aborted');
      reader.onerror = () => console.log('file reading has failed');
      reader.onload = () => {
        try {
          const jsonContent = JSON.parse(reader.result as string);
          unityContext.sendMessage(
            "JsonFileUploadView", 
            "OnJsonFileUploadButtonClicked", 
            JSON.stringify(jsonContent)
          );
        } catch (error) {
          console.error('Error parsing JSON:', error);
        }
      };

      reader.readAsText(file);
    });
  }, [unityContext]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/json': ['.json']
    },
    maxFiles: 1
  });

  return (
    <section className="json-file-upload">
      <h2 className="sidebar-content-title">
        JSON File Upload
      </h2>
      <div className="json-file-upload__dropzone" {...getRootProps()}>
        <input {...getInputProps()} />
        <div className="json-file-upload__content">
          <p className="json-file-upload__title">
            {isDragActive ? 'Drop JSON here' : 'Drag & drop a file or browse'}
          </p>
          <p className="json-file-upload__subtitle">Supported file types: .json</p>
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