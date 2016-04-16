
require "isDev"

module.exports = (func) ->
  if isDev
    fail: (onError) ->
      result = undefined
      try result = func()
      catch error then result = onError error
      return result
  else
    fail: ->
      return func()
