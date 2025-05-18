import './selectObject.css';

function CubeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 4L8 1L2 4V12L8 15L14 12V4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 4L8 7L14 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 7V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default function SelectObject() {
  return (
    <section>
      <h2 className="sidebar-content-title">
        Select Object
      </h2>
      <div className="select-object__buttons">
        <button className="select-object__button">
          <CubeIcon />
          <span>Cube</span>
        </button>
        <button className="select-object__button">
          <CubeIcon />
          <span>Suzanne</span>
        </button>
      </div>
    </section>
  );
}