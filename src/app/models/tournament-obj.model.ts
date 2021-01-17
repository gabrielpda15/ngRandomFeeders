import { TournamentRule } from "./tournament-rule.model";
import { TournamentDate } from "./tournament-date.model";

export class Tournament {

    public id: number;
    public title: string;
    public description?: string;
    public prize?: string;
    public rule: TournamentRule;
    public openingDate?: Date;
    public expirationDate?: Date;
    public dates: TournamentDate[];
    public ended: boolean;

    constructor(obj?: any) {
      this.id = obj && obj.id || 0;
      this.title = obj && obj.title || null;
      this.description = obj && obj.description || null;
      this.prize = obj && obj.prize || null;
      this.rule = obj && new TournamentRule(obj.rule) || null;
      this.openingDate = obj && new Date(obj.openingDate) || null;
      this.expirationDate = obj && new Date(obj.expirationDate) || null;
      this.ended = obj && obj.ended || false;
      this.dates = obj && obj.dates || [];
    }

}
