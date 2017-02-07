/**
 * Created by allin_000 on 07.02.2017.
 */

import * as Discord from "discord.js";

export declare class applicationBot {

    constructor(){}

    client:any;

    init(token){
        console.log('here')
        this.client = new Discord.Client();

        this.client.on('ready', () => {
            console.log(`Logged in as ${this.client.user.username}!`);
        });

        this.client.on('message', msg => {

            if (msg.content === 'ping') {
                msg.reply('Pong!');
            }

            if (msg.content === 'channel'){
                msg.reply(msg);
            }


        });

        this.client.login(token);
    };

}