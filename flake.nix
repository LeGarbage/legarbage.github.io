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
            pname = "site";
            version = "0.1.0";

            src = lib.cleanSource ./.;

            cargoLock = {
              lockFile = ./Cargo.lock;
            };

            nativeBuildInputs = with pkgs; [
              trunk
              wasm-bindgen-cli
              rustc.llvmPackages.lld
            ];

            buildPhase = ''
              trunk build --release
            '';

            installPhase = ''
              mkdir -p $out
              cp -r dist/* $out
            '';
          };
      };

      devShell = pkgs: {
        inputsFrom = [
          pkgs.site
        ];
        packages = with pkgs; [
          rust-analyzer
          rustfmt

          # HTML LSP
          vscode-langservers-extracted
        ];
      };
    };
}
