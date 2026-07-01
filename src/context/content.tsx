import { createContext, useContext, useEffect, useReducer } from "react";

// type Action =
//   | {
//       type: "Add_to_cart";
//       payload: {
//         id: number;
//         name: string;
//         img: string;
//         price: number;
//         quantity: number;
//       };
//     }
//   | {
//       type: "Incre_quantity";
//       payload: number;
//     }
//   | {
//       type: "Decre_quantity";
//       payload: number;
//     }
//   | {
//       type: "delete_item";
//       payload: number;
//     };

// type ProductPro = {
//   id: number;
//   name: string;
//   img: string;
//   price: number;
//   quantity: number;
// };

// function cartReducer(state: ProductPro[], action: Action) {
//   switch (action.type) {
//     case "Add_to_cart":
//       const exist = state.find((item) => item.id === action.payload.id);
//       if (exist) {
//         return state.map((item) =>
//           exist.id === item.id ? { ...item, quantity: +1 } : item,
//         );
//       } else return [...state, action.payload];
//     case "Incre_quantity":
//       return state.map((item) =>
//         item.id === action.payload
//           ? { ...item, quantity: (item.quantity += 1) }
//           : item,
//       );
//     case "Decre_quantity":
//       return state.map((item) =>
//         item.id === action.payload
//           ? { ...item, quantity: (item.quantity -= 1) }
//           : item,
//       );
//     case "delete_item":
//       return state.filter((item) => item.id !== action.payload);

//     default:
//       return state;
//       break;
//   }
// }
// const cartContext = createContext<CartContentType | null>(null);

// type CartContentType = {
//   cart: ProductPro[];
//   dispatch: React.ActionDispatch<[action: Action]>;
// };

// export function CartProvider(children: React.ReactNode) {
//   function intitialcart() {
//     if (typeof window === "undefined") return [];
//     const data = localStorage.getItem("cart");
//     if (data) {
//       return JSON.parse(data);
//     }
//   }
//   const [cart, dispatch] = useReducer(cartReducer, undefined, intitialcart);
//   useEffect(() => {
//     const data = localStorage.setItem("cart", JSON.stringify(cart));
//     return data;
//   }, [cart]);

//   return (
//     <cartContext.Provider value={{ cart, dispatch }}>
//       {children}
//     </cartContext.Provider>
//   );
// }
// export function useCart() {
//   const context = useContext(cartContext);
//   if (!context) {
//     throw new Error("content must be in the cartProvider");
//   }
//   return context;
// }
