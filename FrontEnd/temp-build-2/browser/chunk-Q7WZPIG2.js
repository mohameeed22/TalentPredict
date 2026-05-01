import {
  CommonModule,
  Component,
  HttpClient,
  Injectable,
  NgClass,
  computed,
  environment,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-RJXMOIA6.js";
import "./chunk-DOECEMG6.js";

// src/app/modules/jira/services/jira.service.ts
var JiraService = class _JiraService {
  http = inject(HttpClient);
  baseUrl = `${environment.apiUrl}/tickets`;
  createTicket(formationId) {
    return this.http.post(`${this.baseUrl}/formation/${formationId}`, {});
  }
  getFormationTickets(formationId) {
    return this.http.get(`${this.baseUrl}/formation/${formationId}`);
  }
  getTicketById(ticketId) {
    return this.http.get(`${this.baseUrl}/${ticketId}`);
  }
  syncTicketStatus(ticketId) {
    return this.http.put(`${this.baseUrl}/${ticketId}/sync`, {});
  }
  getAllTickets() {
    return this.http.get(this.baseUrl);
  }
  static \u0275fac = function JiraService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _JiraService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _JiraService, factory: _JiraService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(JiraService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/modules/jira/models/jira-ticket.model.ts
var StatutTicket;
(function(StatutTicket2) {
  StatutTicket2["OUVERT"] = "OUVERT";
  StatutTicket2["EN_COURS"] = "EN_COURS";
  StatutTicket2["RESOLU"] = "RESOLU";
  StatutTicket2["FERME"] = "FERME";
})(StatutTicket || (StatutTicket = {}));
var PrioriteTicket;
(function(PrioriteTicket2) {
  PrioriteTicket2["BASSE"] = "BASSE";
  PrioriteTicket2["MOYENNE"] = "MOYENNE";
  PrioriteTicket2["HAUTE"] = "HAUTE";
  PrioriteTicket2["CRITIQUE"] = "CRITIQUE";
})(PrioriteTicket || (PrioriteTicket = {}));

// src/app/modules/jira/components/jira-tickets/jira-tickets.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function JiraTicketsComponent_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275element(1, "div", 21);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Chargement des tickets...");
    \u0275\u0275elementEnd()();
  }
}
function JiraTicketsComponent_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 22);
    \u0275\u0275element(2, "circle", 23)(3, "line", 24)(4, "line", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 26);
    \u0275\u0275listener("click", function JiraTicketsComponent_Conditional_48_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.loadTickets());
    });
    \u0275\u0275text(8, "R\xE9essayer");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.error());
  }
}
function JiraTicketsComponent_Conditional_49_For_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 28)(1, "td")(2, "span", 29);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "div", 30);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td")(8, "span", 31);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td")(11, "span", 32);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td")(14, "span", 33);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td")(17, "span", 34);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "td")(20, "span", 34);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "td")(23, "button", 35);
    \u0275\u0275listener("click", function JiraTicketsComponent_Conditional_49_For_22_Template_button_click_23_listener($event) {
      const ticket_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.syncTicket(ticket_r4.id, $event));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(24, "svg", 36);
    \u0275\u0275element(25, "polyline", 11)(26, "path", 12);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ticket_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ticket_r4.jiraKey);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ticket_r4.titre);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r1.getStatusClass(ticket_r4.statut));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getStatusLabel(ticket_r4.statut), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r1.getPriorityClass(ticket_r4.priorite));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getPriorityLabel(ticket_r4.priorite), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ticket_r4.assignee || "Non assign\xE9");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(ticket_r4.dateCreation));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(ticket_r4.dateMiseAJour));
  }
}
function JiraTicketsComponent_Conditional_49_ForEmpty_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 37);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 38);
    \u0275\u0275element(3, "rect", 5)(4, "line", 6)(5, "line", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7, "Aucun ticket trouv\xE9");
    \u0275\u0275elementEnd()()();
  }
}
function JiraTicketsComponent_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "table", 27)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Cl\xE9 Jira");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Titre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Priorit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Assign\xE9 \xE0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Cr\xE9ation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Mise \xE0 jour");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th");
    \u0275\u0275text(19, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "tbody");
    \u0275\u0275repeaterCreate(21, JiraTicketsComponent_Conditional_49_For_22_Template, 27, 9, "tr", 28, _forTrack0, false, JiraTicketsComponent_Conditional_49_ForEmpty_23_Template, 8, 0, "tr");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(21);
    \u0275\u0275repeater(ctx_r1.filteredTickets());
  }
}
var JiraTicketsComponent = class _JiraTicketsComponent {
  jiraService = inject(JiraService);
  tickets = signal([], ...ngDevMode ? [{ debugName: "tickets" }] : []);
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  error = signal(null, ...ngDevMode ? [{ debugName: "error" }] : []);
  selectedStatus = signal("ALL", ...ngDevMode ? [{ debugName: "selectedStatus" }] : []);
  selectedPriority = signal("ALL", ...ngDevMode ? [{ debugName: "selectedPriority" }] : []);
  StatutTicket = StatutTicket;
  PrioriteTicket = PrioriteTicket;
  filteredTickets = computed(() => {
    let filtered = this.tickets();
    if (this.selectedStatus() !== "ALL") {
      filtered = filtered.filter((t) => t.statut === this.selectedStatus());
    }
    if (this.selectedPriority() !== "ALL") {
      filtered = filtered.filter((t) => t.priorite === this.selectedPriority());
    }
    return filtered;
  }, ...ngDevMode ? [{ debugName: "filteredTickets" }] : []);
  ngOnInit() {
    this.loadTickets();
  }
  loadTickets() {
    this.loading.set(true);
    this.error.set(null);
    this.jiraService.getAllTickets().subscribe({
      next: (data) => {
        this.tickets.set(data);
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set("Erreur lors du chargement des tickets");
        this.loading.set(false);
        console.error("Error loading tickets:", err);
      }
    });
  }
  getStatusClass(statut) {
    const statusMap = {
      [StatutTicket.OUVERT]: "status-open",
      [StatutTicket.EN_COURS]: "status-in-progress",
      [StatutTicket.RESOLU]: "status-resolved",
      [StatutTicket.FERME]: "status-closed"
    };
    return statusMap[statut] || "";
  }
  getPriorityClass(priorite) {
    const priorityMap = {
      [PrioriteTicket.BASSE]: "priority-low",
      [PrioriteTicket.MOYENNE]: "priority-medium",
      [PrioriteTicket.HAUTE]: "priority-high",
      [PrioriteTicket.CRITIQUE]: "priority-critical"
    };
    return priorityMap[priorite] || "";
  }
  getStatusLabel(statut) {
    const labels = {
      [StatutTicket.OUVERT]: "Ouvert",
      [StatutTicket.EN_COURS]: "En cours",
      [StatutTicket.RESOLU]: "R\xE9solu",
      [StatutTicket.FERME]: "Ferm\xE9"
    };
    return labels[statut] || statut;
  }
  getPriorityLabel(priorite) {
    const labels = {
      [PrioriteTicket.BASSE]: "Basse",
      [PrioriteTicket.MOYENNE]: "Moyenne",
      [PrioriteTicket.HAUTE]: "Haute",
      [PrioriteTicket.CRITIQUE]: "Critique"
    };
    return labels[priorite] || priorite;
  }
  formatDate(date) {
    return new Date(date).toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "short",
      day: "numeric"
    });
  }
  syncTicket(ticketId, event) {
    event.stopPropagation();
    this.jiraService.syncTicketStatus(ticketId).subscribe({
      next: (updatedTicket) => {
        const tickets = this.tickets();
        const index = tickets.findIndex((t) => t.id === ticketId);
        if (index !== -1) {
          tickets[index] = updatedTicket;
          this.tickets.set([...tickets]);
        }
      },
      error: (err) => {
        console.error("Error syncing ticket:", err);
      }
    });
  }
  static \u0275fac = function JiraTicketsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _JiraTicketsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _JiraTicketsComponent, selectors: [["app-jira-tickets"]], decls: 50, vars: 14, consts: [[1, "jira-tickets"], [1, "tickets-header"], [1, "page-header"], [1, "page-icon"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["x", "3", "y", "3", "width", "18", "height", "18", "rx", "2", "ry", "2"], ["x1", "3", "y1", "9", "x2", "21", "y2", "9"], ["x1", "9", "y1", "21", "x2", "9", "y2", "9"], [1, "page-subtitle"], [1, "btn-refresh", 3, "click", "disabled"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["points", "23 4 23 10 17 10"], ["d", "M20.49 15a9 9 0 1 1-2.12-9.36L23 10"], [1, "filters"], [1, "filter-group"], [3, "change", "value"], ["value", "ALL"], [3, "value"], [1, "loading-card"], [1, "error-card"], [1, "tickets-table-container"], [1, "loader"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["cx", "12", "cy", "12", "r", "10"], ["x1", "15", "y1", "9", "x2", "9", "y2", "15"], ["x1", "9", "y1", "9", "x2", "15", "y2", "15"], [1, "btn-retry", 3, "click"], [1, "tickets-table"], [1, "ticket-row"], [1, "jira-key"], [1, "ticket-title"], [1, "status-badge", 3, "ngClass"], [1, "priority-badge", 3, "ngClass"], [1, "assignee"], [1, "date"], ["title", "Synchroniser avec Jira", 1, "btn-sync", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["colspan", "8", 1, "empty-state"], ["width", "32", "height", "32", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"]], template: function JiraTicketsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(4, "svg", 4);
      \u0275\u0275element(5, "rect", 5)(6, "line", 6)(7, "line", 7);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(8, "div")(9, "h2");
      \u0275\u0275text(10, "Tickets Jira");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "p", 8);
      \u0275\u0275text(12, "Suivi et synchronisation des tickets");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(13, "button", 9);
      \u0275\u0275listener("click", function JiraTicketsComponent_Template_button_click_13_listener() {
        return ctx.loadTickets();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(14, "svg", 10);
      \u0275\u0275element(15, "polyline", 11)(16, "path", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275text(17, " Actualiser ");
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(18, "div", 13)(19, "div", 14)(20, "label");
      \u0275\u0275text(21, "Statut");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "select", 15);
      \u0275\u0275listener("change", function JiraTicketsComponent_Template_select_change_22_listener($event) {
        return ctx.selectedStatus.set($event.target.value);
      });
      \u0275\u0275elementStart(23, "option", 16);
      \u0275\u0275text(24, "Tous");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "option", 17);
      \u0275\u0275text(26, "Ouvert");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "option", 17);
      \u0275\u0275text(28, "En cours");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "option", 17);
      \u0275\u0275text(30, "R\xE9solu");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "option", 17);
      \u0275\u0275text(32, "Ferm\xE9");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(33, "div", 14)(34, "label");
      \u0275\u0275text(35, "Priorit\xE9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "select", 15);
      \u0275\u0275listener("change", function JiraTicketsComponent_Template_select_change_36_listener($event) {
        return ctx.selectedPriority.set($event.target.value);
      });
      \u0275\u0275elementStart(37, "option", 16);
      \u0275\u0275text(38, "Toutes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "option", 17);
      \u0275\u0275text(40, "Basse");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "option", 17);
      \u0275\u0275text(42, "Moyenne");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "option", 17);
      \u0275\u0275text(44, "Haute");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "option", 17);
      \u0275\u0275text(46, "Critique");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275conditionalCreate(47, JiraTicketsComponent_Conditional_47_Template, 4, 0, "div", 18);
      \u0275\u0275conditionalCreate(48, JiraTicketsComponent_Conditional_48_Template, 9, 1, "div", 19);
      \u0275\u0275conditionalCreate(49, JiraTicketsComponent_Conditional_49_Template, 24, 1, "div", 20);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(13);
      \u0275\u0275property("disabled", ctx.loading());
      \u0275\u0275advance(9);
      \u0275\u0275property("value", ctx.selectedStatus());
      \u0275\u0275advance(3);
      \u0275\u0275property("value", ctx.StatutTicket.OUVERT);
      \u0275\u0275advance(2);
      \u0275\u0275property("value", ctx.StatutTicket.EN_COURS);
      \u0275\u0275advance(2);
      \u0275\u0275property("value", ctx.StatutTicket.RESOLU);
      \u0275\u0275advance(2);
      \u0275\u0275property("value", ctx.StatutTicket.FERME);
      \u0275\u0275advance(5);
      \u0275\u0275property("value", ctx.selectedPriority());
      \u0275\u0275advance(3);
      \u0275\u0275property("value", ctx.PrioriteTicket.BASSE);
      \u0275\u0275advance(2);
      \u0275\u0275property("value", ctx.PrioriteTicket.MOYENNE);
      \u0275\u0275advance(2);
      \u0275\u0275property("value", ctx.PrioriteTicket.HAUTE);
      \u0275\u0275advance(2);
      \u0275\u0275property("value", ctx.PrioriteTicket.CRITIQUE);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.loading() ? 47 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.error() ? 48 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.loading() && !ctx.error() ? 49 : -1);
    }
  }, dependencies: [CommonModule, NgClass], styles: ['\n\n.jira-tickets[_ngcontent-%COMP%] {\n  padding: 2rem;\n  max-width: 1600px;\n  margin: 0 auto;\n}\n.tickets-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1.5rem;\n  flex-wrap: wrap;\n  gap: 1rem;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.page-header[_ngcontent-%COMP%]   .page-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 14px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary, #6366f1),\n      #8b5cf6);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  flex-shrink: 0;\n}\n.page-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  font-weight: 700;\n  color: var(--text-primary, #1e293b);\n  margin: 0;\n}\n.page-header[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--text-secondary, #64748b);\n  margin: 0.125rem 0 0;\n}\n.btn-refresh[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.625rem 1.25rem;\n  background: var(--primary, #6366f1);\n  color: white;\n  border: none;\n  border-radius: 10px;\n  cursor: pointer;\n  font-size: 0.875rem;\n  font-weight: 600;\n  transition: all 0.2s;\n}\n.btn-refresh[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--primary-dark, #4f46e5);\n  transform: translateY(-1px);\n}\n.btn-refresh[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.filters[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n  padding: 1.25rem;\n  background: white;\n  border-radius: 14px;\n  border: 1px solid var(--border, #e2e8f0);\n}\n.filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.625rem;\n}\n.filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.813rem;\n  font-weight: 600;\n  color: var(--text-secondary, #64748b);\n}\n.filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.875rem;\n  border: 1.5px solid var(--border, #e2e8f0);\n  border-radius: 10px;\n  font-size: 0.813rem;\n  font-weight: 500;\n  cursor: pointer;\n  color: var(--text-primary, #1e293b);\n  transition: all 0.2s;\n}\n.filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary, #6366f1);\n  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);\n}\n.loading-card[_ngcontent-%COMP%], \n.error-card[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 3rem 2rem;\n  background: white;\n  border-radius: 16px;\n  border: 1px solid var(--border, #e2e8f0);\n}\n.loading-card[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%], \n.error-card[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border: 3px solid var(--border, #e2e8f0);\n  border-top-color: var(--primary, #6366f1);\n  border-radius: 50%;\n  margin: 0 auto 1rem;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n.loading-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.error-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.938rem;\n  color: var(--text-secondary, #64748b);\n}\n.loading-card[_ngcontent-%COMP%]   .btn-retry[_ngcontent-%COMP%], \n.error-card[_ngcontent-%COMP%]   .btn-retry[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-top: 1rem;\n  padding: 0.625rem 1.25rem;\n  background: var(--primary, #6366f1);\n  color: white;\n  border: none;\n  border-radius: 10px;\n  cursor: pointer;\n  font-size: 0.875rem;\n  font-weight: 600;\n}\n.loading-card[_ngcontent-%COMP%]   .btn-retry[_ngcontent-%COMP%]:hover, \n.error-card[_ngcontent-%COMP%]   .btn-retry[_ngcontent-%COMP%]:hover {\n  background: var(--primary-dark, #4f46e5);\n}\n.error-card[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #ef4444;\n  margin-bottom: 0.5rem;\n}\n.error-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #991b1b;\n  font-weight: 600;\n}\n.tickets-table-container[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 16px;\n  border: 1px solid var(--border, #e2e8f0);\n  overflow: hidden;\n}\n.tickets-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.tickets-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: var(--bg-secondary, #f8fafc);\n}\n.tickets-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 0.875rem 1rem;\n  text-align: left;\n  font-size: 0.75rem;\n  font-weight: 700;\n  color: var(--text-secondary, #64748b);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  border-bottom: 1px solid var(--border, #e2e8f0);\n}\n.tickets-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .ticket-row[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #f1f5f9;\n  transition: background 0.15s;\n}\n.tickets-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .ticket-row[_ngcontent-%COMP%]:hover {\n  background: #fafbfc;\n}\n.tickets-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .ticket-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.tickets-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .ticket-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.875rem 1rem;\n  font-size: 0.875rem;\n}\n.jira-key[_ngcontent-%COMP%] {\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.813rem;\n  font-weight: 700;\n  color: var(--primary, #6366f1);\n  background: rgba(99, 102, 241, 0.08);\n  padding: 0.25rem 0.5rem;\n  border-radius: 6px;\n}\n.ticket-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--text-primary, #1e293b);\n  max-width: 280px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.status-badge[_ngcontent-%COMP%], \n.priority-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.25rem 0.625rem;\n  border-radius: 20px;\n  font-size: 0.688rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n}\n.status-badge.status-open[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1e40af;\n}\n.status-badge.status-in-progress[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.status-badge.status-resolved[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #166534;\n}\n.status-badge.status-closed[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: var(--text-secondary, #64748b);\n}\n.priority-badge.priority-low[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: var(--text-secondary, #64748b);\n}\n.priority-badge.priority-medium[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1e40af;\n}\n.priority-badge.priority-high[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.priority-badge.priority-critical[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #991b1b;\n}\n.assignee[_ngcontent-%COMP%] {\n  color: var(--text-secondary, #64748b);\n  font-weight: 500;\n  font-size: 0.813rem;\n}\n.date[_ngcontent-%COMP%] {\n  color: var(--text-tertiary, #94a3b8);\n  font-size: 0.813rem;\n}\n.btn-sync[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.375rem;\n  background: transparent;\n  border: 1.5px solid var(--border, #e2e8f0);\n  border-radius: 8px;\n  cursor: pointer;\n  color: var(--text-secondary, #64748b);\n  transition: all 0.2s;\n}\n.btn-sync[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary, #6366f1);\n  color: var(--primary, #6366f1);\n  transform: rotate(180deg);\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 3rem !important;\n}\n.empty-state[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: var(--text-tertiary, #94a3b8);\n  margin-bottom: 0.75rem;\n}\n.empty-state[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  color: var(--text-tertiary, #94a3b8);\n  font-size: 0.938rem;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 1200px) {\n  .tickets-table-container[_ngcontent-%COMP%] {\n    overflow-x: auto;\n  }\n  .tickets-table-container[_ngcontent-%COMP%]   .tickets-table[_ngcontent-%COMP%] {\n    min-width: 900px;\n  }\n}\n@media (max-width: 768px) {\n  .jira-tickets[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .tickets-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .page-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n  .filters[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 0.75rem;\n  }\n  .filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n}\n/*# sourceMappingURL=jira-tickets.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(JiraTicketsComponent, [{
    type: Component,
    args: [{ selector: "app-jira-tickets", standalone: true, imports: [CommonModule], template: `<div class="jira-tickets">\r
  <div class="tickets-header">\r
    <div class="page-header">\r
      <div class="page-icon">\r
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>\r
      </div>\r
      <div>\r
        <h2>Tickets Jira</h2>\r
        <p class="page-subtitle">Suivi et synchronisation des tickets</p>\r
      </div>\r
    </div>\r
    <button class="btn-refresh" (click)="loadTickets()" [disabled]="loading()">\r
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>\r
      Actualiser\r
    </button>\r
  </div>\r
\r
  <div class="filters">\r
    <div class="filter-group">\r
      <label>Statut</label>\r
      <select\r
        [value]="selectedStatus()"\r
        (change)="selectedStatus.set($any($event.target).value)">\r
        <option value="ALL">Tous</option>\r
        <option [value]="StatutTicket.OUVERT">Ouvert</option>\r
        <option [value]="StatutTicket.EN_COURS">En cours</option>\r
        <option [value]="StatutTicket.RESOLU">R\xE9solu</option>\r
        <option [value]="StatutTicket.FERME">Ferm\xE9</option>\r
      </select>\r
    </div>\r
\r
    <div class="filter-group">\r
      <label>Priorit\xE9</label>\r
      <select\r
        [value]="selectedPriority()"\r
        (change)="selectedPriority.set($any($event.target).value)">\r
        <option value="ALL">Toutes</option>\r
        <option [value]="PrioriteTicket.BASSE">Basse</option>\r
        <option [value]="PrioriteTicket.MOYENNE">Moyenne</option>\r
        <option [value]="PrioriteTicket.HAUTE">Haute</option>\r
        <option [value]="PrioriteTicket.CRITIQUE">Critique</option>\r
      </select>\r
    </div>\r
  </div>\r
\r
  @if (loading()) {\r
    <div class="loading-card">\r
      <div class="loader"></div>\r
      <p>Chargement des tickets...</p>\r
    </div>\r
  }\r
\r
  @if (error()) {\r
    <div class="error-card">\r
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>\r
      <p>{{ error() }}</p>\r
      <button class="btn-retry" (click)="loadTickets()">R\xE9essayer</button>\r
    </div>\r
  }\r
\r
  @if (!loading() && !error()) {\r
    <div class="tickets-table-container">\r
      <table class="tickets-table">\r
        <thead>\r
          <tr>\r
            <th>Cl\xE9 Jira</th>\r
            <th>Titre</th>\r
            <th>Statut</th>\r
            <th>Priorit\xE9</th>\r
            <th>Assign\xE9 \xE0</th>\r
            <th>Cr\xE9ation</th>\r
            <th>Mise \xE0 jour</th>\r
            <th>Actions</th>\r
          </tr>\r
        </thead>\r
        <tbody>\r
          @for (ticket of filteredTickets(); track ticket.id) {\r
            <tr class="ticket-row">\r
              <td>\r
                <span class="jira-key">{{ ticket.jiraKey }}</span>\r
              </td>\r
              <td>\r
                <div class="ticket-title">{{ ticket.titre }}</div>\r
              </td>\r
              <td>\r
                <span class="status-badge" [ngClass]="getStatusClass(ticket.statut)">\r
                  {{ getStatusLabel(ticket.statut) }}\r
                </span>\r
              </td>\r
              <td>\r
                <span class="priority-badge" [ngClass]="getPriorityClass(ticket.priorite)">\r
                  {{ getPriorityLabel(ticket.priorite) }}\r
                </span>\r
              </td>\r
              <td>\r
                <span class="assignee">{{ ticket.assignee || 'Non assign\xE9' }}</span>\r
              </td>\r
              <td>\r
                <span class="date">{{ formatDate(ticket.dateCreation) }}</span>\r
              </td>\r
              <td>\r
                <span class="date">{{ formatDate(ticket.dateMiseAJour) }}</span>\r
              </td>\r
              <td>\r
                <button\r
                  class="btn-sync"\r
                  (click)="syncTicket(ticket.id, $event)"\r
                  title="Synchroniser avec Jira">\r
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>\r
                </button>\r
              </td>\r
            </tr>\r
          } @empty {\r
            <tr>\r
              <td colspan="8" class="empty-state">\r
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>\r
                <span>Aucun ticket trouv\xE9</span>\r
              </td>\r
            </tr>\r
          }\r
        </tbody>\r
      </table>\r
    </div>\r
  }\r
</div>\r
`, styles: ['/* src/app/modules/jira/components/jira-tickets/jira-tickets.component.scss */\n.jira-tickets {\n  padding: 2rem;\n  max-width: 1600px;\n  margin: 0 auto;\n}\n.tickets-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1.5rem;\n  flex-wrap: wrap;\n  gap: 1rem;\n}\n.page-header {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.page-header .page-icon {\n  width: 48px;\n  height: 48px;\n  border-radius: 14px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary, #6366f1),\n      #8b5cf6);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  flex-shrink: 0;\n}\n.page-header h2 {\n  font-size: 1.75rem;\n  font-weight: 700;\n  color: var(--text-primary, #1e293b);\n  margin: 0;\n}\n.page-header .page-subtitle {\n  font-size: 0.875rem;\n  color: var(--text-secondary, #64748b);\n  margin: 0.125rem 0 0;\n}\n.btn-refresh {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.625rem 1.25rem;\n  background: var(--primary, #6366f1);\n  color: white;\n  border: none;\n  border-radius: 10px;\n  cursor: pointer;\n  font-size: 0.875rem;\n  font-weight: 600;\n  transition: all 0.2s;\n}\n.btn-refresh:hover:not(:disabled) {\n  background: var(--primary-dark, #4f46e5);\n  transform: translateY(-1px);\n}\n.btn-refresh:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.filters {\n  display: flex;\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n  padding: 1.25rem;\n  background: white;\n  border-radius: 14px;\n  border: 1px solid var(--border, #e2e8f0);\n}\n.filters .filter-group {\n  display: flex;\n  align-items: center;\n  gap: 0.625rem;\n}\n.filters .filter-group label {\n  font-size: 0.813rem;\n  font-weight: 600;\n  color: var(--text-secondary, #64748b);\n}\n.filters .filter-group select {\n  padding: 0.5rem 0.875rem;\n  border: 1.5px solid var(--border, #e2e8f0);\n  border-radius: 10px;\n  font-size: 0.813rem;\n  font-weight: 500;\n  cursor: pointer;\n  color: var(--text-primary, #1e293b);\n  transition: all 0.2s;\n}\n.filters .filter-group select:focus {\n  outline: none;\n  border-color: var(--primary, #6366f1);\n  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);\n}\n.loading-card,\n.error-card {\n  text-align: center;\n  padding: 3rem 2rem;\n  background: white;\n  border-radius: 16px;\n  border: 1px solid var(--border, #e2e8f0);\n}\n.loading-card .loader,\n.error-card .loader {\n  width: 44px;\n  height: 44px;\n  border: 3px solid var(--border, #e2e8f0);\n  border-top-color: var(--primary, #6366f1);\n  border-radius: 50%;\n  margin: 0 auto 1rem;\n  animation: spin 0.8s linear infinite;\n}\n.loading-card p,\n.error-card p {\n  font-size: 0.938rem;\n  color: var(--text-secondary, #64748b);\n}\n.loading-card .btn-retry,\n.error-card .btn-retry {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-top: 1rem;\n  padding: 0.625rem 1.25rem;\n  background: var(--primary, #6366f1);\n  color: white;\n  border: none;\n  border-radius: 10px;\n  cursor: pointer;\n  font-size: 0.875rem;\n  font-weight: 600;\n}\n.loading-card .btn-retry:hover,\n.error-card .btn-retry:hover {\n  background: var(--primary-dark, #4f46e5);\n}\n.error-card svg {\n  color: #ef4444;\n  margin-bottom: 0.5rem;\n}\n.error-card p {\n  color: #991b1b;\n  font-weight: 600;\n}\n.tickets-table-container {\n  background: white;\n  border-radius: 16px;\n  border: 1px solid var(--border, #e2e8f0);\n  overflow: hidden;\n}\n.tickets-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.tickets-table thead {\n  background: var(--bg-secondary, #f8fafc);\n}\n.tickets-table thead th {\n  padding: 0.875rem 1rem;\n  text-align: left;\n  font-size: 0.75rem;\n  font-weight: 700;\n  color: var(--text-secondary, #64748b);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  border-bottom: 1px solid var(--border, #e2e8f0);\n}\n.tickets-table tbody .ticket-row {\n  border-bottom: 1px solid #f1f5f9;\n  transition: background 0.15s;\n}\n.tickets-table tbody .ticket-row:hover {\n  background: #fafbfc;\n}\n.tickets-table tbody .ticket-row:last-child {\n  border-bottom: none;\n}\n.tickets-table tbody .ticket-row td {\n  padding: 0.875rem 1rem;\n  font-size: 0.875rem;\n}\n.jira-key {\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.813rem;\n  font-weight: 700;\n  color: var(--primary, #6366f1);\n  background: rgba(99, 102, 241, 0.08);\n  padding: 0.25rem 0.5rem;\n  border-radius: 6px;\n}\n.ticket-title {\n  font-weight: 600;\n  color: var(--text-primary, #1e293b);\n  max-width: 280px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.status-badge,\n.priority-badge {\n  display: inline-block;\n  padding: 0.25rem 0.625rem;\n  border-radius: 20px;\n  font-size: 0.688rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n}\n.status-badge.status-open {\n  background: #dbeafe;\n  color: #1e40af;\n}\n.status-badge.status-in-progress {\n  background: #fef3c7;\n  color: #92400e;\n}\n.status-badge.status-resolved {\n  background: #dcfce7;\n  color: #166534;\n}\n.status-badge.status-closed {\n  background: #f1f5f9;\n  color: var(--text-secondary, #64748b);\n}\n.priority-badge.priority-low {\n  background: #f1f5f9;\n  color: var(--text-secondary, #64748b);\n}\n.priority-badge.priority-medium {\n  background: #dbeafe;\n  color: #1e40af;\n}\n.priority-badge.priority-high {\n  background: #fef3c7;\n  color: #92400e;\n}\n.priority-badge.priority-critical {\n  background: #fef2f2;\n  color: #991b1b;\n}\n.assignee {\n  color: var(--text-secondary, #64748b);\n  font-weight: 500;\n  font-size: 0.813rem;\n}\n.date {\n  color: var(--text-tertiary, #94a3b8);\n  font-size: 0.813rem;\n}\n.btn-sync {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.375rem;\n  background: transparent;\n  border: 1.5px solid var(--border, #e2e8f0);\n  border-radius: 8px;\n  cursor: pointer;\n  color: var(--text-secondary, #64748b);\n  transition: all 0.2s;\n}\n.btn-sync:hover {\n  border-color: var(--primary, #6366f1);\n  color: var(--primary, #6366f1);\n  transform: rotate(180deg);\n}\n.empty-state {\n  text-align: center;\n  padding: 3rem !important;\n}\n.empty-state svg {\n  color: var(--text-tertiary, #94a3b8);\n  margin-bottom: 0.75rem;\n}\n.empty-state span {\n  display: block;\n  color: var(--text-tertiary, #94a3b8);\n  font-size: 0.938rem;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 1200px) {\n  .tickets-table-container {\n    overflow-x: auto;\n  }\n  .tickets-table-container .tickets-table {\n    min-width: 900px;\n  }\n}\n@media (max-width: 768px) {\n  .jira-tickets {\n    padding: 1rem;\n  }\n  .tickets-header {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .page-header h2 {\n    font-size: 1.25rem;\n  }\n  .filters {\n    flex-direction: column;\n    gap: 0.75rem;\n  }\n  .filters .filter-group {\n    width: 100%;\n  }\n  .filters .filter-group select {\n    flex: 1;\n  }\n}\n/*# sourceMappingURL=jira-tickets.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(JiraTicketsComponent, { className: "JiraTicketsComponent", filePath: "app/modules/jira/components/jira-tickets/jira-tickets.component.ts", lineNumber: 13 });
})();
export {
  JiraTicketsComponent
};
//# sourceMappingURL=chunk-Q7WZPIG2.js.map
