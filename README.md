# PCGL Training and Documentation Website

This website in intended to display documentation and training materials for users of the [Pan-Canadian Genome Library](https://genomelibrary.ca/). The website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## How the website works
- Docusaurus is the website generator used to render the site. It provides a template for us to write and display our content.
- The website is hosted on GitHub Pages. GitHub Pages deploys the material we provide in this repository at https://pan-canadian-genome-library.github.io/
- Documentation pages are written in Markdown: .md for plain Markdown pages, or .mdx for pages that require React components (e.g. Training Catalog pages use a React component for the table)
- Documentation is organized based on the audience it is relevant to (e.g. all resources for researchers are grouped together).

### Repository structure
This repo has 2 branches:
- `main` contains the source code for the website
- `gh-pages` contains the deployment of the website

Below is a diagram of the `main` branch. 
```
.
├── /clinician/                      # resources for clinicians
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
├── /templates/                      # contains Markdown template
└── [Docusaurus files for configuration, sidebars, etc.]
```
> [!NOTE]
> Not all files are shown on the diagram. The `researcher` directory is expanded to show the structure of documentation for each audience.

## Contributing to documentation
To contribute documentation to be published on this website, you must first follow the PCGL Documentation Review process (in development).

Once your content has been approved to be shared with the public, please follow the process below.

### Prerequisites
You will need:
- A GitHub account with access to contribute to this repo: please contact pcgl.training@bioinformatics.ca to set this up
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

### Adding new documentation
To add new documentation, please copy the Markdown template:
```bash
cp templates/04-template.md
```
Then:
- Move it to the appropriate location
- Edit the front matter and Bioschemas fields
- Copy in your approved documentation, reformatting as needed

### Optional: Build
You do not need to build the site locally, but if you want to:
```bash
yarn build
```
This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment Process
1. Once you have made your changes and tested that the site displays them correctly locally, commit your changes to the main branch.

>[!WARNING]
> Review process for approving changes is in development

2. The site can be deployed to the `gh-pages` branch using the yarn `deploy` command. This command builds the website and pushes to the `gh-pages` branch.

Using SSH:
```bash
USE_SSH=true yarn deploy
```

Not using SSH:
```bash
GIT_USER=<Your GitHub username> yarn deploy
```
