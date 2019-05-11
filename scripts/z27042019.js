

// --- STAN KONCOWY ;)

const tpl = {
    nodeName: 'div',
    attributes: {
        id: 'node-div-1',
        title: '...'
    },
    children: [{
        nodeName: 'div',
        id: 'node-div-2',
        children: [{
            nodeName: 'span',
            id: 'node-span-1',
            children: [{
                nodeName: 'b',
                text: 'ŚPIEWA'
            }]
        }, {
            nodeName: 'span',
            id: 'node-span-2',
            text: ' PIOSENKI'
        }]
    }]
};

function strChildren(children) {
    if (!children) {
        return '';
    }

    const output = (Array.isArray(children) ? children : [children]).map(
        element => {
            return `
                <${element.nodeName} id="${element.id}">
                    ${element.children ?  strChildren(element.children): ''}
                    ${element.text ? element.text : ''}
                </${element.nodeName}>
            `;
        }
    );

    return output.join('');
}


const html = strChildren(tpl);
//console.log(html);

document.body.innerHTML = html;

Object.keys(tpl.attributes)
