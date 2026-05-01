import {
  SkillsService
} from "./chunk-MOVJX3UU.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-P6A3FBJJ.js";
import {
  NotificationService
} from "./chunk-MNIKYIXT.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-PXDWMCLH.js";
import {
  AuthService,
  Role
} from "./chunk-THMWLUG7.js";
import {
  CommonModule,
  Component,
  HttpClient,
  Injectable,
  NgClass,
  NgIf,
  computed,
  environment,
  finalize,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-RJXMOIA6.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-DOECEMG6.js";

// src/app/modules/admin/services/admin.service.ts
var AdminService = class _AdminService {
  http = inject(HttpClient);
  baseUrl = `${environment.apiUrl}/users`;
  /** GET /api/users — List all users */
  getAllUsers() {
    return this.http.get(this.baseUrl);
  }
  /** GET /api/users/{id} — Get user by ID */
  getUserById(userId) {
    return this.http.get(`${this.baseUrl}/${userId}`);
  }
  /** POST /api/users — Create a new user */
  createUser(data) {
    return this.http.post(this.baseUrl, data);
  }
  /** PUT /api/users/{id} — Update user (including role) */
  updateUser(userId, data) {
    return this.http.put(`${this.baseUrl}/${userId}`, data);
  }
  /** PUT /api/users/{id} — Update user role */
  updateUserRole(userId, role) {
    return this.http.put(`${this.baseUrl}/${userId}`, { role });
  }
  /** DELETE /api/users/{id} — Delete user */
  deleteUser(userId) {
    return this.http.delete(`${this.baseUrl}/${userId}`);
  }
  /** GET /api/admin/stats — System-wide statistics */
  getSystemStats() {
    return this.http.get(`${environment.apiUrl}/admin/stats`);
  }
  static \u0275fac = function AdminService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AdminService, factory: _AdminService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/modules/admin/components/user-management/user-management.component.ts
var _c0 = (a0) => ["/public/profile", a0];
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.name;
var _forTrack2 = ($index, $item) => $item.text;
function UserManagementComponent_Conditional_92_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41)(1, "span", 48);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 49)(4, "button", 50);
    \u0275\u0275listener("click", function UserManagementComponent_Conditional_92_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.bulkAction("Relance"));
    });
    \u0275\u0275text(5, "\u{1F4E9} Envoyer une relance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 50);
    \u0275\u0275listener("click", function UserManagementComponent_Conditional_92_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.bulkAction("Formation"));
    });
    \u0275\u0275text(7, "\u{1F4DA} Assigner une formation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 50);
    \u0275\u0275listener("click", function UserManagementComponent_Conditional_92_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.bulkAction("Kit Onboarding"));
    });
    \u0275\u0275text(9, "\u{1F680} Kit d'onboarding");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 51);
    \u0275\u0275listener("click", function UserManagementComponent_Conditional_92_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.bulkAction("D\xE9sactiver"));
    });
    \u0275\u0275text(11, "\u{1F6AB} D\xE9sactiver");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.selectedUserIds().size, " utilisateur(s) s\xE9lectionn\xE9(s)");
  }
}
function UserManagementComponent_Conditional_93_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275element(1, "div", 52);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Chargement des collaborateurs...");
    \u0275\u0275elementEnd()();
  }
}
function UserManagementComponent_Conditional_94_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 50);
    \u0275\u0275listener("click", function UserManagementComponent_Conditional_94_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.loadUsers());
    });
    \u0275\u0275text(4, "R\xE9essayer");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.error());
  }
}
function UserManagementComponent_Conditional_95_For_28_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 80);
    \u0275\u0275element(1, "img", 81);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const user_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", user_r6.profilePictureUrl, \u0275\u0275sanitizeUrl);
  }
}
function UserManagementComponent_Conditional_95_For_28_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 82);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const user_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", (user_r6.firstName || "")[0], "", (user_r6.lastName || "")[0], " ");
  }
}
function UserManagementComponent_Conditional_95_For_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 59);
    \u0275\u0275listener("click", function UserManagementComponent_Conditional_95_For_28_Template_tr_click_0_listener() {
      const user_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openDrawer(user_r6));
    });
    \u0275\u0275elementStart(1, "td", 60);
    \u0275\u0275listener("click", function UserManagementComponent_Conditional_95_For_28_Template_td_click_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "input", 57);
    \u0275\u0275listener("change", function UserManagementComponent_Conditional_95_For_28_Template_input_change_2_listener() {
      const user_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleSelection(user_r6.id));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "td")(4, "div", 61);
    \u0275\u0275template(5, UserManagementComponent_Conditional_95_For_28_div_5_Template, 2, 1, "div", 62)(6, UserManagementComponent_Conditional_95_For_28_ng_template_6_Template, 2, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementStart(8, "div", 63)(9, "span", 64);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "a", 65);
    \u0275\u0275listener("click", function UserManagementComponent_Conditional_95_For_28_Template_a_click_11_listener($event) {
      \u0275\u0275restoreView(_r5);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(13, "td")(14, "span", 66);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td", 50);
    \u0275\u0275listener("click", function UserManagementComponent_Conditional_95_For_28_Template_td_click_16_listener($event) {
      \u0275\u0275restoreView(_r5);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(17, "select", 67);
    \u0275\u0275listener("change", function UserManagementComponent_Conditional_95_For_28_Template_select_change_17_listener($event) {
      const user_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.initiateRoleChange(user_r6.id, $event));
    });
    \u0275\u0275elementStart(18, "option", 36);
    \u0275\u0275text(19, "Utilisateur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "option", 37);
    \u0275\u0275text(21, "Admin");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "td")(23, "span", 68);
    \u0275\u0275element(24, "span", 69);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "td")(27, "div", 70)(28, "div", 71);
    \u0275\u0275element(29, "div", 72);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span", 73);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "td")(33, "span", 74);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "td")(36, "span", 75);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "td", 50);
    \u0275\u0275listener("click", function UserManagementComponent_Conditional_95_For_28_Template_td_click_38_listener($event) {
      \u0275\u0275restoreView(_r5);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(39, "div", 76)(40, "button", 77);
    \u0275\u0275listener("click", function UserManagementComponent_Conditional_95_For_28_Template_button_click_40_listener($event) {
      const user_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEditModal(user_r6, $event));
    });
    \u0275\u0275text(41, "\u270F\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "button", 78);
    \u0275\u0275listener("click", function UserManagementComponent_Conditional_95_For_28_Template_button_click_42_listener() {
      const user_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openDrawer(user_r6));
    });
    \u0275\u0275text(43, "\u{1F441}\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "button", 79);
    \u0275\u0275listener("click", function UserManagementComponent_Conditional_95_For_28_Template_button_click_44_listener($event) {
      const user_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.confirmDelete(user_r6, $event));
    });
    \u0275\u0275text(45, "\u{1F5D1}\uFE0F");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const user_r6 = ctx.$implicit;
    const noAvatar_r7 = \u0275\u0275reference(7);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("selected", ctx_r1.selectedUserIds().has(user_r6.id));
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx_r1.selectedUserIds().has(user_r6.id));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", user_r6.profilePictureUrl)("ngIfElse", noAvatar_r7);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", user_r6.firstName, " ", user_r6.lastName);
    \u0275\u0275advance();
    \u0275\u0275property("href", "mailto:" + user_r6.email, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(user_r6.email);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("empty", !user_r6.department);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(user_r6.department || "Non renseign\xE9");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("role-admin", user_r6.role === "ADMIN")("role-user", user_r6.role === "USER");
    \u0275\u0275property("value", user_r6.role);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngClass", (user_r6.statut == null ? null : user_r6.statut.toLowerCase()) || "inactif");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", user_r6.statut, " ");
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("width", ctx_r1.formatScore(user_r6.scoreMoyen));
    \u0275\u0275property("ngClass", (user_r6.scoreMoyen || 0) > 0.7 ? "high" : (user_r6.scoreMoyen || 0) > 0.4 ? "medium" : "low");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatScore(user_r6.scoreMoyen));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("danger", !user_r6.testsCount || user_r6.testsCount === 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(user_r6.testsCount || 0);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("danger", !user_r6.lastLogin);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.formatRelativeTime(user_r6.lastLogin));
  }
}
function UserManagementComponent_Conditional_95_ForEmpty_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 83)(2, "p");
    \u0275\u0275text(3, "Aucun utilisateur ne correspond \xE0 vos crit\xE8res.");
    \u0275\u0275elementEnd()()();
  }
}
function UserManagementComponent_Conditional_95_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 44)(1, "div", 53)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 54)(5, "table", 55)(6, "thead")(7, "tr")(8, "th", 56)(9, "input", 57);
    \u0275\u0275listener("change", function UserManagementComponent_Conditional_95_Template_input_change_9_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleAllSelection($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Utilisateur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "D\xE9partement");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "R\xF4le");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th");
    \u0275\u0275text(19, "Score Moyen");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th");
    \u0275\u0275text(21, "Tests");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "th");
    \u0275\u0275text(23, "Derni\xE8re Activit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "th");
    \u0275\u0275text(25, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "tbody");
    \u0275\u0275repeaterCreate(27, UserManagementComponent_Conditional_95_For_28_Template, 46, 29, "tr", 58, _forTrack0, false, UserManagementComponent_Conditional_95_ForEmpty_29_Template, 4, 0, "tr");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("Affichage de ", ctx_r1.filteredUsers().length, " sur ", ctx_r1.users().length, " utilisateurs");
    \u0275\u0275advance(6);
    \u0275\u0275property("checked", ctx_r1.isAllSelected());
    \u0275\u0275advance(18);
    \u0275\u0275repeater(ctx_r1.filteredUsers());
  }
}
function UserManagementComponent_Conditional_96_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 84);
    \u0275\u0275listener("click", function UserManagementComponent_Conditional_96_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDrawer());
    });
    \u0275\u0275elementEnd();
  }
}
function UserManagementComponent_Conditional_98_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 92)(1, "div", 96)(2, "div", 97)(3, "label");
    \u0275\u0275text(4, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p")(6, "a", 98);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 97)(9, "label");
    \u0275\u0275text(10, "D\xE9partement");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 97)(14, "label");
    \u0275\u0275text(15, "Inscrit le");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 97)(19, "label");
    \u0275\u0275text(20, "Derni\xE8re activit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "p");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 99)(24, "h4");
    \u0275\u0275text(25, "Liens Externes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 100)(27, "a", 101);
    \u0275\u0275text(28, "\u{1F310} Voir Profil");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "button", 102);
    \u0275\u0275text(30, "\u{1F517} LinkedIn");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "button", 102);
    \u0275\u0275text(32, "\u{1F419} GitHub");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "button", 102);
    \u0275\u0275text(34, "\u{1F4C4} CV");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(35, "div", 103)(36, "h4");
    \u0275\u0275text(37, "Note Administrateur (Priv\xE9e)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(38, "textarea", 104);
    \u0275\u0275elementStart(39, "button", 105);
    \u0275\u0275text(40, "Enregistrer la note");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const user_r10 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("href", "mailto:" + user_r10.email, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(user_r10.email);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(user_r10.department || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(user_r10.createdAt));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatRelativeTime(user_r10.lastLogin));
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(9, _c0, user_r10.id));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", true);
  }
}
function UserManagementComponent_Conditional_98_Conditional_24_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 112);
    \u0275\u0275text(1, "Aucun test pass\xE9.");
    \u0275\u0275elementEnd();
  }
}
function UserManagementComponent_Conditional_98_Conditional_24_Conditional_13_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "div")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 115);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const test_r12 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(test_r12.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(test_r12.date));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", test_r12.score, "%");
  }
}
function UserManagementComponent_Conditional_98_Conditional_24_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 113);
    \u0275\u0275repeaterCreate(1, UserManagementComponent_Conditional_98_Conditional_24_Conditional_13_For_2_Template, 8, 3, "li", null, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.mockTests);
  }
}
function UserManagementComponent_Conditional_98_Conditional_24_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 112);
    \u0275\u0275text(1, "Chargement des comp\xE9tences...");
    \u0275\u0275elementEnd();
  }
}
function UserManagementComponent_Conditional_98_Conditional_24_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 112);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.skillsError());
  }
}
function UserManagementComponent_Conditional_98_Conditional_24_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 112);
    \u0275\u0275text(1, "Aucune comp\xE9tence enregistr\xE9e.");
    \u0275\u0275elementEnd();
  }
}
function UserManagementComponent_Conditional_98_Conditional_24_Conditional_19_For_2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 118);
    \u0275\u0275listener("click", function UserManagementComponent_Conditional_98_Conditional_24_Conditional_19_For_2_Conditional_9_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r13);
      const skill_r14 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.validateSkill(skill_r14.id, $event));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const skill_r14 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("disabled", skill_r14.validee || ctx_r1.isSkillValidating(skill_r14.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", skill_r14.validee ? "Valid\xE9e" : ctx_r1.isSkillValidating(skill_r14.id) ? "Validation..." : "Valider", " ");
  }
}
function UserManagementComponent_Conditional_98_Conditional_24_Conditional_19_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "div")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 116)(7, "span", 110);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(9, UserManagementComponent_Conditional_98_Conditional_24_Conditional_19_For_2_Conditional_9_Template, 2, 2, "button", 117);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const skill_r14 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(skill_r14.nom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", skill_r14.type, " \xB7 Niveau ", skill_r14.niveau);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", skill_r14.validee ? "success" : "info");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", skill_r14.validee ? "Valid\xE9e" : "En attente", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isAdmin() ? 9 : -1);
  }
}
function UserManagementComponent_Conditional_98_Conditional_24_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 113);
    \u0275\u0275repeaterCreate(1, UserManagementComponent_Conditional_98_Conditional_24_Conditional_19_For_2_Template, 10, 6, "li", null, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.userSkills());
  }
}
function UserManagementComponent_Conditional_98_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 92)(1, "div", 106)(2, "div", 107)(3, "span", 108);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 109)(6, "h4");
    \u0275\u0275text(7, "Score Global");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 110);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "h4", 111);
    \u0275\u0275text(11, "Derniers Tests");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(12, UserManagementComponent_Conditional_98_Conditional_24_Conditional_12_Template, 2, 0, "div", 112)(13, UserManagementComponent_Conditional_98_Conditional_24_Conditional_13_Template, 3, 0, "ul", 113);
    \u0275\u0275elementStart(14, "h4", 111);
    \u0275\u0275text(15, "Comp\xE9tences");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(16, UserManagementComponent_Conditional_98_Conditional_24_Conditional_16_Template, 2, 0, "div", 112)(17, UserManagementComponent_Conditional_98_Conditional_24_Conditional_17_Template, 2, 1, "div", 112)(18, UserManagementComponent_Conditional_98_Conditional_24_Conditional_18_Template, 2, 0, "div", 112)(19, UserManagementComponent_Conditional_98_Conditional_24_Conditional_19_Template, 3, 0, "ul", 113);
    \u0275\u0275elementStart(20, "button", 114);
    \u0275\u0275listener("click", function UserManagementComponent_Conditional_98_Conditional_24_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.assignFormation());
    });
    \u0275\u0275text(21, "Inviter \xE0 passer un test");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const user_r10 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.formatScore(user_r10.scoreMoyen));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", user_r10.riskLevel === "\xC0 risque" ? "danger" : "success");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(user_r10.riskLevel || "Pr\xEAt");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(user_r10.testsCount === 0 ? 12 : 13);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.skillsLoading() ? 16 : ctx_r1.skillsError() ? 17 : ctx_r1.userSkills().length === 0 ? 18 : 19);
  }
}
function UserManagementComponent_Conditional_98_Conditional_25_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "div", 120)(2, "div", 121)(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 110);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 122);
    \u0275\u0275element(8, "div", 123);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const form_r16 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(form_r16.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", form_r16.status === "Termin\xE9e" ? "success" : "info");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(form_r16.status);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", form_r16.progress, "%");
  }
}
function UserManagementComponent_Conditional_98_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 92)(1, "div", 119)(2, "span")(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " Actives");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span")(7, "strong");
    \u0275\u0275text(8, "1");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, " Termin\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span")(11, "strong");
    \u0275\u0275text(12, "0");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, " En attente");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "ul", 113);
    \u0275\u0275repeaterCreate(15, UserManagementComponent_Conditional_98_Conditional_25_For_16_Template, 9, 5, "li", null, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 114);
    \u0275\u0275listener("click", function UserManagementComponent_Conditional_98_Conditional_25_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.assignFormation());
    });
    \u0275\u0275text(18, "Proposer une formation");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.mockFormations.length);
    \u0275\u0275advance(11);
    \u0275\u0275repeater(ctx_r1.mockFormations);
  }
}
function UserManagementComponent_Conditional_98_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 92)(1, "div", 124)(2, "span", 125);
    \u0275\u0275text(3, "\u2728");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h4");
    \u0275\u0275text(5, "Profil IA & Potentiel");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 126)(7, "strong");
    \u0275\u0275text(8, "Type de personnalit\xE9 : ENTJ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p");
    \u0275\u0275text(10, "Le Commandant - Leader audacieux, imaginatif et dot\xE9 d'une forte volont\xE9.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "h4", 111);
    \u0275\u0275text(12, "Correspondance de carri\xE8re");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "ul", 127)(14, "li")(15, "span");
    \u0275\u0275text(16, "Tech Lead");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "strong");
    \u0275\u0275text(18, "92%");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "li")(20, "span");
    \u0275\u0275text(21, "Senior Developer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "strong");
    \u0275\u0275text(23, "88%");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "li")(25, "span");
    \u0275\u0275text(26, "Engineering Manager");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "strong");
    \u0275\u0275text(28, "75%");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "button", 128);
    \u0275\u0275text(30, "\u{1F504} R\xE9g\xE9n\xE9rer la pr\xE9diction");
    \u0275\u0275elementEnd()();
  }
}
function UserManagementComponent_Conditional_98_Conditional_27_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 130)(1, "span", 131);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 132)(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "small");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const act_r17 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(act_r17.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(act_r17.text);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(act_r17.date);
  }
}
function UserManagementComponent_Conditional_98_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 92)(1, "div", 129);
    \u0275\u0275repeaterCreate(2, UserManagementComponent_Conditional_98_Conditional_27_For_3_Template, 8, 3, "div", 130, _forTrack2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.mockActivities);
  }
}
function UserManagementComponent_Conditional_98_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 85)(1, "div", 86)(2, "div", 87);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "h3");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 88);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "button", 89);
    \u0275\u0275listener("click", function UserManagementComponent_Conditional_98_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDrawer());
    });
    \u0275\u0275text(10, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 90)(12, "button", 50);
    \u0275\u0275listener("click", function UserManagementComponent_Conditional_98_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setDrawerTab("profil"));
    });
    \u0275\u0275text(13, "Profil");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 50);
    \u0275\u0275listener("click", function UserManagementComponent_Conditional_98_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setDrawerTab("resultats"));
    });
    \u0275\u0275text(15, "R\xE9sultats");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 50);
    \u0275\u0275listener("click", function UserManagementComponent_Conditional_98_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setDrawerTab("formations"));
    });
    \u0275\u0275text(17, "Formations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 50);
    \u0275\u0275listener("click", function UserManagementComponent_Conditional_98_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setDrawerTab("prediction"));
    });
    \u0275\u0275text(19, "Pr\xE9diction IA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 50);
    \u0275\u0275listener("click", function UserManagementComponent_Conditional_98_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setDrawerTab("activite"));
    });
    \u0275\u0275text(21, "Activit\xE9");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 91);
    \u0275\u0275conditionalCreate(23, UserManagementComponent_Conditional_98_Conditional_23_Template, 41, 11, "div", 92);
    \u0275\u0275conditionalCreate(24, UserManagementComponent_Conditional_98_Conditional_24_Template, 22, 5, "div", 92);
    \u0275\u0275conditionalCreate(25, UserManagementComponent_Conditional_98_Conditional_25_Template, 19, 1, "div", 92);
    \u0275\u0275conditionalCreate(26, UserManagementComponent_Conditional_98_Conditional_26_Template, 31, 0, "div", 92);
    \u0275\u0275conditionalCreate(27, UserManagementComponent_Conditional_98_Conditional_27_Template, 4, 0, "div", 92);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 93)(29, "button", 94);
    \u0275\u0275listener("click", function UserManagementComponent_Conditional_98_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sendReminder());
    });
    \u0275\u0275text(30, "\u2709\uFE0F Message");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "button", 94);
    \u0275\u0275listener("click", function UserManagementComponent_Conditional_98_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.assignFormation());
    });
    \u0275\u0275text(32, "\u{1F4DA} Formation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "button", 95);
    \u0275\u0275listener("click", function UserManagementComponent_Conditional_98_Template_button_click_33_listener() {
      const user_r10 = \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmDelete(user_r10));
    });
    \u0275\u0275text(34, "\u{1F6AB} D\xE9sactiver");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const user_r10 = ctx;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", (user_r10.firstName || "")[0], "", (user_r10.lastName || "")[0], " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", user_r10.firstName, " ", user_r10.lastName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", user_r10.position || "Poste non renseign\xE9", " \u2022 ", user_r10.department || "D\xE9partement non renseign\xE9");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("active", ctx_r1.activeDrawerTab() === "profil");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.activeDrawerTab() === "resultats");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.activeDrawerTab() === "formations");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.activeDrawerTab() === "prediction");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.activeDrawerTab() === "activite");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.activeDrawerTab() === "profil" ? 23 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.activeDrawerTab() === "resultats" ? 24 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.activeDrawerTab() === "formations" ? 25 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.activeDrawerTab() === "prediction" ? 26 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.activeDrawerTab() === "activite" ? 27 : -1);
  }
}
function UserManagementComponent_Conditional_99_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 133);
    \u0275\u0275listener("click", function UserManagementComponent_Conditional_99_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelRoleChange());
    });
    \u0275\u0275elementStart(1, "div", 134);
    \u0275\u0275listener("click", function UserManagementComponent_Conditional_99_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r18);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 135);
    \u0275\u0275text(3, "\u26A0\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h3");
    \u0275\u0275text(5, "Changement de R\xF4le");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "\xCAtes-vous s\xFBr de vouloir accorder le r\xF4le ");
    \u0275\u0275elementStart(8, "strong");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, " ?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 136)(12, "button", 137);
    \u0275\u0275listener("click", function UserManagementComponent_Conditional_99_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelRoleChange());
    });
    \u0275\u0275text(13, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 138);
    \u0275\u0275listener("click", function UserManagementComponent_Conditional_99_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmRoleChange());
    });
    \u0275\u0275text(15, "Confirmer");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate((tmp_1_0 = ctx_r1.pendingRoleChange()) == null ? null : tmp_1_0.newRole);
  }
}
function UserManagementComponent_Conditional_100_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 133);
    \u0275\u0275listener("click", function UserManagementComponent_Conditional_100_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelDelete());
    });
    \u0275\u0275elementStart(1, "div", 134);
    \u0275\u0275listener("click", function UserManagementComponent_Conditional_100_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r19);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 139);
    \u0275\u0275text(3, "\u{1F5D1}\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h3");
    \u0275\u0275text(5, "D\xE9sactiver le compte");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "Voulez-vous vraiment d\xE9sactiver le compte de ");
    \u0275\u0275elementStart(8, "strong");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, " ? Cette action restreindra son acc\xE8s.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 136)(12, "button", 137);
    \u0275\u0275listener("click", function UserManagementComponent_Conditional_100_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelDelete());
    });
    \u0275\u0275text(13, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 140);
    \u0275\u0275listener("click", function UserManagementComponent_Conditional_100_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.deleteUser());
    });
    \u0275\u0275text(15, "D\xE9sactiver");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate2("", (tmp_1_0 = ctx_r1.selectedUserForDelete()) == null ? null : tmp_1_0.firstName, " ", (tmp_1_0 = ctx_r1.selectedUserForDelete()) == null ? null : tmp_1_0.lastName);
  }
}
function UserManagementComponent_Conditional_101_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 146)(1, "label");
    \u0275\u0275text(2, "Mot de passe*");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 158);
    \u0275\u0275twoWayListener("ngModelChange", function UserManagementComponent_Conditional_101_Conditional_22_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.userForm().password, $event) || (ctx_r1.userForm().password = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.userForm().password);
  }
}
function UserManagementComponent_Conditional_101_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 133);
    \u0275\u0275listener("click", function UserManagementComponent_Conditional_101_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeUserModal());
    });
    \u0275\u0275elementStart(1, "div", 141);
    \u0275\u0275listener("click", function UserManagementComponent_Conditional_101_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r20);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 142)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 89);
    \u0275\u0275listener("click", function UserManagementComponent_Conditional_101_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeUserModal());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 143)(8, "form", 144)(9, "div", 145)(10, "div", 146)(11, "label");
    \u0275\u0275text(12, "Pr\xE9nom*");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 147);
    \u0275\u0275twoWayListener("ngModelChange", function UserManagementComponent_Conditional_101_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.userForm().firstName, $event) || (ctx_r1.userForm().firstName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 146)(15, "label");
    \u0275\u0275text(16, "Nom*");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 148);
    \u0275\u0275twoWayListener("ngModelChange", function UserManagementComponent_Conditional_101_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.userForm().lastName, $event) || (ctx_r1.userForm().lastName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 146)(19, "label");
    \u0275\u0275text(20, "Email*");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "input", 149);
    \u0275\u0275twoWayListener("ngModelChange", function UserManagementComponent_Conditional_101_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.userForm().email, $event) || (ctx_r1.userForm().email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(22, UserManagementComponent_Conditional_101_Conditional_22_Template, 4, 1, "div", 146);
    \u0275\u0275elementStart(23, "div", 145)(24, "div", 146)(25, "label");
    \u0275\u0275text(26, "D\xE9partement");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "input", 150);
    \u0275\u0275twoWayListener("ngModelChange", function UserManagementComponent_Conditional_101_Template_input_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.userForm().department, $event) || (ctx_r1.userForm().department = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 146)(29, "label");
    \u0275\u0275text(30, "Poste");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "input", 151);
    \u0275\u0275twoWayListener("ngModelChange", function UserManagementComponent_Conditional_101_Template_input_ngModelChange_31_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.userForm().position, $event) || (ctx_r1.userForm().position = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "div", 145)(33, "div", 146)(34, "label");
    \u0275\u0275text(35, "R\xF4le");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "select", 152);
    \u0275\u0275twoWayListener("ngModelChange", function UserManagementComponent_Conditional_101_Template_select_ngModelChange_36_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.userForm().role, $event) || (ctx_r1.userForm().role = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(37, "option", 36);
    \u0275\u0275text(38, "Utilisateur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "option", 37);
    \u0275\u0275text(40, "Administrateur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "option", 153);
    \u0275\u0275text(42, "Recruteur");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(43, "div", 146)(44, "label");
    \u0275\u0275text(45, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "select", 154);
    \u0275\u0275twoWayListener("ngModelChange", function UserManagementComponent_Conditional_101_Template_select_ngModelChange_46_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.userForm().isActive, $event) || (ctx_r1.userForm().isActive = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(47, "option", 155);
    \u0275\u0275text(48, "Actif");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "option", 155);
    \u0275\u0275text(50, "Inactif");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(51, "div", 156)(52, "button", 137);
    \u0275\u0275listener("click", function UserManagementComponent_Conditional_101_Template_button_click_52_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeUserModal());
    });
    \u0275\u0275text(53, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "button", 157);
    \u0275\u0275listener("click", function UserManagementComponent_Conditional_101_Template_button_click_54_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveUser());
    });
    \u0275\u0275text(55);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.isEditing() ? "Modifier l'utilisateur" : "Ajouter un utilisateur");
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.userForm().firstName);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.userForm().lastName);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.userForm().email);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.isEditing() ? 22 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.userForm().department);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.userForm().position);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.userForm().role);
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.userForm().isActive);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngValue", false);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r1.submitting());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.submitting() ? "Enregistrement..." : ctx_r1.isEditing() ? "Mettre \xE0 jour" : "Cr\xE9er l'utilisateur", " ");
  }
}
var UserManagementComponent = class _UserManagementComponent {
  adminService = inject(AdminService);
  notificationService = inject(NotificationService);
  skillsService = inject(SkillsService);
  authService = inject(AuthService);
  users = signal([], ...ngDevMode ? [{ debugName: "users" }] : []);
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  error = signal(null, ...ngDevMode ? [{ debugName: "error" }] : []);
  userSkills = signal([], ...ngDevMode ? [{ debugName: "userSkills" }] : []);
  skillsLoading = signal(false, ...ngDevMode ? [{ debugName: "skillsLoading" }] : []);
  skillsError = signal(null, ...ngDevMode ? [{ debugName: "skillsError" }] : []);
  validatingSkillIds = signal(/* @__PURE__ */ new Set(), ...ngDevMode ? [{ debugName: "validatingSkillIds" }] : []);
  // Modals and Drawer state
  showRoleConfirm = signal(false, ...ngDevMode ? [{ debugName: "showRoleConfirm" }] : []);
  pendingRoleChange = signal(null, ...ngDevMode ? [{ debugName: "pendingRoleChange" }] : []);
  showDeleteConfirm = signal(false, ...ngDevMode ? [{ debugName: "showDeleteConfirm" }] : []);
  selectedUserForDelete = signal(null, ...ngDevMode ? [{ debugName: "selectedUserForDelete" }] : []);
  isDrawerOpen = signal(false, ...ngDevMode ? [{ debugName: "isDrawerOpen" }] : []);
  selectedUserForDrawer = signal(null, ...ngDevMode ? [{ debugName: "selectedUserForDrawer" }] : []);
  activeDrawerTab = signal("profil", ...ngDevMode ? [{ debugName: "activeDrawerTab" }] : []);
  // Filters & Search
  searchTerm = signal("", ...ngDevMode ? [{ debugName: "searchTerm" }] : []);
  filterStatut = signal("", ...ngDevMode ? [{ debugName: "filterStatut" }] : []);
  filterRole = signal("", ...ngDevMode ? [{ debugName: "filterRole" }] : []);
  filterDepartement = signal("", ...ngDevMode ? [{ debugName: "filterDepartement" }] : []);
  filterRisque = signal("", ...ngDevMode ? [{ debugName: "filterRisque" }] : []);
  filterTest = signal("", ...ngDevMode ? [{ debugName: "filterTest" }] : []);
  // Bulk selection
  selectedUserIds = signal(/* @__PURE__ */ new Set(), ...ngDevMode ? [{ debugName: "selectedUserIds" }] : []);
  // Create/Edit Modal state
  showUserModal = signal(false, ...ngDevMode ? [{ debugName: "showUserModal" }] : []);
  isEditing = signal(false, ...ngDevMode ? [{ debugName: "isEditing" }] : []);
  userForm = signal({
    username: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    department: "",
    position: "",
    role: Role.USER,
    isActive: true
  }, ...ngDevMode ? [{ debugName: "userForm" }] : []);
  submitting = signal(false, ...ngDevMode ? [{ debugName: "submitting" }] : []);
  // Stats computed from users list
  stats = computed(() => {
    const all = this.users();
    return {
      total: all.length,
      actifs: all.filter((u) => u.statut === "Actif" || u.isActive).length,
      onboarding: all.filter((u) => u.statut === "Onboarding").length,
      aRisque: all.filter((u) => u.riskLevel === "\xC0 risque").length,
      sansTest: all.filter((u) => !u.testsCount || u.testsCount === 0).length,
      sansDepartement: all.filter((u) => !u.department).length
    };
  }, ...ngDevMode ? [{ debugName: "stats" }] : []);
  // Filtered users list
  filteredUsers = computed(() => {
    let filtered = this.users();
    const term = this.searchTerm().toLowerCase();
    if (term) {
      filtered = filtered.filter((u) => u.firstName?.toLowerCase().includes(term) || u.lastName?.toLowerCase().includes(term) || u.email?.toLowerCase().includes(term) || u.department?.toLowerCase().includes(term) || u.position?.toLowerCase().includes(term));
    }
    if (this.filterStatut()) {
      filtered = filtered.filter((u) => u.statut === this.filterStatut() || this.filterStatut() === "Actif" && u.isActive);
    }
    if (this.filterRole()) {
      filtered = filtered.filter((u) => u.role === this.filterRole());
    }
    if (this.filterDepartement()) {
      filtered = filtered.filter((u) => u.department === this.filterDepartement());
    }
    if (this.filterRisque() === "a-risque") {
      filtered = filtered.filter((u) => u.riskLevel === "\xC0 risque");
    }
    if (this.filterTest() === "sans-test") {
      filtered = filtered.filter((u) => !u.testsCount || u.testsCount === 0);
    }
    if (this.filterTest() === "sans-formation") {
      filtered = filtered.filter((u) => !u.formationsCount || u.formationsCount === 0);
    }
    return filtered;
  }, ...ngDevMode ? [{ debugName: "filteredUsers" }] : []);
  Role = Role;
  // Mock data for drawer
  mockTests = [
    { name: "Soft Skills - Leadership", date: "2023-10-15", score: 85 },
    { name: "Tech - Frontend Angular", date: "2023-11-02", score: 92 }
  ];
  mockFormations = [
    { name: "Architecture Angular Avanc\xE9e", status: "En cours", progress: 45 },
    { name: "Communication Bienveillante", status: "Termin\xE9e", progress: 100 }
  ];
  mockActivities = [
    { icon: "\u{1F4BB}", text: "Connexion depuis Paris", date: "Il y a 2 heures" },
    { icon: "\u{1F4DD}", text: "A compl\xE9t\xE9 le test Tech", date: "Il y a 2 jours" },
    { icon: "\u{1F393}", text: "A commenc\xE9 la formation Angular", date: "Il y a 1 semaine" }
  ];
  ngOnInit() {
    this.loadUsers();
  }
  isAdmin() {
    return this.authService.isAdmin();
  }
  loadUsers() {
    this.loading.set(true);
    this.error.set(null);
    this.adminService.getAllUsers().subscribe({
      next: (data) => {
        const enhancedData = data.map((u) => __spreadProps(__spreadValues({}, u), {
          statut: u.statut || (u.isActive ? "Actif" : "Onboarding"),
          scoreMoyen: u.scoreMoyen !== void 0 ? u.scoreMoyen : Math.random() * 0.4 + 0.6,
          // fake score 60-100%
          testsCount: u.testsCount !== void 0 ? u.testsCount : Math.floor(Math.random() * 5),
          formationsCount: u.formationsCount !== void 0 ? u.formationsCount : Math.floor(Math.random() * 3),
          lastLogin: u.lastLogin || new Date(Date.now() - Math.random() * 1e10).toISOString(),
          riskLevel: u.riskLevel || (Math.random() > 0.8 ? "\xC0 risque" : "Pr\xEAt")
        }));
        this.users.set(enhancedData);
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set("Erreur lors du chargement des utilisateurs");
        this.loading.set(false);
        console.error("Error loading users:", err);
      }
    });
  }
  loadUserSkills(userId) {
    this.skillsLoading.set(true);
    this.skillsError.set(null);
    this.skillsService.getUserSkills(userId).pipe(finalize(() => this.skillsLoading.set(false))).subscribe({
      next: (skills) => this.userSkills.set(skills),
      error: () => {
        this.userSkills.set([]);
        this.skillsError.set("Erreur lors du chargement des comp\xE9tences");
      }
    });
  }
  validateSkill(skillId, event) {
    if (event)
      event.stopPropagation();
    if (!this.isAdmin())
      return;
    this.setSkillValidating(skillId, true);
    this.skillsService.validateSkill(skillId).pipe(finalize(() => this.setSkillValidating(skillId, false))).subscribe({
      next: (updated) => {
        this.userSkills.update((list) => list.map((s) => s.id === updated.id ? updated : s));
        this.notificationService.success("Comp\xE9tence valid\xE9e.");
      },
      error: () => {
        this.notificationService.error("Erreur lors de la validation.");
      }
    });
  }
  isSkillValidating(skillId) {
    return this.validatingSkillIds().has(skillId);
  }
  setSkillValidating(skillId, validating) {
    const next = new Set(this.validatingSkillIds());
    if (validating) {
      next.add(skillId);
    } else {
      next.delete(skillId);
    }
    this.validatingSkillIds.set(next);
  }
  // Formatting helpers
  formatScore(score) {
    if (score === void 0)
      return "0%";
    const percentage = score <= 1 ? score * 100 : score;
    return `${Math.round(percentage)}%`;
  }
  formatRelativeTime(dateString) {
    if (!dateString)
      return "Jamais";
    const date = new Date(dateString);
    const diff = Math.floor(((/* @__PURE__ */ new Date()).getTime() - date.getTime()) / (1e3 * 60 * 60 * 24));
    if (diff === 0)
      return "Aujourd'hui";
    if (diff === 1)
      return "Hier";
    if (diff < 30)
      return `Il y a ${diff} jours`;
    if (diff < 365)
      return `Il y a ${Math.floor(diff / 30)} mois`;
    return `Il y a ${Math.floor(diff / 365)} ans`;
  }
  formatDate(date) {
    if (!date)
      return "\u2014";
    return new Date(date).toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "short",
      day: "numeric"
    });
  }
  // Role Management
  initiateRoleChange(userId, event) {
    const newRole = event.target.value;
    const user = this.users().find((u) => u.id === userId);
    if (!user || user.role === newRole)
      return;
    this.pendingRoleChange.set({ userId, newRole });
    this.showRoleConfirm.set(true);
    event.target.value = user.role;
  }
  confirmRoleChange() {
    const pending = this.pendingRoleChange();
    if (!pending)
      return;
    this.adminService.updateUserRole(pending.userId, pending.newRole).subscribe({
      next: (updatedUser) => {
        const users = this.users();
        const index = users.findIndex((u) => u.id === pending.userId);
        if (index !== -1) {
          users[index] = __spreadProps(__spreadValues({}, users[index]), { role: pending.newRole });
          this.users.set([...users]);
        }
        this.notificationService.success("R\xF4le mis \xE0 jour avec succ\xE8s.");
        this.cancelRoleChange();
      },
      error: (err) => {
        console.error("Error updating user role:", err);
        this.notificationService.error("Erreur lors de la mise \xE0 jour du r\xF4le.");
        this.cancelRoleChange();
      }
    });
  }
  cancelRoleChange() {
    this.pendingRoleChange.set(null);
    this.showRoleConfirm.set(false);
  }
  // Create / Edit Methods
  openAddModal() {
    this.isEditing.set(false);
    this.userForm.set({
      username: "",
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      department: "",
      position: "",
      role: Role.USER,
      isActive: true
    });
    this.showUserModal.set(true);
  }
  openEditModal(user, event) {
    if (event)
      event.stopPropagation();
    this.isEditing.set(true);
    this.selectedUserForDelete.set(user);
    this.userForm.set({
      username: user.username || "",
      email: user.email || "",
      password: "",
      // Leave empty for edit
      firstName: user.firstName || "",
      lastName: user.lastName || "",
      department: user.department || "",
      position: user.position || "",
      role: user.role || "USER",
      isActive: user.isActive ?? true
    });
    this.showUserModal.set(true);
  }
  closeUserModal() {
    this.showUserModal.set(false);
  }
  saveUser() {
    const form = this.userForm();
    if (!form.email || !form.firstName || !form.lastName) {
      this.notificationService.error("Veuillez remplir tous les champs obligatoires.");
      return;
    }
    this.submitting.set(true);
    if (this.isEditing()) {
      const userId = this.selectedUserForDelete()?.id;
      if (!userId)
        return;
      const updateData = __spreadValues({}, form);
      if (!updateData.password)
        delete updateData.password;
      this.adminService.updateUser(userId, updateData).subscribe({
        next: (updatedUser) => {
          this.users.update((all) => all.map((u) => u.id === userId ? __spreadValues(__spreadValues({}, u), updatedUser) : u));
          this.notificationService.success("Utilisateur mis \xE0 jour.");
          this.closeUserModal();
          this.submitting.set(false);
        },
        error: (err) => {
          this.notificationService.error("Erreur lors de la mise \xE0 jour.");
          this.submitting.set(false);
        }
      });
    } else {
      if (!form.password) {
        this.notificationService.error("Le mot de passe est requis pour un nouvel utilisateur.");
        this.submitting.set(false);
        return;
      }
      if (!form.username) {
        form.username = form.email.split("@")[0] + Math.floor(Math.random() * 1e3);
      }
      this.adminService.createUser(form).subscribe({
        next: (newUser) => {
          this.users.update((all) => [newUser, ...all]);
          this.notificationService.success("Utilisateur cr\xE9\xE9 avec succ\xE8s.");
          this.closeUserModal();
          this.submitting.set(false);
        },
        error: (err) => {
          this.notificationService.error("Erreur lors de la cr\xE9ation.");
          this.submitting.set(false);
        }
      });
    }
  }
  // Delete Management
  confirmDelete(user, event) {
    if (event)
      event.stopPropagation();
    this.selectedUserForDelete.set(user);
    this.showDeleteConfirm.set(true);
  }
  cancelDelete() {
    this.selectedUserForDelete.set(null);
    this.showDeleteConfirm.set(false);
  }
  deleteUser() {
    const user = this.selectedUserForDelete();
    if (!user)
      return;
    this.adminService.deleteUser(user.id).subscribe({
      next: () => {
        const users = this.users().filter((u) => u.id !== user.id);
        this.users.set(users);
        this.cancelDelete();
        this.notificationService.success("Utilisateur supprim\xE9 avec succ\xE8s.");
      },
      error: (err) => {
        console.error("Error deleting user:", err);
        this.notificationService.error("Erreur lors de la suppression de l'utilisateur.");
        this.cancelDelete();
      }
    });
  }
  // Drawer Management
  openDrawer(user) {
    this.selectedUserForDrawer.set(user);
    this.activeDrawerTab.set("profil");
    this.isDrawerOpen.set(true);
    this.loadUserSkills(user.id);
    document.body.style.overflow = "hidden";
  }
  closeDrawer() {
    this.isDrawerOpen.set(false);
    setTimeout(() => {
      this.selectedUserForDrawer.set(null);
    }, 300);
    this.userSkills.set([]);
    this.skillsError.set(null);
    document.body.style.overflow = "";
  }
  setDrawerTab(tab) {
    this.activeDrawerTab.set(tab);
  }
  // Bulk Actions
  toggleAllSelection(event) {
    const isChecked = event.target.checked;
    if (isChecked) {
      const allIds = this.filteredUsers().map((u) => u.id);
      this.selectedUserIds.set(new Set(allIds));
    } else {
      this.selectedUserIds.set(/* @__PURE__ */ new Set());
    }
  }
  toggleSelection(userId) {
    const current = new Set(this.selectedUserIds());
    if (current.has(userId)) {
      current.delete(userId);
    } else {
      current.add(userId);
    }
    this.selectedUserIds.set(current);
  }
  isAllSelected() {
    return this.filteredUsers().length > 0 && this.selectedUserIds().size === this.filteredUsers().length;
  }
  exportData() {
    this.notificationService.success("Export en cours de g\xE9n\xE9ration...");
  }
  bulkAction(action) {
    const count = this.selectedUserIds().size;
    this.notificationService.success(`Action "${action}" ex\xE9cut\xE9e sur ${count} utilisateurs.`);
    this.selectedUserIds.set(/* @__PURE__ */ new Set());
  }
  // Filters from Stats Bar
  filterFromStats(type) {
    this.filterStatut.set("");
    this.filterRisque.set("");
    this.filterTest.set("");
    this.filterDepartement.set("");
    switch (type) {
      case "actifs":
        this.filterStatut.set("Actif");
        break;
      case "onboarding":
        this.filterStatut.set("Onboarding");
        break;
      case "arisque":
        this.filterRisque.set("a-risque");
        break;
      case "sanstest":
        this.filterTest.set("sans-test");
        break;
      case "sansdept":
        this.filterDepartement.set("\u2014");
        break;
    }
  }
  // Quick Action Mocks
  sendReminder() {
    this.notificationService.success("Relance envoy\xE9e avec succ\xE8s.");
  }
  assignFormation() {
    this.notificationService.success("Formation assign\xE9e avec succ\xE8s.");
  }
  static \u0275fac = function UserManagementComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserManagementComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserManagementComponent, selectors: [["app-user-management"]], decls: 102, vars: 37, consts: [["noAvatar", ""], [1, "user-management"], [1, "page-header"], [1, "header-left"], [1, "header-icon"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"], ["cx", "9", "cy", "7", "r", "4"], ["d", "M23 21v-2a4 4 0 0 0-3-3.87"], ["d", "M16 3.13a4 4 0 0 1 0 7.75"], [1, "header-subtitle"], [1, "header-actions"], [1, "btn-primary", 3, "click"], [1, "btn-secondary", 3, "click"], [1, "btn-ghost", 3, "click", "disabled"], [1, "stats-bar"], [1, "stat-card", 3, "click"], [1, "stat-value"], [1, "stat-label"], [1, "stat-card", "stat-success", 3, "click"], [1, "stat-card", "stat-info", 3, "click"], [1, "stat-card", "stat-danger", 3, "click"], [1, "stat-card", "stat-warning", 3, "click"], [1, "stat-card", "stat-neutral", 3, "click"], [1, "filters-container"], [1, "search-box"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", "width", "18", "height", "18"], ["cx", "11", "cy", "11", "r", "8"], ["x1", "21", "y1", "21", "x2", "16.65", "y2", "16.65"], ["type", "text", "placeholder", "Rechercher par nom, email, poste...", 3, "ngModelChange", "ngModel"], [1, "filter-dropdowns"], [3, "ngModelChange", "ngModel"], ["value", ""], ["value", "Actif"], ["value", "Onboarding"], ["value", "Inactif"], ["value", "USER"], ["value", "ADMIN"], ["value", "a-risque"], ["value", "sans-test"], ["value", "sans-formation"], [1, "bulk-actions-bar"], [1, "loading-card"], [1, "error-banner"], [1, "table-card"], [1, "drawer-backdrop"], [1, "side-drawer"], [1, "modal-overlay"], [1, "bulk-count"], [1, "bulk-buttons"], [3, "click"], [1, "text-danger", 3, "click"], [1, "loader"], [1, "table-header-info"], [1, "table-wrapper"], [1, "users-table"], [1, "checkbox-cell"], ["type", "checkbox", 3, "change", "checked"], [1, "user-row", 3, "selected"], [1, "user-row", 3, "click"], [1, "checkbox-cell", 3, "click"], [1, "user-cell"], ["class", "user-avatar", 4, "ngIf", "ngIfElse"], [1, "user-info"], [1, "user-name"], [1, "user-email", 3, "click", "href"], [1, "department"], [1, "role-badge-select", 3, "change", "value"], [1, "status-badge", 3, "ngClass"], [1, "status-dot"], [1, "score-cell"], [1, "score-bar-bg"], [1, "score-bar-fill", 3, "ngClass"], [1, "score-text"], [1, "count-badge"], [1, "activity-text"], [1, "actions"], ["title", "Modifier", 1, "btn-action", 3, "click"], ["title", "Voir le profil", 1, "btn-action", 3, "click"], ["title", "Supprimer", 1, "btn-action", "text-danger", 3, "click"], [1, "user-avatar"], ["alt", "Avatar", 3, "src"], [1, "user-avatar-initials"], ["colspan", "9", 1, "empty-state"], [1, "drawer-backdrop", 3, "click"], [1, "drawer-header"], [1, "drawer-user-main"], [1, "drawer-avatar"], [1, "drawer-subtitle"], [1, "btn-close", 3, "click"], [1, "drawer-tabs"], [1, "drawer-content"], [1, "tab-pane"], [1, "drawer-footer"], [1, "btn-outline", 3, "click"], [1, "btn-danger", 3, "click"], [1, "info-grid"], [1, "info-group"], [3, "href"], [1, "profile-links", "mt-4"], [1, "link-buttons", 2, "display", "flex", "gap", "8px"], ["target", "_blank", 1, "btn-outline", 2, "text-decoration", "none", "padding", "8px 12px", "border-radius", "4px", 3, "routerLink"], [1, "btn-outline", 2, "opacity", "0.5", "cursor", "not-allowed", 3, "disabled"], [1, "admin-note", "mt-4"], ["placeholder", "Ajouter une note interne pour cet employ\xE9..."], [1, "btn-small", "mt-2"], [1, "score-overview"], [1, "score-ring"], [1, "score-ring-value"], [1, "score-details"], [1, "badge", 3, "ngClass"], [1, "mt-4"], [1, "empty-box"], [1, "list-cards"], [1, "btn-primary", "full-width", "mt-3", 3, "click"], [1, "score-badge"], [1, "skill-actions"], [1, "btn-small", 3, "disabled"], [1, "btn-small", 3, "click", "disabled"], [1, "stats-row", "mb-3"], [1, "full-width"], [1, "d-flex", "justify-content-between"], [1, "progress-bar-bg", "mt-2"], [1, "progress-bar-fill"], [1, "ai-header"], [1, "ai-icon"], [1, "mbti-card"], [1, "match-list"], [1, "btn-secondary", "full-width", "mt-4"], [1, "timeline"], [1, "timeline-item"], [1, "timeline-icon"], [1, "timeline-content"], [1, "modal-overlay", 3, "click"], [1, "modal-content", 3, "click"], [1, "modal-icon", "warning"], [1, "modal-actions"], [1, "btn-cancel", 3, "click"], [1, "btn-confirm", 3, "click"], [1, "modal-icon", "danger"], [1, "btn-danger-confirm", 3, "click"], [1, "modal-content", "user-modal", 3, "click"], [1, "modal-header"], [1, "modal-body"], [1, "user-form"], [1, "form-row"], [1, "form-group"], ["type", "text", "name", "firstName", "placeholder", "Jean", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "lastName", "placeholder", "Dupont", 3, "ngModelChange", "ngModel"], ["type", "email", "name", "email", "placeholder", "jean.dupont@entreprise.com", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "department", "placeholder", "IT, RH, Marketing...", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "position", "placeholder", "D\xE9veloppeur Senior...", 3, "ngModelChange", "ngModel"], ["name", "role", 3, "ngModelChange", "ngModel"], ["value", "RECRUITER"], ["name", "isActive", 3, "ngModelChange", "ngModel"], [3, "ngValue"], [1, "modal-footer"], [1, "btn-confirm", 3, "click", "disabled"], ["type", "password", "name", "password", "placeholder", "********", 3, "ngModelChange", "ngModel"]], template: function UserManagementComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(4, "svg", 5);
      \u0275\u0275element(5, "path", 6)(6, "circle", 7)(7, "path", 8)(8, "path", 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(9, "div")(10, "h2");
      \u0275\u0275text(11, "Gestion des Utilisateurs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "p", 10);
      \u0275\u0275text(13, "G\xE9rez les comptes, r\xF4les, et performances de vos collaborateurs");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(14, "div", 11)(15, "button", 12);
      \u0275\u0275listener("click", function UserManagementComponent_Template_button_click_15_listener() {
        return ctx.openAddModal();
      });
      \u0275\u0275elementStart(16, "span");
      \u0275\u0275text(17, "\u2795");
      \u0275\u0275elementEnd();
      \u0275\u0275text(18, " Nouvel Utilisateur ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "button", 13);
      \u0275\u0275listener("click", function UserManagementComponent_Template_button_click_19_listener() {
        return ctx.exportData();
      });
      \u0275\u0275elementStart(20, "span");
      \u0275\u0275text(21, "\u{1F4E4}");
      \u0275\u0275elementEnd();
      \u0275\u0275text(22, " Exporter ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "button", 14);
      \u0275\u0275listener("click", function UserManagementComponent_Template_button_click_23_listener() {
        return ctx.loadUsers();
      });
      \u0275\u0275elementStart(24, "span");
      \u0275\u0275text(25, "\u{1F504}");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(26, "div", 15)(27, "div", 16);
      \u0275\u0275listener("click", function UserManagementComponent_Template_div_click_27_listener() {
        return ctx.filterFromStats("total");
      });
      \u0275\u0275elementStart(28, "div", 17);
      \u0275\u0275text(29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div", 18);
      \u0275\u0275text(31, "Total");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "div", 19);
      \u0275\u0275listener("click", function UserManagementComponent_Template_div_click_32_listener() {
        return ctx.filterFromStats("actifs");
      });
      \u0275\u0275elementStart(33, "div", 17);
      \u0275\u0275text(34);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "div", 18);
      \u0275\u0275text(36, "Actifs");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "div", 20);
      \u0275\u0275listener("click", function UserManagementComponent_Template_div_click_37_listener() {
        return ctx.filterFromStats("onboarding");
      });
      \u0275\u0275elementStart(38, "div", 17);
      \u0275\u0275text(39);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "div", 18);
      \u0275\u0275text(41, "Onboarding");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "div", 21);
      \u0275\u0275listener("click", function UserManagementComponent_Template_div_click_42_listener() {
        return ctx.filterFromStats("arisque");
      });
      \u0275\u0275elementStart(43, "div", 17);
      \u0275\u0275text(44);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "div", 18);
      \u0275\u0275text(46, "\xC0 risque");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(47, "div", 22);
      \u0275\u0275listener("click", function UserManagementComponent_Template_div_click_47_listener() {
        return ctx.filterFromStats("sanstest");
      });
      \u0275\u0275elementStart(48, "div", 17);
      \u0275\u0275text(49);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "div", 18);
      \u0275\u0275text(51, "Sans test");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(52, "div", 23);
      \u0275\u0275listener("click", function UserManagementComponent_Template_div_click_52_listener() {
        return ctx.filterFromStats("sansdept");
      });
      \u0275\u0275elementStart(53, "div", 17);
      \u0275\u0275text(54);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "div", 18);
      \u0275\u0275text(56, "Sans d\xE9partement");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(57, "div", 24)(58, "div", 25);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(59, "svg", 26);
      \u0275\u0275element(60, "circle", 27)(61, "line", 28);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(62, "input", 29);
      \u0275\u0275listener("ngModelChange", function UserManagementComponent_Template_input_ngModelChange_62_listener($event) {
        return ctx.searchTerm.set($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(63, "div", 30)(64, "select", 31);
      \u0275\u0275listener("ngModelChange", function UserManagementComponent_Template_select_ngModelChange_64_listener($event) {
        return ctx.filterStatut.set($event);
      });
      \u0275\u0275elementStart(65, "option", 32);
      \u0275\u0275text(66, "Tous les statuts");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "option", 33);
      \u0275\u0275text(68, "Actif");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "option", 34);
      \u0275\u0275text(70, "Onboarding");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "option", 35);
      \u0275\u0275text(72, "Inactif");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(73, "select", 31);
      \u0275\u0275listener("ngModelChange", function UserManagementComponent_Template_select_ngModelChange_73_listener($event) {
        return ctx.filterRole.set($event);
      });
      \u0275\u0275elementStart(74, "option", 32);
      \u0275\u0275text(75, "Tous les r\xF4les");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "option", 36);
      \u0275\u0275text(77, "Utilisateur");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "option", 37);
      \u0275\u0275text(79, "Admin");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(80, "select", 31);
      \u0275\u0275listener("ngModelChange", function UserManagementComponent_Template_select_ngModelChange_80_listener($event) {
        return ctx.filterRisque.set($event);
      });
      \u0275\u0275elementStart(81, "option", 32);
      \u0275\u0275text(82, "Tous les risques");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "option", 38);
      \u0275\u0275text(84, "\xC0 risque");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(85, "select", 31);
      \u0275\u0275listener("ngModelChange", function UserManagementComponent_Template_select_ngModelChange_85_listener($event) {
        return ctx.filterTest.set($event);
      });
      \u0275\u0275elementStart(86, "option", 32);
      \u0275\u0275text(87, "Tous les niveaux");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "option", 39);
      \u0275\u0275text(89, "Sans test");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "option", 40);
      \u0275\u0275text(91, "Sans formation");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275conditionalCreate(92, UserManagementComponent_Conditional_92_Template, 12, 1, "div", 41);
      \u0275\u0275conditionalCreate(93, UserManagementComponent_Conditional_93_Template, 4, 0, "div", 42);
      \u0275\u0275conditionalCreate(94, UserManagementComponent_Conditional_94_Template, 5, 1, "div", 43);
      \u0275\u0275conditionalCreate(95, UserManagementComponent_Conditional_95_Template, 30, 4, "div", 44);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(96, UserManagementComponent_Conditional_96_Template, 1, 0, "div", 45);
      \u0275\u0275elementStart(97, "div", 46);
      \u0275\u0275conditionalCreate(98, UserManagementComponent_Conditional_98_Template, 35, 21);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(99, UserManagementComponent_Conditional_99_Template, 16, 1, "div", 47);
      \u0275\u0275conditionalCreate(100, UserManagementComponent_Conditional_100_Template, 16, 2, "div", 47);
      \u0275\u0275conditionalCreate(101, UserManagementComponent_Conditional_101_Template, 56, 13, "div", 47);
    }
    if (rf & 2) {
      let tmp_25_0;
      \u0275\u0275classProp("drawer-open", ctx.isDrawerOpen());
      \u0275\u0275advance(23);
      \u0275\u0275property("disabled", ctx.loading());
      \u0275\u0275advance(4);
      \u0275\u0275classProp("active", !ctx.filterStatut() && !ctx.filterRisque() && !ctx.filterTest() && !ctx.filterDepartement());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.stats().total);
      \u0275\u0275advance(3);
      \u0275\u0275classProp("active", ctx.filterStatut() === "Actif");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.stats().actifs);
      \u0275\u0275advance(3);
      \u0275\u0275classProp("active", ctx.filterStatut() === "Onboarding");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.stats().onboarding);
      \u0275\u0275advance(3);
      \u0275\u0275classProp("active", ctx.filterRisque() === "a-risque");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.stats().aRisque);
      \u0275\u0275advance(3);
      \u0275\u0275classProp("active", ctx.filterTest() === "sans-test");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.stats().sansTest);
      \u0275\u0275advance(3);
      \u0275\u0275classProp("active", ctx.filterDepartement() === "\u2014");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.stats().sansDepartement);
      \u0275\u0275advance(8);
      \u0275\u0275property("ngModel", ctx.searchTerm());
      \u0275\u0275advance(2);
      \u0275\u0275property("ngModel", ctx.filterStatut());
      \u0275\u0275advance(9);
      \u0275\u0275property("ngModel", ctx.filterRole());
      \u0275\u0275advance(7);
      \u0275\u0275property("ngModel", ctx.filterRisque());
      \u0275\u0275advance(5);
      \u0275\u0275property("ngModel", ctx.filterTest());
      \u0275\u0275advance(7);
      \u0275\u0275conditional(ctx.selectedUserIds().size > 0 ? 92 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading() ? 93 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.error() ? 94 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.loading() && !ctx.error() ? 95 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isDrawerOpen() ? 96 : -1);
      \u0275\u0275advance();
      \u0275\u0275classProp("open", ctx.isDrawerOpen());
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_25_0 = ctx.selectedUserForDrawer()) ? 98 : -1, tmp_25_0);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showRoleConfirm() ? 99 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showDeleteConfirm() ? 100 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showUserModal() ? 101 : -1);
    }
  }, dependencies: [CommonModule, NgClass, NgIf, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, RouterModule, RouterLink], styles: ['@charset "UTF-8";\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n  --primary: #4f46e5;\n  --primary-hover: #4338ca;\n  --secondary: #f3f4f6;\n  --text-main: #111827;\n  --text-muted: #6b7280;\n  --border: #e5e7eb;\n  --success: #10b981;\n  --success-bg: #d1fae5;\n  --warning: #f59e0b;\n  --warning-bg: #fef3c7;\n  --danger: #ef4444;\n  --danger-bg: #fee2e2;\n  --info: #3b82f6;\n  --info-bg: #dbeafe;\n  --admin-bg: #ede9fe;\n  --admin-color: #7c3aed;\n  font-family:\n    "Inter",\n    system-ui,\n    sans-serif;\n}\n.user-management[_ngcontent-%COMP%] {\n  padding: 2rem;\n  max-width: 1600px;\n  margin: 0 auto;\n  transition: padding-right 0.3s ease;\n}\n.user-management.drawer-open[_ngcontent-%COMP%] {\n  padding-right: calc(50vw + 2rem);\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 2rem;\n}\n.page-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1.25rem;\n}\n.page-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   .header-icon[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: 16px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary),\n      #818cf8);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 4px 20px rgba(79, 70, 229, 0.3);\n}\n.page-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   .header-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  color: white;\n}\n.page-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 800;\n  color: var(--text-main);\n  margin: 0;\n  letter-spacing: -0.025em;\n}\n.page-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   .header-subtitle[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: var(--text-muted);\n  margin: 0.25rem 0 0;\n}\n.page-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n}\n.page-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.25rem;\n  border-radius: 12px;\n  font-weight: 600;\n  font-size: 0.9rem;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.page-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   button.btn-primary[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: white;\n  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.2);\n}\n.page-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   button.btn-primary[_ngcontent-%COMP%]:hover {\n  background: var(--primary-hover);\n  transform: translateY(-2px);\n}\n.page-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   button.btn-secondary[_ngcontent-%COMP%] {\n  background: white;\n  color: var(--text-main);\n  border: 1px solid var(--border);\n}\n.page-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   button.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: var(--secondary);\n}\n.stats-bar[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n  gap: 1rem;\n  margin-bottom: 2rem;\n}\n.stats-bar[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%] {\n  background: white;\n  padding: 1.25rem;\n  border-radius: 16px;\n  border: 1px solid var(--border);\n  cursor: pointer;\n  transition: all 0.2s ease;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n}\n.stats-bar[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]:hover, \n.stats-bar[_ngcontent-%COMP%]   .stat-card.active[_ngcontent-%COMP%] {\n  transform: translateY(-3px);\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);\n  border-color: var(--primary);\n}\n.stats-bar[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 800;\n  color: var(--text-main);\n}\n.stats-bar[_ngcontent-%COMP%]   .stat-card[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  margin-top: 0.25rem;\n}\n.stats-bar[_ngcontent-%COMP%]   .stat-card.stat-success[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  color: var(--success);\n}\n.stats-bar[_ngcontent-%COMP%]   .stat-card.stat-info[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  color: var(--info);\n}\n.stats-bar[_ngcontent-%COMP%]   .stat-card.stat-warning[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  color: var(--warning);\n}\n.stats-bar[_ngcontent-%COMP%]   .stat-card.stat-danger[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  color: var(--danger);\n}\n.filters-container[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n  flex-wrap: wrap;\n}\n.filters-container[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1;\n  min-width: 300px;\n}\n.filters-container[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 1rem;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--text-muted);\n}\n.filters-container[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.875rem 1rem 0.875rem 2.75rem;\n  border: 1px solid var(--border);\n  border-radius: 12px;\n  font-size: 0.95rem;\n  outline: none;\n  transition: border-color 0.2s, box-shadow 0.2s;\n}\n.filters-container[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: var(--primary);\n  box-shadow: 0 0 0 4px rgba(79, 70, 229, 0.1);\n}\n.filters-container[_ngcontent-%COMP%]   .filter-dropdowns[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n}\n.filters-container[_ngcontent-%COMP%]   .filter-dropdowns[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 0.875rem 2rem 0.875rem 1rem;\n  border: 1px solid var(--border);\n  border-radius: 12px;\n  background: white;\n  font-size: 0.9rem;\n  font-weight: 500;\n  color: var(--text-main);\n  cursor: pointer;\n  appearance: none;\n  background-image: url(data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%236b7280%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E);\n  background-repeat: no-repeat;\n  background-position: right 1rem top 50%;\n  background-size: 0.65rem auto;\n}\n.filters-container[_ngcontent-%COMP%]   .filter-dropdowns[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  border-color: var(--primary);\n  outline: none;\n}\n.bulk-actions-bar[_ngcontent-%COMP%] {\n  background: var(--primary);\n  border-radius: 12px;\n  padding: 1rem 1.5rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1.5rem;\n  animation: _ngcontent-%COMP%_slideDown 0.3s ease;\n}\n.bulk-actions-bar[_ngcontent-%COMP%]   .bulk-count[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: 600;\n}\n.bulk-actions-bar[_ngcontent-%COMP%]   .bulk-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n}\n.bulk-actions-bar[_ngcontent-%COMP%]   .bulk-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2);\n  border: none;\n  color: white;\n  padding: 0.5rem 1rem;\n  border-radius: 8px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.bulk-actions-bar[_ngcontent-%COMP%]   .bulk-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.3);\n}\n.bulk-actions-bar[_ngcontent-%COMP%]   .bulk-buttons[_ngcontent-%COMP%]   button.text-danger[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.9);\n}\n.bulk-actions-bar[_ngcontent-%COMP%]   .bulk-buttons[_ngcontent-%COMP%]   button.text-danger[_ngcontent-%COMP%]:hover {\n  background: var(--danger);\n}\n.table-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 16px;\n  border: 1px solid var(--border);\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);\n  overflow: hidden;\n}\n.table-card[_ngcontent-%COMP%]   .table-header-info[_ngcontent-%COMP%] {\n  padding: 1rem 1.5rem;\n  border-bottom: 1px solid var(--border);\n  font-size: 0.875rem;\n  color: var(--text-muted);\n  font-weight: 500;\n}\n.table-card[_ngcontent-%COMP%]   .table-wrapper[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.table-card[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.table-card[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #f9fafb;\n  padding: 1rem 1.5rem;\n  text-align: left;\n  font-size: 0.75rem;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  border-bottom: 1px solid var(--border);\n}\n.table-card[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 1rem 1.5rem;\n  vertical-align: middle;\n  border-bottom: 1px solid var(--border);\n}\n.table-card[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .checkbox-cell[_ngcontent-%COMP%] {\n  width: 40px;\n  text-align: center;\n}\n.table-card[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .checkbox-cell[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  cursor: pointer;\n  accent-color: var(--primary);\n}\n.table-card[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .user-row[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.table-card[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .user-row[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n.table-card[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .user-row.selected[_ngcontent-%COMP%] {\n  background: #eff6ff;\n}\n.user-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.user-cell[_ngcontent-%COMP%]   .user-avatar[_ngcontent-%COMP%], \n.user-cell[_ngcontent-%COMP%]   .user-avatar-initials[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  overflow: hidden;\n}\n.user-cell[_ngcontent-%COMP%]   .user-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.user-cell[_ngcontent-%COMP%]   .user-avatar-initials[_ngcontent-%COMP%] {\n  background: var(--info-bg);\n  color: var(--info);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 0.9rem;\n}\n.user-cell[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.user-cell[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--text-main);\n}\n.user-cell[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-email[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--text-muted);\n  text-decoration: none;\n}\n.user-cell[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-email[_ngcontent-%COMP%]:hover {\n  color: var(--primary);\n  text-decoration: underline;\n}\n.department[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: var(--text-main);\n}\n.department.empty[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-style: italic;\n}\n.role-badge-select[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.75rem;\n  border-radius: 20px;\n  font-size: 0.75rem;\n  font-weight: 700;\n  border: none;\n  appearance: none;\n  cursor: pointer;\n  outline: none;\n}\n.role-badge-select.role-admin[_ngcontent-%COMP%] {\n  background: var(--admin-bg);\n  color: var(--admin-color);\n}\n.role-badge-select.role-user[_ngcontent-%COMP%] {\n  background: var(--info-bg);\n  color: var(--info);\n}\n.status-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.375rem;\n  padding: 0.25rem 0.75rem;\n  border-radius: 20px;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.status-badge[_ngcontent-%COMP%]   .status-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n}\n.status-badge.actif[_ngcontent-%COMP%] {\n  background: var(--success-bg);\n  color: #065f46;\n}\n.status-badge.actif[_ngcontent-%COMP%]   .status-dot[_ngcontent-%COMP%] {\n  background: var(--success);\n}\n.status-badge.onboarding[_ngcontent-%COMP%] {\n  background: var(--info-bg);\n  color: #1e40af;\n}\n.status-badge.onboarding[_ngcontent-%COMP%]   .status-dot[_ngcontent-%COMP%] {\n  background: var(--info);\n}\n.status-badge.inactif[_ngcontent-%COMP%] {\n  background: var(--secondary);\n  color: var(--text-muted);\n}\n.status-badge.inactif[_ngcontent-%COMP%]   .status-dot[_ngcontent-%COMP%] {\n  background: var(--text-muted);\n}\n.status-badge.\\e0.risque[_ngcontent-%COMP%], \n.status-badge.risque[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n  color: #991b1b;\n}\n.status-badge.\\e0.risque[_ngcontent-%COMP%]   .status-dot[_ngcontent-%COMP%], \n.status-badge.risque[_ngcontent-%COMP%]   .status-dot[_ngcontent-%COMP%] {\n  background: var(--danger);\n}\n.score-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.score-cell[_ngcontent-%COMP%]   .score-bar-bg[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 6px;\n  background: var(--secondary);\n  border-radius: 4px;\n  overflow: hidden;\n}\n.score-cell[_ngcontent-%COMP%]   .score-bar-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 4px;\n}\n.score-cell[_ngcontent-%COMP%]   .score-bar-fill.high[_ngcontent-%COMP%] {\n  background: var(--success);\n}\n.score-cell[_ngcontent-%COMP%]   .score-bar-fill.medium[_ngcontent-%COMP%] {\n  background: var(--warning);\n}\n.score-cell[_ngcontent-%COMP%]   .score-bar-fill.low[_ngcontent-%COMP%] {\n  background: var(--danger);\n}\n.score-cell[_ngcontent-%COMP%]   .score-text[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.85rem;\n  width: 35px;\n}\n.count-badge[_ngcontent-%COMP%] {\n  background: var(--secondary);\n  color: var(--text-main);\n  padding: 0.15rem 0.5rem;\n  border-radius: 12px;\n  font-weight: 700;\n  font-size: 0.8rem;\n}\n.count-badge.danger[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.activity-text[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--text-muted);\n}\n.activity-text.danger[_ngcontent-%COMP%] {\n  color: var(--danger);\n  font-weight: 600;\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n}\n.actions[_ngcontent-%COMP%]   .btn-action[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 1.1rem;\n  cursor: pointer;\n  padding: 0.25rem;\n  border-radius: 6px;\n  transition: background 0.2s;\n}\n.actions[_ngcontent-%COMP%]   .btn-action[_ngcontent-%COMP%]:hover {\n  background: var(--secondary);\n}\n.drawer-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.4);\n  z-index: 99;\n  -webkit-backdrop-filter: blur(2px);\n  backdrop-filter: blur(2px);\n  animation: _ngcontent-%COMP%_fadeIn 0.3s;\n}\n.side-drawer[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  right: -50vw;\n  width: 50vw;\n  height: 100vh;\n  background: white;\n  z-index: 100;\n  box-shadow: -10px 0 30px rgba(0, 0, 0, 0.1);\n  transition: right 0.4s cubic-bezier(0.16, 1, 0.3, 1);\n  display: flex;\n  flex-direction: column;\n}\n.side-drawer.open[_ngcontent-%COMP%] {\n  right: 0;\n}\n.side-drawer[_ngcontent-%COMP%]   .drawer-header[_ngcontent-%COMP%] {\n  padding: 2rem;\n  border-bottom: 1px solid var(--border);\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  background: #fafaf9;\n}\n.side-drawer[_ngcontent-%COMP%]   .drawer-header[_ngcontent-%COMP%]   .drawer-user-main[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n}\n.side-drawer[_ngcontent-%COMP%]   .drawer-header[_ngcontent-%COMP%]   .drawer-user-main[_ngcontent-%COMP%]   .drawer-avatar[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  border-radius: 16px;\n  background: var(--primary);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.5rem;\n  font-weight: 700;\n}\n.side-drawer[_ngcontent-%COMP%]   .drawer-header[_ngcontent-%COMP%]   .drawer-user-main[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.5rem;\n  font-weight: 800;\n  color: var(--text-main);\n}\n.side-drawer[_ngcontent-%COMP%]   .drawer-header[_ngcontent-%COMP%]   .drawer-user-main[_ngcontent-%COMP%]   .drawer-subtitle[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.95rem;\n  margin-top: 0.25rem;\n  display: block;\n}\n.side-drawer[_ngcontent-%COMP%]   .drawer-header[_ngcontent-%COMP%]   .btn-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 1.5rem;\n  color: var(--text-muted);\n  cursor: pointer;\n}\n.side-drawer[_ngcontent-%COMP%]   .drawer-header[_ngcontent-%COMP%]   .btn-close[_ngcontent-%COMP%]:hover {\n  color: var(--text-main);\n}\n.side-drawer[_ngcontent-%COMP%]   .drawer-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  border-bottom: 1px solid var(--border);\n  padding: 0 2rem;\n  background: #fafaf9;\n}\n.side-drawer[_ngcontent-%COMP%]   .drawer-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 1rem 1.5rem;\n  background: none;\n  border: none;\n  border-bottom: 3px solid transparent;\n  font-weight: 600;\n  color: var(--text-muted);\n  cursor: pointer;\n  font-size: 0.95rem;\n}\n.side-drawer[_ngcontent-%COMP%]   .drawer-tabs[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  color: var(--primary);\n  border-bottom-color: var(--primary);\n}\n.side-drawer[_ngcontent-%COMP%]   .drawer-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:not(.active) {\n  color: var(--text-main);\n}\n.side-drawer[_ngcontent-%COMP%]   .drawer-content[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 2rem;\n}\n.side-drawer[_ngcontent-%COMP%]   .drawer-content[_ngcontent-%COMP%]   .tab-pane[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 0.3s;\n}\n.side-drawer[_ngcontent-%COMP%]   .drawer-footer[_ngcontent-%COMP%] {\n  padding: 1.5rem 2rem;\n  border-top: 1px solid var(--border);\n  background: white;\n  display: flex;\n  gap: 1rem;\n  justify-content: space-between;\n}\n.side-drawer[_ngcontent-%COMP%]   .drawer-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 0.875rem;\n  border-radius: 10px;\n  font-weight: 600;\n  cursor: pointer;\n  border: none;\n}\n.side-drawer[_ngcontent-%COMP%]   .drawer-footer[_ngcontent-%COMP%]   .btn-outline[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid var(--border);\n  color: var(--text-main);\n}\n.side-drawer[_ngcontent-%COMP%]   .drawer-footer[_ngcontent-%COMP%]   .btn-outline[_ngcontent-%COMP%]:hover {\n  background: var(--secondary);\n}\n.side-drawer[_ngcontent-%COMP%]   .drawer-footer[_ngcontent-%COMP%]   .btn-danger[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.side-drawer[_ngcontent-%COMP%]   .drawer-footer[_ngcontent-%COMP%]   .btn-danger[_ngcontent-%COMP%]:hover {\n  background: #fecaca;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\n.modal-content[_ngcontent-%COMP%] {\n  background: white;\n  padding: 2.5rem;\n  border-radius: 20px;\n  width: 100%;\n  max-width: 450px;\n  text-align: center;\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n  animation: _ngcontent-%COMP%_scaleUp 0.3s ease;\n}\n.modal-icon[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  margin: 0 auto 1.5rem;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 2rem;\n}\n.modal-icon.warning[_ngcontent-%COMP%] {\n  background: var(--warning-bg);\n}\n.modal-icon.danger[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n}\n.modal-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  margin-top: 2rem;\n}\n.modal-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 0.875rem;\n  border-radius: 10px;\n  font-weight: 600;\n  cursor: pointer;\n  border: none;\n}\n.modal-actions[_ngcontent-%COMP%]   .btn-cancel[_ngcontent-%COMP%] {\n  background: var(--secondary);\n}\n.modal-actions[_ngcontent-%COMP%]   .btn-confirm[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: white;\n}\n.modal-actions[_ngcontent-%COMP%]   .btn-danger-confirm[_ngcontent-%COMP%] {\n  background: var(--danger);\n  color: white;\n}\n.mt-2[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n.mt-3[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n.mt-4[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n}\n.mb-3[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.d-flex[_ngcontent-%COMP%] {\n  display: flex;\n}\n.justify-content-between[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n.text-danger[_ngcontent-%COMP%] {\n  color: var(--danger);\n}\n.info-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1.5rem;\n}\n.info-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.8rem;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  font-weight: 700;\n  margin-bottom: 0.25rem;\n}\n.info-group[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 500;\n  font-size: 0.95rem;\n}\n.link-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n}\n.link-buttons[_ngcontent-%COMP%]   .btn-outline[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  border: 1px solid var(--border);\n  border-radius: 8px;\n  background: white;\n  font-weight: 600;\n  cursor: pointer;\n}\n.admin-note[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 100px;\n  padding: 1rem;\n  border: 1px solid var(--border);\n  border-radius: 12px;\n  margin-top: 0.5rem;\n  font-family: inherit;\n  resize: vertical;\n}\n.score-overview[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 2rem;\n  align-items: center;\n  background: #f8fafc;\n  padding: 1.5rem;\n  border-radius: 16px;\n  border: 1px solid var(--border);\n}\n.score-ring[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  border: 8px solid var(--primary);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.score-ring[_ngcontent-%COMP%]   .score-ring-value[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 800;\n}\n.badge[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.75rem;\n  border-radius: 20px;\n  font-weight: 600;\n  font-size: 0.8rem;\n}\n.badge.success[_ngcontent-%COMP%] {\n  background: var(--success-bg);\n  color: #065f46;\n}\n.badge.danger[_ngcontent-%COMP%] {\n  background: var(--danger-bg);\n  color: #991b1b;\n}\n.badge.info[_ngcontent-%COMP%] {\n  background: var(--info-bg);\n  color: #1e40af;\n}\n.list-cards[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.list-cards[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.25rem;\n  border: 1px solid var(--border);\n  border-radius: 12px;\n}\n.skill-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.progress-bar-bg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 6px;\n  background: var(--secondary);\n  border-radius: 4px;\n}\n.progress-bar-bg[_ngcontent-%COMP%]   .progress-bar-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background: var(--primary);\n  border-radius: 4px;\n}\n.timeline[_ngcontent-%COMP%] {\n  border-left: 2px solid var(--border);\n  margin-left: 1rem;\n  padding-left: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.timeline-item[_ngcontent-%COMP%] {\n  position: relative;\n}\n.timeline-item[_ngcontent-%COMP%]   .timeline-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: -2.3rem;\n  top: 0;\n  background: white;\n  padding: 0.25rem;\n  border-radius: 50%;\n  font-size: 1.2rem;\n}\n.timeline-item[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 500;\n}\n.timeline-item[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_scaleUp {\n  from {\n    opacity: 0;\n    transform: scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n.user-modal[_ngcontent-%COMP%] {\n  max-width: 650px;\n  text-align: left;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n}\n.user-modal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  padding: 1.5rem 2rem;\n  border-bottom: 1px solid var(--border);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.user-modal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: var(--text-main);\n}\n.user-modal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .btn-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 1.25rem;\n  color: var(--text-muted);\n  cursor: pointer;\n}\n.user-modal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .btn-close[_ngcontent-%COMP%]:hover {\n  color: var(--text-main);\n}\n.user-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  padding: 2rem;\n  max-height: 70vh;\n  overflow-y: auto;\n}\n.user-modal[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%] {\n  padding: 1.5rem 2rem;\n  border-top: 1px solid var(--border);\n  display: flex;\n  justify-content: flex-end;\n  gap: 1rem;\n}\n.user-modal[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.5rem;\n  border-radius: 10px;\n  font-weight: 600;\n  cursor: pointer;\n  border: none;\n  transition: all 0.2s;\n}\n.user-modal[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%]   button.btn-cancel[_ngcontent-%COMP%] {\n  background: var(--secondary);\n  color: var(--text-main);\n}\n.user-modal[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%]   button.btn-cancel[_ngcontent-%COMP%]:hover {\n  background: var(--border);\n}\n.user-modal[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%]   button.btn-confirm[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: white;\n}\n.user-modal[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%]   button.btn-confirm[_ngcontent-%COMP%]:hover {\n  background: var(--primary-hover);\n  transform: translateY(-1px);\n}\n.user-modal[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%]   button.btn-confirm[_ngcontent-%COMP%]:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.user-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.user-form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n}\n.user-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.user-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: var(--text-muted);\n}\n.user-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.user-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem;\n  border: 1px solid var(--border);\n  border-radius: 10px;\n  font-size: 0.95rem;\n  outline: none;\n  transition: all 0.2s;\n}\n.user-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.user-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  border-color: var(--primary);\n  box-shadow: 0 0 0 4px rgba(79, 70, 229, 0.1);\n}\n.btn-ghost[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  padding: 0.5rem;\n  border-radius: 8px;\n  cursor: pointer;\n  color: var(--text-muted);\n}\n.btn-ghost[_ngcontent-%COMP%]:hover {\n  background: var(--secondary);\n  color: var(--text-main);\n}\n/*# sourceMappingURL=user-management.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserManagementComponent, [{
    type: Component,
    args: [{ selector: "app-user-management", standalone: true, imports: [CommonModule, FormsModule, RouterModule], template: `<div class="user-management" [class.drawer-open]="isDrawerOpen()">\r
  <!-- Page Header -->\r
  <div class="page-header">\r
    <div class="header-left">\r
      <div class="header-icon">\r
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">\r
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>\r
          <circle cx="9" cy="7" r="4"/>\r
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>\r
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>\r
        </svg>\r
      </div>\r
      <div>\r
        <h2>Gestion des Utilisateurs</h2>\r
        <p class="header-subtitle">G\xE9rez les comptes, r\xF4les, et performances de vos collaborateurs</p>\r
      </div>\r
    </div>\r
    <div class="header-actions">\r
      <button class="btn-primary" (click)="openAddModal()">\r
        <span>\u2795</span> Nouvel Utilisateur\r
      </button>\r
      <button class="btn-secondary" (click)="exportData()">\r
        <span>\u{1F4E4}</span> Exporter\r
      </button>\r
      <button class="btn-ghost" (click)="loadUsers()" [disabled]="loading()">\r
        <span>\u{1F504}</span>\r
      </button>\r
    </div>\r
  </div>\r
\r
  <!-- Stats Bar -->\r
  <div class="stats-bar">\r
    <div class="stat-card" (click)="filterFromStats('total')" [class.active]="!filterStatut() && !filterRisque() && !filterTest() && !filterDepartement()">\r
      <div class="stat-value">{{ stats().total }}</div>\r
      <div class="stat-label">Total</div>\r
    </div>\r
    <div class="stat-card stat-success" (click)="filterFromStats('actifs')" [class.active]="filterStatut() === 'Actif'">\r
      <div class="stat-value">{{ stats().actifs }}</div>\r
      <div class="stat-label">Actifs</div>\r
    </div>\r
    <div class="stat-card stat-info" (click)="filterFromStats('onboarding')" [class.active]="filterStatut() === 'Onboarding'">\r
      <div class="stat-value">{{ stats().onboarding }}</div>\r
      <div class="stat-label">Onboarding</div>\r
    </div>\r
    <div class="stat-card stat-danger" (click)="filterFromStats('arisque')" [class.active]="filterRisque() === 'a-risque'">\r
      <div class="stat-value">{{ stats().aRisque }}</div>\r
      <div class="stat-label">\xC0 risque</div>\r
    </div>\r
    <div class="stat-card stat-warning" (click)="filterFromStats('sanstest')" [class.active]="filterTest() === 'sans-test'">\r
      <div class="stat-value">{{ stats().sansTest }}</div>\r
      <div class="stat-label">Sans test</div>\r
    </div>\r
    <div class="stat-card stat-neutral" (click)="filterFromStats('sansdept')" [class.active]="filterDepartement() === '\u2014'">\r
      <div class="stat-value">{{ stats().sansDepartement }}</div>\r
      <div class="stat-label">Sans d\xE9partement</div>\r
    </div>\r
  </div>\r
\r
  <!-- Search & Filters Bar -->\r
  <div class="filters-container">\r
    <div class="search-box">\r
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="18" height="18"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>\r
      <input type="text" placeholder="Rechercher par nom, email, poste..." [ngModel]="searchTerm()" (ngModelChange)="searchTerm.set($event)">\r
    </div>\r
    <div class="filter-dropdowns">\r
      <select [ngModel]="filterStatut()" (ngModelChange)="filterStatut.set($event)">\r
        <option value="">Tous les statuts</option>\r
        <option value="Actif">Actif</option>\r
        <option value="Onboarding">Onboarding</option>\r
        <option value="Inactif">Inactif</option>\r
      </select>\r
      <select [ngModel]="filterRole()" (ngModelChange)="filterRole.set($event)">\r
        <option value="">Tous les r\xF4les</option>\r
        <option value="USER">Utilisateur</option>\r
        <option value="ADMIN">Admin</option>\r
      </select>\r
      <select [ngModel]="filterRisque()" (ngModelChange)="filterRisque.set($event)">\r
        <option value="">Tous les risques</option>\r
        <option value="a-risque">\xC0 risque</option>\r
      </select>\r
      <select [ngModel]="filterTest()" (ngModelChange)="filterTest.set($event)">\r
        <option value="">Tous les niveaux</option>\r
        <option value="sans-test">Sans test</option>\r
        <option value="sans-formation">Sans formation</option>\r
      </select>\r
    </div>\r
  </div>\r
\r
  <!-- Bulk Actions Bar -->\r
  @if (selectedUserIds().size > 0) {\r
    <div class="bulk-actions-bar">\r
      <span class="bulk-count">{{ selectedUserIds().size }} utilisateur(s) s\xE9lectionn\xE9(s)</span>\r
      <div class="bulk-buttons">\r
        <button (click)="bulkAction('Relance')">\u{1F4E9} Envoyer une relance</button>\r
        <button (click)="bulkAction('Formation')">\u{1F4DA} Assigner une formation</button>\r
        <button (click)="bulkAction('Kit Onboarding')">\u{1F680} Kit d'onboarding</button>\r
        <button class="text-danger" (click)="bulkAction('D\xE9sactiver')">\u{1F6AB} D\xE9sactiver</button>\r
      </div>\r
    </div>\r
  }\r
\r
  <!-- Loading State -->\r
  @if (loading()) {\r
    <div class="loading-card">\r
      <div class="loader"></div>\r
      <p>Chargement des collaborateurs...</p>\r
    </div>\r
  }\r
\r
  <!-- Error State -->\r
  @if (error()) {\r
    <div class="error-banner">\r
      <span>{{ error() }}</span>\r
      <button (click)="loadUsers()">R\xE9essayer</button>\r
    </div>\r
  }\r
\r
  <!-- Users Table -->\r
  @if (!loading() && !error()) {\r
    <div class="table-card">\r
      <div class="table-header-info">\r
        <span>Affichage de {{ filteredUsers().length }} sur {{ users().length }} utilisateurs</span>\r
      </div>\r
      <div class="table-wrapper">\r
        <table class="users-table">\r
          <thead>\r
            <tr>\r
              <th class="checkbox-cell">\r
                <input type="checkbox" [checked]="isAllSelected()" (change)="toggleAllSelection($event)">\r
              </th>\r
              <th>Utilisateur</th>\r
              <th>D\xE9partement</th>\r
              <th>R\xF4le</th>\r
              <th>Statut</th>\r
              <th>Score Moyen</th>\r
              <th>Tests</th>\r
              <th>Derni\xE8re Activit\xE9</th>\r
              <th>Actions</th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            @for (user of filteredUsers(); track user.id) {\r
              <tr class="user-row" [class.selected]="selectedUserIds().has(user.id)" (click)="openDrawer(user)">\r
                <td class="checkbox-cell" (click)="$event.stopPropagation()">\r
                  <input type="checkbox" [checked]="selectedUserIds().has(user.id)" (change)="toggleSelection(user.id)">\r
                </td>\r
                <td>\r
                  <div class="user-cell">\r
                    <div class="user-avatar" *ngIf="user.profilePictureUrl; else noAvatar">\r
                      <img [src]="user.profilePictureUrl" alt="Avatar">\r
                    </div>\r
                    <ng-template #noAvatar>\r
                      <div class="user-avatar-initials">\r
                        {{ (user.firstName || '')[0] }}{{ (user.lastName || '')[0] }}\r
                      </div>\r
                    </ng-template>\r
                    <div class="user-info">\r
                      <span class="user-name">{{ user.firstName }} {{ user.lastName }}</span>\r
                      <a [href]="'mailto:' + user.email" class="user-email" (click)="$event.stopPropagation()">{{ user.email }}</a>\r
                    </div>\r
                  </div>\r
                </td>\r
                <td>\r
                  <span class="department" [class.empty]="!user.department">{{ user.department || 'Non renseign\xE9' }}</span>\r
                </td>\r
                <td (click)="$event.stopPropagation()">\r
                  <select class="role-badge-select" [class.role-admin]="user.role === 'ADMIN'" [class.role-user]="user.role === 'USER'" [value]="user.role" (change)="initiateRoleChange(user.id, $event)">\r
                    <option value="USER">Utilisateur</option>\r
                    <option value="ADMIN">Admin</option>\r
                  </select>\r
                </td>\r
                <td>\r
                  <span class="status-badge" [ngClass]="user.statut?.toLowerCase() || 'inactif'">\r
                    <span class="status-dot"></span> {{ user.statut }}\r
                  </span>\r
                </td>\r
                <td>\r
                  <div class="score-cell">\r
                    <div class="score-bar-bg">\r
                      <div class="score-bar-fill" [style.width]="formatScore(user.scoreMoyen)" [ngClass]="(user.scoreMoyen || 0) > 0.7 ? 'high' : ((user.scoreMoyen || 0) > 0.4 ? 'medium' : 'low')"></div>\r
                    </div>\r
                    <span class="score-text">{{ formatScore(user.scoreMoyen) }}</span>\r
                  </div>\r
                </td>\r
                <td>\r
                  <span class="count-badge" [class.danger]="!user.testsCount || user.testsCount === 0">{{ user.testsCount || 0 }}</span>\r
                </td>\r
                <td>\r
                  <span class="activity-text" [class.danger]="!user.lastLogin">{{ formatRelativeTime(user.lastLogin) }}</span>\r
                </td>\r
                <td (click)="$event.stopPropagation()">\r
                  <div class="actions">\r
                    <button class="btn-action" (click)="openEditModal(user, $event)" title="Modifier">\u270F\uFE0F</button>\r
                    <button class="btn-action" (click)="openDrawer(user)" title="Voir le profil">\u{1F441}\uFE0F</button>\r
                    <button class="btn-action text-danger" (click)="confirmDelete(user, $event)" title="Supprimer">\u{1F5D1}\uFE0F</button>\r
                  </div>\r
                </td>\r
              </tr>\r
            } @empty {\r
              <tr>\r
                <td colspan="9" class="empty-state">\r
                  <p>Aucun utilisateur ne correspond \xE0 vos crit\xE8res.</p>\r
                </td>\r
              </tr>\r
            }\r
          </tbody>\r
        </table>\r
      </div>\r
    </div>\r
  }\r
</div>\r
\r
<!-- Drawer Backdrop -->\r
@if (isDrawerOpen()) {\r
  <div class="drawer-backdrop" (click)="closeDrawer()"></div>\r
}\r
\r
<!-- Employee Profile Drawer -->\r
<div class="side-drawer" [class.open]="isDrawerOpen()">\r
  @if (selectedUserForDrawer(); as user) {\r
    <div class="drawer-header">\r
      <div class="drawer-user-main">\r
        <div class="drawer-avatar">\r
          {{ (user.firstName || '')[0] }}{{ (user.lastName || '')[0] }}\r
        </div>\r
        <div>\r
          <h3>{{ user.firstName }} {{ user.lastName }}</h3>\r
          <span class="drawer-subtitle">{{ user.position || 'Poste non renseign\xE9' }} \u2022 {{ user.department || 'D\xE9partement non renseign\xE9' }}</span>\r
        </div>\r
      </div>\r
      <button class="btn-close" (click)="closeDrawer()">\u2715</button>\r
    </div>\r
\r
    <div class="drawer-tabs">\r
      <button [class.active]="activeDrawerTab() === 'profil'" (click)="setDrawerTab('profil')">Profil</button>\r
      <button [class.active]="activeDrawerTab() === 'resultats'" (click)="setDrawerTab('resultats')">R\xE9sultats</button>\r
      <button [class.active]="activeDrawerTab() === 'formations'" (click)="setDrawerTab('formations')">Formations</button>\r
      <button [class.active]="activeDrawerTab() === 'prediction'" (click)="setDrawerTab('prediction')">Pr\xE9diction IA</button>\r
      <button [class.active]="activeDrawerTab() === 'activite'" (click)="setDrawerTab('activite')">Activit\xE9</button>\r
    </div>\r
\r
    <div class="drawer-content">\r
      <!-- Tab 1: Profil -->\r
      @if (activeDrawerTab() === 'profil') {\r
        <div class="tab-pane">\r
          <div class="info-grid">\r
            <div class="info-group">\r
              <label>Email</label>\r
              <p><a [href]="'mailto:' + user.email">{{ user.email }}</a></p>\r
            </div>\r
            <div class="info-group">\r
              <label>D\xE9partement</label>\r
              <p>{{ user.department || '\u2014' }}</p>\r
            </div>\r
            <div class="info-group">\r
              <label>Inscrit le</label>\r
              <p>{{ formatDate(user.createdAt) }}</p>\r
            </div>\r
            <div class="info-group">\r
              <label>Derni\xE8re activit\xE9</label>\r
              <p>{{ formatRelativeTime(user.lastLogin) }}</p>\r
            </div>\r
          </div>\r
          \r
          <div class="profile-links mt-4">\r
            <h4>Liens Externes</h4>\r
            <div class="link-buttons" style="display: flex; gap: 8px;">\r
              <a [routerLink]="['/public/profile', user.id]" target="_blank" class="btn-outline" style="text-decoration:none; padding:8px 12px; border-radius:4px;">\u{1F310} Voir Profil</a>\r
              <button class="btn-outline" [disabled]="true" style="opacity: 0.5; cursor: not-allowed;">\u{1F517} LinkedIn</button>\r
              <button class="btn-outline" [disabled]="true" style="opacity: 0.5; cursor: not-allowed;">\u{1F419} GitHub</button>\r
              <button class="btn-outline" [disabled]="true" style="opacity: 0.5; cursor: not-allowed;">\u{1F4C4} CV</button>\r
            </div>\r
          </div>\r
\r
          <div class="admin-note mt-4">\r
            <h4>Note Administrateur (Priv\xE9e)</h4>\r
            <textarea placeholder="Ajouter une note interne pour cet employ\xE9..."></textarea>\r
            <button class="btn-small mt-2">Enregistrer la note</button>\r
          </div>\r
        </div>\r
      }\r
\r
      <!-- Tab 2: R\xE9sultats -->\r
      @if (activeDrawerTab() === 'resultats') {\r
        <div class="tab-pane">\r
          <div class="score-overview">\r
            <div class="score-ring">\r
              <span class="score-ring-value">{{ formatScore(user.scoreMoyen) }}</span>\r
            </div>\r
            <div class="score-details">\r
              <h4>Score Global</h4>\r
              <span class="badge" [ngClass]="user.riskLevel === '\xC0 risque' ? 'danger' : 'success'">{{ user.riskLevel || 'Pr\xEAt' }}</span>\r
            </div>\r
          </div>\r
\r
          <h4 class="mt-4">Derniers Tests</h4>\r
          @if (user.testsCount === 0) {\r
            <div class="empty-box">Aucun test pass\xE9.</div>\r
          } @else {\r
            <ul class="list-cards">\r
              @for (test of mockTests; track test.name) {\r
                <li>\r
                  <div>\r
                    <strong>{{ test.name }}</strong>\r
                    <span>{{ formatDate(test.date) }}</span>\r
                  </div>\r
                  <div class="score-badge">{{ test.score }}%</div>\r
                </li>\r
              }\r
            </ul>\r
          }\r
\r
          <h4 class="mt-4">Comp\xE9tences</h4>\r
          @if (skillsLoading()) {\r
            <div class="empty-box">Chargement des comp\xE9tences...</div>\r
          } @else if (skillsError()) {\r
            <div class="empty-box">{{ skillsError() }}</div>\r
          } @else if (userSkills().length === 0) {\r
            <div class="empty-box">Aucune comp\xE9tence enregistr\xE9e.</div>\r
          } @else {\r
            <ul class="list-cards">\r
              @for (skill of userSkills(); track skill.id) {\r
                <li>\r
                  <div>\r
                    <strong>{{ skill.nom }}</strong>\r
                    <span>{{ skill.type }} \xB7 Niveau {{ skill.niveau }}</span>\r
                  </div>\r
                  <div class="skill-actions">\r
                    <span class="badge" [ngClass]="skill.validee ? 'success' : 'info'">\r
                      {{ skill.validee ? 'Valid\xE9e' : 'En attente' }}\r
                    </span>\r
                    @if (isAdmin()) {\r
                      <button class="btn-small"\r
                        (click)="validateSkill(skill.id, $event)"\r
                        [disabled]="skill.validee || isSkillValidating(skill.id)">\r
                        {{ skill.validee ? 'Valid\xE9e' : (isSkillValidating(skill.id) ? 'Validation...' : 'Valider') }}\r
                      </button>\r
                    }\r
                  </div>\r
                </li>\r
              }\r
            </ul>\r
          }\r
          <button class="btn-primary full-width mt-3" (click)="assignFormation()">Inviter \xE0 passer un test</button>\r
        </div>\r
      }\r
\r
      <!-- Tab 3: Formations -->\r
      @if (activeDrawerTab() === 'formations') {\r
        <div class="tab-pane">\r
          <div class="stats-row mb-3">\r
            <span><strong>{{ mockFormations.length }}</strong> Actives</span>\r
            <span><strong>1</strong> Termin\xE9e</span>\r
            <span><strong>0</strong> En attente</span>\r
          </div>\r
\r
          <ul class="list-cards">\r
            @for (form of mockFormations; track form.name) {\r
              <li>\r
                <div class="full-width">\r
                  <div class="d-flex justify-content-between">\r
                    <strong>{{ form.name }}</strong>\r
                    <span class="badge" [ngClass]="form.status === 'Termin\xE9e' ? 'success' : 'info'">{{ form.status }}</span>\r
                  </div>\r
                  <div class="progress-bar-bg mt-2">\r
                    <div class="progress-bar-fill" [style.width.%]="form.progress"></div>\r
                  </div>\r
                </div>\r
              </li>\r
            }\r
          </ul>\r
          <button class="btn-primary full-width mt-3" (click)="assignFormation()">Proposer une formation</button>\r
        </div>\r
      }\r
\r
      <!-- Tab 4: Pr\xE9diction IA -->\r
      @if (activeDrawerTab() === 'prediction') {\r
        <div class="tab-pane">\r
          <div class="ai-header">\r
            <span class="ai-icon">\u2728</span>\r
            <h4>Profil IA & Potentiel</h4>\r
          </div>\r
          \r
          <div class="mbti-card">\r
            <strong>Type de personnalit\xE9 : ENTJ</strong>\r
            <p>Le Commandant - Leader audacieux, imaginatif et dot\xE9 d'une forte volont\xE9.</p>\r
          </div>\r
\r
          <h4 class="mt-4">Correspondance de carri\xE8re</h4>\r
          <ul class="match-list">\r
            <li><span>Tech Lead</span> <strong>92%</strong></li>\r
            <li><span>Senior Developer</span> <strong>88%</strong></li>\r
            <li><span>Engineering Manager</span> <strong>75%</strong></li>\r
          </ul>\r
\r
          <button class="btn-secondary full-width mt-4">\u{1F504} R\xE9g\xE9n\xE9rer la pr\xE9diction</button>\r
        </div>\r
      }\r
\r
      <!-- Tab 5: Activit\xE9 -->\r
      @if (activeDrawerTab() === 'activite') {\r
        <div class="tab-pane">\r
          <div class="timeline">\r
            @for (act of mockActivities; track act.text) {\r
              <div class="timeline-item">\r
                <span class="timeline-icon">{{ act.icon }}</span>\r
                <div class="timeline-content">\r
                  <p>{{ act.text }}</p>\r
                  <small>{{ act.date }}</small>\r
                </div>\r
              </div>\r
            }\r
          </div>\r
        </div>\r
      }\r
    </div>\r
\r
    <!-- Drawer Footer -->\r
    <div class="drawer-footer">\r
      <button class="btn-outline" (click)="sendReminder()">\u2709\uFE0F Message</button>\r
      <button class="btn-outline" (click)="assignFormation()">\u{1F4DA} Formation</button>\r
      <button class="btn-danger" (click)="confirmDelete(user)">\u{1F6AB} D\xE9sactiver</button>\r
    </div>\r
  }\r
</div>\r
\r
<!-- Role Change Confirmation Modal -->\r
@if (showRoleConfirm()) {\r
  <div class="modal-overlay" (click)="cancelRoleChange()">\r
    <div class="modal-content" (click)="$event.stopPropagation()">\r
      <div class="modal-icon warning">\u26A0\uFE0F</div>\r
      <h3>Changement de R\xF4le</h3>\r
      <p>\xCAtes-vous s\xFBr de vouloir accorder le r\xF4le <strong>{{ pendingRoleChange()?.newRole }}</strong> ?</p>\r
      <div class="modal-actions">\r
        <button class="btn-cancel" (click)="cancelRoleChange()">Annuler</button>\r
        <button class="btn-confirm" (click)="confirmRoleChange()">Confirmer</button>\r
      </div>\r
    </div>\r
  </div>\r
}\r
\r
<!-- Delete Confirmation Modal -->\r
@if (showDeleteConfirm()) {\r
  <div class="modal-overlay" (click)="cancelDelete()">\r
    <div class="modal-content" (click)="$event.stopPropagation()">\r
      <div class="modal-icon danger">\u{1F5D1}\uFE0F</div>\r
      <h3>D\xE9sactiver le compte</h3>\r
      <p>Voulez-vous vraiment d\xE9sactiver le compte de <strong>{{ selectedUserForDelete()?.firstName }} {{ selectedUserForDelete()?.lastName }}</strong> ? Cette action restreindra son acc\xE8s.</p>\r
      <div class="modal-actions">\r
        <button class="btn-cancel" (click)="cancelDelete()">Annuler</button>\r
        <button class="btn-danger-confirm" (click)="deleteUser()">D\xE9sactiver</button>\r
      </div>\r
    </div>\r
  </div>\r
}\r
@if (showUserModal()) {\r
  <div class="modal-overlay" (click)="closeUserModal()">\r
    <div class="modal-content user-modal" (click)="$event.stopPropagation()">\r
      <div class="modal-header">\r
        <h3>{{ isEditing() ? 'Modifier l\\'utilisateur' : 'Ajouter un utilisateur' }}</h3>\r
        <button class="btn-close" (click)="closeUserModal()">\u2715</button>\r
      </div>\r
      \r
      <div class="modal-body">\r
        <form class="user-form">\r
          <div class="form-row">\r
            <div class="form-group">\r
              <label>Pr\xE9nom*</label>\r
              <input type="text" [(ngModel)]="userForm().firstName" name="firstName" placeholder="Jean">\r
            </div>\r
            <div class="form-group">\r
              <label>Nom*</label>\r
              <input type="text" [(ngModel)]="userForm().lastName" name="lastName" placeholder="Dupont">\r
            </div>\r
          </div>\r
\r
          <div class="form-group">\r
            <label>Email*</label>\r
            <input type="email" [(ngModel)]="userForm().email" name="email" placeholder="jean.dupont@entreprise.com">\r
          </div>\r
\r
          @if (!isEditing()) {\r
            <div class="form-group">\r
              <label>Mot de passe*</label>\r
              <input type="password" [(ngModel)]="userForm().password" name="password" placeholder="********">\r
            </div>\r
          }\r
\r
          <div class="form-row">\r
            <div class="form-group">\r
              <label>D\xE9partement</label>\r
              <input type="text" [(ngModel)]="userForm().department" name="department" placeholder="IT, RH, Marketing...">\r
            </div>\r
            <div class="form-group">\r
              <label>Poste</label>\r
              <input type="text" [(ngModel)]="userForm().position" name="position" placeholder="D\xE9veloppeur Senior...">\r
            </div>\r
          </div>\r
\r
          <div class="form-row">\r
            <div class="form-group">\r
              <label>R\xF4le</label>\r
              <select [(ngModel)]="userForm().role" name="role">\r
                <option value="USER">Utilisateur</option>\r
                <option value="ADMIN">Administrateur</option>\r
                <option value="RECRUITER">Recruteur</option>\r
              </select>\r
            </div>\r
            <div class="form-group">\r
              <label>Statut</label>\r
              <select [(ngModel)]="userForm().isActive" name="isActive">\r
                <option [ngValue]="true">Actif</option>\r
                <option [ngValue]="false">Inactif</option>\r
              </select>\r
            </div>\r
          </div>\r
        </form>\r
      </div>\r
\r
      <div class="modal-footer">\r
        <button class="btn-cancel" (click)="closeUserModal()">Annuler</button>\r
        <button class="btn-confirm" (click)="saveUser()" [disabled]="submitting()">\r
          {{ submitting() ? 'Enregistrement...' : (isEditing() ? 'Mettre \xE0 jour' : 'Cr\xE9er l\\'utilisateur') }}\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
}\r
`, styles: ['@charset "UTF-8";\n\n/* src/app/modules/admin/components/user-management/user-management.component.scss */\n:host {\n  display: block;\n  --primary: #4f46e5;\n  --primary-hover: #4338ca;\n  --secondary: #f3f4f6;\n  --text-main: #111827;\n  --text-muted: #6b7280;\n  --border: #e5e7eb;\n  --success: #10b981;\n  --success-bg: #d1fae5;\n  --warning: #f59e0b;\n  --warning-bg: #fef3c7;\n  --danger: #ef4444;\n  --danger-bg: #fee2e2;\n  --info: #3b82f6;\n  --info-bg: #dbeafe;\n  --admin-bg: #ede9fe;\n  --admin-color: #7c3aed;\n  font-family:\n    "Inter",\n    system-ui,\n    sans-serif;\n}\n.user-management {\n  padding: 2rem;\n  max-width: 1600px;\n  margin: 0 auto;\n  transition: padding-right 0.3s ease;\n}\n.user-management.drawer-open {\n  padding-right: calc(50vw + 2rem);\n}\n.page-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 2rem;\n}\n.page-header .header-left {\n  display: flex;\n  align-items: center;\n  gap: 1.25rem;\n}\n.page-header .header-left .header-icon {\n  width: 56px;\n  height: 56px;\n  border-radius: 16px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary),\n      #818cf8);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 4px 20px rgba(79, 70, 229, 0.3);\n}\n.page-header .header-left .header-icon svg {\n  width: 28px;\n  height: 28px;\n  color: white;\n}\n.page-header .header-left h2 {\n  font-size: 2rem;\n  font-weight: 800;\n  color: var(--text-main);\n  margin: 0;\n  letter-spacing: -0.025em;\n}\n.page-header .header-left .header-subtitle {\n  font-size: 1rem;\n  color: var(--text-muted);\n  margin: 0.25rem 0 0;\n}\n.page-header .header-actions {\n  display: flex;\n  gap: 1rem;\n}\n.page-header .header-actions button {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.25rem;\n  border-radius: 12px;\n  font-weight: 600;\n  font-size: 0.9rem;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.page-header .header-actions button.btn-primary {\n  background: var(--primary);\n  color: white;\n  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.2);\n}\n.page-header .header-actions button.btn-primary:hover {\n  background: var(--primary-hover);\n  transform: translateY(-2px);\n}\n.page-header .header-actions button.btn-secondary {\n  background: white;\n  color: var(--text-main);\n  border: 1px solid var(--border);\n}\n.page-header .header-actions button.btn-secondary:hover {\n  background: var(--secondary);\n}\n.stats-bar {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n  gap: 1rem;\n  margin-bottom: 2rem;\n}\n.stats-bar .stat-card {\n  background: white;\n  padding: 1.25rem;\n  border-radius: 16px;\n  border: 1px solid var(--border);\n  cursor: pointer;\n  transition: all 0.2s ease;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n}\n.stats-bar .stat-card:hover,\n.stats-bar .stat-card.active {\n  transform: translateY(-3px);\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);\n  border-color: var(--primary);\n}\n.stats-bar .stat-card .stat-value {\n  font-size: 2rem;\n  font-weight: 800;\n  color: var(--text-main);\n}\n.stats-bar .stat-card .stat-label {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  margin-top: 0.25rem;\n}\n.stats-bar .stat-card.stat-success .stat-value {\n  color: var(--success);\n}\n.stats-bar .stat-card.stat-info .stat-value {\n  color: var(--info);\n}\n.stats-bar .stat-card.stat-warning .stat-value {\n  color: var(--warning);\n}\n.stats-bar .stat-card.stat-danger .stat-value {\n  color: var(--danger);\n}\n.filters-container {\n  display: flex;\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n  flex-wrap: wrap;\n}\n.filters-container .search-box {\n  position: relative;\n  flex: 1;\n  min-width: 300px;\n}\n.filters-container .search-box svg {\n  position: absolute;\n  left: 1rem;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--text-muted);\n}\n.filters-container .search-box input {\n  width: 100%;\n  padding: 0.875rem 1rem 0.875rem 2.75rem;\n  border: 1px solid var(--border);\n  border-radius: 12px;\n  font-size: 0.95rem;\n  outline: none;\n  transition: border-color 0.2s, box-shadow 0.2s;\n}\n.filters-container .search-box input:focus {\n  border-color: var(--primary);\n  box-shadow: 0 0 0 4px rgba(79, 70, 229, 0.1);\n}\n.filters-container .filter-dropdowns {\n  display: flex;\n  gap: 0.75rem;\n}\n.filters-container .filter-dropdowns select {\n  padding: 0.875rem 2rem 0.875rem 1rem;\n  border: 1px solid var(--border);\n  border-radius: 12px;\n  background: white;\n  font-size: 0.9rem;\n  font-weight: 500;\n  color: var(--text-main);\n  cursor: pointer;\n  appearance: none;\n  background-image: url(data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%236b7280%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E);\n  background-repeat: no-repeat;\n  background-position: right 1rem top 50%;\n  background-size: 0.65rem auto;\n}\n.filters-container .filter-dropdowns select:focus {\n  border-color: var(--primary);\n  outline: none;\n}\n.bulk-actions-bar {\n  background: var(--primary);\n  border-radius: 12px;\n  padding: 1rem 1.5rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1.5rem;\n  animation: slideDown 0.3s ease;\n}\n.bulk-actions-bar .bulk-count {\n  color: white;\n  font-weight: 600;\n}\n.bulk-actions-bar .bulk-buttons {\n  display: flex;\n  gap: 0.75rem;\n}\n.bulk-actions-bar .bulk-buttons button {\n  background: rgba(255, 255, 255, 0.2);\n  border: none;\n  color: white;\n  padding: 0.5rem 1rem;\n  border-radius: 8px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.bulk-actions-bar .bulk-buttons button:hover {\n  background: rgba(255, 255, 255, 0.3);\n}\n.bulk-actions-bar .bulk-buttons button.text-danger {\n  background: rgba(239, 68, 68, 0.9);\n}\n.bulk-actions-bar .bulk-buttons button.text-danger:hover {\n  background: var(--danger);\n}\n.table-card {\n  background: white;\n  border-radius: 16px;\n  border: 1px solid var(--border);\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);\n  overflow: hidden;\n}\n.table-card .table-header-info {\n  padding: 1rem 1.5rem;\n  border-bottom: 1px solid var(--border);\n  font-size: 0.875rem;\n  color: var(--text-muted);\n  font-weight: 500;\n}\n.table-card .table-wrapper {\n  overflow-x: auto;\n}\n.table-card table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.table-card table th {\n  background: #f9fafb;\n  padding: 1rem 1.5rem;\n  text-align: left;\n  font-size: 0.75rem;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  border-bottom: 1px solid var(--border);\n}\n.table-card table td {\n  padding: 1rem 1.5rem;\n  vertical-align: middle;\n  border-bottom: 1px solid var(--border);\n}\n.table-card table .checkbox-cell {\n  width: 40px;\n  text-align: center;\n}\n.table-card table .checkbox-cell input {\n  width: 18px;\n  height: 18px;\n  cursor: pointer;\n  accent-color: var(--primary);\n}\n.table-card table .user-row {\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.table-card table .user-row:hover {\n  background: #f8fafc;\n}\n.table-card table .user-row.selected {\n  background: #eff6ff;\n}\n.user-cell {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.user-cell .user-avatar,\n.user-cell .user-avatar-initials {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  overflow: hidden;\n}\n.user-cell .user-avatar img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.user-cell .user-avatar-initials {\n  background: var(--info-bg);\n  color: var(--info);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 0.9rem;\n}\n.user-cell .user-info {\n  display: flex;\n  flex-direction: column;\n}\n.user-cell .user-info .user-name {\n  font-weight: 600;\n  color: var(--text-main);\n}\n.user-cell .user-info .user-email {\n  font-size: 0.85rem;\n  color: var(--text-muted);\n  text-decoration: none;\n}\n.user-cell .user-info .user-email:hover {\n  color: var(--primary);\n  text-decoration: underline;\n}\n.department {\n  font-weight: 500;\n  color: var(--text-main);\n}\n.department.empty {\n  color: var(--text-muted);\n  font-style: italic;\n}\n.role-badge-select {\n  padding: 0.25rem 0.75rem;\n  border-radius: 20px;\n  font-size: 0.75rem;\n  font-weight: 700;\n  border: none;\n  appearance: none;\n  cursor: pointer;\n  outline: none;\n}\n.role-badge-select.role-admin {\n  background: var(--admin-bg);\n  color: var(--admin-color);\n}\n.role-badge-select.role-user {\n  background: var(--info-bg);\n  color: var(--info);\n}\n.status-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.375rem;\n  padding: 0.25rem 0.75rem;\n  border-radius: 20px;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.status-badge .status-dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n}\n.status-badge.actif {\n  background: var(--success-bg);\n  color: #065f46;\n}\n.status-badge.actif .status-dot {\n  background: var(--success);\n}\n.status-badge.onboarding {\n  background: var(--info-bg);\n  color: #1e40af;\n}\n.status-badge.onboarding .status-dot {\n  background: var(--info);\n}\n.status-badge.inactif {\n  background: var(--secondary);\n  color: var(--text-muted);\n}\n.status-badge.inactif .status-dot {\n  background: var(--text-muted);\n}\n.status-badge.\\e0.risque,\n.status-badge.risque {\n  background: var(--danger-bg);\n  color: #991b1b;\n}\n.status-badge.\\e0.risque .status-dot,\n.status-badge.risque .status-dot {\n  background: var(--danger);\n}\n.score-cell {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.score-cell .score-bar-bg {\n  width: 60px;\n  height: 6px;\n  background: var(--secondary);\n  border-radius: 4px;\n  overflow: hidden;\n}\n.score-cell .score-bar-fill {\n  height: 100%;\n  border-radius: 4px;\n}\n.score-cell .score-bar-fill.high {\n  background: var(--success);\n}\n.score-cell .score-bar-fill.medium {\n  background: var(--warning);\n}\n.score-cell .score-bar-fill.low {\n  background: var(--danger);\n}\n.score-cell .score-text {\n  font-weight: 600;\n  font-size: 0.85rem;\n  width: 35px;\n}\n.count-badge {\n  background: var(--secondary);\n  color: var(--text-main);\n  padding: 0.15rem 0.5rem;\n  border-radius: 12px;\n  font-weight: 700;\n  font-size: 0.8rem;\n}\n.count-badge.danger {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.activity-text {\n  font-size: 0.85rem;\n  color: var(--text-muted);\n}\n.activity-text.danger {\n  color: var(--danger);\n  font-weight: 600;\n}\n.actions {\n  display: flex;\n  gap: 0.5rem;\n}\n.actions .btn-action {\n  background: none;\n  border: none;\n  font-size: 1.1rem;\n  cursor: pointer;\n  padding: 0.25rem;\n  border-radius: 6px;\n  transition: background 0.2s;\n}\n.actions .btn-action:hover {\n  background: var(--secondary);\n}\n.drawer-backdrop {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.4);\n  z-index: 99;\n  -webkit-backdrop-filter: blur(2px);\n  backdrop-filter: blur(2px);\n  animation: fadeIn 0.3s;\n}\n.side-drawer {\n  position: fixed;\n  top: 0;\n  right: -50vw;\n  width: 50vw;\n  height: 100vh;\n  background: white;\n  z-index: 100;\n  box-shadow: -10px 0 30px rgba(0, 0, 0, 0.1);\n  transition: right 0.4s cubic-bezier(0.16, 1, 0.3, 1);\n  display: flex;\n  flex-direction: column;\n}\n.side-drawer.open {\n  right: 0;\n}\n.side-drawer .drawer-header {\n  padding: 2rem;\n  border-bottom: 1px solid var(--border);\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  background: #fafaf9;\n}\n.side-drawer .drawer-header .drawer-user-main {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n}\n.side-drawer .drawer-header .drawer-user-main .drawer-avatar {\n  width: 64px;\n  height: 64px;\n  border-radius: 16px;\n  background: var(--primary);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.5rem;\n  font-weight: 700;\n}\n.side-drawer .drawer-header .drawer-user-main h3 {\n  margin: 0;\n  font-size: 1.5rem;\n  font-weight: 800;\n  color: var(--text-main);\n}\n.side-drawer .drawer-header .drawer-user-main .drawer-subtitle {\n  color: var(--text-muted);\n  font-size: 0.95rem;\n  margin-top: 0.25rem;\n  display: block;\n}\n.side-drawer .drawer-header .btn-close {\n  background: none;\n  border: none;\n  font-size: 1.5rem;\n  color: var(--text-muted);\n  cursor: pointer;\n}\n.side-drawer .drawer-header .btn-close:hover {\n  color: var(--text-main);\n}\n.side-drawer .drawer-tabs {\n  display: flex;\n  border-bottom: 1px solid var(--border);\n  padding: 0 2rem;\n  background: #fafaf9;\n}\n.side-drawer .drawer-tabs button {\n  padding: 1rem 1.5rem;\n  background: none;\n  border: none;\n  border-bottom: 3px solid transparent;\n  font-weight: 600;\n  color: var(--text-muted);\n  cursor: pointer;\n  font-size: 0.95rem;\n}\n.side-drawer .drawer-tabs button.active {\n  color: var(--primary);\n  border-bottom-color: var(--primary);\n}\n.side-drawer .drawer-tabs button:hover:not(.active) {\n  color: var(--text-main);\n}\n.side-drawer .drawer-content {\n  flex: 1;\n  overflow-y: auto;\n  padding: 2rem;\n}\n.side-drawer .drawer-content .tab-pane {\n  animation: fadeIn 0.3s;\n}\n.side-drawer .drawer-footer {\n  padding: 1.5rem 2rem;\n  border-top: 1px solid var(--border);\n  background: white;\n  display: flex;\n  gap: 1rem;\n  justify-content: space-between;\n}\n.side-drawer .drawer-footer button {\n  flex: 1;\n  padding: 0.875rem;\n  border-radius: 10px;\n  font-weight: 600;\n  cursor: pointer;\n  border: none;\n}\n.side-drawer .drawer-footer .btn-outline {\n  background: white;\n  border: 1px solid var(--border);\n  color: var(--text-main);\n}\n.side-drawer .drawer-footer .btn-outline:hover {\n  background: var(--secondary);\n}\n.side-drawer .drawer-footer .btn-danger {\n  background: var(--danger-bg);\n  color: var(--danger);\n}\n.side-drawer .drawer-footer .btn-danger:hover {\n  background: #fecaca;\n}\n.modal-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\n.modal-content {\n  background: white;\n  padding: 2.5rem;\n  border-radius: 20px;\n  width: 100%;\n  max-width: 450px;\n  text-align: center;\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n  animation: scaleUp 0.3s ease;\n}\n.modal-icon {\n  width: 64px;\n  height: 64px;\n  margin: 0 auto 1.5rem;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 2rem;\n}\n.modal-icon.warning {\n  background: var(--warning-bg);\n}\n.modal-icon.danger {\n  background: var(--danger-bg);\n}\n.modal-actions {\n  display: flex;\n  gap: 1rem;\n  margin-top: 2rem;\n}\n.modal-actions button {\n  flex: 1;\n  padding: 0.875rem;\n  border-radius: 10px;\n  font-weight: 600;\n  cursor: pointer;\n  border: none;\n}\n.modal-actions .btn-cancel {\n  background: var(--secondary);\n}\n.modal-actions .btn-confirm {\n  background: var(--primary);\n  color: white;\n}\n.modal-actions .btn-danger-confirm {\n  background: var(--danger);\n  color: white;\n}\n.mt-2 {\n  margin-top: 0.5rem;\n}\n.mt-3 {\n  margin-top: 1rem;\n}\n.mt-4 {\n  margin-top: 1.5rem;\n}\n.mb-3 {\n  margin-bottom: 1rem;\n}\n.full-width {\n  width: 100%;\n}\n.d-flex {\n  display: flex;\n}\n.justify-content-between {\n  justify-content: space-between;\n}\n.text-danger {\n  color: var(--danger);\n}\n.info-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1.5rem;\n}\n.info-group label {\n  display: block;\n  font-size: 0.8rem;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  font-weight: 700;\n  margin-bottom: 0.25rem;\n}\n.info-group p {\n  margin: 0;\n  font-weight: 500;\n  font-size: 0.95rem;\n}\n.link-buttons {\n  display: flex;\n  gap: 0.5rem;\n}\n.link-buttons .btn-outline {\n  padding: 0.5rem 1rem;\n  border: 1px solid var(--border);\n  border-radius: 8px;\n  background: white;\n  font-weight: 600;\n  cursor: pointer;\n}\n.admin-note textarea {\n  width: 100%;\n  min-height: 100px;\n  padding: 1rem;\n  border: 1px solid var(--border);\n  border-radius: 12px;\n  margin-top: 0.5rem;\n  font-family: inherit;\n  resize: vertical;\n}\n.score-overview {\n  display: flex;\n  gap: 2rem;\n  align-items: center;\n  background: #f8fafc;\n  padding: 1.5rem;\n  border-radius: 16px;\n  border: 1px solid var(--border);\n}\n.score-ring {\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  border: 8px solid var(--primary);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.score-ring .score-ring-value {\n  font-size: 1.5rem;\n  font-weight: 800;\n}\n.badge {\n  padding: 0.25rem 0.75rem;\n  border-radius: 20px;\n  font-weight: 600;\n  font-size: 0.8rem;\n}\n.badge.success {\n  background: var(--success-bg);\n  color: #065f46;\n}\n.badge.danger {\n  background: var(--danger-bg);\n  color: #991b1b;\n}\n.badge.info {\n  background: var(--info-bg);\n  color: #1e40af;\n}\n.list-cards {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.list-cards li {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.25rem;\n  border: 1px solid var(--border);\n  border-radius: 12px;\n}\n.skill-actions {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.progress-bar-bg {\n  width: 100%;\n  height: 6px;\n  background: var(--secondary);\n  border-radius: 4px;\n}\n.progress-bar-bg .progress-bar-fill {\n  height: 100%;\n  background: var(--primary);\n  border-radius: 4px;\n}\n.timeline {\n  border-left: 2px solid var(--border);\n  margin-left: 1rem;\n  padding-left: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.timeline-item {\n  position: relative;\n}\n.timeline-item .timeline-icon {\n  position: absolute;\n  left: -2.3rem;\n  top: 0;\n  background: white;\n  padding: 0.25rem;\n  border-radius: 50%;\n  font-size: 1.2rem;\n}\n.timeline-item .timeline-content p {\n  margin: 0;\n  font-weight: 500;\n}\n.timeline-item .timeline-content small {\n  color: var(--text-muted);\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes scaleUp {\n  from {\n    opacity: 0;\n    transform: scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n.user-modal {\n  max-width: 650px;\n  text-align: left;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n}\n.user-modal .modal-header {\n  padding: 1.5rem 2rem;\n  border-bottom: 1px solid var(--border);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.user-modal .modal-header h3 {\n  margin: 0;\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: var(--text-main);\n}\n.user-modal .modal-header .btn-close {\n  background: none;\n  border: none;\n  font-size: 1.25rem;\n  color: var(--text-muted);\n  cursor: pointer;\n}\n.user-modal .modal-header .btn-close:hover {\n  color: var(--text-main);\n}\n.user-modal .modal-body {\n  padding: 2rem;\n  max-height: 70vh;\n  overflow-y: auto;\n}\n.user-modal .modal-footer {\n  padding: 1.5rem 2rem;\n  border-top: 1px solid var(--border);\n  display: flex;\n  justify-content: flex-end;\n  gap: 1rem;\n}\n.user-modal .modal-footer button {\n  padding: 0.75rem 1.5rem;\n  border-radius: 10px;\n  font-weight: 600;\n  cursor: pointer;\n  border: none;\n  transition: all 0.2s;\n}\n.user-modal .modal-footer button.btn-cancel {\n  background: var(--secondary);\n  color: var(--text-main);\n}\n.user-modal .modal-footer button.btn-cancel:hover {\n  background: var(--border);\n}\n.user-modal .modal-footer button.btn-confirm {\n  background: var(--primary);\n  color: white;\n}\n.user-modal .modal-footer button.btn-confirm:hover {\n  background: var(--primary-hover);\n  transform: translateY(-1px);\n}\n.user-modal .modal-footer button.btn-confirm:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.user-form {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.user-form .form-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n}\n.user-form .form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.user-form .form-group label {\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: var(--text-muted);\n}\n.user-form .form-group input,\n.user-form .form-group select {\n  padding: 0.75rem 1rem;\n  border: 1px solid var(--border);\n  border-radius: 10px;\n  font-size: 0.95rem;\n  outline: none;\n  transition: all 0.2s;\n}\n.user-form .form-group input:focus,\n.user-form .form-group select:focus {\n  border-color: var(--primary);\n  box-shadow: 0 0 0 4px rgba(79, 70, 229, 0.1);\n}\n.btn-ghost {\n  background: none;\n  border: none;\n  padding: 0.5rem;\n  border-radius: 8px;\n  cursor: pointer;\n  color: var(--text-muted);\n}\n.btn-ghost:hover {\n  background: var(--secondary);\n  color: var(--text-main);\n}\n/*# sourceMappingURL=user-management.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserManagementComponent, { className: "UserManagementComponent", filePath: "app/modules/admin/components/user-management/user-management.component.ts", lineNumber: 21 });
})();
export {
  UserManagementComponent
};
//# sourceMappingURL=chunk-PEUL4VKM.js.map
