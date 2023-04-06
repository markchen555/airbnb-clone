"use client";

import React, { useState, useEffect } from "react";

interface ClientOnlyProps {
  children: React.ReactNode;
}

// Fix "Text content does not match erver-render HTMl" error
const ClientOnly: React.FC<ClientOnlyProps> = ({ children }) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return <>{children}</>;
};

export default ClientOnly;
