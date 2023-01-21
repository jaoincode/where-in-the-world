function Loading() {
  return (
    <div className="bg-slate-600 w-full h-full absolute z-40 flex justify-center items-center">
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Loading;
