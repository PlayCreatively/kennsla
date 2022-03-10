const DYK: React.FC = ({ children }) => {
  return (
    <div className="DYK CardStyle">
      <p>💡 {children}</p>
    </div>
  );
};

export default DYK;