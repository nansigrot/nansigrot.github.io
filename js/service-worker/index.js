const debug = true ? console.log.bind(console, '[ServiceWorker]'), () => {};

class ServiceWorker {
  init() {
    debug('init');
    addEventListener('install', this);
    addEventListener('activate', this);
    addEventListener('fetch', this);
  }

  handleEvent(event) {
    debug('handleEvent', event);
    switch ( event.type ) {
      case 'install':
        this.onInstall(event);
        break;
      case 'activate':
        this.onActivate(event);
        break;
      case 'fetch':
        this.onFetch(event);
        break;
    }
  }

  onInstall(event) {
    debug('onInstall', event);
  }

  onActivate(event) {
    debug('onActivate', event);
  }

  onFetch(event) {
    debug('onFetch', event);
  }
}
