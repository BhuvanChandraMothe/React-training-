import http from "../common/http"


export const getUsers = () => {
    return http.get("/users");
}
export const getUser = (id) => {
    return http.get("/users",id);
}