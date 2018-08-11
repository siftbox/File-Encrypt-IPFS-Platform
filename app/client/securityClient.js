import * as internet from "../helper/internet";

export const encrypt = async (hash) => {
	const encyptedHashPayload = await internet.makePlatformRequest("encrypt", "post", { hash });
	console.log("2", encyptedHashPayload);
	decrypt(encyptedHashPayload);
};

export const decrypt = async (payload) => {
	const decryptedHash = await internet.makePlatformRequest("decrypt", "post", { ...payload });
	console.log("1", decryptedHash);
};