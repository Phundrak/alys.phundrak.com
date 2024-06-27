{ pkgs ? import <nixpkgs> {} }:
pkgs.mkShell {
  nativeBuildInputs = with pkgs; [
    nodejs_20
    gum
  ];
  shellHook = ''
bash misc/enter-shell-hook.sh
'';
}
