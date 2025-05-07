# Semantic Commits Guide

## Standard Format

```
:emoji: <type> (<scope>): <description>
```

Where:

- **:emoji:** – Emoji corresponding to the commit type
- **<type>** – Type of commit (feat, fix, docs, etc.)
- **<scope>** – Module or affected context (auth, ui, api, etc.)
- **<description>** – Short and objective phrase starting with lowercase letter that summarizes the change

## Commit Types and Emojis

| Commit type              | Emoji                            | Description                                      |
| ------------------------ | -------------------------------- | ------------------------------------------------ |
| Initial commit           | 🎉 `:tada:`                      | Begin a project                                  |
| Version tag              | 🔖 `:bookmark:`                  | Release / Version tags                           |
| New feature              | ✨ `:sparkles:`                  | Introduce new features                           |
| Bugfix                   | 🐛 `:bug:`                       | Fix a bug                                        |
| Critical hotfix          | 🚑 `:ambulance:`                 | Critical hotfix                                  |
| Documentation            | 📝 `:memo:`                      | Add or update documentation                      |
| Documenting source code  | 💡 `:bulb:`                      | Add or update comments in source code            |
| Improve format/structure | 🎨 `:art:`                       | Improve structure/format of the code             |
| Performance              | ⚡ `:zap:`                       | Improve performance                              |
| Cosmetic                 | 💄 `:lipstick:`                  | Add or update UI and style files                 |
| Tests                    | 🚨 `:rotating_light:`            | Fix compiler/linter warnings                     |
| Adding a test            | 🧪 `:test_tube:`                 | Add a failing test                               |
| Make a test pass         | ✅ `:heavy_check_mark:`          | Add, update, or pass tests                       |
| Security                 | 🔒 `:lock:`                      | Fix security or privacy issues                   |
| Secrets                  | 🔐 `:closed_lock_with_key:`      | Add or update secrets                            |
| Deploying stuff          | 🚀 `:rocket:`                    | Deploy stuff                                     |
| Refactor code            | 🔨 `:hammer:`                    | Refactor code                                    |
| Removing code/files      | 🔥 `:fire:`                      | Remove code or files                             |
| Upgrading dependencies   | ⬆️ `:arrow_up:`                  | Upgrade dependencies                             |
| Downgrading dependencies | ⬇️ `:arrow_down:`                | Downgrade dependencies                           |
| Pin dependencies         | 📌 `:pushpin:`                   | Pin dependencies to specific versions            |
| Continuous Integration   | 👷 `:construction_worker:`       | Add or update CI build system                    |
| Database changes         | 🗃️ `:card_file_box:`             | Perform database-related changes                 |
| Lint                     | 👕 `:shirt:`                     | Fix linter warnings                              |
| Translation              | 🌐 `:globe_with_meridians:`      | Internationalization and localization            |
| Text                     | ✏️ `:pencil2:`                   | Fix typos                                        |
| Work in progress         | 🚧 `:construction:`              | Work in progress                                 |
| Merging branches         | 🔀 `:twisted_rightwards_arrows:` | Merge branches                                   |
| Architecture changes     | 🏗️ `:building_construction:`     | Make architectural changes                       |
| License                  | 📄 `:page_facing_up:`            | Add or update license                            |
| Breaking changes         | 💥 `:boom:`                      | Introduce breaking changes                       |
| Assets                   | 🍱 `:bento:`                     | Add or update assets                             |
| Accessibility            | ♿ `:wheelchair:`                | Improve accessibility                            |
| Move/Rename repo         | 🚚 `:truck:`                     | Move or rename resources                         |
| Mocking                  | 🤡 `:clown_face:`                | Mock things                                      |
| Ignore files             | 🙈 `:see_no_evil:`               | Add or update .gitignore files                   |
| Snapshots                | 📸 `:camera_flash:`              | Add or update snapshots                          |
| Experiments              | ⚗️ `:alembic:`                   | Perform experiments                              |
| Improve SEO              | 🔍 `:mag:`                       | Improve SEO                                      |
| Types                    | 🏷️ `:label:`                     | Add or update types                              |
| Seeds                    | 🌱 `:seedling:`                  | Add or update seed files                         |
| Feature flags            | 🚩 `:triangular_flag_on_post:`   | Add, update, or remove feature flags             |
| Catch errors             | 🥅 `:goal_net:`                  | Catch errors                                     |
| Animations               | 💫 `:dizzy:`                     | Add or update animations and transitions         |
| Deprecate code           | 🗑️ `:wastebasket:`               | Deprecate code that needs cleanup                |
| Authorization            | 🛂 `:passport_control:`          | Work on authorization, roles, and permissions    |
| Minor fix                | 🩹 `:adhesive_bandage:`          | Simple fix for a non-critical issue              |
| Data exploration         | 🧐 `:monocle_face:`              | Data exploration/inspection                      |
| Remove dead code         | ⚰️ `:coffin:`                    | Remove dead code                                 |
| Business logic           | 👔 `:necktie:`                   | Add or update business logic                     |
| Healthcheck              | 🩺 `:stethoscope:`               | Add or update healthcheck                        |
| Infrastructure           | 🧱 `:bricks:`                    | Infrastructure-related changes                   |
| Dev experience           | 🧑‍💻 `:technologist:`              | Improve developer experience                     |
| Sponsorships             | 💸 `:money_with_wings:`          | Add sponsorships or money-related infrastructure |
| Multithreading           | 🧵 `:thread:`                    | Add or update multithreading/concurrency code    |
| Validation               | 🦺 `:safety_vest:`               | Add or update code related to validation         |

## Main Commit Types

- **feat**: new feature
- **fix**: bug fix
- **docs**: changes to documentation
- **style**: formatting without changing logic
- **refactor**: code improvements without changing functionality
- **test**: addition or update of tests
- **chore**: maintenance tasks
- **build**: changes to the build system or dependencies
- **ci**: changes to continuous integration configurations
- **perf**: performance optimizations
- **env**: modifications to configuration files
- **improvement**: improvements without adding features

## Commit Examples

- ✨ feat (auth): add login endpoint
- 🐛 fix (api): fix token validation error
- 📝 docs (ui): update component documentation
- 🎨 style (layout): adjust spacing and alignment
- 🔨 refactor (core): reorganize utility functions
- 🚀 deploy (ci): implement automated deployment
- 💥 feat (payment): introduce breaking changes in payment API
- 🚚 chore (repo): move files to new structure
- 🔖 version (release): create tag for release 2.0.0
