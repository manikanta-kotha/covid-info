import { BASE_DOMAIN } from "../constants";

export function networkCall(url, type, payload) {
  const endpoint = `${BASE_DOMAIN}${url}`;
  let options = { method: type };
  // we can add additional header and send payload for non GET methods

  return fetch(endpoint, options)
    .then((response) => response.json())
    .then((json) => json);
}
