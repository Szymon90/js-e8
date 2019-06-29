export default function (object, path = '', defaultValue) {
    const pathArray = path.split('.');
    let value = object;
    let output = defaultValue;

    pathArray.forEach((name, index) => {
        if (index === pathArray.length - 1) {
            output = value[name] || defaultValue
            return;
        }
        if (value[name]) {
            value = value[name];
        }
    });

    return output;
}
