export const updateObjectArray = (items, itemId, objectName, newObjectProps) => {
    return items.map(u => {
        if (u[objectName] === itemId) {
            return { ...u, ...newObjectProps }
        }
        return u;
    })
}
