export type PageProps = {};

// The `pageContext` that are available in both on the server-side and browser-side
export type PageContext = {
  Page: (pageProps: PageProps) => React.ReactElement;
  pageProps?: PageProps;
  urlPathname: string;
  isHydration: boolean;
  exports: {
    documentProps?: {
      title?: string;
      description?: string;
    };
  };
  redirectTo: string;
  cookies: Record<string, string>;
  hostname: string;
  protocol: string;
};

export interface PageProviderProps {
  pageContext: PageContext;
  children: React.ReactNode | React.ReactNode[];
}
