import { Path } from "./types";
import { useStorage } from "./useStorage";

const useLocalStorage = (path: Path) => useStorage(path, "localStorage");

export { useLocalStorage as default, useLocalStorage };
