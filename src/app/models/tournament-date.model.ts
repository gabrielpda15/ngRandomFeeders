import { Tournament } from "./tournament-obj.model";

export class TournamentDate {

    public id: number;
    public start: Date;
    public end?: Date;
    public time: Date;
    public title: string;
    public tournament: Tournament;

    constructor(obj?: any) {

    }

}
