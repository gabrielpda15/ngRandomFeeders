import { Identity } from "./identity.model";
import { Tournament } from "./tournament-obj.model";

export class Subscription {

    public uuid: string;
    public description: string;
    public observation: string;
    public denied: boolean;
    public main: boolean;
    public identity: Identity;
    public tournament: Tournament;

    constructor(obj?: any) {
      this.uuid = obj && obj.uuid || null;
      this.description = obj && obj.description || null;
      this.observation = obj && obj.observation || null;
      this.denied = obj && obj.denied || false;
      this.main = obj && obj.main || false;
      this.identity = obj && new Identity(obj.identity) || null;
      this.tournament = obj && new Tournament(obj.tournament) || null;
    }

}
