import {
  RecruiterApiService
} from "./chunk-N4EM47FJ.js";
import {
  DashboardService
} from "./chunk-C5PRPZTN.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-P6A3FBJJ.js";
import {
  NotificationService
} from "./chunk-MNIKYIXT.js";
import {
  CommonModule,
  Component,
  HttpClient,
  Injectable,
  NgStyle,
  SlicePipe,
  catchError,
  computed,
  environment,
  finalize,
  forkJoin,
  inject,
  of,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate6,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-RJXMOIA6.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-DOECEMG6.js";

// src/app/modules/admin/services/campaign.service.ts
var CampaignService = class _CampaignService {
  http = inject(HttpClient);
  baseUrl = `${environment.apiUrl}/admin/campaigns`;
  listCampaigns() {
    return this.http.get(this.baseUrl);
  }
  saveCampaign(payload) {
    return this.http.post(this.baseUrl, payload);
  }
  static \u0275fac = function CampaignService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CampaignService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CampaignService, factory: _CampaignService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CampaignService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/modules/admin/components/campaign-manager/campaign-manager.component.ts
var _c0 = (a0) => ({ "background-color": a0 });
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.key;
var _forTrack2 = ($index, $item) => $item.userId;
function CampaignManagerComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 39);
    \u0275\u0275listener("click", function CampaignManagerComponent_Conditional_20_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.startNewCampaign());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 40);
    \u0275\u0275element(2, "line", 41)(3, "line", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Nouvelle Campagne ");
    \u0275\u0275elementEnd();
  }
}
function CampaignManagerComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 39);
    \u0275\u0275listener("click", function CampaignManagerComponent_Conditional_21_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.startNewTemplate());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 40);
    \u0275\u0275element(2, "line", 41)(3, "line", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Nouveau Template ");
    \u0275\u0275elementEnd();
  }
}
function CampaignManagerComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.loadError());
  }
}
function CampaignManagerComponent_Conditional_84_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u26A0\uFE0F Taux de livraison critique: ", ctx_r1.deliveryRate(), "% \u2014 V\xE9rifier la configuration");
  }
}
function CampaignManagerComponent_Conditional_85_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275listener("click", function CampaignManagerComponent_Conditional_85_For_4_Template_div_click_0_listener() {
      const t_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectTemplate(t_r5));
    });
    \u0275\u0275elementStart(1, "div", 50)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 51)(5, "button", 52);
    \u0275\u0275listener("click", function CampaignManagerComponent_Conditional_85_For_4_Template_button_click_5_listener($event) {
      const t_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r1.duplicateTemplate(t_r5));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 53);
    \u0275\u0275element(7, "rect", 54)(8, "path", 55);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "button", 56);
    \u0275\u0275listener("click", function CampaignManagerComponent_Conditional_85_For_4_Template_button_click_9_listener($event) {
      const t_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r1.deleteTemplate(t_r5.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(10, "svg", 53);
    \u0275\u0275element(11, "polyline", 57)(12, "path", 58)(13, "path", 59);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(14, "p", 60);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 61);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "p", 62);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "slice");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 63)(22, "span", 64);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 65);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_11_0;
    const t_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("selected", ((tmp_11_0 = ctx_r1.selectedTemplate()) == null ? null : tmp_11_0.id) === t_r5.id);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(\u0275\u0275interpolate1("channel-badge ch-", t_r5.channel.toLowerCase()));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", ctx_r1.getChannelIcon(t_r5.channel), " ", t_r5.channel);
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(t_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r5.category);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind3(20, 12, t_r5.body, 0, 80), "...");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", t_r5.variables.length, " variables");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r5.createdAt);
  }
}
function CampaignManagerComponent_Conditional_85_Conditional_6_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 67)(1, "label", 68);
    \u0275\u0275text(2, "Sujet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 69);
    \u0275\u0275listener("ngModelChange", function CampaignManagerComponent_Conditional_85_Conditional_6_Conditional_33_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.updateTemplateField("subject", $event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx_r1.isCreatingTemplate() ? ctx_r1.newTemplate.subject : (tmp_3_0 = ctx_r1.selectedTemplate()) == null ? null : tmp_3_0.subject);
  }
}
function CampaignManagerComponent_Conditional_85_Conditional_6_Conditional_40_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 85);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const v_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate("{{" + v_r8 + "}}");
  }
}
function CampaignManagerComponent_Conditional_85_Conditional_6_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 81)(1, "span", 84);
    \u0275\u0275text(2, "Variables d\xE9tect\xE9es:");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, CampaignManagerComponent_Conditional_85_Conditional_6_Conditional_40_For_4_Template, 2, 1, "span", 85, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.selectedTemplate().variables);
  }
}
function CampaignManagerComponent_Conditional_85_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 47)(1, "h3", 66);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 67)(4, "label", 68);
    \u0275\u0275text(5, "Nom du Template *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 69);
    \u0275\u0275listener("ngModelChange", function CampaignManagerComponent_Conditional_85_Conditional_6_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateTemplateField("name", $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 67)(8, "label", 68);
    \u0275\u0275text(9, "Cat\xE9gorie");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "select", 69);
    \u0275\u0275listener("ngModelChange", function CampaignManagerComponent_Conditional_85_Conditional_6_Template_select_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateTemplateField("category", $event));
    });
    \u0275\u0275elementStart(11, "option", 70);
    \u0275\u0275text(12, "Test & \xC9valuation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "option", 71);
    \u0275\u0275text(14, "Formation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "option", 72);
    \u0275\u0275text(16, "Onboarding");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "option", 73);
    \u0275\u0275text(18, "S\xE9curit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "option", 74);
    \u0275\u0275text(20, "G\xE9n\xE9ral");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 67)(22, "label", 68);
    \u0275\u0275text(23, "Canal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "select", 69);
    \u0275\u0275listener("ngModelChange", function CampaignManagerComponent_Conditional_85_Conditional_6_Template_select_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateTemplateField("channel", $event));
    });
    \u0275\u0275elementStart(25, "option", 75);
    \u0275\u0275text(26, "\u{1F4F1} SMS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "option", 76);
    \u0275\u0275text(28, "\u{1F4E7} Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "option", 77);
    \u0275\u0275text(30, "\u{1F514} Notification In-App");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "option", 78);
    \u0275\u0275text(32, "\u{1F4AC} WhatsApp");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(33, CampaignManagerComponent_Conditional_85_Conditional_6_Conditional_33_Template, 4, 1, "div", 67);
    \u0275\u0275elementStart(34, "div", 67)(35, "label", 68);
    \u0275\u0275text(36, "Corps du message * ");
    \u0275\u0275elementStart(37, "span", 79);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "textarea", 80);
    \u0275\u0275listener("ngModelChange", function CampaignManagerComponent_Conditional_85_Conditional_6_Template_textarea_ngModelChange_39_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateTemplateField("body", $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(40, CampaignManagerComponent_Conditional_85_Conditional_6_Conditional_40_Template, 5, 0, "div", 81);
    \u0275\u0275elementStart(41, "div", 82)(42, "button", 39);
    \u0275\u0275listener("click", function CampaignManagerComponent_Conditional_85_Conditional_6_Template_button_click_42_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.isCreatingTemplate() ? ctx_r1.saveNewTemplate() : ctx_r1.saveEditedTemplate());
    });
    \u0275\u0275text(43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "button", 83);
    \u0275\u0275listener("click", function CampaignManagerComponent_Conditional_85_Conditional_6_Template_button_click_44_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.isCreatingTemplate.set(false);
      return \u0275\u0275resetView(ctx_r1.selectedTemplate.set(null));
    });
    \u0275\u0275text(45, "Annuler");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_8_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.isCreatingTemplate() ? "Nouveau Template" : "Modifier Template");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r1.isCreatingTemplate() ? ctx_r1.newTemplate.name : (tmp_3_0 = ctx_r1.selectedTemplate()) == null ? null : tmp_3_0.name);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r1.isCreatingTemplate() ? ctx_r1.newTemplate.category : (tmp_4_0 = ctx_r1.selectedTemplate()) == null ? null : tmp_4_0.category);
    \u0275\u0275advance(14);
    \u0275\u0275property("ngModel", ctx_r1.isCreatingTemplate() ? ctx_r1.newTemplate.channel : (tmp_5_0 = ctx_r1.selectedTemplate()) == null ? null : tmp_5_0.channel);
    \u0275\u0275advance(9);
    \u0275\u0275conditional((ctx_r1.isCreatingTemplate() ? ctx_r1.newTemplate.channel : ctx_r1.selectedTemplate().channel) === "EMAIL" ? 33 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Utilisez ", "{{variable}}");
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.isCreatingTemplate() ? ctx_r1.newTemplate.body : (tmp_8_0 = ctx_r1.selectedTemplate()) == null ? null : tmp_8_0.body);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.isCreatingTemplate() ? 40 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.isCreatingTemplate() ? "Sauvegarder" : "Mettre \xE0 jour", " ");
  }
}
function CampaignManagerComponent_Conditional_85_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 86);
    \u0275\u0275element(2, "path", 20)(3, "polyline", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "S\xE9lectionnez un template pour le modifier,");
    \u0275\u0275element(6, "br");
    \u0275\u0275text(7, "ou cr\xE9ez-en un nouveau");
    \u0275\u0275elementEnd()();
  }
}
function CampaignManagerComponent_Conditional_85_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "div", 43)(2, "div", 44);
    \u0275\u0275repeaterCreate(3, CampaignManagerComponent_Conditional_85_For_4_Template, 26, 16, "div", 45, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 46);
    \u0275\u0275conditionalCreate(6, CampaignManagerComponent_Conditional_85_Conditional_6_Template, 46, 9, "div", 47)(7, CampaignManagerComponent_Conditional_85_Conditional_7_Template, 8, 0, "div", 48);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.templates());
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.isCreatingTemplate() || ctx_r1.selectedTemplate() ? 6 : 7);
  }
}
function CampaignManagerComponent_Conditional_86_Conditional_12_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 95);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r11 = ctx.$implicit;
    \u0275\u0275property("value", t_r11.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", t_r11.name, " (", t_r11.channel, ")");
  }
}
function CampaignManagerComponent_Conditional_86_Conditional_12_For_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 95);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const group_r12 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("value", group_r12.key);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", group_r12.label, " (", ctx_r1.getTargetGroupCount(group_r12.key), ")");
  }
}
function CampaignManagerComponent_Conditional_86_Conditional_12_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 96);
    \u0275\u0275text(1, "\u26A0\uFE0F Groupe vide!");
    \u0275\u0275elementEnd();
  }
}
function CampaignManagerComponent_Conditional_86_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 89)(1, "h3");
    \u0275\u0275text(2, "Nouvelle Campagne");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 93)(4, "div", 67)(5, "label", 68);
    \u0275\u0275text(6, "Nom *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 69);
    \u0275\u0275twoWayListener("ngModelChange", function CampaignManagerComponent_Conditional_86_Conditional_12_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.newCampaign.name, $event) || (ctx_r1.newCampaign.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 67)(9, "label", 68);
    \u0275\u0275text(10, "Template *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "select", 69);
    \u0275\u0275twoWayListener("ngModelChange", function CampaignManagerComponent_Conditional_86_Conditional_12_Template_select_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.newCampaign.templateId, $event) || (ctx_r1.newCampaign.templateId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(12, "option", 94);
    \u0275\u0275text(13, "\u2014 S\xE9lectionner \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(14, CampaignManagerComponent_Conditional_86_Conditional_12_For_15_Template, 2, 3, "option", 95, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 67)(17, "label", 68);
    \u0275\u0275text(18, "Canal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "select", 69);
    \u0275\u0275twoWayListener("ngModelChange", function CampaignManagerComponent_Conditional_86_Conditional_12_Template_select_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.newCampaign.channel, $event) || (ctx_r1.newCampaign.channel = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(20, "option", 75);
    \u0275\u0275text(21, "\u{1F4F1} SMS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "option", 76);
    \u0275\u0275text(23, "\u{1F4E7} Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "option", 77);
    \u0275\u0275text(25, "\u{1F514} In-App");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "option", 78);
    \u0275\u0275text(27, "\u{1F4AC} WhatsApp");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 67)(29, "label", 68);
    \u0275\u0275text(30, "Groupe cible");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "select", 69);
    \u0275\u0275twoWayListener("ngModelChange", function CampaignManagerComponent_Conditional_86_Conditional_12_Template_select_ngModelChange_31_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.newCampaign.targetGroup, $event) || (ctx_r1.newCampaign.targetGroup = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(32, CampaignManagerComponent_Conditional_86_Conditional_12_For_33_Template, 2, 3, "option", 95, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(34, CampaignManagerComponent_Conditional_86_Conditional_12_Conditional_34_Template, 2, 0, "span", 96);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 67)(36, "label", 68);
    \u0275\u0275text(37, "Planification (optionnel)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "input", 97);
    \u0275\u0275twoWayListener("ngModelChange", function CampaignManagerComponent_Conditional_86_Conditional_12_Template_input_ngModelChange_38_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.newCampaign.scheduledAt, $event) || (ctx_r1.newCampaign.scheduledAt = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(39, "div", 98)(40, "button", 39);
    \u0275\u0275listener("click", function CampaignManagerComponent_Conditional_86_Conditional_12_Template_button_click_40_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.createCampaign());
    });
    \u0275\u0275text(41, "Cr\xE9er la campagne");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "button", 83);
    \u0275\u0275listener("click", function CampaignManagerComponent_Conditional_86_Conditional_12_Template_button_click_42_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.cancelCampaignCreate());
    });
    \u0275\u0275text(43, "Annuler");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newCampaign.name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newCampaign.templateId);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.templates());
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newCampaign.channel);
    \u0275\u0275advance(12);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newCampaign.targetGroup);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.targetGroupOptions);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.getTargetGroupCount(ctx_r1.newCampaign.targetGroup) === 0 ? 34 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newCampaign.scheduledAt);
  }
}
function CampaignManagerComponent_Conditional_86_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 91);
    \u0275\u0275text(1, "Aucune campagne.");
    \u0275\u0275elementEnd();
  }
}
function CampaignManagerComponent_Conditional_86_For_16_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 96);
    \u0275\u0275text(1, "\u26A0\uFE0F Groupe vide!");
    \u0275\u0275elementEnd();
  }
}
function CampaignManagerComponent_Conditional_86_For_16_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 108)(1, "div", 113)(2, "span", 114);
    \u0275\u0275text(3, "Progression");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 115);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 116);
    \u0275\u0275element(7, "span", 117);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r14 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r1.getCampaignProgress(c_r14), "%");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r1.getCampaignProgress(c_r14), "%");
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(4, _c0, ctx_r1.getCampaignProgress(c_r14) >= 80 ? "#22c55e" : ctx_r1.getCampaignProgress(c_r14) >= 40 ? "#f59e0b" : "#ef4444"));
  }
}
function CampaignManagerComponent_Conditional_86_For_16_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 109)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r14 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Ouvertures: ", c_r14.openRate);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Clics: ", c_r14.clickRate);
  }
}
function CampaignManagerComponent_Conditional_86_For_16_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 118);
    \u0275\u0275listener("click", function CampaignManagerComponent_Conditional_86_For_16_Conditional_36_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const c_r14 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.launchCampaign(c_r14.id));
    });
    \u0275\u0275text(1, "Lancer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 119);
    \u0275\u0275listener("click", function CampaignManagerComponent_Conditional_86_For_16_Conditional_36_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r15);
      const c_r14 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.pauseCampaign(c_r14.id));
    });
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r14 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(c_r14.isPaused ? "Reprendre" : "Pause");
  }
}
function CampaignManagerComponent_Conditional_86_For_16_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 111);
    \u0275\u0275text(1, "R\xE9sultats");
    \u0275\u0275elementEnd();
  }
}
function CampaignManagerComponent_Conditional_86_For_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 92)(1, "div", 99)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "h3", 100);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 101);
    \u0275\u0275text(9, "Template: ");
    \u0275\u0275elementStart(10, "strong");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "p", 101);
    \u0275\u0275text(13, "Groupe: ");
    \u0275\u0275elementStart(14, "strong");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(16, CampaignManagerComponent_Conditional_86_For_16_Conditional_16_Template, 2, 0, "span", 96);
    \u0275\u0275elementStart(17, "div", 102)(18, "div", 103)(19, "span", 104);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 105);
    \u0275\u0275text(22, "Destinat.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 103)(24, "span", 106);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span", 105);
    \u0275\u0275text(27, "Envoy\xE9s");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 103)(29, "span", 107);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span", 105);
    \u0275\u0275text(32, "\xC9chou\xE9s");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(33, CampaignManagerComponent_Conditional_86_For_16_Conditional_33_Template, 8, 6, "div", 108);
    \u0275\u0275conditionalCreate(34, CampaignManagerComponent_Conditional_86_For_16_Conditional_34_Template, 5, 2, "div", 109);
    \u0275\u0275elementStart(35, "div", 110);
    \u0275\u0275conditionalCreate(36, CampaignManagerComponent_Conditional_86_For_16_Conditional_36_Template, 4, 1);
    \u0275\u0275conditionalCreate(37, CampaignManagerComponent_Conditional_86_For_16_Conditional_37_Template, 2, 0, "button", 111);
    \u0275\u0275elementStart(38, "button", 112);
    \u0275\u0275listener("click", function CampaignManagerComponent_Conditional_86_For_16_Template_button_click_38_listener() {
      const c_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.duplicateCampaign(c_r14.id));
    });
    \u0275\u0275text(39, "Dupliquer");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const c_r14 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(\u0275\u0275interpolate1("channel-badge ch-", c_r14.channel.toLowerCase()));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", ctx_r1.getChannelIcon(c_r14.channel), " ", c_r14.channel);
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275interpolate1("status-tag ", ctx_r1.getStatusClass(c_r14.status)));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r14.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r14.name);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(c_r14.templateName);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.getTargetGroupLabel(c_r14.targetGroup));
    \u0275\u0275advance();
    \u0275\u0275conditional(c_r14.recipientCount === 0 && c_r14.status !== "BROUILLON" ? 16 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(c_r14.recipientCount);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(c_r14.sentCount);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(c_r14.failedCount);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(c_r14.status !== "BROUILLON" ? 33 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(c_r14.status === "ENVOY\xC9" ? 34 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(c_r14.status === "BROUILLON" || c_r14.status === "PLANIFI\xC9" ? 36 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(c_r14.status === "ENVOY\xC9" ? 37 : -1);
  }
}
function CampaignManagerComponent_Conditional_86_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36)(1, "div", 87)(2, "button", 88);
    \u0275\u0275listener("click", function CampaignManagerComponent_Conditional_86_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.campaignFilter.set("ALL"));
    });
    \u0275\u0275text(3, "Toutes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 88);
    \u0275\u0275listener("click", function CampaignManagerComponent_Conditional_86_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.campaignFilter.set("BROUILLON"));
    });
    \u0275\u0275text(5, "Brouillons");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 88);
    \u0275\u0275listener("click", function CampaignManagerComponent_Conditional_86_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.campaignFilter.set("PLANIFI\xC9"));
    });
    \u0275\u0275text(7, "Planifi\xE9es");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 88);
    \u0275\u0275listener("click", function CampaignManagerComponent_Conditional_86_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.campaignFilter.set("ENVOY\xC9"));
    });
    \u0275\u0275text(9, "Envoy\xE9es");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 88);
    \u0275\u0275listener("click", function CampaignManagerComponent_Conditional_86_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.campaignFilter.set("\xC9CHOU\xC9"));
    });
    \u0275\u0275text(11, "\xC9chou\xE9es");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(12, CampaignManagerComponent_Conditional_86_Conditional_12_Template, 44, 6, "div", 89);
    \u0275\u0275elementStart(13, "div", 90);
    \u0275\u0275conditionalCreate(14, CampaignManagerComponent_Conditional_86_Conditional_14_Template, 2, 0, "div", 91);
    \u0275\u0275repeaterCreate(15, CampaignManagerComponent_Conditional_86_For_16_Template, 40, 20, "div", 92, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275classProp("btn-primary", ctx_r1.campaignFilter() === "ALL")("btn-ghost", ctx_r1.campaignFilter() !== "ALL");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("btn-primary", ctx_r1.campaignFilter() === "BROUILLON")("btn-ghost", ctx_r1.campaignFilter() !== "BROUILLON");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("btn-primary", ctx_r1.campaignFilter() === "PLANIFI\xC9")("btn-ghost", ctx_r1.campaignFilter() !== "PLANIFI\xC9");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("btn-primary", ctx_r1.campaignFilter() === "ENVOY\xC9")("btn-ghost", ctx_r1.campaignFilter() !== "ENVOY\xC9");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("btn-primary", ctx_r1.campaignFilter() === "\xC9CHOU\xC9")("btn-ghost", ctx_r1.campaignFilter() !== "\xC9CHOU\xC9");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.isCreatingCampaign() ? 12 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.filteredCampaigns().length === 0 ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.filteredCampaigns());
  }
}
function CampaignManagerComponent_Conditional_87_For_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 140);
    \u0275\u0275listener("click", function CampaignManagerComponent_Conditional_87_For_15_Template_div_click_0_listener() {
      const user_r18 = \u0275\u0275restoreView(_r17).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleUserSelection(user_r18));
    });
    \u0275\u0275element(1, "input", 141);
    \u0275\u0275elementStart(2, "div")(3, "strong", 142);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "small", 143);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const user_r18 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r1.dmSelectedUsers().includes(user_r18));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", user_r18.firstName, " ", user_r18.lastName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r18.email);
  }
}
function CampaignManagerComponent_Conditional_87_For_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 132);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "span", 144);
    \u0275\u0275listener("click", function CampaignManagerComponent_Conditional_87_For_24_Template_span_click_2_listener() {
      const u_r20 = \u0275\u0275restoreView(_r19).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleUserSelection(u_r20));
    });
    \u0275\u0275text(3, "\xD7");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const u_r20 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", u_r20.firstName, " ", u_r20.lastName, " ");
  }
}
function CampaignManagerComponent_Conditional_87_For_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const msg_r21 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(msg_r21.sentAt));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(msg_r21.subject);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getChannelIcon(msg_r21.channel));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", msg_r21.recipients.length, " user(s)");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", msg_r21.readCount, "/", msg_r21.recipients.length, " lu(s)");
  }
}
function CampaignManagerComponent_Conditional_87_Conditional_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 145);
    \u0275\u0275text(2, "Aucun historique.");
    \u0275\u0275elementEnd()();
  }
}
function CampaignManagerComponent_Conditional_87_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37)(1, "div", 120)(2, "h3");
    \u0275\u0275text(3, "S\xE9lection des destinataires");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 121)(5, "input", 122);
    \u0275\u0275twoWayListener("ngModelChange", function CampaignManagerComponent_Conditional_87_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.dmSearchQuery, $event) || (ctx_r1.dmSearchQuery = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 123)(7, "input", 124);
    \u0275\u0275twoWayListener("ngModelChange", function CampaignManagerComponent_Conditional_87_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.dmFilterDept, $event) || (ctx_r1.dmFilterDept = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 125)(9, "button", 126);
    \u0275\u0275listener("click", function CampaignManagerComponent_Conditional_87_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectAllUsers());
    });
    \u0275\u0275text(10, "Tout s\xE9lectionner");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 127);
    \u0275\u0275listener("click", function CampaignManagerComponent_Conditional_87_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearSelection());
    });
    \u0275\u0275text(12, "Effacer");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 128);
    \u0275\u0275repeaterCreate(14, CampaignManagerComponent_Conditional_87_For_15_Template, 7, 4, "div", 129, _forTrack2);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 130)(17, "h3");
    \u0275\u0275text(18, "Composition du message");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 121)(20, "label", 68);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 131);
    \u0275\u0275repeaterCreate(23, CampaignManagerComponent_Conditional_87_For_24_Template, 4, 2, "span", 132, _forTrack2);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 67)(26, "label", 68);
    \u0275\u0275text(27, "Canal d'envoi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "select", 69);
    \u0275\u0275twoWayListener("ngModelChange", function CampaignManagerComponent_Conditional_87_Template_select_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.dmChannel, $event) || (ctx_r1.dmChannel = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(29, "option", 77);
    \u0275\u0275text(30, "\u{1F514} Notification In-App (Centre de notifs)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "option", 76);
    \u0275\u0275text(32, "\u{1F4E7} Email (Adresse de l'employ\xE9)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "option", 133);
    \u0275\u0275text(34, "\u{1F4AC} Les deux");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(35, "div", 67)(36, "label", 68);
    \u0275\u0275text(37, "Sujet / Titre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "input", 134);
    \u0275\u0275twoWayListener("ngModelChange", function CampaignManagerComponent_Conditional_87_Template_input_ngModelChange_38_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.dmSubject, $event) || (ctx_r1.dmSubject = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 67)(40, "label", 68);
    \u0275\u0275text(41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "textarea", 135);
    \u0275\u0275twoWayListener("ngModelChange", function CampaignManagerComponent_Conditional_87_Template_textarea_ngModelChange_42_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.dmBody, $event) || (ctx_r1.dmBody = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 136)(44, "button", 137);
    \u0275\u0275listener("click", function CampaignManagerComponent_Conditional_87_Template_button_click_44_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sendDirectMessage());
    });
    \u0275\u0275text(45);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(46, "hr", 138);
    \u0275\u0275elementStart(47, "h3");
    \u0275\u0275text(48, "Historique des envois directs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "table", 139)(50, "thead")(51, "tr")(52, "th");
    \u0275\u0275text(53, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "th");
    \u0275\u0275text(55, "Sujet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "th");
    \u0275\u0275text(57, "Canal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "th");
    \u0275\u0275text(59, "Destinataires");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "th");
    \u0275\u0275text(61, "Ouvertures");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(62, "tbody");
    \u0275\u0275repeaterCreate(63, CampaignManagerComponent_Conditional_87_For_64_Template, 11, 6, "tr", null, _forTrack0);
    \u0275\u0275conditionalCreate(65, CampaignManagerComponent_Conditional_87_Conditional_65_Template, 3, 0, "tr");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.dmSearchQuery);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.dmFilterDept);
    \u0275\u0275advance(7);
    \u0275\u0275repeater(ctx_r1.dmPeoplePickerResults());
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("Destinataires s\xE9lectionn\xE9s (", ctx_r1.dmSelectedUsers().length, ")");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.dmSelectedUsers());
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.dmChannel);
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.dmSubject);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate6("Message (variables: ", "{", "prenom", "}", ", ", "{", "nom", "}", ", ", "{", "score", "}", ")");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.dmBody);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.dmSending());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.dmSending() ? "Envoi en cours..." : "Envoyer maintenant", " ");
    \u0275\u0275advance(18);
    \u0275\u0275repeater(ctx_r1.directMessages());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.directMessages().length === 0 ? 65 : -1);
  }
}
function CampaignManagerComponent_Conditional_88_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 158);
    \u0275\u0275text(2, "Aucun log disponible.");
    \u0275\u0275elementEnd()();
  }
}
function CampaignManagerComponent_Conditional_88_For_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 159);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td")(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td", 160);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 161);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const log_r23 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(log_r23.recipient);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(log_r23.campaignName);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(\u0275\u0275interpolate1("channel-badge ch-", log_r23.channel.toLowerCase()));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", ctx_r1.getChannelIcon(log_r23.channel), " ", log_r23.channel);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(\u0275\u0275interpolate1("status-tag ", ctx_r1.getStatusClass(log_r23.status)));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(log_r23.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(log_r23.sentAt));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(log_r23.errorMessage || "\u2014");
  }
}
function CampaignManagerComponent_Conditional_88_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38)(1, "div", 146)(2, "div", 147);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 19);
    \u0275\u0275element(4, "circle", 148)(5, "line", 149);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "input", 150);
    \u0275\u0275listener("ngModelChange", function CampaignManagerComponent_Conditional_88_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.logSearch.set($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 151)(8, "span", 152);
    \u0275\u0275element(9, "span", 153);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 152);
    \u0275\u0275element(12, "span", 154);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 152);
    \u0275\u0275element(15, "span", 155);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 156)(18, "table", 157)(19, "thead")(20, "tr")(21, "th");
    \u0275\u0275text(22, "Destinataire");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th");
    \u0275\u0275text(24, "Campagne");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "th");
    \u0275\u0275text(26, "Canal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "th");
    \u0275\u0275text(28, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "th");
    \u0275\u0275text(30, "Date d'envoi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "th");
    \u0275\u0275text(32, "Note");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "tbody");
    \u0275\u0275conditionalCreate(34, CampaignManagerComponent_Conditional_88_Conditional_34_Template, 3, 0, "tr");
    \u0275\u0275repeaterCreate(35, CampaignManagerComponent_Conditional_88_For_36_Template, 15, 13, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("ngModel", ctx_r1.logSearch());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r1.getLogCount("LIVR\xC9"), " Livr\xE9s");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.getLogCount("\xC9CHOU\xC9"), " \xC9chou\xE9s");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.getLogCount("EN ATTENTE"), " En attente");
    \u0275\u0275advance(18);
    \u0275\u0275conditional(ctx_r1.filteredLogs().length === 0 ? 34 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.filteredLogs());
  }
}
var CampaignManagerComponent = class _CampaignManagerComponent {
  notificationService = inject(NotificationService);
  dashboardService = inject(DashboardService);
  recruiterApiService = inject(RecruiterApiService);
  campaignService = inject(CampaignService);
  http = inject(HttpClient);
  activeTab = signal("templates", ...ngDevMode ? [{ debugName: "activeTab" }] : []);
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  loadError = signal(null, ...ngDevMode ? [{ debugName: "loadError" }] : []);
  lastSync = signal("--", ...ngDevMode ? [{ debugName: "lastSync" }] : []);
  sendingEmail = signal(false, ...ngDevMode ? [{ debugName: "sendingEmail" }] : []);
  // New Direct Messaging State
  dmSearchQuery = signal("", ...ngDevMode ? [{ debugName: "dmSearchQuery" }] : []);
  dmFilterDept = signal("", ...ngDevMode ? [{ debugName: "dmFilterDept" }] : []);
  dmFilterStatus = signal("", ...ngDevMode ? [{ debugName: "dmFilterStatus" }] : []);
  dmSelectedUsers = signal([], ...ngDevMode ? [{ debugName: "dmSelectedUsers" }] : []);
  dmChannel = signal("IN_APP", ...ngDevMode ? [{ debugName: "dmChannel" }] : []);
  dmSubject = signal("", ...ngDevMode ? [{ debugName: "dmSubject" }] : []);
  dmBody = signal("", ...ngDevMode ? [{ debugName: "dmBody" }] : []);
  dmSending = signal(false, ...ngDevMode ? [{ debugName: "dmSending" }] : []);
  directMessages = signal([], ...ngDevMode ? [{ debugName: "directMessages" }] : []);
  // Filters for campaigns
  campaignFilter = signal("ALL", ...ngDevMode ? [{ debugName: "campaignFilter" }] : []);
  sourceEmployees = signal([], ...ngDevMode ? [{ debugName: "sourceEmployees" }] : []);
  candidateRows = signal([], ...ngDevMode ? [{ debugName: "candidateRows" }] : []);
  candidateIndex = computed(() => new Map(this.candidateRows().map((candidate) => [candidate.userId, candidate])), ...ngDevMode ? [{ debugName: "candidateIndex" }] : []);
  targetGroupOptions = [
    { key: "ALL_EMPLOYEES", label: "Tous les employ\xE9s" },
    { key: "ACTIVE_EMPLOYEES", label: "Employ\xE9s actifs" },
    { key: "PENDING_ASSESSMENT", label: "\xC9valuation en attente" },
    { key: "TRAINING_IN_PROGRESS", label: "Formation en cours" },
    { key: "HIGH_FRAUD_RISK", label: "Haut risque de fraude" }
  ];
  // ── Template Editor ───────────────────────────────────────────
  templates = signal([
    {
      id: "t1",
      name: "Invitation au test",
      channel: "EMAIL",
      category: "Test & \xC9valuation",
      subject: "Votre test TalentPredict",
      body: "Bonjour {{prenom}}, vous avez \xE9t\xE9 invit\xE9 \xE0 passer le test TalentPredict. Commencez ici: {{lien_test}}",
      variables: ["prenom", "lien_test"],
      createdAt: "2026-03-15"
    },
    {
      id: "t2",
      name: "Mise \xE0 jour Onboarding",
      channel: "EMAIL",
      category: "Onboarding",
      subject: "Bienvenue chez TalentPredict",
      body: "Cher(e) {{prenom}} {{nom}},\n\nVotre profil est pr\xEAt.\n\nCordialement,\nL'\xE9quipe RH",
      variables: ["prenom", "nom"],
      createdAt: "2026-03-20"
    },
    {
      id: "t3",
      name: "Rappel de formation",
      channel: "IN_APP",
      category: "Formation",
      subject: "Rappel: Formation en attente",
      body: "Bonjour {{prenom}}, n'oubliez pas de terminer votre formation {{formation}}.",
      variables: ["prenom", "formation"],
      createdAt: "2026-04-01"
    }
  ], ...ngDevMode ? [{ debugName: "templates" }] : []);
  selectedTemplate = signal(null, ...ngDevMode ? [{ debugName: "selectedTemplate" }] : []);
  isCreatingTemplate = signal(false, ...ngDevMode ? [{ debugName: "isCreatingTemplate" }] : []);
  newTemplate = {
    name: "",
    channel: "EMAIL",
    category: "G\xE9n\xE9ral",
    subject: "",
    body: ""
  };
  // ── Campaigns ─────────────────────────────────────────────────
  campaigns = signal([], ...ngDevMode ? [{ debugName: "campaigns" }] : []);
  filteredCampaigns = computed(() => {
    const f = this.campaignFilter();
    return f === "ALL" ? this.campaigns() : this.campaigns().filter((c) => c.status === f);
  }, ...ngDevMode ? [{ debugName: "filteredCampaigns" }] : []);
  totalRecipients = computed(() => this.campaigns().reduce((sum, c) => sum + c.recipientCount, 0), ...ngDevMode ? [{ debugName: "totalRecipients" }] : []);
  totalSent = computed(() => this.campaigns().reduce((sum, c) => sum + c.sentCount, 0), ...ngDevMode ? [{ debugName: "totalSent" }] : []);
  totalFailed = computed(() => this.campaigns().reduce((sum, c) => sum + c.failedCount, 0), ...ngDevMode ? [{ debugName: "totalFailed" }] : []);
  scheduledCampaigns = computed(() => this.campaigns().filter((c) => c.status === "PLANIFI\xC9").length, ...ngDevMode ? [{ debugName: "scheduledCampaigns" }] : []);
  deliveryRate = computed(() => {
    const recipients = this.totalRecipients();
    if (recipients === 0)
      return 0;
    return Math.round(this.totalSent() / recipients * 100);
  }, ...ngDevMode ? [{ debugName: "deliveryRate" }] : []);
  isCreatingCampaign = signal(false, ...ngDevMode ? [{ debugName: "isCreatingCampaign" }] : []);
  newCampaign = {
    name: "",
    templateId: "",
    channel: "EMAIL",
    targetGroup: "ALL_EMPLOYEES",
    scheduledAt: ""
  };
  // ── Delivery Logs ─────────────────────────────────────────────
  deliveryLogs = signal([], ...ngDevMode ? [{ debugName: "deliveryLogs" }] : []);
  logSearch = signal("", ...ngDevMode ? [{ debugName: "logSearch" }] : []);
  filteredLogs = computed(() => {
    const q = this.logSearch().toLowerCase();
    return q ? this.deliveryLogs().filter((l) => l.recipient.toLowerCase().includes(q) || l.campaignName.toLowerCase().includes(q)) : this.deliveryLogs();
  }, ...ngDevMode ? [{ debugName: "filteredLogs" }] : []);
  // Direct Messaging People Picker
  dmPeoplePickerResults = computed(() => {
    const q = this.dmSearchQuery().toLowerCase();
    const d = this.dmFilterDept().toLowerCase();
    return this.candidateRows().filter((c) => {
      const matchQ = !q || (c.firstName + " " + c.lastName).toLowerCase().includes(q) || c.email.toLowerCase().includes(q);
      const dept = this.sourceEmployees().find((e) => e.id === c.userId)?.department || "";
      const matchD = !d || dept.toLowerCase().includes(d);
      return matchQ && matchD;
    }).slice(0, 50);
  }, ...ngDevMode ? [{ debugName: "dmPeoplePickerResults" }] : []);
  ngOnInit() {
    this.loadLiveContext();
  }
  refreshLiveData() {
    if (this.loading())
      return;
    this.loadLiveContext(true);
  }
  setTab(tab) {
    this.activeTab.set(tab);
  }
  // ── DM actions ──────────────────────────────────────────────
  toggleUserSelection(user) {
    const current = this.dmSelectedUsers();
    if (current.find((u) => u.userId === user.userId)) {
      this.dmSelectedUsers.set(current.filter((u) => u.userId !== user.userId));
    } else {
      this.dmSelectedUsers.set([...current, user]);
    }
  }
  selectAllUsers() {
    this.dmSelectedUsers.set([...this.dmPeoplePickerResults()]);
  }
  clearSelection() {
    this.dmSelectedUsers.set([]);
  }
  sendDirectMessage() {
    if (this.dmSelectedUsers().length === 0) {
      this.notificationService.error("Veuillez s\xE9lectionner au moins un destinataire.");
      return;
    }
    if (!this.dmBody().trim()) {
      this.notificationService.error("Le corps du message ne peut pas \xEAtre vide.");
      return;
    }
    this.dmSending.set(true);
    const reqs = this.dmSelectedUsers().map((user) => {
      const emp = this.sourceEmployees().find((e) => e.id === user.userId);
      const bodyReplaced = this.dmBody().replace(/{prenom}/g, user.firstName || "").replace(/{nom}/g, user.lastName || "").replace(/{score}/g, (user.realScore || 0).toString());
      if (this.dmChannel() === "EMAIL" || this.dmChannel() === "BOTH") {
        return this.recruiterApiService.sendCampaignEmail({
          userId: user.userId,
          candidateUsername: user.email,
          campaignContext: "Direct Message",
          targetUrl: window.location.origin,
          subject: this.dmSubject() || "Message de l'administration",
          body: bodyReplaced
        });
      } else {
        return this.http.post(`${environment.apiUrl}/notifications`, {
          type: "INFO",
          title: this.dmSubject() || "Nouveau message",
          body: bodyReplaced,
          targetUserId: user.userId
        }).pipe(catchError((err) => {
          console.error("Backend error:", err.error);
          return of(null);
        }));
      }
    });
    forkJoin(reqs).pipe(finalize(() => this.dmSending.set(false))).subscribe({
      next: () => {
        this.notificationService.success("Message direct envoy\xE9 avec succ\xE8s!");
        const dm = {
          id: "dm" + Date.now(),
          recipients: this.dmSelectedUsers().map((u) => u.email),
          subject: this.dmSubject() || "Sans objet",
          body: this.dmBody(),
          channel: this.dmChannel(),
          sentAt: (/* @__PURE__ */ new Date()).toISOString(),
          readCount: 0
        };
        this.directMessages.update((dms) => [dm, ...dms]);
        this.dmBody.set("");
        this.dmSubject.set("");
        this.dmSelectedUsers.set([]);
      },
      error: () => this.notificationService.error("Erreur lors de l'envoi.")
    });
  }
  // ── Template actions ──────────────────────────────────────────
  selectTemplate(t) {
    this.selectedTemplate.set(__spreadValues({}, t));
    this.isCreatingTemplate.set(false);
  }
  startNewTemplate() {
    this.newTemplate = { name: "", channel: "EMAIL", category: "G\xE9n\xE9ral", subject: "", body: "" };
    this.isCreatingTemplate.set(true);
    this.selectedTemplate.set(null);
  }
  updateTemplateField(field, value) {
    if (this.isCreatingTemplate()) {
      this.newTemplate[field] = value;
    } else {
      const current = this.selectedTemplate();
      if (current) {
        this.selectedTemplate.set(__spreadProps(__spreadValues({}, current), { [field]: value }));
      }
    }
  }
  saveNewTemplate() {
    if (!this.newTemplate.name || !this.newTemplate.body) {
      this.notificationService.error("Remplissez le nom et le corps du template.");
      return;
    }
    const t = {
      id: "t" + Date.now(),
      name: this.newTemplate.name,
      channel: this.newTemplate.channel || "EMAIL",
      category: this.newTemplate.category || "G\xE9n\xE9ral",
      subject: this.newTemplate.subject || "",
      body: this.newTemplate.body,
      variables: this.extractVariables(this.newTemplate.body),
      createdAt: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10)
    };
    this.templates.update((ts) => [t, ...ts]);
    this.isCreatingTemplate.set(false);
    this.selectedTemplate.set(t);
    this.notificationService.success("Template sauvegard\xE9 avec succ\xE8s!");
  }
  saveEditedTemplate() {
    const t = this.selectedTemplate();
    if (!t)
      return;
    t.variables = this.extractVariables(t.body);
    this.templates.update((ts) => ts.map((x) => x.id === t.id ? t : x));
    this.notificationService.success("Template mis \xE0 jour!");
  }
  deleteTemplate(id) {
    this.templates.update((ts) => ts.filter((t) => t.id !== id));
    if (this.selectedTemplate()?.id === id)
      this.selectedTemplate.set(null);
    this.notificationService.success("Template supprim\xE9.");
  }
  duplicateTemplate(t) {
    const dup = __spreadProps(__spreadValues({}, t), { id: "t" + Date.now(), name: t.name + " (copie)" });
    this.templates.update((ts) => [dup, ...ts]);
    this.notificationService.info("Template dupliqu\xE9.");
  }
  extractVariables(body) {
    const matches = body.match(/\{\{(\w+)\}\}/g) || [];
    return [...new Set(matches.map((m) => m.replace(/[{}]/g, "")))];
  }
  // ── Campaign actions ──────────────────────────────────────────
  startNewCampaign() {
    this.newCampaign = {
      name: "",
      templateId: "",
      channel: "EMAIL",
      targetGroup: "ALL_EMPLOYEES",
      scheduledAt: ""
    };
    this.isCreatingCampaign.set(true);
  }
  createCampaign() {
    if (!this.newCampaign.name || !this.newCampaign.templateId) {
      this.notificationService.error("Remplissez les champs obligatoires.");
      return;
    }
    const selectedGroup = this.newCampaign.targetGroup || "ALL_EMPLOYEES";
    const tmpl = this.templates().find((t) => t.id === this.newCampaign.templateId);
    const campaignDraft = {
      id: "draft",
      name: this.newCampaign.name,
      templateId: this.newCampaign.templateId,
      templateName: tmpl?.name || "\u2014",
      channel: this.newCampaign.channel || "EMAIL",
      targetGroup: selectedGroup,
      recipientCount: 0,
      status: this.newCampaign.scheduledAt ? "PLANIFI\xC9" : "BROUILLON",
      scheduledAt: this.newCampaign.scheduledAt || "",
      sentCount: 0,
      failedCount: 0
    };
    const hydratedCampaign = this.hydrateCampaign(campaignDraft);
    if (hydratedCampaign.recipientCount === 0 && campaignDraft.status !== "BROUILLON") {
      this.notificationService.error("Attention: Groupe cible vide (0 destinataires).");
      return;
    }
    const payload = this.toUpsertPayload(hydratedCampaign, false);
    this.loading.set(true);
    this.campaignService.saveCampaign(payload).pipe(finalize(() => this.loading.set(false))).subscribe({
      next: (saved) => {
        const normalized = this.normalizeCampaign(saved);
        const hydrated = this.hydrateCampaign(normalized);
        this.campaigns.update((cs) => [hydrated, ...cs]);
        this.rebuildLogs();
        this.isCreatingCampaign.set(false);
        this.notificationService.success("Campagne cr\xE9\xE9e avec succ\xE8s.");
      },
      error: () => {
        this.notificationService.error("Erreur lors de la cr\xE9ation de la campagne.");
      }
    });
  }
  cancelCampaignCreate() {
    this.isCreatingCampaign.set(false);
  }
  launchCampaign(campaignId) {
    const campaign = this.campaigns().find((c) => c.id === campaignId);
    if (campaign && campaign.recipientCount === 0) {
      this.notificationService.error("Impossible de lancer: aucun destinataire dans ce groupe.");
      return;
    }
    if (!campaign)
      return;
    const updated = this.hydrateCampaign(__spreadProps(__spreadValues({}, campaign), {
      status: "ENVOY\xC9",
      scheduledAt: campaign.scheduledAt || (/* @__PURE__ */ new Date()).toISOString()
    }));
    this.persistCampaignUpdate(updated, "Campagne lanc\xE9e.");
  }
  pauseCampaign(campaignId) {
    const campaign = this.campaigns().find((c) => c.id === campaignId);
    if (!campaign)
      return;
    const updated = __spreadProps(__spreadValues({}, campaign), { isPaused: !campaign.isPaused });
    this.persistCampaignUpdate(this.hydrateCampaign(updated), "Statut mis \xE0 jour.");
  }
  duplicateCampaign(campaignId) {
    const source = this.campaigns().find((c) => c.id === campaignId);
    if (!source)
      return;
    const duplicate = __spreadProps(__spreadValues({}, source), {
      id: "draft",
      name: `Copie de ${source.name}`,
      status: "BROUILLON",
      sentCount: 0,
      failedCount: 0,
      scheduledAt: ""
    });
    const hydrated = this.hydrateCampaign(duplicate);
    const payload = this.toUpsertPayload(hydrated, false);
    this.campaignService.saveCampaign(payload).subscribe({
      next: (saved) => {
        const normalized = this.normalizeCampaign(saved);
        const persisted = this.hydrateCampaign(normalized);
        this.campaigns.update((cs) => [persisted, ...cs]);
        this.notificationService.info("Campagne dupliqu\xE9e comme brouillon.");
      },
      error: () => {
        this.notificationService.error("Erreur lors de la duplication de la campagne.");
      }
    });
  }
  getCampaignProgress(campaign) {
    if (campaign.status === "BROUILLON")
      return 0;
    if (campaign.recipientCount <= 0)
      return 0;
    if (campaign.status === "PLANIFI\xC9" && campaign.sentCount === 0)
      return 0;
    return Math.min(100, Math.round(campaign.sentCount / campaign.recipientCount * 100));
  }
  getTargetGroupLabel(group) {
    return this.targetGroupOptions.find((option) => option.key === group)?.label || group;
  }
  getTargetGroupCount(group) {
    return this.getTargetEmployees(group).length;
  }
  // ── Helpers ───────────────────────────────────────────────────
  getStatusClass(status) {
    const map = {
      "ENVOY\xC9": "tag-sent",
      "PLANIFI\xC9": "tag-scheduled",
      "BROUILLON": "tag-draft",
      "\xC9CHOU\xC9": "tag-failed",
      "LIVR\xC9": "tag-sent",
      "EN ATTENTE": "tag-scheduled"
    };
    return map[status] || "tag-draft";
  }
  getChannelIcon(ch) {
    return ch === "SMS" ? "\u{1F4F1}" : ch === "EMAIL" ? "\u{1F4E7}" : ch === "IN_APP" ? "\u{1F514}" : "\u{1F4AC}";
  }
  formatDate(d) {
    if (!d)
      return "\u2014";
    return new Date(d).toLocaleString("fr-FR", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" });
  }
  getLogCount(status) {
    return this.deliveryLogs().filter((l) => l.status === status).length;
  }
  loadLiveContext(showToast = false) {
    this.loadError.set(null);
    this.loading.set(true);
    forkJoin({
      overview: this.dashboardService.getAdminOverview(),
      candidates: this.recruiterApiService.listCandidates().pipe(catchError(() => of([]))),
      campaigns: this.campaignService.listCampaigns().pipe(catchError(() => of([])))
    }).pipe(finalize(() => this.loading.set(false))).subscribe({
      next: ({ overview, candidates, campaigns }) => {
        this.sourceEmployees.set(overview.employees ?? []);
        this.candidateRows.set(candidates);
        const normalized = campaigns.map((campaign) => this.normalizeCampaign(campaign));
        this.syncCampaignsWithLiveData(normalized);
        this.lastSync.set(this.getNowLabel());
        if (showToast) {
          this.notificationService.success("Donn\xE9es synchronis\xE9es.");
        }
      },
      error: () => {
        this.loadError.set("Impossible de charger les donn\xE9es live.");
      }
    });
  }
  syncCampaignsWithLiveData(campaigns) {
    const source = campaigns ?? this.campaigns();
    this.campaigns.set(source.map((campaign) => this.hydrateCampaign(campaign)));
    this.rebuildLogs();
  }
  hydrateCampaign(campaign) {
    const recipients = this.getTargetEmployees(campaign.targetGroup);
    const recipientCount = recipients.length;
    if (campaign.status === "ENVOY\xC9") {
      const failedCount = this.estimateFailedRecipients(recipients);
      const sentCount = Math.max(0, recipientCount - failedCount);
      return __spreadProps(__spreadValues({}, campaign), {
        recipientCount,
        sentCount,
        failedCount,
        openRate: Math.round(sentCount * 0.6),
        // mock stats
        clickRate: Math.round(sentCount * 0.2)
      });
    }
    if (campaign.status === "\xC9CHOU\xC9") {
      return __spreadProps(__spreadValues({}, campaign), { recipientCount, sentCount: 0, failedCount: recipientCount });
    }
    return __spreadProps(__spreadValues({}, campaign), { recipientCount, sentCount: 0, failedCount: 0 });
  }
  rebuildLogs() {
    const sentCampaigns = this.campaigns().filter((campaign) => campaign.status === "ENVOY\xC9");
    const logs = [];
    for (const campaign of sentCampaigns) {
      const recipients = this.getTargetEmployees(campaign.targetGroup).slice(0, 40);
      for (const recipient of recipients) {
        const risk = this.getRiskLevel(recipient.id);
        const status = !recipient.active || risk === "high" ? "\xC9CHOU\xC9" : risk === "medium" ? "EN ATTENTE" : "LIVR\xC9";
        logs.push({
          id: `${campaign.id}-${recipient.id}`,
          campaignName: campaign.name,
          recipient: recipient.email,
          channel: campaign.channel,
          status,
          sentAt: campaign.scheduledAt,
          errorMessage: status === "\xC9CHOU\xC9" ? !recipient.active ? "Profil inactif" : "Bloqu\xE9 par fraude" : void 0
        });
      }
    }
    this.deliveryLogs.set(logs);
  }
  normalizeCampaign(campaign) {
    return __spreadProps(__spreadValues({}, campaign), {
      recipientCount: campaign.recipientCount ?? 0,
      sentCount: campaign.sentCount ?? 0,
      failedCount: campaign.failedCount ?? 0,
      isPaused: campaign.isPaused ?? false,
      scheduledAt: campaign.scheduledAt ?? ""
    });
  }
  toUpsertPayload(campaign, includeId = true) {
    const payload = {
      id: includeId ? campaign.id : void 0,
      name: campaign.name,
      templateId: campaign.templateId,
      templateName: campaign.templateName,
      channel: campaign.channel,
      targetGroup: campaign.targetGroup,
      recipientCount: campaign.recipientCount,
      status: campaign.status,
      scheduledAt: campaign.scheduledAt ? campaign.scheduledAt : null,
      sentCount: campaign.sentCount,
      failedCount: campaign.failedCount,
      openRate: campaign.openRate,
      clickRate: campaign.clickRate,
      isPaused: campaign.isPaused ?? false
    };
    if (!includeId) {
      delete payload.id;
    }
    return payload;
  }
  persistCampaignUpdate(campaign, successMessage) {
    const payload = this.toUpsertPayload(campaign, true);
    this.campaignService.saveCampaign(payload).subscribe({
      next: (saved) => {
        const normalized = this.normalizeCampaign(saved);
        const hydrated = this.hydrateCampaign(normalized);
        this.campaigns.update((cs) => cs.map((c) => c.id === hydrated.id ? hydrated : c));
        this.rebuildLogs();
        this.notificationService.success(successMessage);
      },
      error: () => {
        this.notificationService.error("Erreur lors de la mise \xE0 jour de la campagne.");
      }
    });
  }
  getTargetEmployees(group) {
    const employees = this.sourceEmployees();
    switch (group) {
      case "ALL_EMPLOYEES":
        return employees;
      case "ACTIVE_EMPLOYEES":
        return employees.filter((employee) => employee.active);
      case "PENDING_ASSESSMENT":
        return employees.filter((employee) => employee.testCount === 0);
      case "TRAINING_IN_PROGRESS":
        return employees.filter((employee) => employee.formationCount > 0);
      case "HIGH_FRAUD_RISK":
        return employees.filter((employee) => {
          const risk = this.getRiskLevel(employee.id);
          return risk === "high" || risk === "medium";
        });
      default:
        return employees;
    }
  }
  estimateFailedRecipients(recipients) {
    return recipients.filter((recipient) => !recipient.active || this.getRiskLevel(recipient.id) === "high").length;
  }
  getRiskLevel(userId) {
    const candidate = this.candidateIndex().get(userId);
    const normalized = (candidate?.fraudRisk ?? "").toLowerCase();
    if (normalized === "high")
      return "high";
    if (normalized === "medium")
      return "medium";
    return "low";
  }
  getNowLabel() {
    return (/* @__PURE__ */ new Date()).toLocaleString("fr-FR", {
      day: "2-digit",
      month: "short",
      hour: "2-digit",
      minute: "2-digit"
    });
  }
  static \u0275fac = function CampaignManagerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CampaignManagerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CampaignManagerComponent, selectors: [["app-campaign-manager"]], decls: 89, vars: 31, consts: [[1, "campaign-manager"], [1, "cm-header"], [1, "header-left"], [1, "header-icon"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M22 2L11 13"], ["points", "22 2 15 22 11 13 2 9 22 2"], [1, "header-sub"], [1, "header-actions"], [1, "btn", "btn-glass", 3, "click", "disabled"], ["width", "15", "height", "15", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.3"], ["points", "23 4 23 10 17 10"], ["d", "M20.49 15a9 9 0 11-2.12-9.36L23 10"], [1, "btn", "btn-secondary", 3, "click"], [1, "btn", "btn-primary"], [1, "cm-alert", "cm-alert-error"], [1, "cm-live-note"], [1, "tab-bar"], [1, "tab-btn", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"], ["points", "14 2 14 8 20 8"], [1, "tab-count"], ["d", "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"], ["d", "M9 11l3 3L22 4"], ["d", "M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"], [1, "ops-strip"], [1, "ops-item"], [1, "ops-label"], [1, "ops-value"], [1, "ops-divider"], [1, "ops-value", "ops-good"], [1, "ops-value", "ops-bad"], ["title", "Si < 20%, v\xE9rifiez la configuration des e-mails!", 1, "ops-item"], [1, "cm-alert", "cm-alert-error", 2, "margin-left", "auto", "margin-bottom", "0", "padding", "8px"], [1, "templates-layout"], [1, "campaigns-layout"], [1, "dm-layout", 2, "display", "grid", "grid-template-columns", "1fr 2fr", "gap", "20px"], [1, "logs-layout"], [1, "btn", "btn-primary", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5"], ["x1", "12", "y1", "5", "x2", "12", "y2", "19"], ["x1", "5", "y1", "12", "x2", "19", "y2", "12"], [1, "template-list-col"], [1, "template-list"], [1, "template-card", 3, "selected"], [1, "template-editor-col"], [1, "editor-panel", "animate-fade-in"], [1, "editor-empty"], [1, "template-card", 3, "click"], [1, "tc-top"], [2, "display", "flex", "gap", "5px"], ["title", "Dupliquer", 1, "tc-delete", 3, "click"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x", "9", "y", "9", "width", "13", "height", "13", "rx", "2", "ry", "2"], ["d", "M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"], ["title", "Supprimer", 1, "tc-delete", 3, "click"], ["points", "3 6 5 6 21 6"], ["d", "M19 6l-1 14H6L5 6"], ["d", "M10 11v6M14 11v6"], [1, "tc-name"], [1, "tc-cat-badge"], [1, "tc-preview"], [1, "tc-footer"], [1, "tc-vars"], [1, "tc-date"], [1, "editor-title"], [1, "form-group"], [1, "form-label"], [1, "form-input", 3, "ngModelChange", "ngModel"], ["value", "Test & \xC9valuation"], ["value", "Formation"], ["value", "Onboarding"], ["value", "S\xE9curit\xE9"], ["value", "G\xE9n\xE9ral"], ["value", "SMS"], ["value", "EMAIL"], ["value", "IN_APP"], ["value", "WHATSAPP"], [1, "var-hint"], ["rows", "8", 1, "form-input", "editor-textarea", 3, "ngModelChange", "ngModel"], [1, "variables-row"], [1, "editor-actions"], [1, "btn", "btn-ghost", 3, "click"], [1, "vars-label"], [1, "var-chip"], ["width", "48", "height", "48", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5"], [1, "campaign-filters"], [1, "btn", "btn-sm", 3, "click"], [1, "create-campaign-panel", "animate-fade-in"], [1, "campaign-grid"], [1, "campaign-empty"], [1, "campaign-card"], [1, "cc-grid"], ["value", ""], [3, "value"], [1, "ops-bad", 2, "font-size", "12px"], ["type", "datetime-local", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "cc-actions"], [1, "cc-top-row"], [1, "cc-title"], [1, "cc-meta"], [1, "cc-stats"], [1, "cc-stat"], [1, "cs-val"], [1, "cs-lbl"], [1, "cs-val", "cs-green"], [1, "cs-val", "cs-red"], [1, "cc-progress"], [2, "font-size", "12px", "margin-top", "10px", "color", "#64748b", "display", "flex", "justify-content", "space-between"], [1, "cc-card-actions"], [1, "btn", "btn-secondary", "btn-sm"], [1, "btn", "btn-ghost", "btn-sm", 3, "click"], [1, "cc-progress-row"], [1, "cc-progress-label"], [1, "cc-progress-value"], [1, "cc-progress-track"], [1, "cc-progress-fill", 3, "ngStyle"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "btn", "btn-secondary", "btn-sm", 3, "click"], [1, "dm-picker", 2, "background", "white", "padding", "20px", "border-radius", "8px", "border", "1px solid #e2e8f0"], [2, "margin-bottom", "15px"], ["type", "text", "placeholder", "Chercher par nom ou email...", 1, "form-input", 3, "ngModelChange", "ngModel"], [2, "display", "flex", "gap", "10px", "margin-bottom", "15px"], ["type", "text", "placeholder", "D\xE9partement...", 1, "form-input", 3, "ngModelChange", "ngModel"], [2, "display", "flex", "justify-content", "space-between", "margin-bottom", "10px"], [1, "btn", "btn-sm", "btn-secondary", 3, "click"], [1, "btn", "btn-sm", "btn-ghost", 3, "click"], [1, "picker-list", 2, "max-height", "400px", "overflow-y", "auto", "border", "1px solid #e2e8f0", "border-radius", "6px"], [1, "picker-item", 2, "padding", "10px", "border-bottom", "1px solid #e2e8f0", "display", "flex", "align-items", "center", "gap", "10px", "cursor", "pointer"], [1, "dm-composer", 2, "background", "white", "padding", "20px", "border-radius", "8px", "border", "1px solid #e2e8f0"], [2, "display", "flex", "flex-wrap", "wrap", "gap", "5px"], [1, "var-chip", 2, "display", "flex", "align-items", "center", "gap", "5px"], ["value", "BOTH"], ["placeholder", "Ex: Rappel de v\xE9rification de profil", 1, "form-input", 3, "ngModelChange", "ngModel"], ["rows", "6", "placeholder", "\xC9crivez votre message ici...", 1, "form-input", 3, "ngModelChange", "ngModel"], [2, "text-align", "right", "margin-top", "20px"], [1, "btn", "btn-primary", 3, "click", "disabled"], [2, "margin", "30px 0", "border", "none", "border-top", "1px solid #e2e8f0"], [1, "data-table", 2, "margin-top", "15px"], [1, "picker-item", 2, "padding", "10px", "border-bottom", "1px solid #e2e8f0", "display", "flex", "align-items", "center", "gap", "10px", "cursor", "pointer", 3, "click"], ["type", "checkbox", 3, "checked"], [2, "display", "block", "font-size", "14px"], [2, "color", "#64748b"], [2, "cursor", "pointer", "color", "#ef4444", 3, "click"], ["colspan", "5", 2, "text-align", "center", "padding", "20px"], [1, "logs-toolbar"], [1, "search-wrap"], ["cx", "11", "cy", "11", "r", "8"], ["x1", "21", "y1", "21", "x2", "16.65", "y2", "16.65"], ["placeholder", "Rechercher destinataire...", "id", "log-search", 1, "form-input", "search-input", 3, "ngModelChange", "ngModel"], [1, "log-stats"], [1, "log-stat-item"], [1, "dot", "dot-green"], [1, "dot", "dot-red"], [1, "dot", "dot-yellow"], [1, "table-container"], [1, "data-table"], ["colspan", "6", 1, "log-empty-row"], [1, "log-recipient"], [1, "log-time"], [1, "log-error"]], template: function CampaignManagerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "header", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(4, "svg", 4);
      \u0275\u0275element(5, "path", 5)(6, "polygon", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(7, "div")(8, "h1");
      \u0275\u0275text(9, "Hub de Communication");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "p", 7);
      \u0275\u0275text(11, "Messagerie en direct pour les talents, propuls\xE9e par TalentPredict");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(12, "div", 8)(13, "button", 9);
      \u0275\u0275listener("click", function CampaignManagerComponent_Template_button_click_13_listener() {
        return ctx.refreshLiveData();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(14, "svg", 10);
      \u0275\u0275element(15, "polyline", 11)(16, "path", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275text(17);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(18, "button", 13);
      \u0275\u0275listener("click", function CampaignManagerComponent_Template_button_click_18_listener() {
        return ctx.setTab("direct_messages");
      });
      \u0275\u0275text(19, " \u2709\uFE0F Message direct ");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(20, CampaignManagerComponent_Conditional_20_Template, 5, 0, "button", 14);
      \u0275\u0275conditionalCreate(21, CampaignManagerComponent_Conditional_21_Template, 5, 0, "button", 14);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(22, CampaignManagerComponent_Conditional_22_Template, 2, 1, "div", 15);
      \u0275\u0275elementStart(23, "div", 16)(24, "span");
      \u0275\u0275text(25, "Derni\xE8re synchro live:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "strong");
      \u0275\u0275text(27);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "div", 17)(29, "button", 18);
      \u0275\u0275listener("click", function CampaignManagerComponent_Template_button_click_29_listener() {
        return ctx.setTab("templates");
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(30, "svg", 19);
      \u0275\u0275element(31, "path", 20)(32, "polyline", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275text(33, " Templates ");
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(34, "span", 22);
      \u0275\u0275text(35);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "button", 18);
      \u0275\u0275listener("click", function CampaignManagerComponent_Template_button_click_36_listener() {
        return ctx.setTab("campaigns");
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(37, "svg", 19);
      \u0275\u0275element(38, "path", 5)(39, "polygon", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275text(40, " Campagnes ");
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(41, "span", 22);
      \u0275\u0275text(42);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(43, "button", 18);
      \u0275\u0275listener("click", function CampaignManagerComponent_Template_button_click_43_listener() {
        return ctx.setTab("direct_messages");
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(44, "svg", 19);
      \u0275\u0275element(45, "path", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275text(46, " Messages Directs ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(47, "button", 18);
      \u0275\u0275listener("click", function CampaignManagerComponent_Template_button_click_47_listener() {
        return ctx.setTab("logs");
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(48, "svg", 19);
      \u0275\u0275element(49, "path", 24)(50, "path", 25);
      \u0275\u0275elementEnd();
      \u0275\u0275text(51, " Logs de Livraison ");
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(52, "span", 22);
      \u0275\u0275text(53);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(54, "div", 26)(55, "div", 27)(56, "span", 28);
      \u0275\u0275text(57, "Campagnes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "span", 29);
      \u0275\u0275text(59);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(60, "div", 30);
      \u0275\u0275elementStart(61, "div", 27)(62, "span", 28);
      \u0275\u0275text(63, "Destinataires touch\xE9s");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "span", 29);
      \u0275\u0275text(65);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(66, "div", 30);
      \u0275\u0275elementStart(67, "div", 27)(68, "span", 28);
      \u0275\u0275text(69, "Livr\xE9s");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "span", 31);
      \u0275\u0275text(71);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(72, "div", 30);
      \u0275\u0275elementStart(73, "div", 27)(74, "span", 28);
      \u0275\u0275text(75, "\xC9chou\xE9s");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "span", 32);
      \u0275\u0275text(77);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(78, "div", 30);
      \u0275\u0275elementStart(79, "div", 33)(80, "span", 28);
      \u0275\u0275text(81, "Taux de livraison");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "span", 29);
      \u0275\u0275text(83);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(84, CampaignManagerComponent_Conditional_84_Template, 2, 1, "div", 34);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(85, CampaignManagerComponent_Conditional_85_Template, 8, 1, "div", 35);
      \u0275\u0275conditionalCreate(86, CampaignManagerComponent_Conditional_86_Template, 17, 22, "div", 36);
      \u0275\u0275conditionalCreate(87, CampaignManagerComponent_Conditional_87_Template, 66, 15, "div", 37);
      \u0275\u0275conditionalCreate(88, CampaignManagerComponent_Conditional_88_Template, 37, 5, "div", 38);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(13);
      \u0275\u0275property("disabled", ctx.loading());
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.loading() ? "Sync..." : "Sync Donn\xE9es Live", " ");
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.activeTab() === "campaigns" ? 20 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.activeTab() === "templates" ? 21 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loadError() ? 22 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.lastSync());
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.activeTab() === "templates");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.templates().length);
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.activeTab() === "campaigns");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.campaigns().length);
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.activeTab() === "direct_messages");
      \u0275\u0275advance(4);
      \u0275\u0275classProp("active", ctx.activeTab() === "logs");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.deliveryLogs().length);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.campaigns().length);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.totalRecipients());
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.totalSent());
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.totalFailed());
      \u0275\u0275advance(5);
      \u0275\u0275classProp("ops-bad", ctx.deliveryRate() < 20)("ops-highlight", ctx.deliveryRate() >= 20);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1("", ctx.deliveryRate(), "%");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.deliveryRate() < 20 && ctx.totalRecipients() > 0 ? 84 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.activeTab() === "templates" ? 85 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.activeTab() === "campaigns" ? 86 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.activeTab() === "direct_messages" ? 87 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.activeTab() === "logs" ? 88 : -1);
    }
  }, dependencies: [CommonModule, NgStyle, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, SlicePipe], styles: ['@charset "UTF-8";\n\n\n\n.campaign-manager[_ngcontent-%COMP%] {\n  padding: 2rem;\n  max-width: 1400px;\n  margin: 0 auto;\n  animation: _ngcontent-%COMP%_fadeIn 0.4s ease;\n}\n.cm-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1.75rem;\n}\n.cm-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.cm-header[_ngcontent-%COMP%]   .header-icon[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  border-radius: 14px;\n  background:\n    linear-gradient(\n      135deg,\n      #0f766e,\n      #14b8a6);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 8px 20px rgba(14, 116, 144, 0.25);\n}\n.cm-header[_ngcontent-%COMP%]   .header-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  color: white;\n}\n.cm-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  font-weight: 800;\n  margin: 0;\n}\n.cm-header[_ngcontent-%COMP%]   .header-sub[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--text-secondary);\n  margin: 0.1rem 0 0;\n}\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  flex-wrap: wrap;\n}\n.btn-glass[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.85);\n  border: 1px solid var(--border-light);\n  color: var(--text-secondary);\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n}\n.btn-glass[_ngcontent-%COMP%]:hover {\n  color: var(--primary);\n  border-color: var(--primary-border);\n  background: rgba(255, 255, 255, 0.95);\n}\n.cm-alert[_ngcontent-%COMP%] {\n  margin-top: -0.4rem;\n  margin-bottom: 0.8rem;\n  border-radius: 10px;\n  padding: 0.65rem 0.85rem;\n  font-size: 0.82rem;\n  font-weight: 600;\n}\n.cm-alert-error[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  color: #b91c1c;\n}\n.cm-live-note[_ngcontent-%COMP%] {\n  margin-bottom: 0.9rem;\n  font-size: 0.8rem;\n  color: var(--text-secondary);\n  display: flex;\n  align-items: center;\n  gap: 0.45rem;\n}\n.cm-live-note[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n  font-weight: 700;\n}\n.tab-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.25rem;\n  background: var(--bg-body);\n  border: 1px solid var(--border);\n  border-radius: 14px;\n  padding: 0.35rem;\n  margin-bottom: 1.75rem;\n  width: fit-content;\n}\n.tab-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.6rem 1.2rem;\n  border: none;\n  border-radius: 10px;\n  background: transparent;\n  color: var(--text-secondary);\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.tab-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  opacity: 0.7;\n}\n.tab-btn.active[_ngcontent-%COMP%] {\n  background: var(--bg-card);\n  color: var(--primary);\n  box-shadow: var(--shadow-sm);\n  border: 1px solid var(--border-light);\n}\n.tab-btn.active[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.tab-btn[_ngcontent-%COMP%]:hover:not(.active) {\n  background: var(--bg-card);\n  color: var(--text-primary);\n}\n.tab-count[_ngcontent-%COMP%] {\n  background: var(--bg-body);\n  color: var(--text-secondary);\n  font-size: 0.72rem;\n  font-weight: 700;\n  padding: 1px 7px;\n  border-radius: 10px;\n  border: 1px solid var(--border);\n}\n.active[_ngcontent-%COMP%]   .tab-count[_ngcontent-%COMP%] {\n  background: var(--primary-bg);\n  color: var(--primary);\n  border-color: var(--primary-border);\n}\n.ops-strip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.85rem;\n  margin-bottom: 1.5rem;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.95),\n      rgba(255, 255, 255, 0.78));\n  border: 1px solid var(--border-light);\n  border-radius: 14px;\n  padding: 0.85rem 1rem;\n  overflow-x: auto;\n  box-shadow: var(--shadow-sm);\n}\n.ops-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.1rem;\n  white-space: nowrap;\n}\n.ops-label[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  font-weight: 700;\n}\n.ops-value[_ngcontent-%COMP%] {\n  font-size: 0.98rem;\n  font-weight: 800;\n  color: var(--text-primary);\n}\n.ops-divider[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 30px;\n  background:\n    linear-gradient(\n      180deg,\n      transparent,\n      var(--border),\n      transparent);\n  flex-shrink: 0;\n}\n.ops-good[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.ops-bad[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.ops-highlight[_ngcontent-%COMP%] {\n  color: var(--primary);\n}\n.channel-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 0.72rem;\n  font-weight: 700;\n  padding: 3px 9px;\n  border-radius: 10px;\n}\n.channel-badge.ch-sms[_ngcontent-%COMP%] {\n  background: #ede9fe;\n  color: #7c3aed;\n}\n.channel-badge.ch-email[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #2563eb;\n}\n.channel-badge.ch-whatsapp[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #16a34a;\n}\n.status-tag[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 0.72rem;\n  font-weight: 700;\n  padding: 3px 9px;\n  border-radius: 10px;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n}\n.status-tag.tag-sent[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #16a34a;\n}\n.status-tag.tag-scheduled[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #2563eb;\n}\n.status-tag.tag-draft[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #64748b;\n}\n.status-tag.tag-failed[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #dc2626;\n}\n.templates-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 320px 1fr;\n  gap: 1.5rem;\n  align-items: start;\n}\n@media (max-width: 900px) {\n  .templates-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.template-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  max-height: 70vh;\n  overflow-y: auto;\n  padding-right: 0.25rem;\n}\n.template-card[_ngcontent-%COMP%] {\n  background: var(--bg-card);\n  border: 1.5px solid var(--border-light);\n  border-radius: 14px;\n  padding: 1rem;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.template-card[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary-border);\n  box-shadow: var(--shadow-md);\n}\n.template-card.selected[_ngcontent-%COMP%] {\n  border-color: var(--primary);\n  background: var(--primary-bg);\n  box-shadow: 0 0 0 3px var(--primary-bg);\n}\n.tc-top[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.5rem;\n}\n.tc-delete[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--text-muted);\n  padding: 3px;\n  border-radius: 6px;\n  transition: all 0.2s;\n}\n.tc-delete[_ngcontent-%COMP%]:hover {\n  color: #dc2626;\n  background: #fef2f2;\n}\n.tc-name[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0 0 0.35rem;\n}\n.tc-preview[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--text-secondary);\n  margin: 0 0 0.6rem;\n  line-height: 1.4;\n}\n.tc-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.tc-vars[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: var(--primary);\n  font-weight: 600;\n}\n.tc-date[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: var(--text-muted);\n}\n.editor-panel[_ngcontent-%COMP%] {\n  background: var(--bg-card);\n  border: 1px solid var(--border-light);\n  border-radius: 18px;\n  padding: 1.75rem;\n  box-shadow: var(--shadow-sm);\n}\n.editor-title[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0 0 1.25rem;\n}\n.editor-textarea[_ngcontent-%COMP%] {\n  font-family: "Manrope", sans-serif;\n  resize: vertical;\n  min-height: 160px;\n}\n.var-hint[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 400;\n  color: var(--text-muted);\n  margin-left: 0.5rem;\n}\n.variables-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 0.4rem;\n  margin-bottom: 1.25rem;\n}\n.vars-label[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--text-secondary);\n  font-weight: 600;\n}\n.var-chip[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: var(--primary);\n  background: var(--primary-bg);\n  border: 1px solid var(--primary-border);\n  padding: 2px 9px;\n  border-radius: 10px;\n  font-family: monospace;\n}\n.editor-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  margin-top: 0.25rem;\n}\n.editor-empty[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  color: var(--text-muted);\n  border: 2px dashed var(--border);\n  border-radius: 18px;\n  gap: 1rem;\n  text-align: center;\n  line-height: 1.6;\n}\n.editor-empty[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  opacity: 0.4;\n}\n.context-panel[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.95),\n      rgba(248, 250, 252, 0.95));\n  border: 1px solid var(--border-light);\n  border-radius: 16px;\n  padding: 1rem 1.1rem;\n  box-shadow: var(--shadow-sm);\n}\n.context-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.98rem;\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.context-subtitle[_ngcontent-%COMP%] {\n  margin: 0.25rem 0 0.85rem;\n  font-size: 0.78rem;\n  color: var(--text-secondary);\n}\n.context-empty[_ngcontent-%COMP%] {\n  border: 1px dashed var(--border);\n  border-radius: 10px;\n  padding: 0.7rem;\n  text-align: center;\n  color: var(--text-secondary);\n  font-size: 0.78rem;\n  margin-bottom: 0.85rem;\n}\n.candidate-radio-list[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 0.6rem;\n  margin-bottom: 0.9rem;\n}\n.candidate-radio-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.55rem;\n  border: 1px solid var(--border-light);\n  border-radius: 10px;\n  padding: 0.55rem 0.6rem;\n  cursor: pointer;\n  background: #fff;\n}\n.candidate-radio-item[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  margin-top: 0.2rem;\n}\n.candidate-radio-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.15rem;\n}\n.candidate-radio-content[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: var(--text-primary);\n}\n.candidate-radio-content[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: var(--text-secondary);\n  line-height: 1.25;\n}\n.context-actions[_ngcontent-%COMP%] {\n  margin-top: 0.45rem;\n  display: flex;\n  gap: 0.6rem;\n  flex-wrap: wrap;\n}\n.create-campaign-panel[_ngcontent-%COMP%] {\n  background: var(--bg-card);\n  border: 1px solid var(--border-light);\n  border-radius: 18px;\n  padding: 1.75rem;\n  margin-bottom: 1.5rem;\n  box-shadow: var(--shadow-sm);\n}\n.create-campaign-panel[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 700;\n  margin: 0 0 1.25rem;\n}\n.cc-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n}\n@media (max-width: 600px) {\n  .cc-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.cc-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  margin-top: 1rem;\n}\n.campaign-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 1.25rem;\n}\n.campaign-empty[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n  padding: 1rem;\n  border-radius: 12px;\n  border: 1px dashed var(--border);\n  color: var(--text-secondary);\n  font-size: 0.82rem;\n  text-align: center;\n}\n.campaign-card[_ngcontent-%COMP%] {\n  background: var(--bg-card);\n  border: 1px solid var(--border-light);\n  border-radius: 16px;\n  padding: 1.25rem;\n  transition: all 0.2s;\n  box-shadow: var(--shadow-sm);\n}\n.campaign-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-md);\n}\n.cc-top-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.75rem;\n}\n.cc-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0 0 0.4rem;\n}\n.cc-meta[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--text-secondary);\n  margin: 0.2rem 0;\n}\n.cc-meta[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n}\n.cc-schedule[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  color: var(--primary);\n  font-weight: 600;\n}\n.cc-schedule[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.cc-stats[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 0.5rem;\n  margin-top: 1rem;\n  padding-top: 0.75rem;\n  border-top: 1px solid var(--border-light);\n}\n.cc-stat[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 2px;\n}\n.cc-stat[_ngcontent-%COMP%]   .cs-val[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 800;\n  color: var(--text-primary);\n}\n.cc-stat[_ngcontent-%COMP%]   .cs-lbl[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: var(--text-muted);\n  font-weight: 600;\n}\n.cc-stat[_ngcontent-%COMP%]   .cs-green[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.cc-stat[_ngcontent-%COMP%]   .cs-red[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.cc-progress[_ngcontent-%COMP%] {\n  margin-top: 0.9rem;\n}\n.cc-progress-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.35rem;\n}\n.cc-progress-label[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 600;\n  color: var(--text-secondary);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.cc-progress-value[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 700;\n  color: var(--primary);\n}\n.cc-progress-track[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 8px;\n  border-radius: 999px;\n  background: var(--bg-body);\n  overflow: hidden;\n}\n.cc-progress-fill[_ngcontent-%COMP%] {\n  display: block;\n  height: 100%;\n  border-radius: 999px;\n  background:\n    linear-gradient(\n      90deg,\n      #2563eb,\n      #14b8a6);\n  transition: width 0.3s ease;\n}\n.cc-card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  margin-top: 0.95rem;\n}\n.logs-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1.25rem;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.search-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1;\n  min-width: 250px;\n  max-width: 420px;\n}\n.search-wrap[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0.875rem;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--text-muted);\n  pointer-events: none;\n}\n.search-wrap[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  padding-left: 2.5rem;\n}\n.log-stats[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.log-stat-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: var(--text-secondary);\n}\n.dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n}\n.dot.dot-green[_ngcontent-%COMP%] {\n  background: #22c55e;\n}\n.dot.dot-red[_ngcontent-%COMP%] {\n  background: #ef4444;\n}\n.dot.dot-yellow[_ngcontent-%COMP%] {\n  background: #f59e0b;\n}\n.log-recipient[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.875rem;\n}\n.log-time[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--text-secondary);\n  white-space: nowrap;\n}\n.log-error[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #dc2626;\n}\n.log-empty-row[_ngcontent-%COMP%] {\n  text-align: center;\n  color: var(--text-secondary);\n  font-size: 0.8rem;\n  padding: 0.95rem;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (max-width: 768px) {\n  .campaign-manager[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .cm-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 1rem;\n  }\n  .header-actions[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .tab-bar[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .ops-strip[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .cc-card-actions[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .logs-toolbar[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}\n/*# sourceMappingURL=campaign-manager.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CampaignManagerComponent, [{
    type: Component,
    args: [{ selector: "app-campaign-manager", standalone: true, imports: [CommonModule, FormsModule], template: `<section class="campaign-manager">

  <!-- \u2500\u2500 Header \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <header class="cm-header">
    <div class="header-left">
      <div class="header-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M22 2L11 13" />
          <polygon points="22 2 15 22 11 13 2 9 22 2" />
        </svg>
      </div>
      <div>
        <h1>Hub de Communication</h1>
        <p class="header-sub">Messagerie en direct pour les talents, propuls\xE9e par TalentPredict</p>
      </div>
    </div>
    <div class="header-actions">
      <button class="btn btn-glass" (click)="refreshLiveData()" [disabled]="loading()">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3">
          <polyline points="23 4 23 10 17 10" />
          <path d="M20.49 15a9 9 0 11-2.12-9.36L23 10" />
        </svg>
        {{ loading() ? 'Sync...' : 'Sync Donn\xE9es Live' }}
      </button>

      <button class="btn btn-secondary" (click)="setTab('direct_messages')">
        \u2709\uFE0F Message direct
      </button>

      @if (activeTab() === 'campaigns') {
      <button class="btn btn-primary" (click)="startNewCampaign()">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
        Nouvelle Campagne
      </button>
      }
      @if (activeTab() === 'templates') {
      <button class="btn btn-primary" (click)="startNewTemplate()">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
        Nouveau Template
      </button>
      }
    </div>
  </header>

  @if (loadError()) {
  <div class="cm-alert cm-alert-error">{{ loadError() }}</div>
  }

  <div class="cm-live-note">
    <span>Derni\xE8re synchro live:</span>
    <strong>{{ lastSync() }}</strong>
  </div>

  <!-- \u2500\u2500 Tabs \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <div class="tab-bar">
    <button class="tab-btn" [class.active]="activeTab() === 'templates'" (click)="setTab('templates')">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
      </svg>
      Templates
      <span class="tab-count">{{ templates().length }}</span>
    </button>
    <button class="tab-btn" [class.active]="activeTab() === 'campaigns'" (click)="setTab('campaigns')">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M22 2L11 13" />
        <polygon points="22 2 15 22 11 13 2 9 22 2" />
      </svg>
      Campagnes
      <span class="tab-count">{{ campaigns().length }}</span>
    </button>
    <button class="tab-btn" [class.active]="activeTab() === 'direct_messages'" (click)="setTab('direct_messages')">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path
          d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
      Messages Directs
    </button>
    <button class="tab-btn" [class.active]="activeTab() === 'logs'" (click)="setTab('logs')">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
      </svg>
      Logs de Livraison
      <span class="tab-count">{{ deliveryLogs().length }}</span>
    </button>
  </div>

  <div class="ops-strip">
    <div class="ops-item">
      <span class="ops-label">Campagnes</span>
      <span class="ops-value">{{ campaigns().length }}</span>
    </div>
    <div class="ops-divider"></div>
    <div class="ops-item">
      <span class="ops-label">Destinataires touch\xE9s</span>
      <span class="ops-value">{{ totalRecipients() }}</span>
    </div>
    <div class="ops-divider"></div>
    <div class="ops-item">
      <span class="ops-label">Livr\xE9s</span>
      <span class="ops-value ops-good">{{ totalSent() }}</span>
    </div>
    <div class="ops-divider"></div>
    <div class="ops-item">
      <span class="ops-label">\xC9chou\xE9s</span>
      <span class="ops-value ops-bad">{{ totalFailed() }}</span>
    </div>
    <div class="ops-divider"></div>
    <div class="ops-item" title="Si < 20%, v\xE9rifiez la configuration des e-mails!">
      <span class="ops-label">Taux de livraison</span>
      <span class="ops-value" [class.ops-bad]="deliveryRate() < 20" [class.ops-highlight]="deliveryRate() >= 20">{{
        deliveryRate() }}%</span>
    </div>
    @if (deliveryRate() < 20 && totalRecipients()> 0) {
      <div class="cm-alert cm-alert-error" style="margin-left:auto; margin-bottom:0; padding:8px;">\u26A0\uFE0F Taux de livraison
        critique: {{ deliveryRate() }}% \u2014 V\xE9rifier la configuration</div>
      }
  </div>

  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <!-- TAB 1 \u2014 Templates                                           -->
  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  @if (activeTab() === 'templates') {
  <div class="templates-layout">
    <div class="template-list-col">
      <div class="template-list">
        @for (t of templates(); track t.id) {
        <div class="template-card" [class.selected]="selectedTemplate()?.id === t.id" (click)="selectTemplate(t)">
          <div class="tc-top">
            <span class="channel-badge ch-{{ t.channel.toLowerCase() }}">{{ getChannelIcon(t.channel) }} {{ t.channel
              }}</span>
            <div style="display:flex; gap:5px;">
              <button class="tc-delete" (click)="$event.stopPropagation(); duplicateTemplate(t)" title="Dupliquer">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                  <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                </svg>
              </button>
              <button class="tc-delete" (click)="$event.stopPropagation(); deleteTemplate(t.id)" title="Supprimer">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="3 6 5 6 21 6" />
                  <path d="M19 6l-1 14H6L5 6" />
                  <path d="M10 11v6M14 11v6" />
                </svg>
              </button>
            </div>
          </div>
          <p class="tc-name">{{ t.name }}</p>
          <span class="tc-cat-badge">{{ t.category }}</span>
          <p class="tc-preview">{{ t.body | slice:0:80 }}...</p>
          <div class="tc-footer">
            <span class="tc-vars">{{ t.variables.length }} variables</span>
            <span class="tc-date">{{ t.createdAt }}</span>
          </div>
        </div>
        }
      </div>
    </div>

    <div class="template-editor-col">
      @if (isCreatingTemplate() || selectedTemplate()) {
      <div class="editor-panel animate-fade-in">
        <h3 class="editor-title">{{ isCreatingTemplate() ? 'Nouveau Template' : 'Modifier Template' }}</h3>

        <div class="form-group">
          <label class="form-label">Nom du Template *</label>
          <input class="form-input" [ngModel]="isCreatingTemplate() ? newTemplate.name : selectedTemplate()?.name" (ngModelChange)="updateTemplateField('name', $event)" />
        </div>

        <div class="form-group">
          <label class="form-label">Cat\xE9gorie</label>
          <select class="form-input"
            [ngModel]="isCreatingTemplate() ? newTemplate.category : selectedTemplate()?.category"
            (ngModelChange)="updateTemplateField('category', $event)">
            <option value="Test & \xC9valuation">Test & \xC9valuation</option>
            <option value="Formation">Formation</option>
            <option value="Onboarding">Onboarding</option>
            <option value="S\xE9curit\xE9">S\xE9curit\xE9</option>
            <option value="G\xE9n\xE9ral">G\xE9n\xE9ral</option>
          </select>
        </div>

        <div class="form-group">
          <label class="form-label">Canal</label>
          <select class="form-input"
            [ngModel]="isCreatingTemplate() ? newTemplate.channel : selectedTemplate()?.channel"
            (ngModelChange)="updateTemplateField('channel', $event)">
            <option value="SMS">\u{1F4F1} SMS</option>
            <option value="EMAIL">\u{1F4E7} Email</option>
            <option value="IN_APP">\u{1F514} Notification In-App</option>
            <option value="WHATSAPP">\u{1F4AC} WhatsApp</option>
          </select>
        </div>

        @if ((isCreatingTemplate() ? newTemplate.channel : selectedTemplate()!.channel) === 'EMAIL') {
        <div class="form-group">
          <label class="form-label">Sujet</label>
          <input class="form-input"
            [ngModel]="isCreatingTemplate() ? newTemplate.subject : selectedTemplate()?.subject"
            (ngModelChange)="updateTemplateField('subject', $event)" />
        </div>
        }

        <div class="form-group">
          <label class="form-label">Corps du message * <span class="var-hint">Utilisez {{ '{{variable}}'
              }}</span></label>
          <textarea class="form-input editor-textarea"
            [ngModel]="isCreatingTemplate() ? newTemplate.body : selectedTemplate()?.body"
            (ngModelChange)="updateTemplateField('body', $event)" rows="8"></textarea>
        </div>

        @if (!isCreatingTemplate()) {
        <div class="variables-row">
          <span class="vars-label">Variables d\xE9tect\xE9es:</span>
          @for (v of selectedTemplate()!.variables; track v) {
          <span class="var-chip">{{ '{{' + v + '}}' }}</span>
          }
        </div>
        }

        <div class="editor-actions">
          <button class="btn btn-primary" (click)="isCreatingTemplate() ? saveNewTemplate() : saveEditedTemplate()">
            {{ isCreatingTemplate() ? 'Sauvegarder' : 'Mettre \xE0 jour' }}
          </button>
          <button class="btn btn-ghost"
            (click)="isCreatingTemplate.set(false); selectedTemplate.set(null)">Annuler</button>
        </div>
      </div>
      } @else {
      <div class="editor-empty">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
          <polyline points="14 2 14 8 20 8" />
        </svg>
        <p>S\xE9lectionnez un template pour le modifier,<br>ou cr\xE9ez-en un nouveau</p>
      </div>
      }
    </div>
  </div>
  }

  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <!-- TAB 2 \u2014 Campaigns                                           -->
  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  @if (activeTab() === 'campaigns') {
  <div class="campaigns-layout">

    <div class="campaign-filters">
      <button class="btn btn-sm" [class.btn-primary]="campaignFilter() === 'ALL'"
        [class.btn-ghost]="campaignFilter() !== 'ALL'" (click)="campaignFilter.set('ALL')">Toutes</button>
      <button class="btn btn-sm" [class.btn-primary]="campaignFilter() === 'BROUILLON'"
        [class.btn-ghost]="campaignFilter() !== 'BROUILLON'"
        (click)="campaignFilter.set('BROUILLON')">Brouillons</button>
      <button class="btn btn-sm" [class.btn-primary]="campaignFilter() === 'PLANIFI\xC9'"
        [class.btn-ghost]="campaignFilter() !== 'PLANIFI\xC9'" (click)="campaignFilter.set('PLANIFI\xC9')">Planifi\xE9es</button>
      <button class="btn btn-sm" [class.btn-primary]="campaignFilter() === 'ENVOY\xC9'"
        [class.btn-ghost]="campaignFilter() !== 'ENVOY\xC9'" (click)="campaignFilter.set('ENVOY\xC9')">Envoy\xE9es</button>
      <button class="btn btn-sm" [class.btn-primary]="campaignFilter() === '\xC9CHOU\xC9'"
        [class.btn-ghost]="campaignFilter() !== '\xC9CHOU\xC9'" (click)="campaignFilter.set('\xC9CHOU\xC9')">\xC9chou\xE9es</button>
    </div>

    @if (isCreatingCampaign()) {
    <div class="create-campaign-panel animate-fade-in">
      <h3>Nouvelle Campagne</h3>
      <div class="cc-grid">
        <div class="form-group">
          <label class="form-label">Nom *</label>
          <input class="form-input" [(ngModel)]="newCampaign.name" />
        </div>
        <div class="form-group">
          <label class="form-label">Template *</label>
          <select class="form-input" [(ngModel)]="newCampaign.templateId">
            <option value="">\u2014 S\xE9lectionner \u2014</option>
            @for (t of templates(); track t.id) {
            <option [value]="t.id">{{ t.name }} ({{ t.channel }})</option>
            }
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Canal</label>
          <select class="form-input" [(ngModel)]="newCampaign.channel">
            <option value="SMS">\u{1F4F1} SMS</option>
            <option value="EMAIL">\u{1F4E7} Email</option>
            <option value="IN_APP">\u{1F514} In-App</option>
            <option value="WHATSAPP">\u{1F4AC} WhatsApp</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Groupe cible</label>
          <select class="form-input" [(ngModel)]="newCampaign.targetGroup">
            @for (group of targetGroupOptions; track group.key) {
            <option [value]="group.key">{{ group.label }} ({{ getTargetGroupCount(group.key) }})</option>
            }
          </select>
          @if (getTargetGroupCount($any(newCampaign.targetGroup)) === 0) {
          <span class="ops-bad" style="font-size:12px;">\u26A0\uFE0F Groupe vide!</span>
          }
        </div>
        <div class="form-group">
          <label class="form-label">Planification (optionnel)</label>
          <input class="form-input" type="datetime-local" [(ngModel)]="newCampaign.scheduledAt" />
        </div>
      </div>
      <div class="cc-actions">
        <button class="btn btn-primary" (click)="createCampaign()">Cr\xE9er la campagne</button>
        <button class="btn btn-ghost" (click)="cancelCampaignCreate()">Annuler</button>
      </div>
    </div>
    }

    <div class="campaign-grid">
      @if (filteredCampaigns().length === 0) {
      <div class="campaign-empty">Aucune campagne.</div>
      }
      @for (c of filteredCampaigns(); track c.id) {
      <div class="campaign-card">
        <div class="cc-top-row">
          <span class="channel-badge ch-{{ c.channel.toLowerCase() }}">{{ getChannelIcon(c.channel) }} {{ c.channel
            }}</span>
          <span class="status-tag {{ getStatusClass(c.status) }}">{{ c.status }}</span>
        </div>
        <h3 class="cc-title">{{ c.name }}</h3>
        <p class="cc-meta">Template: <strong>{{ c.templateName }}</strong></p>
        <p class="cc-meta">Groupe: <strong>{{ getTargetGroupLabel(c.targetGroup) }}</strong></p>

        @if (c.recipientCount === 0 && c.status !== 'BROUILLON') {
        <span class="ops-bad" style="font-size:12px;">\u26A0\uFE0F Groupe vide!</span>
        }

        <div class="cc-stats">
          <div class="cc-stat"><span class="cs-val">{{ c.recipientCount }}</span><span class="cs-lbl">Destinat.</span>
          </div>
          <div class="cc-stat"><span class="cs-val cs-green">{{ c.sentCount }}</span><span class="cs-lbl">Envoy\xE9s</span>
          </div>
          <div class="cc-stat"><span class="cs-val cs-red">{{ c.failedCount }}</span><span class="cs-lbl">\xC9chou\xE9s</span>
          </div>
        </div>

        @if (c.status !== 'BROUILLON') {
        <div class="cc-progress">
          <div class="cc-progress-row">
            <span class="cc-progress-label">Progression</span>
            <span class="cc-progress-value">{{ getCampaignProgress(c) }}%</span>
          </div>
          <div class="cc-progress-track">
            <span class="cc-progress-fill" [style.width.%]="getCampaignProgress(c)"
              [ngStyle]="{'background-color': getCampaignProgress(c) >= 80 ? '#22c55e' : getCampaignProgress(c) >= 40 ? '#f59e0b' : '#ef4444'}"></span>
          </div>
        </div>
        }

        @if (c.status === 'ENVOY\xC9') {
        <div style="font-size: 12px; margin-top: 10px; color: #64748b; display:flex; justify-content:space-between;">
          <span>Ouvertures: {{ c.openRate }}</span>
          <span>Clics: {{ c.clickRate }}</span>
        </div>
        }

        <div class="cc-card-actions">
          @if (c.status === 'BROUILLON' || c.status === 'PLANIFI\xC9') {
          <button class="btn btn-primary btn-sm" (click)="launchCampaign(c.id)">Lancer</button>
          <button class="btn btn-secondary btn-sm" (click)="pauseCampaign(c.id)">{{ c.isPaused ? 'Reprendre' : 'Pause'
            }}</button>
          }
          @if (c.status === 'ENVOY\xC9') {
          <button class="btn btn-secondary btn-sm">R\xE9sultats</button>
          }
          <button class="btn btn-ghost btn-sm" (click)="duplicateCampaign(c.id)">Dupliquer</button>
        </div>
      </div>
      }
    </div>
  </div>
  }

  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <!-- TAB 3 \u2014 Direct Messages                                     -->
  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  @if (activeTab() === 'direct_messages') {
  <div class="dm-layout" style="display: grid; grid-template-columns: 1fr 2fr; gap: 20px;">

    <!-- Step 1: People Picker -->
    <div class="dm-picker" style="background: white; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0;">
      <h3>S\xE9lection des destinataires</h3>

      <div style="margin-bottom: 15px;">
        <input type="text" class="form-input" placeholder="Chercher par nom ou email..." [(ngModel)]="dmSearchQuery">
      </div>
      <div style="display:flex; gap:10px; margin-bottom: 15px;">
        <input type="text" class="form-input" placeholder="D\xE9partement..." [(ngModel)]="dmFilterDept">
      </div>

      <div style="display:flex; justify-content:space-between; margin-bottom:10px;">
        <button class="btn btn-sm btn-secondary" (click)="selectAllUsers()">Tout s\xE9lectionner</button>
        <button class="btn btn-sm btn-ghost" (click)="clearSelection()">Effacer</button>
      </div>

      <div class="picker-list"
        style="max-height: 400px; overflow-y: auto; border: 1px solid #e2e8f0; border-radius: 6px;">
        @for (user of dmPeoplePickerResults(); track user.userId) {
        <div class="picker-item"
          style="padding: 10px; border-bottom: 1px solid #e2e8f0; display:flex; align-items:center; gap:10px; cursor:pointer;"
          (click)="toggleUserSelection(user)">
          <input type="checkbox" [checked]="dmSelectedUsers().includes(user)">
          <div>
            <strong style="display:block; font-size:14px;">{{ user.firstName }} {{ user.lastName }}</strong>
            <small style="color:#64748b;">{{ user.email }}</small>
          </div>
        </div>
        }
      </div>
    </div>

    <!-- Step 2: Message Composer -->
    <div class="dm-composer" style="background: white; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0;">
      <h3>Composition du message</h3>

      <div style="margin-bottom: 15px;">
        <label class="form-label">Destinataires s\xE9lectionn\xE9s ({{ dmSelectedUsers().length }})</label>
        <div style="display:flex; flex-wrap:wrap; gap:5px;">
          @for (u of dmSelectedUsers(); track u.userId) {
          <span class="var-chip" style="display:flex; align-items:center; gap:5px;">
            {{ u.firstName }} {{ u.lastName }}
            <span style="cursor:pointer; color:#ef4444;" (click)="toggleUserSelection(u)">\xD7</span>
          </span>
          }
        </div>
      </div>

      <div class="form-group">
        <label class="form-label">Canal d'envoi</label>
        <select class="form-input" [(ngModel)]="dmChannel">
          <option value="IN_APP">\u{1F514} Notification In-App (Centre de notifs)</option>
          <option value="EMAIL">\u{1F4E7} Email (Adresse de l'employ\xE9)</option>
          <option value="BOTH">\u{1F4AC} Les deux</option>
        </select>
      </div>

      <div class="form-group">
        <label class="form-label">Sujet / Titre</label>
        <input class="form-input" [(ngModel)]="dmSubject" placeholder="Ex: Rappel de v\xE9rification de profil">
      </div>

      <div class="form-group">
        <label class="form-label">Message (variables: {{ '{' }}prenom{{ '}' }}, {{ '{' }}nom{{ '}' }}, {{ '{' }}score{{
          '}' }})</label>
        <textarea class="form-input" rows="6" [(ngModel)]="dmBody"
          placeholder="\xC9crivez votre message ici..."></textarea>
      </div>

      <div style="text-align: right; margin-top: 20px;">
        <button class="btn btn-primary" (click)="sendDirectMessage()" [disabled]="dmSending()">
          {{ dmSending() ? 'Envoi en cours...' : 'Envoyer maintenant' }}
        </button>
      </div>

      <!-- History -->
      <hr style="margin: 30px 0; border:none; border-top: 1px solid #e2e8f0;">
      <h3>Historique des envois directs</h3>
      <table class="data-table" style="margin-top: 15px;">
        <thead>
          <tr>
            <th>Date</th>
            <th>Sujet</th>
            <th>Canal</th>
            <th>Destinataires</th>
            <th>Ouvertures</th>
          </tr>
        </thead>
        <tbody>
          @for (msg of directMessages(); track msg.id) {
          <tr>
            <td>{{ formatDate(msg.sentAt) }}</td>
            <td>{{ msg.subject }}</td>
            <td>{{ getChannelIcon(msg.channel) }}</td>
            <td>{{ msg.recipients.length }} user(s)</td>
            <td>{{ msg.readCount }}/{{ msg.recipients.length }} lu(s)</td>
          </tr>
          }
          @if (directMessages().length === 0) {
          <tr>
            <td colspan="5" style="text-align:center; padding:20px;">Aucun historique.</td>
          </tr>
          }
        </tbody>
      </table>

    </div>
  </div>
  }

  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <!-- TAB 4 \u2014 Delivery Logs                                       -->
  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  @if (activeTab() === 'logs') {
  <div class="logs-layout">
    <div class="logs-toolbar">
      <div class="search-wrap">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input class="form-input search-input" [ngModel]="logSearch()" (ngModelChange)="logSearch.set($event)"
          placeholder="Rechercher destinataire..." id="log-search" />
      </div>
      <div class="log-stats">
        <span class="log-stat-item"><span class="dot dot-green"></span>{{ getLogCount('LIVR\xC9') }} Livr\xE9s</span>
        <span class="log-stat-item"><span class="dot dot-red"></span>{{ getLogCount('\xC9CHOU\xC9') }} \xC9chou\xE9s</span>
        <span class="log-stat-item"><span class="dot dot-yellow"></span>{{ getLogCount('EN ATTENTE') }} En
          attente</span>
      </div>
    </div>

    <div class="table-container">
      <table class="data-table">
        <thead>
          <tr>
            <th>Destinataire</th>
            <th>Campagne</th>
            <th>Canal</th>
            <th>Statut</th>
            <th>Date d'envoi</th>
            <th>Note</th>
          </tr>
        </thead>
        <tbody>
          @if (filteredLogs().length === 0) {
          <tr>
            <td colspan="6" class="log-empty-row">Aucun log disponible.</td>
          </tr>
          }
          @for (log of filteredLogs(); track log.id) {
          <tr>
            <td class="log-recipient">{{ log.recipient }}</td>
            <td>{{ log.campaignName }}</td>
            <td><span class="channel-badge ch-{{ log.channel.toLowerCase() }}">{{ getChannelIcon(log.channel) }} {{
                log.channel }}</span></td>
            <td><span class="status-tag {{ getStatusClass(log.status) }}">{{ log.status }}</span></td>
            <td class="log-time">{{ formatDate(log.sentAt) }}</td>
            <td class="log-error">{{ log.errorMessage || '\u2014' }}</td>
          </tr>
          }
        </tbody>
      </table>
    </div>
  </div>
  }

</section>`, styles: ['@charset "UTF-8";\n\n/* src/app/modules/admin/components/campaign-manager/campaign-manager.component.scss */\n.campaign-manager {\n  padding: 2rem;\n  max-width: 1400px;\n  margin: 0 auto;\n  animation: fadeIn 0.4s ease;\n}\n.cm-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1.75rem;\n}\n.cm-header .header-left {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.cm-header .header-icon {\n  width: 52px;\n  height: 52px;\n  border-radius: 14px;\n  background:\n    linear-gradient(\n      135deg,\n      #0f766e,\n      #14b8a6);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 8px 20px rgba(14, 116, 144, 0.25);\n}\n.cm-header .header-icon svg {\n  width: 24px;\n  height: 24px;\n  color: white;\n}\n.cm-header h1 {\n  font-size: 1.75rem;\n  font-weight: 800;\n  margin: 0;\n}\n.cm-header .header-sub {\n  font-size: 0.875rem;\n  color: var(--text-secondary);\n  margin: 0.1rem 0 0;\n}\n.header-actions {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  flex-wrap: wrap;\n}\n.btn-glass {\n  background: rgba(255, 255, 255, 0.85);\n  border: 1px solid var(--border-light);\n  color: var(--text-secondary);\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n}\n.btn-glass:hover {\n  color: var(--primary);\n  border-color: var(--primary-border);\n  background: rgba(255, 255, 255, 0.95);\n}\n.cm-alert {\n  margin-top: -0.4rem;\n  margin-bottom: 0.8rem;\n  border-radius: 10px;\n  padding: 0.65rem 0.85rem;\n  font-size: 0.82rem;\n  font-weight: 600;\n}\n.cm-alert-error {\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  color: #b91c1c;\n}\n.cm-live-note {\n  margin-bottom: 0.9rem;\n  font-size: 0.8rem;\n  color: var(--text-secondary);\n  display: flex;\n  align-items: center;\n  gap: 0.45rem;\n}\n.cm-live-note strong {\n  color: var(--text-primary);\n  font-weight: 700;\n}\n.tab-bar {\n  display: flex;\n  gap: 0.25rem;\n  background: var(--bg-body);\n  border: 1px solid var(--border);\n  border-radius: 14px;\n  padding: 0.35rem;\n  margin-bottom: 1.75rem;\n  width: fit-content;\n}\n.tab-btn {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.6rem 1.2rem;\n  border: none;\n  border-radius: 10px;\n  background: transparent;\n  color: var(--text-secondary);\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.tab-btn svg {\n  opacity: 0.7;\n}\n.tab-btn.active {\n  background: var(--bg-card);\n  color: var(--primary);\n  box-shadow: var(--shadow-sm);\n  border: 1px solid var(--border-light);\n}\n.tab-btn.active svg {\n  opacity: 1;\n}\n.tab-btn:hover:not(.active) {\n  background: var(--bg-card);\n  color: var(--text-primary);\n}\n.tab-count {\n  background: var(--bg-body);\n  color: var(--text-secondary);\n  font-size: 0.72rem;\n  font-weight: 700;\n  padding: 1px 7px;\n  border-radius: 10px;\n  border: 1px solid var(--border);\n}\n.active .tab-count {\n  background: var(--primary-bg);\n  color: var(--primary);\n  border-color: var(--primary-border);\n}\n.ops-strip {\n  display: flex;\n  align-items: center;\n  gap: 0.85rem;\n  margin-bottom: 1.5rem;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.95),\n      rgba(255, 255, 255, 0.78));\n  border: 1px solid var(--border-light);\n  border-radius: 14px;\n  padding: 0.85rem 1rem;\n  overflow-x: auto;\n  box-shadow: var(--shadow-sm);\n}\n.ops-item {\n  display: flex;\n  flex-direction: column;\n  gap: 0.1rem;\n  white-space: nowrap;\n}\n.ops-label {\n  font-size: 0.68rem;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  font-weight: 700;\n}\n.ops-value {\n  font-size: 0.98rem;\n  font-weight: 800;\n  color: var(--text-primary);\n}\n.ops-divider {\n  width: 1px;\n  height: 30px;\n  background:\n    linear-gradient(\n      180deg,\n      transparent,\n      var(--border),\n      transparent);\n  flex-shrink: 0;\n}\n.ops-good {\n  color: #16a34a;\n}\n.ops-bad {\n  color: #dc2626;\n}\n.ops-highlight {\n  color: var(--primary);\n}\n.channel-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 0.72rem;\n  font-weight: 700;\n  padding: 3px 9px;\n  border-radius: 10px;\n}\n.channel-badge.ch-sms {\n  background: #ede9fe;\n  color: #7c3aed;\n}\n.channel-badge.ch-email {\n  background: #dbeafe;\n  color: #2563eb;\n}\n.channel-badge.ch-whatsapp {\n  background: #dcfce7;\n  color: #16a34a;\n}\n.status-tag {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 0.72rem;\n  font-weight: 700;\n  padding: 3px 9px;\n  border-radius: 10px;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n}\n.status-tag.tag-sent {\n  background: #dcfce7;\n  color: #16a34a;\n}\n.status-tag.tag-scheduled {\n  background: #dbeafe;\n  color: #2563eb;\n}\n.status-tag.tag-draft {\n  background: #f1f5f9;\n  color: #64748b;\n}\n.status-tag.tag-failed {\n  background: #fef2f2;\n  color: #dc2626;\n}\n.templates-layout {\n  display: grid;\n  grid-template-columns: 320px 1fr;\n  gap: 1.5rem;\n  align-items: start;\n}\n@media (max-width: 900px) {\n  .templates-layout {\n    grid-template-columns: 1fr;\n  }\n}\n.template-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  max-height: 70vh;\n  overflow-y: auto;\n  padding-right: 0.25rem;\n}\n.template-card {\n  background: var(--bg-card);\n  border: 1.5px solid var(--border-light);\n  border-radius: 14px;\n  padding: 1rem;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.template-card:hover {\n  border-color: var(--primary-border);\n  box-shadow: var(--shadow-md);\n}\n.template-card.selected {\n  border-color: var(--primary);\n  background: var(--primary-bg);\n  box-shadow: 0 0 0 3px var(--primary-bg);\n}\n.tc-top {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.5rem;\n}\n.tc-delete {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--text-muted);\n  padding: 3px;\n  border-radius: 6px;\n  transition: all 0.2s;\n}\n.tc-delete:hover {\n  color: #dc2626;\n  background: #fef2f2;\n}\n.tc-name {\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0 0 0.35rem;\n}\n.tc-preview {\n  font-size: 0.8rem;\n  color: var(--text-secondary);\n  margin: 0 0 0.6rem;\n  line-height: 1.4;\n}\n.tc-footer {\n  display: flex;\n  justify-content: space-between;\n}\n.tc-vars {\n  font-size: 0.72rem;\n  color: var(--primary);\n  font-weight: 600;\n}\n.tc-date {\n  font-size: 0.72rem;\n  color: var(--text-muted);\n}\n.editor-panel {\n  background: var(--bg-card);\n  border: 1px solid var(--border-light);\n  border-radius: 18px;\n  padding: 1.75rem;\n  box-shadow: var(--shadow-sm);\n}\n.editor-title {\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0 0 1.25rem;\n}\n.editor-textarea {\n  font-family: "Manrope", sans-serif;\n  resize: vertical;\n  min-height: 160px;\n}\n.var-hint {\n  font-size: 0.75rem;\n  font-weight: 400;\n  color: var(--text-muted);\n  margin-left: 0.5rem;\n}\n.variables-row {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 0.4rem;\n  margin-bottom: 1.25rem;\n}\n.vars-label {\n  font-size: 0.8rem;\n  color: var(--text-secondary);\n  font-weight: 600;\n}\n.var-chip {\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: var(--primary);\n  background: var(--primary-bg);\n  border: 1px solid var(--primary-border);\n  padding: 2px 9px;\n  border-radius: 10px;\n  font-family: monospace;\n}\n.editor-actions {\n  display: flex;\n  gap: 0.75rem;\n  margin-top: 0.25rem;\n}\n.editor-empty {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  color: var(--text-muted);\n  border: 2px dashed var(--border);\n  border-radius: 18px;\n  gap: 1rem;\n  text-align: center;\n  line-height: 1.6;\n}\n.editor-empty svg {\n  opacity: 0.4;\n}\n.context-panel {\n  margin-top: 1rem;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.95),\n      rgba(248, 250, 252, 0.95));\n  border: 1px solid var(--border-light);\n  border-radius: 16px;\n  padding: 1rem 1.1rem;\n  box-shadow: var(--shadow-sm);\n}\n.context-title {\n  margin: 0;\n  font-size: 0.98rem;\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.context-subtitle {\n  margin: 0.25rem 0 0.85rem;\n  font-size: 0.78rem;\n  color: var(--text-secondary);\n}\n.context-empty {\n  border: 1px dashed var(--border);\n  border-radius: 10px;\n  padding: 0.7rem;\n  text-align: center;\n  color: var(--text-secondary);\n  font-size: 0.78rem;\n  margin-bottom: 0.85rem;\n}\n.candidate-radio-list {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 0.6rem;\n  margin-bottom: 0.9rem;\n}\n.candidate-radio-item {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.55rem;\n  border: 1px solid var(--border-light);\n  border-radius: 10px;\n  padding: 0.55rem 0.6rem;\n  cursor: pointer;\n  background: #fff;\n}\n.candidate-radio-item input {\n  margin-top: 0.2rem;\n}\n.candidate-radio-content {\n  display: flex;\n  flex-direction: column;\n  gap: 0.15rem;\n}\n.candidate-radio-content strong {\n  font-size: 0.82rem;\n  color: var(--text-primary);\n}\n.candidate-radio-content small {\n  font-size: 0.72rem;\n  color: var(--text-secondary);\n  line-height: 1.25;\n}\n.context-actions {\n  margin-top: 0.45rem;\n  display: flex;\n  gap: 0.6rem;\n  flex-wrap: wrap;\n}\n.create-campaign-panel {\n  background: var(--bg-card);\n  border: 1px solid var(--border-light);\n  border-radius: 18px;\n  padding: 1.75rem;\n  margin-bottom: 1.5rem;\n  box-shadow: var(--shadow-sm);\n}\n.create-campaign-panel h3 {\n  font-size: 1.1rem;\n  font-weight: 700;\n  margin: 0 0 1.25rem;\n}\n.cc-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n}\n@media (max-width: 600px) {\n  .cc-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.cc-actions {\n  display: flex;\n  gap: 0.75rem;\n  margin-top: 1rem;\n}\n.campaign-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 1.25rem;\n}\n.campaign-empty {\n  grid-column: 1/-1;\n  padding: 1rem;\n  border-radius: 12px;\n  border: 1px dashed var(--border);\n  color: var(--text-secondary);\n  font-size: 0.82rem;\n  text-align: center;\n}\n.campaign-card {\n  background: var(--bg-card);\n  border: 1px solid var(--border-light);\n  border-radius: 16px;\n  padding: 1.25rem;\n  transition: all 0.2s;\n  box-shadow: var(--shadow-sm);\n}\n.campaign-card:hover {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-md);\n}\n.cc-top-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.75rem;\n}\n.cc-title {\n  font-size: 1rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0 0 0.4rem;\n}\n.cc-meta {\n  font-size: 0.8rem;\n  color: var(--text-secondary);\n  margin: 0.2rem 0;\n}\n.cc-meta strong {\n  color: var(--text-primary);\n}\n.cc-schedule {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  color: var(--primary);\n  font-weight: 600;\n}\n.cc-schedule svg {\n  flex-shrink: 0;\n}\n.cc-stats {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 0.5rem;\n  margin-top: 1rem;\n  padding-top: 0.75rem;\n  border-top: 1px solid var(--border-light);\n}\n.cc-stat {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 2px;\n}\n.cc-stat .cs-val {\n  font-size: 1.25rem;\n  font-weight: 800;\n  color: var(--text-primary);\n}\n.cc-stat .cs-lbl {\n  font-size: 0.7rem;\n  color: var(--text-muted);\n  font-weight: 600;\n}\n.cc-stat .cs-green {\n  color: #16a34a;\n}\n.cc-stat .cs-red {\n  color: #dc2626;\n}\n.cc-progress {\n  margin-top: 0.9rem;\n}\n.cc-progress-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.35rem;\n}\n.cc-progress-label {\n  font-size: 0.72rem;\n  font-weight: 600;\n  color: var(--text-secondary);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.cc-progress-value {\n  font-size: 0.78rem;\n  font-weight: 700;\n  color: var(--primary);\n}\n.cc-progress-track {\n  width: 100%;\n  height: 8px;\n  border-radius: 999px;\n  background: var(--bg-body);\n  overflow: hidden;\n}\n.cc-progress-fill {\n  display: block;\n  height: 100%;\n  border-radius: 999px;\n  background:\n    linear-gradient(\n      90deg,\n      #2563eb,\n      #14b8a6);\n  transition: width 0.3s ease;\n}\n.cc-card-actions {\n  display: flex;\n  gap: 0.5rem;\n  margin-top: 0.95rem;\n}\n.logs-toolbar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1.25rem;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.search-wrap {\n  position: relative;\n  flex: 1;\n  min-width: 250px;\n  max-width: 420px;\n}\n.search-wrap svg {\n  position: absolute;\n  left: 0.875rem;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--text-muted);\n  pointer-events: none;\n}\n.search-wrap .search-input {\n  padding-left: 2.5rem;\n}\n.log-stats {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.log-stat-item {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: var(--text-secondary);\n}\n.dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n}\n.dot.dot-green {\n  background: #22c55e;\n}\n.dot.dot-red {\n  background: #ef4444;\n}\n.dot.dot-yellow {\n  background: #f59e0b;\n}\n.log-recipient {\n  font-weight: 600;\n  font-size: 0.875rem;\n}\n.log-time {\n  font-size: 0.8rem;\n  color: var(--text-secondary);\n  white-space: nowrap;\n}\n.log-error {\n  font-size: 0.8rem;\n  color: #dc2626;\n}\n.log-empty-row {\n  text-align: center;\n  color: var(--text-secondary);\n  font-size: 0.8rem;\n  padding: 0.95rem;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (max-width: 768px) {\n  .campaign-manager {\n    padding: 1rem;\n  }\n  .cm-header {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 1rem;\n  }\n  .header-actions {\n    width: 100%;\n  }\n  .tab-bar {\n    width: 100%;\n  }\n  .ops-strip {\n    width: 100%;\n  }\n  .cc-card-actions {\n    flex-wrap: wrap;\n  }\n  .logs-toolbar {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}\n/*# sourceMappingURL=campaign-manager.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CampaignManagerComponent, { className: "CampaignManagerComponent", filePath: "app/modules/admin/components/campaign-manager/campaign-manager.component.ts", lineNumber: 86 });
})();
export {
  CampaignManagerComponent
};
//# sourceMappingURL=chunk-WDQ2LUWM.js.map
