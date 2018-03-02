Testing rust and wasm

```
npm install
npm run build
npm run watch
```

Need to rebuild rust manually with `cargo wasm build`.

Set up cargo-wasm (first time only)
```
cargo install cargo-wasm
cargo wasm setup
rustup override set nightly
```
