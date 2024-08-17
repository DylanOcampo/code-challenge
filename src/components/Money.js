export const Balance = ({ num }) => {
  return (
    <div className="balanceContainer">
      <h2 style={{ color: "white", paddingBottom: "10px" }}>Balance:</h2>
      <h1 style={{ color: "white" }}> {num}</h1>
    </div>
  );
};
