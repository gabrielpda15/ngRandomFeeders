export class Identity {

    public id: number;
    public username: string;
    public passwordHash: string;
    public firstName: string;
    public lastName: string;
    public email: string;
    public discord: string;
    public nickLol: string;

    constructor(obj?: any) {
      this.id = obj && obj.id || 0;
      this.username = obj && obj.username || null;
      this.passwordHash = obj && obj.passwordHash || null;
      this.firstName = obj && obj.firstName || null;
      this.lastName = obj && obj.lastName || null;
      this.email = obj && obj.email || null;
      this.discord = obj && obj.discord || null;
      this.nickLol = obj && obj.nickLol || null;
    }

}
