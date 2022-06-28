import bcrypt from "bcrypt"

const encryptPassword = async (password) => {
    try {
        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);
        const hashPassword = await bcrypt.hash(password, salt);

        return hashPassword;
    } catch (error) {
        console.log("Error while hashing the password.", error);
    }
};

const verifyPassword = async (password, hashedPassword) => {
    try {
        const verificationResult = await bcrypt.compare(password, hashedPassword)
        return verificationResult;
    } catch (error) {
        console.log("Error veryfying password, ", error)
        return false;
    }
};



export { encryptPassword, verifyPassword };