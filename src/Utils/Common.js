export const setTokenSession = (token) => {
    sessionStorage.setItem("token", JSON.stringify(token));
}

export const getTokenSession = () => {
    const tokenStr = sessionStorage.getItem("token");
    if (tokenStr) return JSON.parse(tokenStr);
    else return null;
}