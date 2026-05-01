import {
  ActivatedRoute,
  RouterLink,
  RouterModule
} from "./chunk-PXDWMCLH.js";
import {
  CommonModule,
  Component,
  HttpClient,
  environment,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2
} from "./chunk-RJXMOIA6.js";
import "./chunk-DOECEMG6.js";

// src/app/modules/user/components/public-profile/public-profile.component.ts
var _c0 = () => ["/"];
var _c1 = () => [1, 2, 3, 4, 5];
var _forTrack0 = ($index, $item) => $item.id;
function PublicProfileComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275element(1, "div", 4);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Chargement du profil...");
    \u0275\u0275elementEnd()();
  }
}
function PublicProfileComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "h2");
    \u0275\u0275text(2, "Profil introuvable");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Ce profil n'existe pas ou n'est pas public.");
    \u0275\u0275elementEnd()();
  }
}
function PublicProfileComponent_Conditional_3_Conditional_11_For_2_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 17);
  }
  if (rf & 2) {
    const i_r1 = ctx.$implicit;
    const skill_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classProp("filled", i_r1 <= (skill_r2.niveau || 0));
  }
}
function PublicProfileComponent_Conditional_3_Conditional_11_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "span", 14);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 15);
    \u0275\u0275repeaterCreate(4, PublicProfileComponent_Conditional_3_Conditional_11_For_2_For_5_Template, 1, 2, "span", 16, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const skill_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(skill_r2.nom);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(1, _c1));
  }
}
function PublicProfileComponent_Conditional_3_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275repeaterCreate(1, PublicProfileComponent_Conditional_3_Conditional_11_For_2_Template, 6, 2, "div", 13, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.profileData.skills);
  }
}
function PublicProfileComponent_Conditional_3_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 10);
    \u0275\u0275text(1, "Aucune comp\xE9tence valid\xE9e pour le moment.");
    \u0275\u0275elementEnd();
  }
}
function PublicProfileComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 5)(2, "div", 6);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h1");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 7);
    \u0275\u0275text(7, "Certifi\xE9 par TalentPredict AI");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 8)(9, "h2");
    \u0275\u0275text(10, "Comp\xE9tences valid\xE9es");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(11, PublicProfileComponent_Conditional_3_Conditional_11_Template, 3, 0, "div", 9)(12, PublicProfileComponent_Conditional_3_Conditional_12_Template, 2, 0, "p", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 11)(14, "p");
    \u0275\u0275text(15, "Ce profil est g\xE9n\xE9r\xE9 et certifi\xE9 par la plateforme TalentPredict.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 12);
    \u0275\u0275text(17, "D\xE9couvrir TalentPredict");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r2.profileData.firstName == null ? null : ctx_r2.profileData.firstName.charAt(0), "", ctx_r2.profileData.lastName == null ? null : ctx_r2.profileData.lastName.charAt(0));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r2.profileData.firstName, " ", ctx_r2.profileData.lastName);
    \u0275\u0275advance(6);
    \u0275\u0275conditional((ctx_r2.profileData.skills == null ? null : ctx_r2.profileData.skills.length) > 0 ? 11 : 12);
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(6, _c0));
  }
}
var PublicProfileComponent = class _PublicProfileComponent {
  route = inject(ActivatedRoute);
  http = inject(HttpClient);
  profileData = null;
  loading = true;
  error = false;
  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get("slug");
    if (!slug) {
      this.error = true;
      this.loading = false;
      return;
    }
    this.http.get(`${environment.apiUrl}/api/public/profiles/${slug}`).subscribe({
      next: (data) => {
        this.profileData = data;
        this.loading = false;
      },
      error: () => {
        this.error = true;
        this.loading = false;
      }
    });
  }
  static \u0275fac = function PublicProfileComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PublicProfileComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PublicProfileComponent, selectors: [["app-public-profile"]], decls: 4, vars: 1, consts: [[1, "public-profile-container"], [1, "loading-state"], [1, "error-state"], [1, "profile-card"], [1, "spinner"], [1, "profile-header"], [1, "avatar"], [1, "tagline"], [1, "skills-section"], [1, "skills-grid"], [1, "no-skills"], [1, "cta-section"], [1, "btn", "btn-primary", 3, "routerLink"], [1, "skill-tag"], [1, "skill-name"], [1, "skill-level"], [1, "dot", 3, "filled"], [1, "dot"]], template: function PublicProfileComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275conditionalCreate(1, PublicProfileComponent_Conditional_1_Template, 4, 0, "div", 1)(2, PublicProfileComponent_Conditional_2_Template, 5, 0, "div", 2)(3, PublicProfileComponent_Conditional_3_Template, 18, 7, "div", 3);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading ? 1 : ctx.error ? 2 : ctx.profileData ? 3 : -1);
    }
  }, dependencies: [CommonModule, RouterModule, RouterLink], styles: ['\n\n.public-profile-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--bg-body);\n  padding: 2rem;\n  font-family: "Manrope", sans-serif;\n}\n.profile-card[_ngcontent-%COMP%] {\n  background: var(--bg-card);\n  border-radius: 24px;\n  box-shadow: var(--shadow-xl);\n  width: 100%;\n  max-width: 600px;\n  overflow: hidden;\n  border: 1px solid var(--border-light);\n}\n.profile-header[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #1e1b4b,\n      #4c1d95);\n  color: white;\n  padding: 4rem 2rem;\n  text-align: center;\n}\n.avatar[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  background: white;\n  color: #4c1d95;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 2.5rem;\n  font-weight: 800;\n  margin: 0 auto 1.5rem;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);\n}\n.profile-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0 0 0.5rem;\n  font-size: 2.5rem;\n  font-weight: 800;\n  color: white;\n}\n.tagline[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #e9d5ff;\n  font-size: 0.95rem;\n  font-weight: 600;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n}\n.skills-section[_ngcontent-%COMP%] {\n  padding: 3rem 2rem;\n}\n.skills-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: var(--text-primary);\n  margin: 0 0 2rem;\n  font-weight: 800;\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.skills-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n}\n.skill-tag[_ngcontent-%COMP%] {\n  background: var(--bg-body);\n  border: 1px solid var(--border-light);\n  border-radius: 14px;\n  padding: 1rem 1.5rem;\n  display: flex;\n  align-items: center;\n  gap: 1.25rem;\n  transition: all 0.2s;\n}\n.skill-tag[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary);\n  transform: translateY(-2px);\n}\n.skill-name[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: var(--text-primary);\n  font-size: 1rem;\n}\n.skill-level[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 5px;\n}\n.dot[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background: var(--border);\n}\n.dot.filled[_ngcontent-%COMP%] {\n  background: var(--primary);\n}\n.cta-section[_ngcontent-%COMP%] {\n  background: var(--bg-body);\n  padding: 2.5rem 2rem;\n  text-align: center;\n  border-top: 1px solid var(--border-light);\n}\n.cta-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 1rem;\n  margin: 0 0 2rem;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: white;\n  border: none;\n  padding: 1rem 2rem;\n  border-radius: 12px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.2s;\n  box-shadow: 0 4px 14px var(--primary-bg);\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: var(--primary-dark);\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px var(--primary-bg);\n}\n.loading-state[_ngcontent-%COMP%], \n.error-state[_ngcontent-%COMP%] {\n  text-align: center;\n  color: var(--text-secondary);\n  padding: 4rem;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border: 4px solid var(--border);\n  border-top-color: var(--primary);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin: 0 auto 1.5rem;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=public-profile.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PublicProfileComponent, [{
    type: Component,
    args: [{ selector: "app-public-profile", standalone: true, imports: [CommonModule, RouterModule], template: `<div class="public-profile-container">
  @if (loading) {
    <div class="loading-state">
      <div class="spinner"></div>
      <p>Chargement du profil...</p>
    </div>
  } @else if (error) {
    <div class="error-state">
      <h2>Profil introuvable</h2>
      <p>Ce profil n'existe pas ou n'est pas public.</p>
    </div>
  } @else if (profileData) {
    <div class="profile-card">
      <div class="profile-header">
        <div class="avatar">{{ profileData.firstName?.charAt(0) }}{{ profileData.lastName?.charAt(0) }}</div>
        <h1>{{ profileData.firstName }} {{ profileData.lastName }}</h1>
        <p class="tagline">Certifi\xE9 par TalentPredict AI</p>
      </div>

      <div class="skills-section">
        <h2>Comp\xE9tences valid\xE9es</h2>
        @if (profileData.skills?.length > 0) {
          <div class="skills-grid">
            @for (skill of profileData.skills; track skill.id) {
              <div class="skill-tag">
                <span class="skill-name">{{ skill.nom }}</span>
                <div class="skill-level">
                  @for (i of [1,2,3,4,5]; track i) {
                    <span class="dot" [class.filled]="i <= (skill.niveau || 0)"></span>
                  }
                </div>
              </div>
            }
          </div>
        } @else {
          <p class="no-skills">Aucune comp\xE9tence valid\xE9e pour le moment.</p>
        }
      </div>
      
      <div class="cta-section">
        <p>Ce profil est g\xE9n\xE9r\xE9 et certifi\xE9 par la plateforme TalentPredict.</p>
        <button class="btn btn-primary" [routerLink]="['/']">D\xE9couvrir TalentPredict</button>
      </div>
    </div>
  }
</div>
`, styles: ['/* src/app/modules/user/components/public-profile/public-profile.css */\n.public-profile-container {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--bg-body);\n  padding: 2rem;\n  font-family: "Manrope", sans-serif;\n}\n.profile-card {\n  background: var(--bg-card);\n  border-radius: 24px;\n  box-shadow: var(--shadow-xl);\n  width: 100%;\n  max-width: 600px;\n  overflow: hidden;\n  border: 1px solid var(--border-light);\n}\n.profile-header {\n  background:\n    linear-gradient(\n      135deg,\n      #1e1b4b,\n      #4c1d95);\n  color: white;\n  padding: 4rem 2rem;\n  text-align: center;\n}\n.avatar {\n  width: 100px;\n  height: 100px;\n  background: white;\n  color: #4c1d95;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 2.5rem;\n  font-weight: 800;\n  margin: 0 auto 1.5rem;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);\n}\n.profile-header h1 {\n  margin: 0 0 0.5rem;\n  font-size: 2.5rem;\n  font-weight: 800;\n  color: white;\n}\n.tagline {\n  margin: 0;\n  color: #e9d5ff;\n  font-size: 0.95rem;\n  font-weight: 600;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n}\n.skills-section {\n  padding: 3rem 2rem;\n}\n.skills-section h2 {\n  font-size: 1.5rem;\n  color: var(--text-primary);\n  margin: 0 0 2rem;\n  font-weight: 800;\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.skills-grid {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n}\n.skill-tag {\n  background: var(--bg-body);\n  border: 1px solid var(--border-light);\n  border-radius: 14px;\n  padding: 1rem 1.5rem;\n  display: flex;\n  align-items: center;\n  gap: 1.25rem;\n  transition: all 0.2s;\n}\n.skill-tag:hover {\n  border-color: var(--primary);\n  transform: translateY(-2px);\n}\n.skill-name {\n  font-weight: 700;\n  color: var(--text-primary);\n  font-size: 1rem;\n}\n.skill-level {\n  display: flex;\n  gap: 5px;\n}\n.dot {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background: var(--border);\n}\n.dot.filled {\n  background: var(--primary);\n}\n.cta-section {\n  background: var(--bg-body);\n  padding: 2.5rem 2rem;\n  text-align: center;\n  border-top: 1px solid var(--border-light);\n}\n.cta-section p {\n  color: var(--text-secondary);\n  font-size: 1rem;\n  margin: 0 0 2rem;\n}\n.btn-primary {\n  background: var(--primary);\n  color: white;\n  border: none;\n  padding: 1rem 2rem;\n  border-radius: 12px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.2s;\n  box-shadow: 0 4px 14px var(--primary-bg);\n}\n.btn-primary:hover {\n  background: var(--primary-dark);\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px var(--primary-bg);\n}\n.loading-state,\n.error-state {\n  text-align: center;\n  color: var(--text-secondary);\n  padding: 4rem;\n}\n.spinner {\n  width: 48px;\n  height: 48px;\n  border: 4px solid var(--border);\n  border-top-color: var(--primary);\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n  margin: 0 auto 1.5rem;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=public-profile.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PublicProfileComponent, { className: "PublicProfileComponent", filePath: "app/modules/user/components/public-profile/public-profile.component.ts", lineNumber: 16 });
})();
export {
  PublicProfileComponent
};
//# sourceMappingURL=chunk-XUWAAO4E.js.map
