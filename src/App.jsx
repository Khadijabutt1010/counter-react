// import CountButton from "./components/CountButton";
// import Count from "./components/Count";
// import Reset from "./components/Reset";
// import Title from "./components/Title";
// import { useState } from "react";

// export default function App() {
//   const [count, setCount] = useState(0);
//   return (
//     <>
//       <main>
//         <div className="card">
//           <Title />
//           <Count count={count} />
//           <Reset setCount={setCount} />
//           <CountButton setCount={setCount} />
//         </div>
//       </main>
//     </>
//   );
// }

// import CountButton from "./components/CountButton";
// import Count from "./components/Count";
// import Reset from "./components/Reset";
// import Title from "./components/Title";
// import { useState } from "react";

// export default function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <main>
//       <div className="card">
//         <Title />
//         <Count count={count} />
//         <Reset setCount={setCount} />
//         <CountButton count={count} setCount={setCount} />
//       </div>
//     </main>
//   );
// }

import CountButton from "./components/CountButton";
import Count from "./components/Count";
import Reset from "./components/Reset";
import Title from "./components/Title";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <div className="card">
        <Title />
        <Count count={count} />
        <Reset setCount={setCount} />
        <CountButton count={count} setCount={setCount} />
      </div>
    </main>
  );
}

