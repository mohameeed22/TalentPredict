import {
  BehaviorSubject,
  Injectable,
  Subject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-RJXMOIA6.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-DOECEMG6.js";

// src/app/core/services/notification.service.ts
var NotificationService = class _NotificationService {
  // Toast notifications
  notificationSubject = new Subject();
  notifications$ = this.notificationSubject.asObservable();
  // Center app notifications
  appNotifSubject = new BehaviorSubject([]);
  appNotifications$ = this.appNotifSubject.asObservable();
  unreadCountSubject = new BehaviorSubject(0);
  unreadCount$ = this.unreadCountSubject.asObservable();
  success(message, duration = 3e3) {
    this.show({ type: "success", message, duration });
    this.addAppNotification("success", "Succ\xE8s", message);
  }
  error(message, duration = 5e3) {
    this.show({ type: "error", message, duration });
    this.addAppNotification("error", "Erreur", message);
  }
  info(message, duration = 3e3) {
    this.show({ type: "info", message, duration });
    this.addAppNotification("info", "Information", message);
  }
  warning(message, duration = 4e3) {
    this.show({ type: "warning", message, duration });
    this.addAppNotification("warning", "Attention", message);
  }
  show(notification) {
    this.notificationSubject.next(notification);
  }
  // ---- App Notifications Center Methods ----
  addAppNotification(type, title, body) {
    const newNotif = {
      id: `local-${Math.random().toString(36).substring(2, 9)}`,
      type,
      title,
      body,
      timestamp: Date.now(),
      read: false,
      source: "local"
    };
    const current = this.appNotifSubject.value;
    const updated = [newNotif, ...current].slice(0, 50);
    this.appNotifSubject.next(updated);
    this.updateUnreadCount();
  }
  syncServerNotifications(serverNotifications) {
    const localNotifications = this.appNotifSubject.value.filter((notification) => notification.source === "local");
    const merged = [...serverNotifications, ...localNotifications].sort((a, b) => b.timestamp - a.timestamp).slice(0, 100);
    this.appNotifSubject.next(merged);
    this.updateUnreadCount();
  }
  getNotificationById(id) {
    return this.appNotifSubject.value.find((notification) => notification.id === id);
  }
  markRead(id) {
    const current = this.appNotifSubject.value;
    const updated = current.map((n) => n.id === id ? __spreadProps(__spreadValues({}, n), { read: true }) : n);
    this.appNotifSubject.next(updated);
    this.updateUnreadCount();
  }
  markAllRead() {
    const current = this.appNotifSubject.value;
    const updated = current.map((n) => __spreadProps(__spreadValues({}, n), { read: true }));
    this.appNotifSubject.next(updated);
    this.updateUnreadCount();
  }
  clearAll() {
    this.appNotifSubject.next([]);
    this.updateUnreadCount();
  }
  removeNotification(id) {
    const current = this.appNotifSubject.value;
    const updated = current.filter((n) => n.id !== id);
    this.appNotifSubject.next(updated);
    this.updateUnreadCount();
  }
  updateUnreadCount() {
    const current = this.appNotifSubject.value;
    const count = current.filter((n) => !n.read).length;
    this.unreadCountSubject.next(count);
  }
  static \u0275fac = function NotificationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotificationService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _NotificationService, factory: _NotificationService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotificationService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  NotificationService
};
//# sourceMappingURL=chunk-MNIKYIXT.js.map
