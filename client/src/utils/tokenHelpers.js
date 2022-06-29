const saveToken = (token) => {
    localStorage.setItem("token", token)
};

const getToken = () => {
    const token = localStorage.getItem("token");
    if (token) {
        return token;
    } else {
        return false;
    }
};

export {saveToken, getToken };