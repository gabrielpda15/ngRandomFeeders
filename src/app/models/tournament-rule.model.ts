export class TournamentRule {

    public id: number;
    public title: string;
    public description: string;
    public icon: string;
    public initials: string;
    public bg: string;

    constructor(obj?: any) {
      this.id = obj && obj.id || 0;
      this.title = obj && obj.title || null;
      this.description = obj && obj.description || null;
      this.icon = obj && obj.icon || null;
      this.initials = obj && obj.initials || null;
      this.bg = obj && obj.bg || null;
    }

}
