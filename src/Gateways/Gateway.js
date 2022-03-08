import config from 'Configs/Config';

async function guestGateway(METHOD, API, BODY = null) {
    const URL = `${config.base_url}${API}`;
    const OPTIONS = {
        method: METHOD,
        headers: {
            'Content-Type': 'application/json',
            'access-control-allow-origin': '*',
            'Client-ID': config.client_id,
            'Client-Secret': config.client_secret,
        },
        body: BODY,
    };
    return await fetch(URL, OPTIONS)
        .then(handleResponse)
        .then((response) => {
            if (response.success !== true) {
                //error handling
            }
            return response;
        });
}

function handleResponse(response) {
    return response.text().then((text) => {
        return text && JSON.parse(text);
    });
}
const Gateway = {
    guestGateway
};
export default Gateway;
