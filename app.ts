import * as express from "express";
import {Server, Path, GET, PathParam} from "typescript-rest";

import {applicationBot} from "./discord";

applicationBot.init('Mjc2NDc1MzgzNTA1ODc5MDUx.C3pDmg._oGyFfld0TvUA2nFLguu8CFzCz8');

@Path("/hello")
class HelloService {
    @Path(":name")
    @GET
    sayHello( @PathParam('name') name: string): string {
        return "Hello " + name;
    }
}

let app: express.Application = express();
Server.buildServices(app);

app.listen(3456, function() {
    console.log('Rest Server listening on port 3456!');
});