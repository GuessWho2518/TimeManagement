
const config = {
    url: 'https://dummyjson.com/todos',
    headers: { "Content-Type": "application/json" },
    patch: 'PATCH',
    post: 'POST',
    put: 'PUT',
    delete: 'DELETE'
}
const handleResponse = (res: any) => {
    return res.ok ? res.json() : Promise.reject(res.status);
}

export const getTasksData = () => {
    return fetch(config.url, {
        headers: config.headers
    })
        .then(res => {
            return handleResponse(res)
        })
}