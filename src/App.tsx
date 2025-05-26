import {useEffect} from 'react';
import './App.css'

import { Unity, useUnityContext } from "react-unity-webgl";

import CameraSensitivity from './components/cameraSensitivity'
import JsonFileUpload from './components/jsonFileUpload'
import CameraControls from './components/cameraControls'
import SelectObject from './components/selectObject'

function App() {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  
  if (isMobile) {
    return (
      <div className="mobile-warning">
        <h1>Desktop Only</h1>
        <p>この機能はデスクトップ端末専用です。<br />パソコンからアクセスしてください。</p>
      </div>
    );
  }

  const unityContext = useUnityContext({
    loaderUrl: "Triangulation3dDemo/Build/webGL.loader.js",
    dataUrl: "Triangulation3dDemo/Build/webGL.data",
    frameworkUrl: "Triangulation3dDemo/Build/webGL.framework.js",
    codeUrl: "Triangulation3dDemo/Build/webGL.wasm",
    streamingAssetsUrl: "Triangulation3dDemo/StreamingAssets",
  });

  const { addEventListener, removeEventListener, isLoaded } = unityContext;

  useEffect(() => {
    if (!isLoaded) return;  // Unityが読み込まれていない場合は早期リターン

    const callback = (...parameters: any[]) => {
      const message = parameters[0];
      console.log("Callback", message);
    };

    addEventListener("Callback", callback);
    
    return () => {
      removeEventListener("Callback", callback);
    };
  }, [isLoaded, addEventListener, removeEventListener]);

  return (
    <>
      <div className="container">
        <Unity
          unityProvider={unityContext.unityProvider}
          className="object-viewer"
        />
        <div className="sidebar">
          <CameraControls />
          <CameraSensitivity unityContext={unityContext} />
          <JsonFileUpload />
          <SelectObject unityContext={unityContext} />
        </div>
      </div>
    </>
  )
}

export default App
