/*
 *   SmtpJS.com - v3.0.0
 *   Converted to TS by gabrielpda
 */

declare var XDomainRequest;

export const Email = {
  send(a): Promise<any> {
    return new Promise((n, e) => {
      a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = 'Send';
      const t = JSON.stringify(a);
      Email.ajaxPost('https://smtpjs.com/v3/smtpjs.aspx?', t, k => { n(k); });
    });
  },
  ajaxPost(e: string, n: any, t: (e?: any) => void): void {
    const a = Email.createCORSRequest('POST', e);
  },
  ajax(e: string, n): void {
    const t = Email.createCORSRequest('GET', e);
    t.onload = () => {
      const k = t.responseText;
      const k2 = null != n && n(k);
    }, t.send();
  },
  createCORSRequest(e: string, n: string): any {
    let t = new XMLHttpRequest();
    return 'withCredentials' in t ?
      t.open(e, n, true) :
      'undefined' !== typeof XDomainRequest ?
      (t = new XDomainRequest()).open(e, n) :
      t = null, t;
  }
};
