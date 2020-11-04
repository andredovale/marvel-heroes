import { Path } from "./types";
import { useStorage } from "./useStorage";

const useSessionStorage = (path: Path) => useStorage(path, "sessionStorage");

export { useSessionStorage as default, useSessionStorage };
