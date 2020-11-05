import md5 from "crypto-js/md5";

const generateHash = (ts: string, publickKey: string, privateKey: string) =>
	String(md5(ts + privateKey + publickKey));

export { generateHash };
