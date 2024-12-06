const fs = require('fs');
const path = require('path');

test('El archivo index.html contiene el texto "¡Hola Mundo!"', () => {
    const htmlPath = path.resolve(__dirname, '../index.html');
    const htmlContent = fs.readFileSync(htmlPath, 'utf-8');
    expect(htmlContent).toMatch(/¡Hola Mundo!/);
});
