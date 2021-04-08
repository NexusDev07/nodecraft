const axios = require("axios");

class Request {

    constructor(request, PlayerName) {

        this.request = request;
        this.PlayerName = PlayerName;

    }

    getRequest(request = this.request, PlayerName = this.PlayerName) {

        if (request === "ServiceStatus") {

            return axios.default.get("https://nodecraft.ml/ServiceStatus", {

                maxRedirects: 5

            }).then(response => {

                let services = [];
                services.push(response.data.minecraft_net);
                services.push(response.data.session_minecraft_net);
                services.push(response.data.account_mojang_com);
                services.push(response.data.authserver_mojang_com);
                services.push(response.data.sessionserver_mojang_com);
                services.push(response.data.api_mojang_com);
                services.push(response.data.textures_minecraft_net);

                return services;

            })

        } else if (request === "PlayerSkin") {

            return axios.default.get(`https://nodecraft.ml/PlayerSkin/${PlayerName}`, {

                maxRedirects: 5

            }).then(response => {

                return response.data.head;

            })

        } else if (request === "PlayerNamesHistory") {

            return axios.default.get(`https://nodecraft.ml/PlayerNamesHistory/${PlayerName}`, {

                maxRedirects: 5

            }).then(response => {

                return response.data;

            })

        }

    }

}

module.exports = Request