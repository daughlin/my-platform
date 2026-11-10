# Frontend Deployment Playbook

## Deployment Configuration

- **Hosting:** Cloudflare Pages
- **Production branch:** `main`
- **Production URL:** [Production URL]
- **Deployment method:** Automatic deployment from GitHub

## Release Procedure

### 1. Develop and Test

1. Create a feature branch from the latest `main`.
2. Implement and test changes locally.
3. Run `npm run lint` and `npm run build` from `frontend/`.
4. Commit and push changes.

### 2. Review and Verify

1. Open a PR targeting `main`, documenting the changes, testing, and deployment risks.
2. Review the diff and obtain required approvals.
3. Confirm the Cloudflare preview deployment succeeded.
4. Open the preview URL from the PR.
5. Test the changes and check for regressions.

### 3. Deploy to Production

1. Merge the approved PR into `main`.
2. Confirm the Cloudflare production deployment succeeded.
3. Open the production site and verify the changes.
4. Check critical functionality for regressions.

### 4. Verify Deployment Version

1. Open **Cloudflare Pages → Deployments**.
2. Identify the active production deployment.
3. Confirm the deployed Git commit ID matches the expected release.

## Rollback Procedure

Coming soon.