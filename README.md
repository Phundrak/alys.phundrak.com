# ALYS Vocal Libraries Website

## Installing dependencies
To run the website, you will need corepack’s yarn 4. You can enable it
using `yarn set version stable`, or you can enter a Nix shell using
`nix-shell` at the root of this repository.

To install all dependencies, run the following command:
```sh
yarn
```

## Running the website
To run the website in development mode, run the following command:
```sh
yarn dev
```

This will start the website at <http://localhost:5173>.

## Building the website
To build the website, run the following command:
```sh
yarn build
```

You can view this release build by running the following command:
```sh
yarn preview
```

# License
This website is licenced under the
[`AGPL-3.0`](https://www.gnu.org/licenses/agpl-3.0.en.html) license.
