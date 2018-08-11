//import target resolver path
export const routePath = require("path").join(__dirname, "../../app/controllers/v1/uploadController");

export const routes = [
	{ method: "post", endPoint: "uploadDocument@uploadDocument" },
	{ method: "get", endPoint: "isAlive@isAlive/:policyId" },
];