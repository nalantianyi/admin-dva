/**
 * Created by nalantianyi on 2017/3/21.
 */
import axios from 'axios';

function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }

    const error = new Error(response.statusText);
    error.response = response;
    throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default async function request(url, options) {
    const response = await axios({...options,url});

    checkStatus(response);

    const data = response;

    const ret = {
        data
    };

    return ret;
}
