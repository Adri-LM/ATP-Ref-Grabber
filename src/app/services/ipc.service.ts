import { Injectable } from '@angular/core';
import * as electron from 'electron';

@Injectable({
  providedIn: 'root'
})
export class IPCService {

  private readonly _ipc: electron.IpcRenderer | undefined;

  constructor() {
    if (window.require) {
      try {
        this._ipc = window.require('electron').ipcRenderer;
      } catch (e) {
        console.error("Error trying to get ipcRenderer", e);
      }
    } else {
      console.warn('Electron\'s IPC was not loaded');
    }
  }

  public invoke(channel: string, ...args: any[]) {
    if (!this._ipc) {
      return;
    }

    return this._ipc.invoke(channel, ...args);
  }
}
