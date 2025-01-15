export const InlineStyle = () => {
  const containerStyle = {
    border: "solid 2px #392eff",
    borderRadius: "20px",
    padding: "20px",
    margin: "20px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  };
  const titleStyle = { margin: 0, color: "#3d84a8" };
  const buttonStyle = {
    backgroundColor: "#abedd8",
    border: "none",
    padding: "8px 24px",
    borderRadius: "8px",
    color: "#333",
    fontWeight: "bold",
  };

  return (
    <div style={containerStyle}>
      <p style={titleStyle}>- Inline Styles -</p>
      <button style={buttonStyle}>FIGHT!</button>
    </div>
  );
};
