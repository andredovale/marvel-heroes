import md5 from "crypto-js/md5";

const generateHash = (ts: string, publickKey: string, privateKey: string) =>
	String(md5(ts + privateKey + publickKey));

const getTokens = (publickKey: string, privateKey: string) => {
	const ts = String(+new Date());
	return new URLSearchParams({
		ts,
		apikey: publickKey,
		hash: generateHash(ts, publickKey, privateKey),
	}).toString();
};

export { generateHash, getTokens };
