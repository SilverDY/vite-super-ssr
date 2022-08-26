/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

interface ImportMetaEnv {
  readonly PORT: string;
  readonly VITE_STAND: string;
  readonly VITE_API_URL: string;
  readonly VITE_API_FILESTORAGE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

type Merge<M, N> = Omit<M, Extract<keyof M, keyof N>> & N;

type DeepWriteable<T> = { -readonly [P in keyof T]: DeepWriteable<T[P]> };

type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;

type Component<P = any> = (props?: P) => JSX.Element;

interface ComponentWithChild {
  children: ReactNode;
}

interface ComponentWithChildren {
  children: ReactNode | ReactNode[];
}
