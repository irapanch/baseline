// "use client";
// import { createContext, useContext, useState, ReactNode } from "react";
// import LoginModal from "@/components/User/Login/LoginModal";
// const ModalContext = createContext({
//   openLoginModal: () => {},
// });

// export const useModal = () => useContext(ModalContext);

// export function ModalProvider({ children }: { children: ReactNode }) {
//   const [showModal, setShowModal] = useState(false);

//   const openLoginModal = () => setShowModal(true);
//   const closeLoginModal = () => setShowModal(false);

//   return (
//     <ModalContext.Provider value={{ openLoginModal }}>
//       {children}
//       {showModal && <LoginModal onClose={closeLoginModal} />}
//     </ModalContext.Provider>
//   );
// }
