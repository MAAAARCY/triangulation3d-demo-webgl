import './App.css'

import { Unity, useUnityContext } from "react-unity-webgl";

import CameraSensitivity from './components/cameraSensitivity'
import JsonFileUpload from './components/jsonFileUpload'
import CameraControls from './components/cameraControls'
import SelectObject from './components/selectObject'

function App() {
  const unityContext = useUnityContext({
    loaderUrl: "Triangulation3dDemo/Build/webGL.loader.js",
    dataUrl: "Triangulation3dDemo/Build/webGL.data",
    frameworkUrl: "Triangulation3dDemo/Build/webGL.framework.js",
    codeUrl: "Triangulation3dDemo/Build/webGL.wasm",
    streamingAssetsUrl: "Triangulation3dDemo/StreamingAssets",
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
