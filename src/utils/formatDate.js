const formatDate = (date) => {
    if (!date) return ''
    return new Date(date).toDateString()
    .split(' ')
    .slice(1)
    .join(' ')
}

export default formatDate