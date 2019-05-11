

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
            const {
                nodeName,
                children,
                text = ''
            } = element;
            return `
                <${nodeName} id="${element.id}">
                    ${children ?  strChildren(children): ''}
                    ${text}
                </${nodeName}>
            `;
        }
    );

    return output.join('');
}


const html = strChildren(tpl);
//console.log(html);

document.body.innerHTML = html;

prepareAttributes(tpl.attributes);

function prepareAttributes(attributes) {
    return Object.entries(attributes)
        .map(function (item) {
            return `${item[0]}="${item[1]}"`;
            // return item[0] + '="' + item[1] + '"';
        })
        .join(' ');
}


function fn(param1, ...rest) {
    console.log(param1, rest);
}

const {
    title: myTitle,
    id,
    lol = 'LOL'
} = tpl.attributes;

const arr = ['a', 'b', 'c'];

const [myA] = arr;

const objA = {
    a: 1,
    b: 'a'
};

const objB = {
    c: 2,
    d: 'b'
};

const objC = {
    ...objA,
    ...objB,
    a: 3,
    f: 'c'
};

function fn1({ nodeName, ...rest }) {
    console.log(nodeName, rest);
}
