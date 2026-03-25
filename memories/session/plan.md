## Plan: Angular MSAL v4 Project with Dashboard

TL;DR: Create a new Angular app (or use an existing one in `d:\git\MSAL test`), install MSAL v4 packages, configure `MsalModule` with a fake client ID, add a protected `Dashboard` component, and wire routing so users are redirected there after signing in. Use a stubbed API service (fake endpoint) for demo calls.

**Steps**

1. **Verify or create Angular project**
   - Check if workspace already contains an Angular app (`angular.json`, `src/app`).
   - If not present, create one using Angular CLI (e.g., `ng new msal-test --routing --style=scss`).

2. **Install MSAL dependencies**
   - Add `@azure/msal-angular@^4` and `@azure/msal-browser@^2`.

3. **Configure MSAL in the app module**
   - Add `MsalModule.forRoot(...)` in `AppModule` with a fake `clientId` (e.g., `00000000-0000-0000-0000-000000000000`).
   - Configure `MsalGuardConfiguration` and provide `MsalGuard` and `MsalInterceptor` if needed.
   - Ensure `MsalRedirectComponent` is added to `AppComponent` template.

4. **Create Dashboard component and routing**
   - Generate `DashboardComponent` and add a route `/dashboard` protected by `MsalGuard`.
   - Configure default route (e.g., `''`) to redirect to `/dashboard`.
   - Ensure route guard triggers login redirect when user is not authenticated.

5. **Add a fake API service**
   - Create `ApiService` that uses `HttpClient` to call a placeholder (e.g., `https://api.example.com/data`).
   - Inject it into `DashboardComponent` and display stubbed data.

6. **Provide a sign-in button / optional sign-out**
   - In `AppComponent` (or a header component), allow users to trigger `MsalService.loginRedirect()` and `MsalService.logout()`.

**Relevant files**

- `src/app/app.module.ts` — configure MSAL module and guards.
- `src/app/app-routing.module.ts` — route to `DashboardComponent` and apply `MsalGuard`.
- `src/app/dashboard/dashboard.component.ts` — dashboard UI.
- `src/app/services/api.service.ts` — fake API call.

**Verification**

1. Run `ng serve` and confirm the app launches.
2. Navigate to `/dashboard` and confirm MSAL redirect to login occurs (with fake config it will still hit login flow).
3. Confirm that after a successful login (or at least after MSAL redirects back) the route ends on `/dashboard`.

**Decisions**

- Using fake `clientId` and fake API endpoint, so the MSAL login/redirection behavior may fail to complete fully; the focus is on wiring the app structure.
- Assume Angular CLI and Node environment are available in the workspace.
