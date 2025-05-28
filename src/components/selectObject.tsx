import { useState, useEffect } from 'react';
import type { UnityContextHook } from "react-unity-webgl/distribution/types/unity-context-hook";
import './selectObject.css';

interface SelectObjectProps {
  unityContext: UnityContextHook;
}

function CubeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 4L8 1L2 4V12L8 15L14 12V4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 4L8 7L14 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 7V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function UrlIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.5 9.5L9.5 6.5" stroke="currentColor" strokeLinecap="round"/>
      <path d="M8 4L6.5 5.5" stroke="currentColor" strokeLinecap="round"/>
      <path d="M10 6L11.5 4.5" stroke="currentColor" strokeLinecap="round"/>
      <path d="M8 12L9.5 10.5" stroke="currentColor" strokeLinecap="round"/>
      <path d="M6 10L4.5 11.5" stroke="currentColor" strokeLinecap="round"/>
    </svg>
  );
}

export default function SelectObject({ unityContext }: SelectObjectProps) {
  const [objects, setObjects] = useState<string[]>([]);

  useEffect(() => {
    const { addEventListener, removeEventListener } = unityContext;

    const handleCallback = (...parameters: any[]) => {
      const objectName = parameters[0];
      // console.log("Received object name:", objectName);
      if (typeof objectName === "string" && objectName.trim() !== "") {
        setObjects(prev => [...prev, objectName]);
      }
    };

    addEventListener("Callback", handleCallback);
    return () => removeEventListener("Callback", handleCallback);
  }, [unityContext]);

  const handleObjectSelect = (objectName: string) => {
    unityContext.sendMessage("SelectObjectView", "ChangeSelectableObject", objectName);
  };

  return (
    <section>
      <h2 className="sidebar-content-title">
        Select Object
      </h2>
      <div className="select-object__buttons">
        {objects.map((objectName) => {
          const isUrlEnabled = objectName === "Cube" || objectName === "Suzanne";
          return (
            <div key={objectName} className="select-object__button-group">
              <button
                className="select-object__button"
                onClick={() => handleObjectSelect(objectName)}
              >
                <CubeIcon />
                <span>{objectName}</span>
              </button>
              <button 
                className="select-object__button--link"
                onClick={isUrlEnabled ? () => window.open(`https://github.com/MAAAARCY/Triangulation3dDemo/blob/main/Demo/Assets/Triangulation3d/Samples/Addressables/JsonFiles/${objectName}Vertices.json`, '_blank') : undefined}
                disabled={!isUrlEnabled}
                aria-hidden={!isUrlEnabled}
              >
                <UrlIcon />
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}