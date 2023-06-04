export default (props: any) => {
  return (
    <>
      <button className={`pl-4 pr-4 pt-2 pb-2 bg-sky-500 hover:bg-sky-400 active:bg-sky-600 text-white rounded-md duration-200 ${props.className}`} onClick={props.onClick}>
        {props.children}
      </button>
    </>
  );
};
