function log(...args: any[]) {
    const line = Array.from(args).join(' ') + '\n';
    const el = document.querySelector('#output') as HTMLElement;
    el.innerText += line;
}

function test(program) {
    log('add_one', 5, program.instance.exports.add_one(5));
    log('say_hello', program.instance.exports.say_hello());
    log('get_hello_len', program.instance.exports.get_hello_len());
}


(function() {
  fetch('/hello_wasm.wasm', {mode: 'same-origin'})
      .then(r => r.arrayBuffer())
      .then(b => WebAssembly.instantiate(b, {}))
      .then(p => {
        window['app'] = p;
        test(p);
      });
}());
