// import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

// export default function CountButton({ setCount }) {
//   return (
//     <>
//     <div className="button-container">
//       <button
//         className="count-btn"
//         onClick={() => {
//           setCount((prev) => prev - 1);
//         }}
//       >
//         <MinusIcon className="count-btn-icon" />
//       </button>
//       <button
//         className="count-btn"
//         onClick={() => {
//           setCount((prev) => prev + 1);
//         }}
//       >
//         <PlusIcon className="count-btn-icon" />
//       </button>
//     </div>
//     </>
//   );
// }


// import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

// export default function CountButton({ count, setCount }) {
//   return (
//     <div className="button-container">
      
//       <button
//         className="count-btn"
//         onClick={() => {
//           setCount((prev) => (prev > 0 ? prev - 1 : 0));
//         }}
//       >
//         <MinusIcon className="count-btn-icon" />
//       </button>

//       <button
//         className="count-btn"
//         onClick={() => {
//           setCount((prev) => (prev < 5 ? prev + 1 : 5));
//         }}
//       >
//         <PlusIcon className="count-btn-icon" />
//       </button>

//     </div>
//   );
// }


import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

export default function CountButton({ setCount }) {
  return (
    <div className="button-container">
      
      <button
        className="count-btn"
        onClick={() => {
          setCount((prev) => (prev > -5 ? prev - 1 : -5));
        }}
      >
        <MinusIcon className="count-btn-icon" />
      </button>

      <button
        className="count-btn"
        onClick={() => {
          setCount((prev) => (prev < 5 ? prev + 1 : 5));
        }}
      >
        <PlusIcon className="count-btn-icon" />
      </button>

    </div>
  );
}