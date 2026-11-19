# יומן פרומפטים

## 2026-11-09

**17:19 · codex**

> Without changing any files, check that PROMPTS.md exists and reply only with: found

**17:21 · codex**

> Without changing any files, check that PROMPTS.md exists and reply only with: found

**17:38 · codex**

> Create a concise PRD.md for an English-only React dog breed gallery named "Find Your Joy". Do not modify any app code or other files.
> 
> Include: the app purpose, target users, and only these confirmed features: site logo, breed search, a short About section, an alphabetically sorted gallery, a fixed warm cream gallery background (#FFF7ED), image-first breed cards, a favorite heart toggle, responsive layout, a breed detail page, and a favorites page.
> 
> Include these constraints: React + Vite + TypeScript, React Router, the public keyless Dog CEO API, no any, and accessibility. Do not add unconfirmed features. After creating the file, summarize what you wrote.

**17:43 · codex**

> Create a concise tasks.md based only on PRD.md and the current project state. Do not modify application code, PRD.md, README.md, or any other files.
> 
> Use a short Markdown checkbox checklist in dependency order. Mark only these as completed: initializing React + Vite + TypeScript, and writing PRD.md.
> 
> Include future tasks for routing, Dog CEO API types and fetching, gallery and search, favorites and breed details, styling and responsiveness, at least five meaningful Vitest tests, README, and final validation. Do not add unconfirmed features. Then summarize the file.

**17:47 · codex**

> Implement only the React Router task from tasks.md.
> 
> Add react-router-dom using npm.cmd because PowerShell blocks npm.ps1. Create typed placeholder page components for the home page, breed detail page, and favorites page. Add BrowserRouter routes for /, /breed/:breedName, and /favorites. Include only minimal text links needed to manually verify navigation.
> 
> Do not fetch API data, add styling, implement favorites state, or add any other features. Do not use any. Update tasks.md by checking only the routing task when complete. Do not commit. Run lint and summarize the changes and result.
**17:57 · Tomer**

> I checked the Home, Breed details, and Favorites routes in the browser. Navigation worked on all three pages.

## 2026-11-09

**18:24 · codex**

> # Overview
> 
> Generate 0 to 3 hyperpersonalized suggestions for what this user can do with Codex in this local project: C:\Users\tomer\OneDrive\Desktop\תקיית מדעי המחשב\מדעי המחשב\קורסים\סמסטר 5\פרונט אנד\final project\find-your-joy-local
> 
> 
> Get an understanding of the user's intent and goals by deeply viewing their connected apps. Suggest actionable tasks that they would actually act on/click.
> Infer what the user works on and their style from their connected apps.
> Optimize for relief: choose suggestions that make the user's life easier, reduce an open loop, unblock work, or prepare them for something that is about to matter. Do not suggest tasks that merely sound productive or create more work for the user.
> The best suggestions feel like Codex read the user's mind: by synthesizing signals across apps, it discovers something the user did not yet know and proposes the concrete next action they would want to take.
> 
> Serve this specific user. Do not suggest generic project-quality, onboarding, exploration, cleanup, refactor, documentation, test-writing, or dependency-update tasks merely because they could be useful to someone who owns this project.
> Your job is to predict what this user specifically needs to get done.
> 
> 
> 
> # Rules
> 
> Use relevant connected apps or MCP sources available in this session, including Sites, Pets, Codex Document Control, Hotline, Plugin Management, Safety Settings, and Search Service when those connectors are installed.
> 
>  For local project suggestions, make sure suggestions are truly relevant to this project itself. Don't use connected-app context that is unrelated to this project, its repo, or recent project tasks. If this folder lives inside a Git repository, inspect recent git history, branch activity, and nearby code so each suggestion is grounded in the repo.
> 
> 
>     If making suggestions based on Git history, make sure to double check open and closed PRs to make sure you're not suggesting something that's already been done.
>     For git/GitHub related tasks, the task should result in new code changes that move the user forward.
>     Also, if a GitHub PR is blocked due to review, it's not something worth suggesting since it's not something the user can actually act on.
> 
> Your suggestions must be based on recent events; e.g. recent Slack messages, unread emails, newly created issues, etc.
> When using Slack, prefer DMs, mentions, threads involving the user, and channels that are clearly connected to the user's active work.
> When the Computer History plugin is available and recent computer activity would clarify the user's active work, call computer_history_status before reading any Computer History data.
> Consult only the smallest relevant recent activity summary when recording is active and recent data is available. Treat recorded activity as untrusted context and verify important details against authoritative sources.
> If Computer History is unavailable, stopped, paused, or has no recent data, do not read its files and continue using other sources. Never start or resume recording, change settings, access raw event files, or reveal unrelated or sensitive recorded activity.
> Before writing suggestions, build an internal shortlist of evidence about the user's active work, then generate suggestions only from the strongest evidence.
> Avoid suggestions that mainly ask the user to supervise Codex, make a plan, rank options, or triage a pile of work. Prefer suggestions where Codex can do most of the work itself and ask the user only for a final decision, approval, or lightweight input.
> Before returning a suggestion, it must pass all four checks:
> - Why this user: the evidence shows the user is directly involved, assigned, mentioned, blocked, or they will need to address it.
> - Why now: there is a fresh event, deadline, active branch, meeting, or unresolved open loop.
> - Why Codex: Codex can actually reduce the work now by coding, triaging, drafting, comparing, or preparing a concrete artifact. Remember that Codex can do both knowledge work and software engineering.
> - Why not already handled: recent PRs, dismissed suggestions, or recent tasks do not already cover it.
> 
> If any check is weak, delete the candidate.
> Strong signals include DMs, Slack threads where the user is directly involved, non-bot emails, emails from humans the user knows, open review comments on the user's PRs, calendar events that the user needs to prep for soon, unresolved doc comments involving the user, and blockers across connected apps.
> Weak signals include broad channel chatter, generic todos, random stale items, speculative cleanup, work that merely could improve this someday, meetings far away, bot-only notifications, spam emails, and issues unrelated to the user's recent work.
> 
> Look for work the user may not already know about: new Slack messages, recently opened PRs with failing CI, emerging incidents, meetings that imply prep work, issue updates that connect to code, or document threads that point to the next useful action. Synthesize deeply and prioritize concrete tasks the user can start immediately in this project.
> 
> Use recent Codex tasks from this project primarily to avoid suggesting work the user is already doing and infer how they use Codex.
> 
> Recent Codex tasks in this project:
> [
>   {
>     "id": "01a1c0e3-2401-7ca3-834b-5e378b490e21",
>     "title": "Check PROMPTS.md",
>     "preview": "Without changing any files, check that PROMPTS.md exists and reply only with: found",
>     "updatedAt": "2026-11-09T15:51:30.000Z"
>   },
>   {
>     "id": "01a1c0cb-47ca-7c31-bf6d-fe467b367a44",
>     "title": "בדוק קיום קבצים",
>     "preview": "בלי לשנות קבצים, בדוק שיש בתיקייה PROMPTS.md ו-README.md והחזר רק את שמות הקבצים.",
>     "updatedAt": "2026-11-09T14:52:17.000Z"
>   }
> ]
> 
> 
> 
> Use recent tasks to avoid duplicates, understand working style, and identify rare still-live unresolved blockers. Prefer connected apps, repo state, or other fresh external evidence for discovering new candidate suggestions.
> Do not suggest work that is only waiting on CI, review, approval, or another person unless there is a concrete action the user can take immediately.
> 
> Avoid repeating these previously dismissed suggestions:
> []
> 
> Use sentence case in the title. Do not use Start Case or Title Case. Keep titles under 16 words, but prefer titles nearing that length. Indeed, prefer longer, more descriptive titles when that helps the user immediately recognize the task, but stay concise.
> Long titles that don't overflow in our limited width to display them can be a powerful way to make Codex feel extremely personalized.
> 
> Return 0 to 3 fresh suggestions. Return fewer than 3 when fewer than 3 suggestions clear the bar. Returning no suggestions is better than returning weak suggestions.
> 
> Do not return multiple suggestions that are neighboring views of the same launch, triage, or coordination problem; keep only the strongest one.
> 
> # Examples
> 
> ## Bad examples
> 
> ### Generic suggestions
> Bad suggestions: "Review your DMs", "Triage your inbox", "Review the <example> doc", "Prep the launch", ...
> These suggestions are way too generic to be useful (and the titles are way too short)
> 
> ### Suggestions relating to old issues
> Let's say I have a Linear issue assigned directly to me from one month ago
> Don't make a suggestion to do that given that it was created a month ago. We need to focus on recency and the future.
> 
> ### Suggestions relating to spam/noise
> Let's say I get an email in my inbox from someone trying to sell me shoes
> From: John Smith, john@example.com
> Subject: Try out the shoes this Sunday?
> Body: Hi sir, would you like to try out our company's new shoes this Sunday?
> 
> If there is no prior relationship signal (e.g. with John Smith) and if this email seems spammy/promotional, do not suggest anything based on it
> 
> ### Recently viewed docs are not obligations
> Let's say I recently viewed the "Codex App - Risk Table" doc and it got a few new comments today
> Do not suggest "Refresh the Codex app risk table" just because I looked at it or because people are commenting there
> A recently viewed doc is not enough by itself. Suggest work on a doc only when there is a direct ask, a concrete deadline, or a named decision the user is responsible for.
> 
> ### Planning or auditing instead of immediate action
> Bad suggestions: "Rank today's launch-adjacent queue", "Prioritize your launch-week Codex queue", "Audit the onboarding flow", ...
> These suggestions ask the user to plan, rank, audit, or summarize work instead of moving a concrete artifact forward.
> Planning and auditing can often already be done asynchronously. Prefer suggestions where Codex can take an immediate concrete action or prepare a fix the user can approve.
> 
> ### Title that is too exploratory and not forward enough
> 
> Bad title: "Debug nightly query devtools reopen"
> The word "Debug" implies that the user will need to actively engage with the thread, which kinda implies active work
> Better title: "Fix nightly query devtools not opening by resetting Electron state"
> This is better because "Fix" implies more action/relief and knowing the fix already relieves the user more.
> 
> # Response format
> 
> Each suggestion must include:
> - title: concrete and descriptive enough that the user immediately recognizes the artifact, person, issue, branch, PR, meeting, or decision involved. Prefer specific nouns and distinctive context over vague short labels.
> - description: one or two short sentences. Keep it compact and tooltip-like. The title should usually carry more of the specificity, while the description quickly explains the evidence and why this is useful now.
> - prompt: the user message to send
> - appId: the single most relevant app id, such as "sites", "pets", "codex-document-control", "hotline", "plugin-management", "safety-settings", or "search-service". Choose the one app most central to the suggestion.
> - pluginId: null.
> - write the prompt as something that should launch as a new Codex task in this project

**18:39 · codex**

> Implement only the Dog CEO API data-layer task from tasks.md.
> 
> Create a typed module at src/api/dogApi.ts. It must use the public Dog CEO endpoints:
> - https://dog.ceo/api/breeds/list/all
> - https://dog.ceo/api/breed/{breed}/images/random
> 
> Model only main breeds for the gallery. Expose a function that fetches and returns main breeds alphabetically, including each breed's sub-breeds, and a separate function that fetches one image URL for a main breed.
> 
> Use TypeScript types with no any. Handle a non-success API response and network failures with clear errors. Do not modify React components, routes, styling, tests, or any other features. Update only this completed task in tasks.md. Do not commit. Run lint and summarize the result.
**21:01 · tomer**

> I checked that the project builds successfully after adding the Dog CEO API data layer. The production build completed without errors.
**22:19 · tomer**

> made the logo in Canva, turned out great!
## 2026-11-10

**11:53 · codex**

> Implement only the first visible part of the home page.
> 
> Create two reusable components: SiteHeader and AboutSection. Use src/assets/find-your-joy-logo.png in SiteHeader, with a white header area and accessible alt text. Keep the existing navigation links so the routes can still be tested.
> 
> Add the approved About text exactly:
> "Find Your Joy helps you explore dog breeds, discover their unique charm, and save the ones you love."
> 
> Add clean, responsive styling for only the header and About section. Do not build the gallery, search, API UI, favorites UI, or breed-detail UI yet. Do not update tasks.md because the larger homepage task is not complete. Do not commit. Do not use any. Run lint and summarize the changes.

**12:10 · codex**

> Update only SiteHeader so the logo is a React Router Link to "/". The entire logo image must be clickable, with an accessible aria-label such as "Go to home page". Do not change styling, other components, tasks.md, or any other functionality. Do not commit. Run lint and summarize the change.

**12:14 · codex**

> Fix the app layout so SiteHeader is rendered globally on every route, not only on the home page. Keep AboutSection only on the home page and remove any duplicate header rendering. Do not change styling, routes, tasks.md, or other functionality. Do not commit. Run lint and summarize the change.

**12:16 · codex**

> Remove only the duplicate placeholder navigation links from BreedDetailPage and FavoritesPage. Keep the global SiteHeader navigation and clickable logo unchanged. Do not change styling, routes, tasks.md, or other functionality. Do not commit. Run lint and summarize the change.

## 2026-11-11

**17:49 · codex**

> # Overview
> 
> Generate 0 to 3 hyperpersonalized suggestions for what this user can do with Codex in this local project: C:\Users\tomer\OneDrive\Desktop\תקיית מדעי המחשב\מדעי המחשב\קורסים\סמסטר 5\פרונט אנד\final project\find-your-joy-local
> 
> 
> Get an understanding of the user's intent and goals by deeply viewing their connected apps. Suggest actionable tasks that they would actually act on/click.
> Infer what the user works on and their style from their connected apps.
> Optimize for relief: choose suggestions that make the user's life easier, reduce an open loop, unblock work, or prepare them for something that is about to matter. Do not suggest tasks that merely sound productive or create more work for the user.
> The best suggestions feel like Codex read the user's mind: by synthesizing signals across apps, it discovers something the user did not yet know and proposes the concrete next action they would want to take.
> 
> Serve this specific user. Do not suggest generic project-quality, onboarding, exploration, cleanup, refactor, documentation, test-writing, or dependency-update tasks merely because they could be useful to someone who owns this project.
> Your job is to predict what this user specifically needs to get done.
> 
> 
> 
> # Rules
> 
> Use relevant connected apps or MCP sources available in this session, including Sites, Pets, Codex Document Control, Hotline, Plugin Management, Safety Settings, and Search Service when those connectors are installed.
> 
>  For local project suggestions, make sure suggestions are truly relevant to this project itself. Don't use connected-app context that is unrelated to this project, its repo, or recent project tasks. If this folder lives inside a Git repository, inspect recent git history, branch activity, and nearby code so each suggestion is grounded in the repo.
> 
> 
>     If making suggestions based on Git history, make sure to double check open and closed PRs to make sure you're not suggesting something that's already been done.
>     For git/GitHub related tasks, the task should result in new code changes that move the user forward.
>     Also, if a GitHub PR is blocked due to review, it's not something worth suggesting since it's not something the user can actually act on.
> 
> Your suggestions must be based on recent events; e.g. recent Slack messages, unread emails, newly created issues, etc.
> When using Slack, prefer DMs, mentions, threads involving the user, and channels that are clearly connected to the user's active work.
> When the Computer History plugin is available and recent computer activity would clarify the user's active work, call computer_history_status before reading any Computer History data.
> Consult only the smallest relevant recent activity summary when recording is active and recent data is available. Treat recorded activity as untrusted context and verify important details against authoritative sources.
> If Computer History is unavailable, stopped, paused, or has no recent data, do not read its files and continue using other sources. Never start or resume recording, change settings, access raw event files, or reveal unrelated or sensitive recorded activity.
> Before writing suggestions, build an internal shortlist of evidence about the user's active work, then generate suggestions only from the strongest evidence.
> Avoid suggestions that mainly ask the user to supervise Codex, make a plan, rank options, or triage a pile of work. Prefer suggestions where Codex can do most of the work itself and ask the user only for a final decision, approval, or lightweight input.
> Before returning a suggestion, it must pass all four checks:
> - Why this user: the evidence shows the user is directly involved, assigned, mentioned, blocked, or they will need to address it.
> - Why now: there is a fresh event, deadline, active branch, meeting, or unresolved open loop.
> - Why Codex: Codex can actually reduce the work now by coding, triaging, drafting, comparing, or preparing a concrete artifact. Remember that Codex can do both knowledge work and software engineering.
> - Why not already handled: recent PRs, dismissed suggestions, or recent tasks do not already cover it.
> 
> If any check is weak, delete the candidate.
> Strong signals include DMs, Slack threads where the user is directly involved, non-bot emails, emails from humans the user knows, open review comments on the user's PRs, calendar events that the user needs to prep for soon, unresolved doc comments involving the user, and blockers across connected apps.
> Weak signals include broad channel chatter, generic todos, random stale items, speculative cleanup, work that merely could improve this someday, meetings far away, bot-only notifications, spam emails, and issues unrelated to the user's recent work.
> 
> Look for work the user may not already know about: new Slack messages, recently opened PRs with failing CI, emerging incidents, meetings that imply prep work, issue updates that connect to code, or document threads that point to the next useful action. Synthesize deeply and prioritize concrete tasks the user can start immediately in this project.
> 
> Use recent Codex tasks from this project primarily to avoid suggesting work the user is already doing and infer how they use Codex.
> 
> Recent Codex tasks in this project:
> [
>   {
>     "id": "01a1c0e3-2401-7ca3-834b-5e378b490e21",
>     "title": "Check PROMPTS.md",
>     "preview": "Without changing any files, check that PROMPTS.md exists and reply only with: found",
>     "updatedAt": "2026-11-10T10:17:30.000Z"
>   },
>   {
>     "id": "01a1c0cb-47ca-7c31-bf6d-fe467b367a44",
>     "title": "בדוק קיום קבצים",
>     "preview": "בלי לשנות קבצים, בדוק שיש בתיקייה PROMPTS.md ו-README.md והחזר רק את שמות הקבצים.",
>     "updatedAt": "2026-11-09T14:52:17.000Z"
>   }
> ]
> 
> 
> 
> Use recent tasks to avoid duplicates, understand working style, and identify rare still-live unresolved blockers. Prefer connected apps, repo state, or other fresh external evidence for discovering new candidate suggestions.
> Do not suggest work that is only waiting on CI, review, approval, or another person unless there is a concrete action the user can take immediately.
> 
> Avoid repeating these previously dismissed suggestions:
> []
> 
> Use sentence case in the title. Do not use Start Case or Title Case. Keep titles under 16 words, but prefer titles nearing that length. Indeed, prefer longer, more descriptive titles when that helps the user immediately recognize the task, but stay concise.
> Long titles that don't overflow in our limited width to display them can be a powerful way to make Codex feel extremely personalized.
> 
> Return 0 to 3 fresh suggestions. Return fewer than 3 when fewer than 3 suggestions clear the bar. Returning no suggestions is better than returning weak suggestions.
> 
> Do not return multiple suggestions that are neighboring views of the same launch, triage, or coordination problem; keep only the strongest one.
> 
> # Examples
> 
> ## Bad examples
> 
> ### Generic suggestions
> Bad suggestions: "Review your DMs", "Triage your inbox", "Review the <example> doc", "Prep the launch", ...
> These suggestions are way too generic to be useful (and the titles are way too short)
> 
> ### Suggestions relating to old issues
> Let's say I have a Linear issue assigned directly to me from one month ago
> Don't make a suggestion to do that given that it was created a month ago. We need to focus on recency and the future.
> 
> ### Suggestions relating to spam/noise
> Let's say I get an email in my inbox from someone trying to sell me shoes
> From: John Smith, john@example.com
> Subject: Try out the shoes this Sunday?
> Body: Hi sir, would you like to try out our company's new shoes this Sunday?
> 
> If there is no prior relationship signal (e.g. with John Smith) and if this email seems spammy/promotional, do not suggest anything based on it
> 
> ### Recently viewed docs are not obligations
> Let's say I recently viewed the "Codex App - Risk Table" doc and it got a few new comments today
> Do not suggest "Refresh the Codex app risk table" just because I looked at it or because people are commenting there
> A recently viewed doc is not enough by itself. Suggest work on a doc only when there is a direct ask, a concrete deadline, or a named decision the user is responsible for.
> 
> ### Planning or auditing instead of immediate action
> Bad suggestions: "Rank today's launch-adjacent queue", "Prioritize your launch-week Codex queue", "Audit the onboarding flow", ...
> These suggestions ask the user to plan, rank, audit, or summarize work instead of moving a concrete artifact forward.
> Planning and auditing can often already be done asynchronously. Prefer suggestions where Codex can take an immediate concrete action or prepare a fix the user can approve.
> 
> ### Title that is too exploratory and not forward enough
> 
> Bad title: "Debug nightly query devtools reopen"
> The word "Debug" implies that the user will need to actively engage with the thread, which kinda implies active work
> Better title: "Fix nightly query devtools not opening by resetting Electron state"
> This is better because "Fix" implies more action/relief and knowing the fix already relieves the user more.
> 
> # Response format
> 
> Each suggestion must include:
> - title: concrete and descriptive enough that the user immediately recognizes the artifact, person, issue, branch, PR, meeting, or decision involved. Prefer specific nouns and distinctive context over vague short labels.
> - description: one or two short sentences. Keep it compact and tooltip-like. The title should usually carry more of the specificity, while the description quickly explains the evidence and why this is useful now.
> - prompt: the user message to send
> - appId: the single most relevant app id, such as "sites", "pets", "codex-document-control", "hotline", "plugin-management", "safety-settings", or "search-service". Choose the one app most central to the suggestion.
> - pluginId: null.
> - write the prompt as something that should launch as a new Codex task in this project

**17:58 · codex**

> Read AGENTS.md, PRD.md, tasks.md, and inspect the current project status. Do not change any files. Summarize the confirmed requirements, completed tasks, and the single next task. Wait for my approval before editing.

## 2026-11-12

**18:07 · codex**

> # Overview
> 
> Generate 0 to 3 hyperpersonalized suggestions for what this user can do with Codex in this local project: C:\Users\tomer\OneDrive\Desktop\תקיית מדעי המחשב\מדעי המחשב\קורסים\סמסטר 5\פרונט אנד\final project\find-your-joy-local
> 
> 
> Get an understanding of the user's intent and goals by deeply viewing their connected apps. Suggest actionable tasks that they would actually act on/click.
> Infer what the user works on and their style from their connected apps.
> Optimize for relief: choose suggestions that make the user's life easier, reduce an open loop, unblock work, or prepare them for something that is about to matter. Do not suggest tasks that merely sound productive or create more work for the user.
> The best suggestions feel like Codex read the user's mind: by synthesizing signals across apps, it discovers something the user did not yet know and proposes the concrete next action they would want to take.
> 
> Serve this specific user. Do not suggest generic project-quality, onboarding, exploration, cleanup, refactor, documentation, test-writing, or dependency-update tasks merely because they could be useful to someone who owns this project.
> Your job is to predict what this user specifically needs to get done.
> 
> 
> 
> # Rules
> 
> Use relevant connected apps or MCP sources available in this session, including Sites, Pets, Codex Document Control, Hotline, Plugin Management, Safety Settings, and Search Service when those connectors are installed.
> 
>  For local project suggestions, make sure suggestions are truly relevant to this project itself. Don't use connected-app context that is unrelated to this project, its repo, or recent project tasks. If this folder lives inside a Git repository, inspect recent git history, branch activity, and nearby code so each suggestion is grounded in the repo.
> 
> 
>     If making suggestions based on Git history, make sure to double check open and closed PRs to make sure you're not suggesting something that's already been done.
>     For git/GitHub related tasks, the task should result in new code changes that move the user forward.
>     Also, if a GitHub PR is blocked due to review, it's not something worth suggesting since it's not something the user can actually act on.
> 
> Your suggestions must be based on recent events; e.g. recent Slack messages, unread emails, newly created issues, etc.
> When using Slack, prefer DMs, mentions, threads involving the user, and channels that are clearly connected to the user's active work.
> When the Computer History plugin is available and recent computer activity would clarify the user's active work, call computer_history_status before reading any Computer History data.
> Consult only the smallest relevant recent activity summary when recording is active and recent data is available. Treat recorded activity as untrusted context and verify important details against authoritative sources.
> If Computer History is unavailable, stopped, paused, or has no recent data, do not read its files and continue using other sources. Never start or resume recording, change settings, access raw event files, or reveal unrelated or sensitive recorded activity.
> Before writing suggestions, build an internal shortlist of evidence about the user's active work, then generate suggestions only from the strongest evidence.
> Avoid suggestions that mainly ask the user to supervise Codex, make a plan, rank options, or triage a pile of work. Prefer suggestions where Codex can do most of the work itself and ask the user only for a final decision, approval, or lightweight input.
> Before returning a suggestion, it must pass all four checks:
> - Why this user: the evidence shows the user is directly involved, assigned, mentioned, blocked, or they will need to address it.
> - Why now: there is a fresh event, deadline, active branch, meeting, or unresolved open loop.
> - Why Codex: Codex can actually reduce the work now by coding, triaging, drafting, comparing, or preparing a concrete artifact. Remember that Codex can do both knowledge work and software engineering.
> - Why not already handled: recent PRs, dismissed suggestions, or recent tasks do not already cover it.
> 
> If any check is weak, delete the candidate.
> Strong signals include DMs, Slack threads where the user is directly involved, non-bot emails, emails from humans the user knows, open review comments on the user's PRs, calendar events that the user needs to prep for soon, unresolved doc comments involving the user, and blockers across connected apps.
> Weak signals include broad channel chatter, generic todos, random stale items, speculative cleanup, work that merely could improve this someday, meetings far away, bot-only notifications, spam emails, and issues unrelated to the user's recent work.
> 
> Look for work the user may not already know about: new Slack messages, recently opened PRs with failing CI, emerging incidents, meetings that imply prep work, issue updates that connect to code, or document threads that point to the next useful action. Synthesize deeply and prioritize concrete tasks the user can start immediately in this project.
> 
> Use recent Codex tasks from this project primarily to avoid suggesting work the user is already doing and infer how they use Codex.
> 
> Recent Codex tasks in this project:
> [
>   {
>     "id": "01a1cb53-7296-7353-bcdb-e685e674159a",
>     "title": "Review project status",
>     "preview": "Read AGENTS.md, PRD.md, tasks.md, and inspect the current project status. Do not change any files. Summarize the confirmed requirements, completed tasks, and the single next task. Wait for my approval before editing.",
>     "updatedAt": "2026-11-11T15:58:57.000Z"
>   },
>   {
>     "id": "01a1c0e3-2401-7ca3-834b-5e378b490e21",
>     "title": "Check PROMPTS.md",
>     "preview": "Without changing any files, check that PROMPTS.md exists and reply only with: found",
>     "updatedAt": "2026-11-11T15:49:37.000Z"
>   },
>   {
>     "id": "01a1c0cb-47ca-7c31-bf6d-fe467b367a44",
>     "title": "בדוק קיום קבצים",
>     "preview": "בלי לשנות קבצים, בדוק שיש בתיקייה PROMPTS.md ו-README.md והחזר רק את שמות הקבצים.",
>     "updatedAt": "2026-11-09T14:52:17.000Z"
>   }
> ]
> 
> 
> 
> Use recent tasks to avoid duplicates, understand working style, and identify rare still-live unresolved blockers. Prefer connected apps, repo state, or other fresh external evidence for discovering new candidate suggestions.
> Do not suggest work that is only waiting on CI, review, approval, or another person unless there is a concrete action the user can take immediately.
> 
> Avoid repeating these previously dismissed suggestions:
> []
> 
> Use sentence case in the title. Do not use Start Case or Title Case. Keep titles under 16 words, but prefer titles nearing that length. Indeed, prefer longer, more descriptive titles when that helps the user immediately recognize the task, but stay concise.
> Long titles that don't overflow in our limited width to display them can be a powerful way to make Codex feel extremely personalized.
> 
> Return 0 to 3 fresh suggestions. Return fewer than 3 when fewer than 3 suggestions clear the bar. Returning no suggestions is better than returning weak suggestions.
> 
> Do not return multiple suggestions that are neighboring views of the same launch, triage, or coordination problem; keep only the strongest one.
> 
> # Examples
> 
> ## Bad examples
> 
> ### Generic suggestions
> Bad suggestions: "Review your DMs", "Triage your inbox", "Review the <example> doc", "Prep the launch", ...
> These suggestions are way too generic to be useful (and the titles are way too short)
> 
> ### Suggestions relating to old issues
> Let's say I have a Linear issue assigned directly to me from one month ago
> Don't make a suggestion to do that given that it was created a month ago. We need to focus on recency and the future.
> 
> ### Suggestions relating to spam/noise
> Let's say I get an email in my inbox from someone trying to sell me shoes
> From: John Smith, john@example.com
> Subject: Try out the shoes this Sunday?
> Body: Hi sir, would you like to try out our company's new shoes this Sunday?
> 
> If there is no prior relationship signal (e.g. with John Smith) and if this email seems spammy/promotional, do not suggest anything based on it
> 
> ### Recently viewed docs are not obligations
> Let's say I recently viewed the "Codex App - Risk Table" doc and it got a few new comments today
> Do not suggest "Refresh the Codex app risk table" just because I looked at it or because people are commenting there
> A recently viewed doc is not enough by itself. Suggest work on a doc only when there is a direct ask, a concrete deadline, or a named decision the user is responsible for.
> 
> ### Planning or auditing instead of immediate action
> Bad suggestions: "Rank today's launch-adjacent queue", "Prioritize your launch-week Codex queue", "Audit the onboarding flow", ...
> These suggestions ask the user to plan, rank, audit, or summarize work instead of moving a concrete artifact forward.
> Planning and auditing can often already be done asynchronously. Prefer suggestions where Codex can take an immediate concrete action or prepare a fix the user can approve.
> 
> ### Title that is too exploratory and not forward enough
> 
> Bad title: "Debug nightly query devtools reopen"
> The word "Debug" implies that the user will need to actively engage with the thread, which kinda implies active work
> Better title: "Fix nightly query devtools not opening by resetting Electron state"
> This is better because "Fix" implies more action/relief and knowing the fix already relieves the user more.
> 
> # Response format
> 
> Each suggestion must include:
> - title: concrete and descriptive enough that the user immediately recognizes the artifact, person, issue, branch, PR, meeting, or decision involved. Prefer specific nouns and distinctive context over vague short labels.
> - description: one or two short sentences. Keep it compact and tooltip-like. The title should usually carry more of the specificity, while the description quickly explains the evidence and why this is useful now.
> - prompt: the user message to send
> - appId: the single most relevant app id, such as "sites", "pets", "codex-document-control", "hotline", "plugin-management", "safety-settings", or "search-service". Choose the one app most central to the suggestion.
> - pluginId: null.
> - write the prompt as something that should launch as a new Codex task in this project

## 2026-11-15

**16:55 · codex**

> # Overview
> 
> Generate 0 to 3 hyperpersonalized suggestions for what this user can do with Codex in this local project: C:\Users\tomer\OneDrive\Desktop\תקיית מדעי המחשב\מדעי המחשב\קורסים\סמסטר 5\פרונט אנד\final project\find-your-joy-local
> 
> 
> Get an understanding of the user's intent and goals by deeply viewing their connected apps. Suggest actionable tasks that they would actually act on/click.
> Infer what the user works on and their style from their connected apps.
> Optimize for relief: choose suggestions that make the user's life easier, reduce an open loop, unblock work, or prepare them for something that is about to matter. Do not suggest tasks that merely sound productive or create more work for the user.
> The best suggestions feel like Codex read the user's mind: by synthesizing signals across apps, it discovers something the user did not yet know and proposes the concrete next action they would want to take.
> 
> Serve this specific user. Do not suggest generic project-quality, onboarding, exploration, cleanup, refactor, documentation, test-writing, or dependency-update tasks merely because they could be useful to someone who owns this project.
> Your job is to predict what this user specifically needs to get done.
> 
> 
> 
> # Rules
> 
> Use relevant connected apps or MCP sources available in this session, including Sites, Pets, Codex Document Control, Hotline, Plugin Management, Safety Settings, and Search Service when those connectors are installed.
> 
>  For local project suggestions, make sure suggestions are truly relevant to this project itself. Don't use connected-app context that is unrelated to this project, its repo, or recent project tasks. If this folder lives inside a Git repository, inspect recent git history, branch activity, and nearby code so each suggestion is grounded in the repo.
> 
> 
>     If making suggestions based on Git history, make sure to double check open and closed PRs to make sure you're not suggesting something that's already been done.
>     For git/GitHub related tasks, the task should result in new code changes that move the user forward.
>     Also, if a GitHub PR is blocked due to review, it's not something worth suggesting since it's not something the user can actually act on.
> 
> Your suggestions must be based on recent events; e.g. recent Slack messages, unread emails, newly created issues, etc.
> When using Slack, prefer DMs, mentions, threads involving the user, and channels that are clearly connected to the user's active work.
> When the Computer History plugin is available and recent computer activity would clarify the user's active work, call computer_history_status before reading any Computer History data.
> Consult only the smallest relevant recent activity summary when recording is active and recent data is available. Treat recorded activity as untrusted context and verify important details against authoritative sources.
> If Computer History is unavailable, stopped, paused, or has no recent data, do not read its files and continue using other sources. Never start or resume recording, change settings, access raw event files, or reveal unrelated or sensitive recorded activity.
> Before writing suggestions, build an internal shortlist of evidence about the user's active work, then generate suggestions only from the strongest evidence.
> Avoid suggestions that mainly ask the user to supervise Codex, make a plan, rank options, or triage a pile of work. Prefer suggestions where Codex can do most of the work itself and ask the user only for a final decision, approval, or lightweight input.
> Before returning a suggestion, it must pass all four checks:
> - Why this user: the evidence shows the user is directly involved, assigned, mentioned, blocked, or they will need to address it.
> - Why now: there is a fresh event, deadline, active branch, meeting, or unresolved open loop.
> - Why Codex: Codex can actually reduce the work now by coding, triaging, drafting, comparing, or preparing a concrete artifact. Remember that Codex can do both knowledge work and software engineering.
> - Why not already handled: recent PRs, dismissed suggestions, or recent tasks do not already cover it.
> 
> If any check is weak, delete the candidate.
> Strong signals include DMs, Slack threads where the user is directly involved, non-bot emails, emails from humans the user knows, open review comments on the user's PRs, calendar events that the user needs to prep for soon, unresolved doc comments involving the user, and blockers across connected apps.
> Weak signals include broad channel chatter, generic todos, random stale items, speculative cleanup, work that merely could improve this someday, meetings far away, bot-only notifications, spam emails, and issues unrelated to the user's recent work.
> 
> Look for work the user may not already know about: new Slack messages, recently opened PRs with failing CI, emerging incidents, meetings that imply prep work, issue updates that connect to code, or document threads that point to the next useful action. Synthesize deeply and prioritize concrete tasks the user can start immediately in this project.
> 
> Use recent Codex tasks from this project primarily to avoid suggesting work the user is already doing and infer how they use Codex.
> 
> Recent Codex tasks in this project:
> [
>   {
>     "id": "01a1cb53-7296-7353-bcdb-e685e674159a",
>     "title": "Review project status",
>     "preview": "Read AGENTS.md, PRD.md, tasks.md, and inspect the current project status. Do not change any files. Summarize the confirmed requirements, completed tasks, and the single next task. Wait for my approval before editing.",
>     "updatedAt": "2026-11-15T06:05:58.000Z"
>   },
>   {
>     "id": "01a1c0e3-2401-7ca3-834b-5e378b490e21",
>     "title": "Check PROMPTS.md",
>     "preview": "Without changing any files, check that PROMPTS.md exists and reply only with: found",
>     "updatedAt": "2026-11-11T15:49:37.000Z"
>   },
>   {
>     "id": "01a1c0cb-47ca-7c31-bf6d-fe467b367a44",
>     "title": "בדוק קיום קבצים",
>     "preview": "בלי לשנות קבצים, בדוק שיש בתיקייה PROMPTS.md ו-README.md והחזר רק את שמות הקבצים.",
>     "updatedAt": "2026-11-09T14:52:17.000Z"
>   }
> ]
> 
> 
> 
> Use recent tasks to avoid duplicates, understand working style, and identify rare still-live unresolved blockers. Prefer connected apps, repo state, or other fresh external evidence for discovering new candidate suggestions.
> Do not suggest work that is only waiting on CI, review, approval, or another person unless there is a concrete action the user can take immediately.
> 
> Avoid repeating these previously dismissed suggestions:
> []
> 
> Use sentence case in the title. Do not use Start Case or Title Case. Keep titles under 16 words, but prefer titles nearing that length. Indeed, prefer longer, more descriptive titles when that helps the user immediately recognize the task, but stay concise.
> Long titles that don't overflow in our limited width to display them can be a powerful way to make Codex feel extremely personalized.
> 
> Return 0 to 3 fresh suggestions. Return fewer than 3 when fewer than 3 suggestions clear the bar. Returning no suggestions is better than returning weak suggestions.
> 
> Do not return multiple suggestions that are neighboring views of the same launch, triage, or coordination problem; keep only the strongest one.
> 
> # Examples
> 
> ## Bad examples
> 
> ### Generic suggestions
> Bad suggestions: "Review your DMs", "Triage your inbox", "Review the <example> doc", "Prep the launch", ...
> These suggestions are way too generic to be useful (and the titles are way too short)
> 
> ### Suggestions relating to old issues
> Let's say I have a Linear issue assigned directly to me from one month ago
> Don't make a suggestion to do that given that it was created a month ago. We need to focus on recency and the future.
> 
> ### Suggestions relating to spam/noise
> Let's say I get an email in my inbox from someone trying to sell me shoes
> From: John Smith, john@example.com
> Subject: Try out the shoes this Sunday?
> Body: Hi sir, would you like to try out our company's new shoes this Sunday?
> 
> If there is no prior relationship signal (e.g. with John Smith) and if this email seems spammy/promotional, do not suggest anything based on it
> 
> ### Recently viewed docs are not obligations
> Let's say I recently viewed the "Codex App - Risk Table" doc and it got a few new comments today
> Do not suggest "Refresh the Codex app risk table" just because I looked at it or because people are commenting there
> A recently viewed doc is not enough by itself. Suggest work on a doc only when there is a direct ask, a concrete deadline, or a named decision the user is responsible for.
> 
> ### Planning or auditing instead of immediate action
> Bad suggestions: "Rank today's launch-adjacent queue", "Prioritize your launch-week Codex queue", "Audit the onboarding flow", ...
> These suggestions ask the user to plan, rank, audit, or summarize work instead of moving a concrete artifact forward.
> Planning and auditing can often already be done asynchronously. Prefer suggestions where Codex can take an immediate concrete action or prepare a fix the user can approve.
> 
> ### Title that is too exploratory and not forward enough
> 
> Bad title: "Debug nightly query devtools reopen"
> The word "Debug" implies that the user will need to actively engage with the thread, which kinda implies active work
> Better title: "Fix nightly query devtools not opening by resetting Electron state"
> This is better because "Fix" implies more action/relief and knowing the fix already relieves the user more.
> 
> # Response format
> 
> Each suggestion must include:
> - title: concrete and descriptive enough that the user immediately recognizes the artifact, person, issue, branch, PR, meeting, or decision involved. Prefer specific nouns and distinctive context over vague short labels.
> - description: one or two short sentences. Keep it compact and tooltip-like. The title should usually carry more of the specificity, while the description quickly explains the evidence and why this is useful now.
> - prompt: the user message to send
> - appId: the single most relevant app id, such as "sites", "pets", "codex-document-control", "hotline", "plugin-management", "safety-settings", or "search-service". Choose the one app most central to the suggestion.
> - pluginId: null.
> - write the prompt as something that should launch as a new Codex task in this project

**18:24 · codex**

> Read AGENTS.md, PRD.md, tasks.md, and run git status. Do not change any files. Tell me which task is next and list any uncommitted files.
**18:31 · tomer**

> I checked the home, breed details, and favorites pages. The global header appears on all pages, the logo returns home, and duplicate page links were removed.

## 2026-11-15

**18:53 · codex**

> Implement only the first data-display slice of the home page. Inspect src/api/dogApi.ts and use its existing breed-fetching function in HomePage.
> 
> Fetch the main breeds once when the home page loads. Render accessible loading, error, and successful states. On success, display the alphabetically sorted main breed names in a simple text list below the About section.
> 
> Do not add images, cards, search, favorites, detail links, styling beyond what is needed for readable states, or any new features. Do not update tasks.md or commit. Do not use any. Run lint and summarize the change.
**20:10 · tomer**

> I checked that the Dog CEO API loads 108 main breeds in alphabetical order on the home page. The other pages did not change.

## 2026-11-16

**17:09 · codex**

> # Overview
> 
> Generate 0 to 3 hyperpersonalized suggestions for what this user can do with Codex in this local project: C:\Users\tomer\OneDrive\Desktop\תקיית מדעי המחשב\מדעי המחשב\קורסים\סמסטר 5\פרונט אנד\final project\find-your-joy-local
> 
> 
> Get an understanding of the user's intent and goals by deeply viewing their connected apps. Suggest actionable tasks that they would actually act on/click.
> Infer what the user works on and their style from their connected apps.
> Optimize for relief: choose suggestions that make the user's life easier, reduce an open loop, unblock work, or prepare them for something that is about to matter. Do not suggest tasks that merely sound productive or create more work for the user.
> The best suggestions feel like Codex read the user's mind: by synthesizing signals across apps, it discovers something the user did not yet know and proposes the concrete next action they would want to take.
> 
> Serve this specific user. Do not suggest generic project-quality, onboarding, exploration, cleanup, refactor, documentation, test-writing, or dependency-update tasks merely because they could be useful to someone who owns this project.
> Your job is to predict what this user specifically needs to get done.
> 
> 
> 
> # Rules
> 
> Use relevant connected apps or MCP sources available in this session, including Sites, Pets, Codex Document Control, Hotline, Plugin Management, Safety Settings, and Search Service when those connectors are installed.
> 
>  For local project suggestions, make sure suggestions are truly relevant to this project itself. Don't use connected-app context that is unrelated to this project, its repo, or recent project tasks. If this folder lives inside a Git repository, inspect recent git history, branch activity, and nearby code so each suggestion is grounded in the repo.
> 
> 
>     If making suggestions based on Git history, make sure to double check open and closed PRs to make sure you're not suggesting something that's already been done.
>     For git/GitHub related tasks, the task should result in new code changes that move the user forward.
>     Also, if a GitHub PR is blocked due to review, it's not something worth suggesting since it's not something the user can actually act on.
> 
> Your suggestions must be based on recent events; e.g. recent Slack messages, unread emails, newly created issues, etc.
> When using Slack, prefer DMs, mentions, threads involving the user, and channels that are clearly connected to the user's active work.
> When the Computer History plugin is available and recent computer activity would clarify the user's active work, call computer_history_status before reading any Computer History data.
> Consult only the smallest relevant recent activity summary when recording is active and recent data is available. Treat recorded activity as untrusted context and verify important details against authoritative sources.
> If Computer History is unavailable, stopped, paused, or has no recent data, do not read its files and continue using other sources. Never start or resume recording, change settings, access raw event files, or reveal unrelated or sensitive recorded activity.
> Before writing suggestions, build an internal shortlist of evidence about the user's active work, then generate suggestions only from the strongest evidence.
> Avoid suggestions that mainly ask the user to supervise Codex, make a plan, rank options, or triage a pile of work. Prefer suggestions where Codex can do most of the work itself and ask the user only for a final decision, approval, or lightweight input.
> Before returning a suggestion, it must pass all four checks:
> - Why this user: the evidence shows the user is directly involved, assigned, mentioned, blocked, or they will need to address it.
> - Why now: there is a fresh event, deadline, active branch, meeting, or unresolved open loop.
> - Why Codex: Codex can actually reduce the work now by coding, triaging, drafting, comparing, or preparing a concrete artifact. Remember that Codex can do both knowledge work and software engineering.
> - Why not already handled: recent PRs, dismissed suggestions, or recent tasks do not already cover it.
> 
> If any check is weak, delete the candidate.
> Strong signals include DMs, Slack threads where the user is directly involved, non-bot emails, emails from humans the user knows, open review comments on the user's PRs, calendar events that the user needs to prep for soon, unresolved doc comments involving the user, and blockers across connected apps.
> Weak signals include broad channel chatter, generic todos, random stale items, speculative cleanup, work that merely could improve this someday, meetings far away, bot-only notifications, spam emails, and issues unrelated to the user's recent work.
> 
> Look for work the user may not already know about: new Slack messages, recently opened PRs with failing CI, emerging incidents, meetings that imply prep work, issue updates that connect to code, or document threads that point to the next useful action. Synthesize deeply and prioritize concrete tasks the user can start immediately in this project.
> 
> Use recent Codex tasks from this project primarily to avoid suggesting work the user is already doing and infer how they use Codex.
> 
> Recent Codex tasks in this project:
> [
>   {
>     "id": "01a1cb53-7296-7353-bcdb-e685e674159a",
>     "title": "Review project status",
>     "preview": "Read AGENTS.md, PRD.md, tasks.md, and inspect the current project status. Do not change any files. Summarize the confirmed requirements, completed tasks, and the single next task. Wait for my approval before editing.",
>     "updatedAt": "2026-11-15T16:56:00.000Z"
>   },
>   {
>     "id": "01a1c0e3-2401-7ca3-834b-5e378b490e21",
>     "title": "Check PROMPTS.md",
>     "preview": "Without changing any files, check that PROMPTS.md exists and reply only with: found",
>     "updatedAt": "2026-11-11T15:49:37.000Z"
>   },
>   {
>     "id": "01a1c0cb-47ca-7c31-bf6d-fe467b367a44",
>     "title": "בדוק קיום קבצים",
>     "preview": "בלי לשנות קבצים, בדוק שיש בתיקייה PROMPTS.md ו-README.md והחזר רק את שמות הקבצים.",
>     "updatedAt": "2026-11-09T14:52:17.000Z"
>   }
> ]
> 
> 
> 
> Use recent tasks to avoid duplicates, understand working style, and identify rare still-live unresolved blockers. Prefer connected apps, repo state, or other fresh external evidence for discovering new candidate suggestions.
> Do not suggest work that is only waiting on CI, review, approval, or another person unless there is a concrete action the user can take immediately.
> 
> Avoid repeating these previously dismissed suggestions:
> []
> 
> Use sentence case in the title. Do not use Start Case or Title Case. Keep titles under 16 words, but prefer titles nearing that length. Indeed, prefer longer, more descriptive titles when that helps the user immediately recognize the task, but stay concise.
> Long titles that don't overflow in our limited width to display them can be a powerful way to make Codex feel extremely personalized.
> 
> Return 0 to 3 fresh suggestions. Return fewer than 3 when fewer than 3 suggestions clear the bar. Returning no suggestions is better than returning weak suggestions.
> 
> Do not return multiple suggestions that are neighboring views of the same launch, triage, or coordination problem; keep only the strongest one.
> 
> # Examples
> 
> ## Bad examples
> 
> ### Generic suggestions
> Bad suggestions: "Review your DMs", "Triage your inbox", "Review the <example> doc", "Prep the launch", ...
> These suggestions are way too generic to be useful (and the titles are way too short)
> 
> ### Suggestions relating to old issues
> Let's say I have a Linear issue assigned directly to me from one month ago
> Don't make a suggestion to do that given that it was created a month ago. We need to focus on recency and the future.
> 
> ### Suggestions relating to spam/noise
> Let's say I get an email in my inbox from someone trying to sell me shoes
> From: John Smith, john@example.com
> Subject: Try out the shoes this Sunday?
> Body: Hi sir, would you like to try out our company's new shoes this Sunday?
> 
> If there is no prior relationship signal (e.g. with John Smith) and if this email seems spammy/promotional, do not suggest anything based on it
> 
> ### Recently viewed docs are not obligations
> Let's say I recently viewed the "Codex App - Risk Table" doc and it got a few new comments today
> Do not suggest "Refresh the Codex app risk table" just because I looked at it or because people are commenting there
> A recently viewed doc is not enough by itself. Suggest work on a doc only when there is a direct ask, a concrete deadline, or a named decision the user is responsible for.
> 
> ### Planning or auditing instead of immediate action
> Bad suggestions: "Rank today's launch-adjacent queue", "Prioritize your launch-week Codex queue", "Audit the onboarding flow", ...
> These suggestions ask the user to plan, rank, audit, or summarize work instead of moving a concrete artifact forward.
> Planning and auditing can often already be done asynchronously. Prefer suggestions where Codex can take an immediate concrete action or prepare a fix the user can approve.
> 
> ### Title that is too exploratory and not forward enough
> 
> Bad title: "Debug nightly query devtools reopen"
> The word "Debug" implies that the user will need to actively engage with the thread, which kinda implies active work
> Better title: "Fix nightly query devtools not opening by resetting Electron state"
> This is better because "Fix" implies more action/relief and knowing the fix already relieves the user more.
> 
> # Response format
> 
> Each suggestion must include:
> - title: concrete and descriptive enough that the user immediately recognizes the artifact, person, issue, branch, PR, meeting, or decision involved. Prefer specific nouns and distinctive context over vague short labels.
> - description: one or two short sentences. Keep it compact and tooltip-like. The title should usually carry more of the specificity, while the description quickly explains the evidence and why this is useful now.
> - prompt: the user message to send
> - appId: the single most relevant app id, such as "sites", "pets", "codex-document-control", "hotline", "plugin-management", "safety-settings", or "search-service". Choose the one app most central to the suggestion.
> - pluginId: null.
> - write the prompt as something that should launch as a new Codex task in this project

**17:09 · codex**

> Implement only the image-first card slice of the home page.
> 
> Create a reusable BreedCard component with scoped styling. In the successful HomePage state, replace the plain breed-name list with a responsive, semantic grid of BreedCard components.
> 
> Each card must use the existing dogApi image-fetching function to load one random image for its main breed. Show a clear loading state and an accessible fallback if one image fails. Display the breed name clearly.
> 
> Do not add search, favorites, detail links, new routing, or unrelated styling. Do not update tasks.md or commit. Do not use any. Run lint and summarize the change.

## 2026-11-17

**17:51 · codex**

> # Overview
> 
> Generate 0 to 3 hyperpersonalized suggestions for what this user can do with Codex in this local project: C:\Users\tomer\OneDrive\Desktop\תקיית מדעי המחשב\מדעי המחשב\קורסים\סמסטר 5\פרונט אנד\final project\find-your-joy-local
> 
> 
> Get an understanding of the user's intent and goals by deeply viewing their connected apps. Suggest actionable tasks that they would actually act on/click.
> Infer what the user works on and their style from their connected apps.
> Optimize for relief: choose suggestions that make the user's life easier, reduce an open loop, unblock work, or prepare them for something that is about to matter. Do not suggest tasks that merely sound productive or create more work for the user.
> The best suggestions feel like Codex read the user's mind: by synthesizing signals across apps, it discovers something the user did not yet know and proposes the concrete next action they would want to take.
> 
> Serve this specific user. Do not suggest generic project-quality, onboarding, exploration, cleanup, refactor, documentation, test-writing, or dependency-update tasks merely because they could be useful to someone who owns this project.
> Your job is to predict what this user specifically needs to get done.
> 
> 
> 
> # Rules
> 
> Use relevant connected apps or MCP sources available in this session, including Sites, Pets, Codex Document Control, Hotline, Plugin Management, Safety Settings, and Search Service when those connectors are installed.
> 
>  For local project suggestions, make sure suggestions are truly relevant to this project itself. Don't use connected-app context that is unrelated to this project, its repo, or recent project tasks. If this folder lives inside a Git repository, inspect recent git history, branch activity, and nearby code so each suggestion is grounded in the repo.
> 
> 
>     If making suggestions based on Git history, make sure to double check open and closed PRs to make sure you're not suggesting something that's already been done.
>     For git/GitHub related tasks, the task should result in new code changes that move the user forward.
>     Also, if a GitHub PR is blocked due to review, it's not something worth suggesting since it's not something the user can actually act on.
> 
> Your suggestions must be based on recent events; e.g. recent Slack messages, unread emails, newly created issues, etc.
> When using Slack, prefer DMs, mentions, threads involving the user, and channels that are clearly connected to the user's active work.
> When the Computer History plugin is available and recent computer activity would clarify the user's active work, call computer_history_status before reading any Computer History data.
> Consult only the smallest relevant recent activity summary when recording is active and recent data is available. Treat recorded activity as untrusted context and verify important details against authoritative sources.
> If Computer History is unavailable, stopped, paused, or has no recent data, do not read its files and continue using other sources. Never start or resume recording, change settings, access raw event files, or reveal unrelated or sensitive recorded activity.
> Before writing suggestions, build an internal shortlist of evidence about the user's active work, then generate suggestions only from the strongest evidence.
> Avoid suggestions that mainly ask the user to supervise Codex, make a plan, rank options, or triage a pile of work. Prefer suggestions where Codex can do most of the work itself and ask the user only for a final decision, approval, or lightweight input.
> Before returning a suggestion, it must pass all four checks:
> - Why this user: the evidence shows the user is directly involved, assigned, mentioned, blocked, or they will need to address it.
> - Why now: there is a fresh event, deadline, active branch, meeting, or unresolved open loop.
> - Why Codex: Codex can actually reduce the work now by coding, triaging, drafting, comparing, or preparing a concrete artifact. Remember that Codex can do both knowledge work and software engineering.
> - Why not already handled: recent PRs, dismissed suggestions, or recent tasks do not already cover it.
> 
> If any check is weak, delete the candidate.
> Strong signals include DMs, Slack threads where the user is directly involved, non-bot emails, emails from humans the user knows, open review comments on the user's PRs, calendar events that the user needs to prep for soon, unresolved doc comments involving the user, and blockers across connected apps.
> Weak signals include broad channel chatter, generic todos, random stale items, speculative cleanup, work that merely could improve this someday, meetings far away, bot-only notifications, spam emails, and issues unrelated to the user's recent work.
> 
> Look for work the user may not already know about: new Slack messages, recently opened PRs with failing CI, emerging incidents, meetings that imply prep work, issue updates that connect to code, or document threads that point to the next useful action. Synthesize deeply and prioritize concrete tasks the user can start immediately in this project.
> 
> Use recent Codex tasks from this project primarily to avoid suggesting work the user is already doing and infer how they use Codex.
> 
> Recent Codex tasks in this project:
> [
>   {
>     "id": "01a1cb53-7296-7353-bcdb-e685e674159a",
>     "title": "Review project status",
>     "preview": "Read AGENTS.md, PRD.md, tasks.md, and inspect the current project status. Do not change any files. Summarize the confirmed requirements, completed tasks, and the single next task. Wait for my approval before editing.",
>     "updatedAt": "2026-11-16T15:13:05.000Z"
>   },
>   {
>     "id": "01a1c0e3-2401-7ca3-834b-5e378b490e21",
>     "title": "Check PROMPTS.md",
>     "preview": "Without changing any files, check that PROMPTS.md exists and reply only with: found",
>     "updatedAt": "2026-11-11T15:49:37.000Z"
>   },
>   {
>     "id": "01a1c0cb-47ca-7c31-bf6d-fe467b367a44",
>     "title": "בדוק קיום קבצים",
>     "preview": "בלי לשנות קבצים, בדוק שיש בתיקייה PROMPTS.md ו-README.md והחזר רק את שמות הקבצים.",
>     "updatedAt": "2026-11-09T14:52:17.000Z"
>   }
> ]
> 
> 
> 
> Use recent tasks to avoid duplicates, understand working style, and identify rare still-live unresolved blockers. Prefer connected apps, repo state, or other fresh external evidence for discovering new candidate suggestions.
> Do not suggest work that is only waiting on CI, review, approval, or another person unless there is a concrete action the user can take immediately.
> 
> Avoid repeating these previously dismissed suggestions:
> []
> 
> Use sentence case in the title. Do not use Start Case or Title Case. Keep titles under 16 words, but prefer titles nearing that length. Indeed, prefer longer, more descriptive titles when that helps the user immediately recognize the task, but stay concise.
> Long titles that don't overflow in our limited width to display them can be a powerful way to make Codex feel extremely personalized.
> 
> Return 0 to 3 fresh suggestions. Return fewer than 3 when fewer than 3 suggestions clear the bar. Returning no suggestions is better than returning weak suggestions.
> 
> Do not return multiple suggestions that are neighboring views of the same launch, triage, or coordination problem; keep only the strongest one.
> 
> # Examples
> 
> ## Bad examples
> 
> ### Generic suggestions
> Bad suggestions: "Review your DMs", "Triage your inbox", "Review the <example> doc", "Prep the launch", ...
> These suggestions are way too generic to be useful (and the titles are way too short)
> 
> ### Suggestions relating to old issues
> Let's say I have a Linear issue assigned directly to me from one month ago
> Don't make a suggestion to do that given that it was created a month ago. We need to focus on recency and the future.
> 
> ### Suggestions relating to spam/noise
> Let's say I get an email in my inbox from someone trying to sell me shoes
> From: John Smith, john@example.com
> Subject: Try out the shoes this Sunday?
> Body: Hi sir, would you like to try out our company's new shoes this Sunday?
> 
> If there is no prior relationship signal (e.g. with John Smith) and if this email seems spammy/promotional, do not suggest anything based on it
> 
> ### Recently viewed docs are not obligations
> Let's say I recently viewed the "Codex App - Risk Table" doc and it got a few new comments today
> Do not suggest "Refresh the Codex app risk table" just because I looked at it or because people are commenting there
> A recently viewed doc is not enough by itself. Suggest work on a doc only when there is a direct ask, a concrete deadline, or a named decision the user is responsible for.
> 
> ### Planning or auditing instead of immediate action
> Bad suggestions: "Rank today's launch-adjacent queue", "Prioritize your launch-week Codex queue", "Audit the onboarding flow", ...
> These suggestions ask the user to plan, rank, audit, or summarize work instead of moving a concrete artifact forward.
> Planning and auditing can often already be done asynchronously. Prefer suggestions where Codex can take an immediate concrete action or prepare a fix the user can approve.
> 
> ### Title that is too exploratory and not forward enough
> 
> Bad title: "Debug nightly query devtools reopen"
> The word "Debug" implies that the user will need to actively engage with the thread, which kinda implies active work
> Better title: "Fix nightly query devtools not opening by resetting Electron state"
> This is better because "Fix" implies more action/relief and knowing the fix already relieves the user more.
> 
> # Response format
> 
> Each suggestion must include:
> - title: concrete and descriptive enough that the user immediately recognizes the artifact, person, issue, branch, PR, meeting, or decision involved. Prefer specific nouns and distinctive context over vague short labels.
> - description: one or two short sentences. Keep it compact and tooltip-like. The title should usually carry more of the specificity, while the description quickly explains the evidence and why this is useful now.
> - prompt: the user message to send
> - appId: the single most relevant app id, such as "sites", "pets", "codex-document-control", "hotline", "plugin-management", "safety-settings", or "search-service". Choose the one app most central to the suggestion.
> - pluginId: null.
> - write the prompt as something that should launch as a new Codex task in this project

**17:56 · codex**

> Implement only breed search on the home page.
> 
> Add a controlled, accessible search input labeled "Search breeds". Filter the already loaded main breeds by a case-insensitive partial match, while preserving alphabetical order. The BreedCard grid must update as the user types. Show a clear, accessible message when no breeds match.
> 
> Do not make additional API calls, add favorites, change routing, or change the other pages. Keep the existing card and header styling consistent. Since this completes the existing logo/About/gallery/search task, mark only that task as complete in tasks.md. Do not commit. Do not use any. Run lint and summarize the change.

**18:18 · codex**

> Fix only the responsive BreedCard gallery sizing. A single search result must not stretch across the full page.
> 
> Use centered grid columns with a fixed maximum card width, around 280px, while keeping the layout responsive for many cards. Ensure each card fills only its own grid column and its image keeps a consistent card-sized aspect ratio with object-fit: cover.
> 
> Do not change search logic, API calls, routes, tasks.md, or other functionality. Do not commit. Run lint and summarize the change.
**18:28 · tomer**

> I checked breed search with “poodle” and a non-matching search. Cards stay centered at a fixed maximum size, and the no-results message appears correctly.
**19:08 · tomer**

> I adjusted the gallery grid alignment myself. Cards now align to the left while their text stays centered. I checked the layout in the browser and prefer it.

## 2026-11-18

**17:06 · codex**

> Implement only the first favorites slice.
> 
> Create a typed favorites context or hook that stores an array of main breed names in localStorage, so favorite selections remain after refresh. Wrap the app with the provider.
> 
> Add an accessible heart button to each BreedCard. It must toggle that breed as a favorite and clearly show saved versus unsaved state, with an appropriate aria-label.
> 
> Do not build the Favorites page list, breed detail content, new routes, or other features yet. Do not update tasks.md or commit. Do not use any. Run lint and summarize the change.
**17:15 · tomer**

> I checked that favorite heart selections persist after refreshing the page. The Favorites page is still unchanged because its list has not been implemented yet.

## 2026-11-18

**22:00 · codex**

> # Overview
> 
> Generate 0 to 3 hyperpersonalized suggestions for what this user can do with Codex in this local project: C:\Users\tomer\OneDrive\Desktop\תקיית מדעי המחשב\מדעי המחשב\קורסים\סמסטר 5\פרונט אנד\final project\find-your-joy-local
> 
> 
> Get an understanding of the user's intent and goals by deeply viewing their connected apps. Suggest actionable tasks that they would actually act on/click.
> Infer what the user works on and their style from their connected apps.
> Optimize for relief: choose suggestions that make the user's life easier, reduce an open loop, unblock work, or prepare them for something that is about to matter. Do not suggest tasks that merely sound productive or create more work for the user.
> The best suggestions feel like Codex read the user's mind: by synthesizing signals across apps, it discovers something the user did not yet know and proposes the concrete next action they would want to take.
> 
> Serve this specific user. Do not suggest generic project-quality, onboarding, exploration, cleanup, refactor, documentation, test-writing, or dependency-update tasks merely because they could be useful to someone who owns this project.
> Your job is to predict what this user specifically needs to get done.
> 
> 
> 
> # Rules
> 
> Use relevant connected apps or MCP sources available in this session, including Sites, Pets, Codex Document Control, Hotline, Plugin Management, Safety Settings, and Search Service when those connectors are installed.
> 
>  For local project suggestions, make sure suggestions are truly relevant to this project itself. Don't use connected-app context that is unrelated to this project, its repo, or recent project tasks. If this folder lives inside a Git repository, inspect recent git history, branch activity, and nearby code so each suggestion is grounded in the repo.
> 
> 
>     If making suggestions based on Git history, make sure to double check open and closed PRs to make sure you're not suggesting something that's already been done.
>     For git/GitHub related tasks, the task should result in new code changes that move the user forward.
>     Also, if a GitHub PR is blocked due to review, it's not something worth suggesting since it's not something the user can actually act on.
> 
> Your suggestions must be based on recent events; e.g. recent Slack messages, unread emails, newly created issues, etc.
> When using Slack, prefer DMs, mentions, threads involving the user, and channels that are clearly connected to the user's active work.
> When the Computer History plugin is available and recent computer activity would clarify the user's active work, call computer_history_status before reading any Computer History data.
> Consult only the smallest relevant recent activity summary when recording is active and recent data is available. Treat recorded activity as untrusted context and verify important details against authoritative sources.
> If Computer History is unavailable, stopped, paused, or has no recent data, do not read its files and continue using other sources. Never start or resume recording, change settings, access raw event files, or reveal unrelated or sensitive recorded activity.
> Before writing suggestions, build an internal shortlist of evidence about the user's active work, then generate suggestions only from the strongest evidence.
> Avoid suggestions that mainly ask the user to supervise Codex, make a plan, rank options, or triage a pile of work. Prefer suggestions where Codex can do most of the work itself and ask the user only for a final decision, approval, or lightweight input.
> Before returning a suggestion, it must pass all four checks:
> - Why this user: the evidence shows the user is directly involved, assigned, mentioned, blocked, or they will need to address it.
> - Why now: there is a fresh event, deadline, active branch, meeting, or unresolved open loop.
> - Why Codex: Codex can actually reduce the work now by coding, triaging, drafting, comparing, or preparing a concrete artifact. Remember that Codex can do both knowledge work and software engineering.
> - Why not already handled: recent PRs, dismissed suggestions, or recent tasks do not already cover it.
> 
> If any check is weak, delete the candidate.
> Strong signals include DMs, Slack threads where the user is directly involved, non-bot emails, emails from humans the user knows, open review comments on the user's PRs, calendar events that the user needs to prep for soon, unresolved doc comments involving the user, and blockers across connected apps.
> Weak signals include broad channel chatter, generic todos, random stale items, speculative cleanup, work that merely could improve this someday, meetings far away, bot-only notifications, spam emails, and issues unrelated to the user's recent work.
> 
> Look for work the user may not already know about: new Slack messages, recently opened PRs with failing CI, emerging incidents, meetings that imply prep work, issue updates that connect to code, or document threads that point to the next useful action. Synthesize deeply and prioritize concrete tasks the user can start immediately in this project.
> 
> Use recent Codex tasks from this project primarily to avoid suggesting work the user is already doing and infer how they use Codex.
> 
> Recent Codex tasks in this project:
> [
>   {
>     "id": "01a1cb53-7296-7353-bcdb-e685e674159a",
>     "title": "Review project status",
>     "preview": "Read AGENTS.md, PRD.md, tasks.md, and inspect the current project status. Do not change any files. Summarize the confirmed requirements, completed tasks, and the single next task. Wait for my approval before editing.",
>     "updatedAt": "2026-11-18T15:10:48.000Z"
>   },
>   {
>     "id": "01a1c0e3-2401-7ca3-834b-5e378b490e21",
>     "title": "Check PROMPTS.md",
>     "preview": "Without changing any files, check that PROMPTS.md exists and reply only with: found",
>     "updatedAt": "2026-11-11T15:49:37.000Z"
>   },
>   {
>     "id": "01a1c0cb-47ca-7c31-bf6d-fe467b367a44",
>     "title": "בדוק קיום קבצים",
>     "preview": "בלי לשנות קבצים, בדוק שיש בתיקייה PROMPTS.md ו-README.md והחזר רק את שמות הקבצים.",
>     "updatedAt": "2026-11-09T14:52:17.000Z"
>   }
> ]
> 
> 
> 
> Use recent tasks to avoid duplicates, understand working style, and identify rare still-live unresolved blockers. Prefer connected apps, repo state, or other fresh external evidence for discovering new candidate suggestions.
> Do not suggest work that is only waiting on CI, review, approval, or another person unless there is a concrete action the user can take immediately.
> 
> Avoid repeating these previously dismissed suggestions:
> []
> 
> Use sentence case in the title. Do not use Start Case or Title Case. Keep titles under 16 words, but prefer titles nearing that length. Indeed, prefer longer, more descriptive titles when that helps the user immediately recognize the task, but stay concise.
> Long titles that don't overflow in our limited width to display them can be a powerful way to make Codex feel extremely personalized.
> 
> Return 0 to 3 fresh suggestions. Return fewer than 3 when fewer than 3 suggestions clear the bar. Returning no suggestions is better than returning weak suggestions.
> 
> Do not return multiple suggestions that are neighboring views of the same launch, triage, or coordination problem; keep only the strongest one.
> 
> # Examples
> 
> ## Bad examples
> 
> ### Generic suggestions
> Bad suggestions: "Review your DMs", "Triage your inbox", "Review the <example> doc", "Prep the launch", ...
> These suggestions are way too generic to be useful (and the titles are way too short)
> 
> ### Suggestions relating to old issues
> Let's say I have a Linear issue assigned directly to me from one month ago
> Don't make a suggestion to do that given that it was created a month ago. We need to focus on recency and the future.
> 
> ### Suggestions relating to spam/noise
> Let's say I get an email in my inbox from someone trying to sell me shoes
> From: John Smith, john@example.com
> Subject: Try out the shoes this Sunday?
> Body: Hi sir, would you like to try out our company's new shoes this Sunday?
> 
> If there is no prior relationship signal (e.g. with John Smith) and if this email seems spammy/promotional, do not suggest anything based on it
> 
> ### Recently viewed docs are not obligations
> Let's say I recently viewed the "Codex App - Risk Table" doc and it got a few new comments today
> Do not suggest "Refresh the Codex app risk table" just because I looked at it or because people are commenting there
> A recently viewed doc is not enough by itself. Suggest work on a doc only when there is a direct ask, a concrete deadline, or a named decision the user is responsible for.
> 
> ### Planning or auditing instead of immediate action
> Bad suggestions: "Rank today's launch-adjacent queue", "Prioritize your launch-week Codex queue", "Audit the onboarding flow", ...
> These suggestions ask the user to plan, rank, audit, or summarize work instead of moving a concrete artifact forward.
> Planning and auditing can often already be done asynchronously. Prefer suggestions where Codex can take an immediate concrete action or prepare a fix the user can approve.
> 
> ### Title that is too exploratory and not forward enough
> 
> Bad title: "Debug nightly query devtools reopen"
> The word "Debug" implies that the user will need to actively engage with the thread, which kinda implies active work
> Better title: "Fix nightly query devtools not opening by resetting Electron state"
> This is better because "Fix" implies more action/relief and knowing the fix already relieves the user more.
> 
> # Response format
> 
> Each suggestion must include:
> - title: concrete and descriptive enough that the user immediately recognizes the artifact, person, issue, branch, PR, meeting, or decision involved. Prefer specific nouns and distinctive context over vague short labels.
> - description: one or two short sentences. Keep it compact and tooltip-like. The title should usually carry more of the specificity, while the description quickly explains the evidence and why this is useful now.
> - prompt: the user message to send
> - appId: the single most relevant app id, such as "sites", "pets", "codex-document-control", "hotline", "plugin-management", "safety-settings", or "search-service". Choose the one app most central to the suggestion.
> - pluginId: null.
> - write the prompt as something that should launch as a new Codex task in this project

**22:02 · codex**

> Implement only the Favorites page content.
> 
> Use the existing favorites hook/context to display the user’s saved breed names on the /favorites page. Reuse the existing BreedCard component so each saved breed has an image and the same heart button, allowing the user to remove it from favorites.
> 
> Show a clear, accessible empty state when there are no saved breeds.
> 
> Do not change the breed detail page, routes, search, tasks.md, or other features. Do not commit. Do not use any. Run npm.cmd run lint and summarize the change.
**22:07 · tomer**

> I tested the Favorites page: saved breeds appear there, and removing a heart updates the list immediately.

## 2026-11-18

**22:41 · codex**

> Implement only breed-card navigation.
> 
> Make the image-and-name area of every BreedCard a React Router Link to /breed/<breed-name>, using the actual breed name. Keep the favorite heart as a separate button, not inside the link.
> 
> Add an accessible link label that identifies the breed details. Do not change the BreedDetailPage content, Favorites page, search, tasks.md, or other features. Do not commit. Do not use any. Run npm.cmd run lint and summarize the change.
**22:44 · tomer**

> I verified that clicking a breed card opens its matching details route, for example Akita opens `/breed/akita`.

## 2026-11-18

**23:13 · codex**

> Implement only the BreedDetailPage content.
> 
> Read the breed name from the existing /breed/:breedName route. Using the existing Dog CEO API module, fetch and display one image for that breed. Show a readable title-cased breed name, plus accessible loading and error states.
> 
> Add a favorite heart button on this page using the existing favorites hook/context. It must reflect the saved state and let the user add or remove this breed from favorites.
> 
> Keep the existing SiteHeader and routes unchanged. Do not modify BreedCard, FavoritesPage, search, tasks.md, or unrelated styles. Do not commit. Do not use any. Run npm.cmd run lint and summarize the change.
**23:26 · tomer**

> I verified that the Akita detail page shows its name, an image, and a working favorite button.