const uglify = require('uglify-js');
const csso = require('csso');
const fs = require('fs');

const input = fs.readdirSync(__dirname + '/src');

for (const inpf of input) {
    const ext = inpf.split('.').pop();
    const fname = inpf.split('.').shift();
    const content = fs.readFileSync('./src/' + inpf).toString();
    if (ext == 'js') {
        const min = uglify.minify(content);
        if (min.error) console.error(min.error);
        fs.writeFileSync(__dirname + '/dist/' + fname + '.min.js', min.code);
    } else if (ext == 'css') {
        const min = csso.minify(content);
        fs.writeFileSync(__dirname + '/dist/' + fname + '.min.css', min.css);
    } else {
        console.warn(`WARN: skipping file '${inpf}' with unknown extension '.${ext}'`);
    }
}