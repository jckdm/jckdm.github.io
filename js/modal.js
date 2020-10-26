show = (id) => $('#' + id.substr(0, id.length - 3) + 'Modal').css('display', 'block')
hide = (id) => $('#' + id.substr(0, id.length - 5) + 'Modal').css('display', 'none')
