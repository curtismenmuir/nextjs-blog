# nextjs-blog

- This is a starter template for [Learn Next.js](https://nextjs.org/learn).

- Modified to test G-Cloud interactions

- Deployed as service to App Engine. See `app.yaml` for deployment details.

## :arrow_up: How to Setup Project

**Step 1:** git clone this repo

**Step 2:** Ensure [NodeJS](https://nodejs.org/en/) is installed on machine

- NOTE: Use [Node Version Manager](https://github.com/nvm-sh/nvm) where applicable

**Step 3:** Ensure [Yarn](https://yarnpkg.com/) is installed on machine

## :fast_forward: How to Update Project

**Step 1:** Complete Setup instructions above

**Step 2:** Run the development server: `yarn dev`

**Step 3:** Navigating to: `http://localhost:3000`

**Step 4:** Apply updates to codebase and website will hot-reload upon save.

## :arrow_forward: How to Run Project

**Step 1:** Complete Setup instructions above

**Step 2:** Build project: `yarn build`

**Step 3:** Start project: `yarn start -p 3000`

**Step 4:** Navigating to: `http://localhost:3000`

## :rotating_light: Unit Tests

- N/A

## :rocket: Deploying

**Step 1:** Ensure G-Cloud SDK installed on machine

**Step 2:** Build project: `yarn build`

- NOTE: Test build by running `yarn start -p 3000` and navigating to `http://localhost:3000`

**Step 3:** Ensure G-Cloud SDK pointing to desired project: `gcloud config get-value project`

- See all available projects: `gcloud projects list`
- Set current project: `gcloud config set project some-project-name`

**Step 4:** Check Deployment Files: `gcloud meta list-files-for-upload`

- Ensure `.gcloudignore` contains all relevant files (EG `node_modules`)

**Step 5:** Deploy: `gcloud app deploy --version 1`

- NOTE: If deploying for first time, run create command first: `gcloud app create --region=europe-west2`
- NOTE: Will normally be deploying same version
- NOTE: If deploying new version, include `--stop-previous-version` at the end of deploy command to route all traffic to new version
- NOTE: Check GCP for current version (In Cloud Console, navigate to "App Engine" -> "Versions")
- NOTE: Remember to clean up old versions once they are no longer required
