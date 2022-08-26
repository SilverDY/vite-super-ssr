import JsCookie from 'js-cookie';

const isSsr = typeof window === 'undefined';

export class Cookies {
  serverCookies: Record<string, string> = {};

  constructor(serverCookies?: Record<string, string>) {
    this.serverCookies = serverCookies || {};
  }

  get(): Record<string, string>;
  get(name: string): string | undefined;
  get(name?: string) {
    if (!name) {
      return isSsr ? this.serverCookies : JsCookie.get();
    }

    return isSsr ? this.serverCookies[name] : JsCookie.get(name);
  }

  public set = JsCookie.set;
  public remove = JsCookie.remove;
  public withConverter = JsCookie.withConverter;
}
