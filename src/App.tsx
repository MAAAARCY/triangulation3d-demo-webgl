import './App.css'

import { Unity, useUnityContext } from "react-unity-webgl";

import CameraSensitivity from './components/cameraSensitivity'
import JsonFileUpload from './components/jsonFileUpload'
import CameraControls from './components/cameraControls'
import SelectObject from './components/selectObject'

function App() {
  const unityContext = useUnityContext({
    loaderUrl: "UnityBuild/Build/webgl_app.loader.js",
    dataUrl: "UnityBuild/Build/webgl_app.data",
    frameworkUrl: "UnityBuild/Build/webgl_app.framework.js",
    codeUrl: "UnityBuild/Build/webgl_app.wasm",
    streamingAssetsUrl: "UnityBuild/StreamingAssets",
  });

  return (
    <>
      <div className="container">
        <Unity
          unityProvider={unityContext.unityProvider}
          className="object-viewer"
        />
        <div className="sidebar">
          <CameraControls />
          <CameraSensitivity />
          <JsonFileUpload />
          <SelectObject />
        </div>
      </div>
    </>
  )
}

export default App
