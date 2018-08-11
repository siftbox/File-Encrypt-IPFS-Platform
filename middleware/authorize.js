export const authorizateRequest = (req, res, next) => {
	// skip security check
	next();
};