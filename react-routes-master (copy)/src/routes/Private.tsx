import { ReactNode, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../services/firebaseConnection";
import { onAuthStateChanged } from "firebase/auth";

interface PrivateProps {
  children: ReactNode;
}

export function Private({ children }: PrivateProps): JSX.Element {
  const [signed, setSigned] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        const userdata = {
          uid: user.uid,
          email: user.email
        };
        localStorage.setItem('@userData', JSON.stringify(userdata));
        setLoading(false);
        setSigned(true);
      } else {
        setLoading(false);
        setSigned(false);
      }
    });

    return () => {
      unsub();
    };
  }, []);

  if (loading) {
    return <div>Carregando.....</div>;
  }

  if (signed === false) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
}
