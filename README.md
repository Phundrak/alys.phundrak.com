# ALYS Vocal Libraries Website

## Installing dependencies
To run the website, you will need the NPM package manager. You can
either install it following your operating system’s workflow, or you
can enter a Nix shell using `nix-shell` at the root of this
repository. If you run `direnv allow .` at the root of this
repository, the Nix shell made for this project will be loaded
automatically.

To install all dependencies, run the following command:
```sh
npm install
```

## Running the website
To run the website in development mode, run the following command:
```sh
npm run dev
```

This will start the website at <http://localhost:5173>.

## Building the website
To build the website, run the following command:
```sh
npm run build
```

You can view this release build by running the following command:
```sh
npm run preview
```

# License
This website is licenced under the
[`AGPL-3.0`](https://www.gnu.org/licenses/agpl-3.0.en.html) license.
