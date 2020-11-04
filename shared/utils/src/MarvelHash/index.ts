import md5 from "crypto-js/md5";

const generateHash = (publickKey: string, privateKey: string) =>
	String(md5(+new Date() + (publickKey as string) + privateKey));

export { generateHash };
