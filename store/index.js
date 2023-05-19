import { isValidURL } from "~/helpers"

export const actions = {
    nuxtServerInit ({ commit }, { app, route, req, res, redirect }) {
        const isHttpsEnable = process.env.ENABLE_HTTPS === '1';
        const domainName = process.env.DOMAIN_NAME || '';
        const fullPath = route.fullPath;
        const scheme = isHttpsEnable ? 'https' : "http";

        const url = `${scheme}://${domainName}${fullPath}`;
        if (isValidURL(url)) {
            redirect(url);
        }
    }
}