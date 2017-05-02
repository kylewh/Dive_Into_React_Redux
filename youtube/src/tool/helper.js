function debounce(fn, interval = 500) {
  var timer,
    context = this
  return function () {
    var args = arguments
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(function () {
      timer = null
      fn.apply(context, args)
    }, interval)
  }
}

export { debounce }
