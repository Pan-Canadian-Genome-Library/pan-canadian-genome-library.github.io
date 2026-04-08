# PCGL Training and Documentation Website

This website in intended to display documentation and training materials for users of the [Pan-Canadian Genome Library](https://genomelibrary.ca/). The website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## How the website works
- Docusaurus is the website generator used to render the site. It provides a template for us to write and display our content.
- The website is hosted on GitHub Pages. GitHub Pages deploys the material we provide in this repository at https://pan-canadian-genome-library.github.io/
- Documentation pages are written in Markdown: .md for plain Markdown pages, or .mdx for pages that require React components (e.g. Training Catalog pages use a React component for the table)
- Documentation is organized based on the audience it is relevant to (e.g. all resources for researchers are grouped together).

### Repository structure
This repo has 2 protected branches:
- `main` contains the source code for the website
- `gh-pages` contains the deployment of the website

Below is a diagram of the `main` branch. 
```
.
├── /participant-public/             # resources for research participants and members of the public
├── /researcher/                     # resources for researchers
│   ├── 00-overview.mdx              # this page lists the resources available for researchers
│   ├── /01-docs/                    # guides for researchers are nested in this folder
│   │   ├── 01-docs.mdx                 # lists the guides for researchers, name MUST match folder
│   │   ├── 01-data-submission.mdx      # a guide on data submission 
│   │   └── 02-research-portal.md       # a guide on using the research portal
│   │
│   ├── 02-resources.mdx             # this page links resources (e.g. data model)
│   └── 03-catalog.mdx               # this page displays the training catalog for researchers
│
├── /src/                            # contains website source code
│   ├── /components/                    # React components
│   ├── /css/                           # global styles
│   ├── /theme/                         # global theme configuration
│   └── /pages/                         # homepage content and styling
│
├── /static/                         # contains static files like images
├── /templates/                      # contains Markdown templates for guides and FAQ pages
└── [Docusaurus files for configuration, sidebars, etc.]
```
> [!NOTE]
> Not all files are shown on the diagram. The `researcher` directory is expanded to show the structure of documentation for each audience.

## Prerequisites for reviewing or contributing to docs
You will need:
- A GitHub account with access to this repo: please contact pcgl.training@bioinformatics.ca to set this up
    - You must also have authentication set up (e.g. SSH key)
- A code editor like Visual Studio Code is **strongly recommended**
- [Node.js](https://nodejs.org/en/download/) version 18 or higher installed
    - Note: you'll need to add `. "$HOME/.nvm/nvm.sh"` to your config file or run the command `\. "$HOME/.nvm/nvm.sh"` each time you open a new terminal

## Running the site locally
### Setup

1. In the directory where you want the repo, clone the repository (`main` branch with source code)
```bash
git clone https://github.com/Pan-Canadian-Genome-Library/pan-canadian-genome-library.github.io.git
```

2. Change directories to the cloned repo
```bash
cd pan-canadian-genome-library.github.io
```

3. Install dependencies
```bash
npm ci
```

### Viewing the site
To start a local development server:
```bash
npm run start
```
Or:
```bash
yarn start
```
A browser window should open to `http://localhost:3000/`. Most changes are reflected live without having to restart the server.

## Contributing to documentation
To contribute documentation to be published on this website, please follow the PCGL Documentation Review process.

Once your content has been approved to be shared with the public, please follow the process below.

### 1. Sync your local main branch

```bash
git fetch origin
git checkout main
git pull origin main
```
### 2. Create a new branch or switch to an existing branch

Create a new branch (using a descriptive name)
```bash
git checkout -b feature/new-branch-name
```

Or switch to an existing branch
```bash
git checkout feature/existing-branch-name
```

### 3. Edit or add new documentation
To add new documentation, please copy the appropriate Markdown template:
```bash
cp templates/0X-guide-template.md
cp templates/0X-FAQ-template.md
```
Then:
- Move it to the appropriate location
- Edit the front matter and Bioschemas fields
- Copy in your approved documentation, reformatting as needed

#### Naming conventions & page ordering
- The order documents appear in on the site is determined by names. We use numbering to ensure pages display in the correct order. 
    - E.g. Under researcher, 01-docs/ is listed first, then 02-resources.mdx, and 03-catalog.mdx

        ```
        /researcher/
        ├── /01-docs/ 
        ├── 02-resources.mdx 
        └── 03-catalog.mdx
        ```

- Documentation can be nested by placing files within a folder. To create a landing page for the nested pages, name the .md or .mdx with the same name as the folder. 
    - E.g. Under researcher, 01-docs/ contains 01-docs.mdx

        ```
        /researcher/
        └── /01-docs/
            └── 01-docs.mdx 
        ```

    - To display the nested pages as cards on the landing page, use an .mdx and the `<DocCardList/>` React component (see 01-docs/ for examples)

> [!NOTE]
> Unless specified in the front matter, Docusaurus will use the file name (excluding numbering and file extension) as the id for the page. See [Docusaurus documentation](https://docusaurus.io/docs/create-doc) for details on customizing page ordering.

### Optional: Build
You do not need to build the site locally, but if you want to:
```bash
yarn build
```
This command generates static content into the `build` directory and can be served using any static contents hosting service.

### 4. Test, commit and push
Once you have made your changes, test that the site displays them correctly locally (see *Viewing the site* above).
Then, commit your changes and push your branch to GitHub.

```bash
git add .    # Or use git add <specific files>
git commit -m "Brief description of changes"
git push origin feature/branch-name
```

### 5. Open a Pull Request (PR) 
1. Under `Pull requests`, choose `New pull request` 
2. Compare changes between your branch and `main`. Note that comparing changes are directional, so the `base:` should be `main` and `compare:` should be your new branch.
3. Provide a brief summary of your changes.

## Review Instructions for Docs Site Reviewers team
1. Review the PR: check for conflicts, read the description, and review the "Files changed" tab.

2. Test that the site builds correctly: 
    
    a. If you have not yet done so, follow the local setup instructions above

    b. Run the commands below to ensure you are up to date and switch branches to the branch in review

    ```bash
    git fetch origin
    git checkout feature/branch-to-review
    ```
   
   c. Test that the site builds correctly and the modified pages display correctly (see *Viewing the site* instructions above)

4. Submit your review of the PR on GitHub: request changes if there are issues or approve the PR.

5. Once approved, use the "squash and merge" option and notify pcgl.training@bioinformatics.ca (or other members of the Docs Site Updaters team) that there are approved changes pending deployment. 

## Deployment Instructions for Docs Site Updaters team
1. Pull the latest `main`:
```bash
git checkout main
git pull origin main
```

2. The site is deployed to the `gh-pages` branch using the yarn `deploy` command. This command builds the website and pushes to the `gh-pages` branch.

Using SSH:
```bash
USE_SSH=true yarn deploy
```

Not using SSH:
```bash
GIT_USER=<Your GitHub username> yarn deploy
```
