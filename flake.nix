{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flakelight.url = "github:nix-community/flakelight";
  };
  outputs =
    { flakelight, ... }@inputs:
    flakelight ./. {
      inherit inputs;
      packages = {
        default =
          {
            pkgs,
            lib,
            rustPlatform,
            ...
          }:
          rustPlatform.buildRustPackage {
            pname = "portfolio";
            version = "0.1.0";

            src = lib.cleanSource ./.;

            cargoLock = {
              lockFile = ./Cargo.lock;
            };

            nativeBuildInputs = [
              pkgs.trunk
              pkgs.wasm-bindgen-cli
              pkgs.rustc.llvmPackages.lld
            ];

            buildPhase = ''
              trunk build
            '';

            installPhase = ''
              mkdir -p $out
              cp -r dist/* $out
            '';
          };
      };

      devShell = pkgs: {
        inputsFrom = [ pkgs.portfolio ];
        packages = [
          pkgs.rust-analyzer

          # HTML LSP
          pkgs.vscode-langservers-extracted

          pkgs.rustfmt
        ];
      };
    };
}
