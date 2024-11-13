"use client";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import React, { ReactNode, useState } from "react";

const QueryProvider = ({ children }: { children: ReactNode }) => {
  const [client] = useState(() => new QueryClient());

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};

export default QueryProvider;
