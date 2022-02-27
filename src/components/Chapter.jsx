export default function Chapter({ title, children }) {
  function handleClick() {
    document.location.href = "#" + title.toLowerCase();
  }

  return (
    <div className="Chapter" id={title.toLowerCase()}>
      <h1 className="Chapter-header" onClick={handleClick}>
        {title}
      </h1>
      <div className="Chapter-content">{children}</div>
    </div>
  );
}
