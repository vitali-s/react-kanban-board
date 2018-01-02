function titlePropType(props, propName, componentName) {
    if (props[propName]) {
        let value = props[propName];

        if (typeof value !== 'string' || value.length > 80) {
            return new Error( `${propName} in ${componentName}  is longer than 80 characters`);
        }
    }
}

export default titlePropType;