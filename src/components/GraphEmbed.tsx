const GraphEmbed: React.FC<{ src: string }> = ({ src }) => {
  return (
    <iframe
      src={src + "?embed"}
      className="Graph"
      title="graf"
      allowFullScreen={true}
      style={{
        border: "1px solid #ccc",
        borderBlock: 0,
        borderRadius: ".6rem",
        margin: "1em",
      }}
    ></iframe>
  );
};

export default GraphEmbed;
