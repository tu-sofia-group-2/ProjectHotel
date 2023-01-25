import { createVerificationCode, modifyPassword, verifyUserCodeTouple } from "../utilities/verifyPsswordReeditionService";

export const createCode = async(req, res, next) => {
    try{
        await createVerificationCode(req.body.username);
        res.status(200);
    } catch (Error) {
        next(Error);
    }
}

export const validateCode = async(req, res, next) => {
    try{
        await verifyUserCodeTouple(req.body.username, req.body.code)
        res.status(200)
    } catch (err) {
        next(err)
    }
}

export const reissuePassword = async(req, res, next) => {
    try {
        await modifyPassword(req.body.username, request.body.newPassword);
        res.status(200)
    } catch (err) {
        next(err);
    }
}