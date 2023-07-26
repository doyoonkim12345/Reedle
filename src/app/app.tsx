const App = (): JSX.Element => {
  return (
    <div
      style={{
        height: "100%",
        alignItems: "center",
        justifyContent: "start",
        flexDirection: "column",
        overflowX: "auto",
      }}
      className="w-full h-full flex bg-[#faf6f2]　flex-col"
    >
      {" "}
      <div
        style={{ position: "sticky", top: 0 }}
        className="w-full sticky top-0 flex justify-center bg-white"
      >
        <img className="h-12" src="./logo.png" alt="reedle" />
      </div>
      <img
        style={{
          maxWidth: "32rem",
        }}
        src="./landingpage.png"
        alt=""
        className="w-full aspect-[1136/2588]"
      />
    </div>
  );
};

export default App;
