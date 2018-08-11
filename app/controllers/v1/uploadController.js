import * as collection from "../../helper/collection";
import * as ipfsNode from "../../client/ipfsNode";
import * as securityClient from "../../client/securityClient";

export const uploadDocument = async (req, res) => {
	if (req.files && req.files.file) {
		const ipfs = await ipfsNode.getNode();

		let fileformat = null;
		const file = req.files.file;
		if (file.mimetype && file.mimetype.split("/").length > 1) {
			fileformat = file.mimetype.split("/")[1];
		}

		if (fileformat == null) {
			return res.status(400).json(collection.getErrorResponse("File type not supported"));
		}

		const files = [{ path: file.name, content: file.data }];

		// now code to upload to ipfs
		ipfs.files.add(files, (err, files) => {
			if (err) {
				throw err;
			}

			if (files.length > 0) {
				// call nucypher
				securityClient.encrypt(files[0].hash);

			}
		});

		return res.status(400).json(collection.getErrorResponse("Something went wrong"));
		// call smart contract service


	} else {
		return res.status(400).json(collection.getErrorResponse("Something went wrong"));
	}
};


export const isAlive = async (req, res) => {
	if (req.params && req.params.policyId) {
		return res.status(200).json({ result: true });
	} else {
		return res.status(400).json(collection.getErrorResponse("Something went wrong"));
	}
}