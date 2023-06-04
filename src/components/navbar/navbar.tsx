export default (props: any) => {
  return (
    <>
      <nav
        className={`absolute top-0 w-full h-12 bg-blue-500 ${props.className}`}
      >
        {props.toggle ? (
          <>
            <button
              className="absolute top-0 bottom-0 left-2 m-auto flex justify-center items-center h-10 w-10 hover:bg-white/20 rounded-md duration-200"
              onClick={() => props.toggleOn()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
                className={`h-8 w-8 fill-white ${props.classToggle}`}
              >
                <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
              </svg>
            </button>
          </>
        ) : (
          <></>
        )}
        <span className="h-full ml-14 flex items-center">{props.children}</span>
      </nav>
    </>
  );
};
