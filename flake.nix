{
  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";

  outputs =
    { self, nixpkgs }:
    let
      inherit (nixpkgs) lib;

      pkgsFor = system: nixpkgs.legacyPackages.${system} or (import nixpkgs { inherit system; });
      supportedSystems = lib.systems.doubles.linux;
      forAllSystems = function: lib.genAttrs supportedSystems (system: function (pkgsFor system));
    in
    {
      packages = forAllSystems (pkgs: {
        default = pkgs.callPackage (
          {
            buildNpmPackage,
          }:
          buildNpmPackage {
            pname = "legarbage.github.io";
            version = "0.1.0";

            src = ./.;

            npmDepsHash = "sha256-YjmIZ2foKRiAiA5f1SgKY0kxgnSErED4jGpK0cVVY7k=";
          }
        ) { };
      });

      devShells = forAllSystems (pkgs: {
        default =
          with pkgs;
          mkShell {
            inputsFrom = [ self.packages.${stdenv.hostPlatform.system}.default ];
          };
      });
    };
}
