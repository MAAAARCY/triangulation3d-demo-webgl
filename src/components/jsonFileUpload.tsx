import './jsonFileUpload.css';

export default function JsonFileUpload() {
  return (
    <section className="json-file-upload">
      <h2 className="sidebar-content-title">
        JSON File Upload
      </h2>
      <div className="json-file-upload__dropzone">
        <div className="json-file-upload__content">
          <p className="json-file-upload__title">Drag & drop a file or browse</p>
          <p className="json-file-upload__subtitle">Supported file types: .JSON</p>
          <button className="json-file-upload__button">
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