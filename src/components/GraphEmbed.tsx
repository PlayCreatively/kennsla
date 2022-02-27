interface IGraph {
  //Array of expressions
  expressions?: Array<any>;
  //single expression
  exp?: string;
  //source of desmos link for embed
  src?: string;
}

const GraphEmbed: React.FC<{ src: string }> = ({ src }) => {
  return (
    <iframe
      src={src + "?embed"}
      className="Graph"
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
