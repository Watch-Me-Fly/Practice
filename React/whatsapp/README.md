# Cloning Repo

You can clone this repo using

````
$ git clone https://github.com/pierrelavalette/tuto-ovrsea.git
````


# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development and reading

```
$ yarn start
```

This command starts a local development server on port 3456 and opens up a browser window on the tuto page. The page is accessible with the url `http://localhost:3456/`
You can use this page to read and follow the tuto locally, or to add changes to its content. Most changes are reflected live without having to restart the server.


### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
