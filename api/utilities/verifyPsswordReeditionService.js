import ReeditionCode from "../models/ReeditionCode";
import User from "../models/User";
import { STALE, UNKNOWN, UNUSED, USED } from "./codeStatesEnum";
import { createError } from "../utilities/error.js";
import { sendMail } from "./mailingService";


const LENGTH = 9;

export const modifyPassword = async(username, newPassword) => {
    const user = await User.findOne(username);
    if(!user) {
        throw createError(404, "User not found");
    }

    user.password = newPassword;
    user.updateOne();

    const code = await ReeditionCode.findOne({username: username, state: USED});
    if (!code) {
        throw createError(400, "No valid code found for username");
    }

    ReeditionCode.findByIdAndDelete(code.id);
}

export const createVerificationCode = async(username) => {
    const user = await User.findOne({username: username});
    if (!user) {
        throw createError(404, `No user found with username: ${username}`)
    }
    const codeObjectList = await ReeditionCode.find({username: username});
    if (codeObjectList.length != 0) {
        deleteAllByUsername(username);
    }
    const code = makeid();
    const date = new Date();
    date.setTime(date.getTime() + 60*60*1000); //add one hour over current time
    const codeTouple = new ReeditionCode({username: username,  verificationCode: code, validThrough: date, state: UNUSED});
    try {
        codeTouple.save();
    } catch (Error) {
        throw createError(500, "Cannot save code to db");
    }

    try {
        sendMail(user, code);
    } catch(Error) {
        throw new createError(500, "Could not send mail");
    }
    return;
}

export const verifyUserCodeTouple = async (username, code) => {
    const codeObjectList = await ReeditionCode.find({username: username});
    if(codeObjectList.length == 0) {
        throw createError(400, "No saved code")
    } else {
        const success = false;
        const counter = 0;
        codeObjectList.forEach(e => {
           if(!verifyIfStale(e)) {
              ReeditionCode.findByIdAndDelete(e.id);
           } else {
              success = true;
              counter++;
           }
        })

        if(!success) {
            throw createError(400, "No valid code found/ All codes are stale")
        } else if(counter > 1) {
            deleteAllByUsername(username);
            throw createError(400, "Too many valid codes. Generate a new code")
        } else {
            const singularCodeObject = await ReeditionCode.findOne({username: username});
            if(singularCodeObject.verificationCode != code) {
                throw createError(403, "Code mismatch")
            } else {
                singularCodeObject.state = USED;
                singularCodeObject.updateOne();
                return;
            }
        }
    }
};

const verifyIfStale = (codeObject) => {
    if(codeObject.validThrough < new Date()){
        return false;
    } 

    if(codeObject.state === STALE || codeObject.state === USED || codeObject === UNKNOWN) {
        return false;
    }

    return true;
}

const deleteAllByUsername = async(username) => {
    const list = await ReeditionCode.find({username: username});
    list.forEach(e => {
        ReeditionCode.findByIdAndDelete(e.id);
    })
}

function makeid() {
    let result = '';
     const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
     const charactersLength = characters.length;
     let counter = 0;
     while (counter < LENGTH) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
       counter += 1;
     }
     return result;
}