// import { debounce } from "lodash";
// import { useEffect, useState } from "react";

// function useWindowSize() {
//   const [windowSize, setWindowSize] = useState<{
//     width: number;
//     height: number;
//   }>({
//     width: 0,
//     height: 0,
//   });

//   useEffect(() => {
//     const handleResize = debounce(() => {
//       setWindowSize({
//         width: window.innerWidth,
//         height: window.innerHeight,
//       });
//     }, 100);

//     window.addEventListener("resize", handleResize);

//     handleResize();

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return windowSize;
// }

// export default useWindowSize;
