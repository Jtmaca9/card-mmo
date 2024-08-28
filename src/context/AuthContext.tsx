// "use client";

// import { auth } from "../services/firebase";
// import { User } from "firebase/auth";
// import {
//   createContext,
//   useContext,
//   useState,
//   ReactNode,
//   useEffect,
// } from "react";

// interface AuthContextType {
//   user: User | null;
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (context === undefined) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }
//   return context;
// };

// export const AuthProvider = ({ children }: { children: ReactNode }) => {
//   const [ready, setReady] = useState(false);
//   const [user, setUser] = useState<User | null>(null);

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((user) => {
//       setUser(user);
//       setReady(true);
//     });

//     return () => unsubscribe();
//   }, []);

//   return (
//     <AuthContext.Provider value={{ user }}>
//       {ready && children}
//     </AuthContext.Provider>
//   );
// };
