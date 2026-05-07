import {
  AbilityProvider,
  Can,
  defineAbilityFromRules,
  useModuleContext,
} from "@sand-enterpriseai/module-context/react";
import "../index.css";

export interface WidgetProps {
  basename?: string;
}

const Widget = ({ basename }: WidgetProps) => {
  const { preferences, permissions, status, error } = useModuleContext();
  const resolvedPreferences = preferences ?? {
    theme: "light",
    locale: "en",
    disabledFeatures: [],
  };
  const ability = defineAbilityFromRules(permissions);
  const isDarkTheme = resolvedPreferences.theme === "dark";
  const rootPath = basename ?? "/";

  return (
    <AbilityProvider ability={ability}>
      <section className={`module-root ${isDarkTheme ? "dark" : "light"}`}>
        <div className="page">
          <header className="hero">
            <p className="eyebrow">SandOS Federated Module</p>
            <h1 className="page-title">Test 2</h1>
            <p className="page-description">
              Starter module scaffolded for namespace <code>test-2</code>.
              Replace this component with the real user experience.
            </p>
          </header>

          <div className="cards">
            <section className="card stack">
              <h2 className="card-title">Build Setup</h2>
              <p className="card-copy">
                The module federation wiring is already configured. The exposed
                component is <code>test2Module/Widget</code>.
              </p>
              <dl className="meta-list">
                <div>
                  <dt className="meta-label">Package</dt>
                  <dd>
                    <code>sandos-federated-module</code>
                  </dd>
                </div>
                <div>
                  <dt className="meta-label">Namespace</dt>
                  <dd>
                    <code>test-2</code>
                  </dd>
                </div>
                <div>
                  <dt className="meta-label">Root path</dt>
                  <dd>
                    <code>{rootPath}</code>
                  </dd>
                </div>
              </dl>
            </section>

            <section className="card stack">
              <h2 className="card-title">Host Context</h2>
              <p className="card-copy">
                This starter reads the shared module context so it can respond
                to theme, locale, permissions, and host lifecycle state.
              </p>
              <dl className="meta-list">
                <div>
                  <dt className="meta-label">Theme</dt>
                  <dd>{resolvedPreferences.theme}</dd>
                </div>
                <div>
                  <dt className="meta-label">Locale</dt>
                  <dd>{resolvedPreferences.locale}</dd>
                </div>
                <div>
                  <dt className="meta-label">Status</dt>
                  <dd>{status}</dd>
                </div>
              </dl>
              {error ? (
                <pre>{JSON.stringify(error, null, 2)}</pre>
              ) : (
                <p className="card-copy">No module context error was reported.</p>
              )}
            </section>

            <section className="card stack">
              <h2 className="card-title">Permissions</h2>
              <p className="card-copy">
                The ability helpers are already wired. Replace this example with
                the real resource names used by your module.
              </p>
              <Can I="view" a="test-2">
                <span className="permission-pill">view:test-2 allowed</span>
              </Can>
              <pre>{JSON.stringify(permissions, null, 2)}</pre>
            </section>
          </div>
        </div>
      </section>
    </AbilityProvider>
  );
};

export default Widget;
