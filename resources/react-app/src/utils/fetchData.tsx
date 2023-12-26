const fetchLoaderData = async (apiURL: string) => {
    return fetch(apiURL, {
        headers: {
            "content-type": "application/json"
        }
    }).then(res => {
        return res.json();
    }).catch(err => {
        console.log(err);
        return null;
    });
};

const fetchActionData = (apiURL: string, body: FormData) => {
    return fetch(apiURL, {
        method: "POST",
        body: body
    });
};

export { fetchActionData, fetchLoaderData as default };