

export const formatDate = (date) => {
    const obj = new Date(date)
    var month = obj.getMonth() + 1 < 10 ? '0' + (obj.getMonth() + 1) : obj.getMonth() + 1
    var day = obj.getDate() < 10 ? '0' + obj.getDate() : obj.getDate()
    var hrs = obj.getHours() < 10 ? '0' + obj.getHours() : obj.getHours()
    var min = obj.getMinutes() < 10 ? '0' + obj.getMinutes() : obj.getMinutes()
    const formatted = month + '/' + day + '/' + obj.getFullYear() + ' ' + hrs + ':' + min

    return date ? formatted : '-'
}