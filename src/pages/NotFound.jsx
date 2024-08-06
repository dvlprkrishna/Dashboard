import Header from "../components/common/Header";

const NotFound = () => {
  return (
    <>
      <div className="relative z-10 flex-1 overflow-auto p-4">
        <Header title={"Not Found"} />
        <div className="flex flex-row flex-wrap gap-4">
          <div>404</div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
