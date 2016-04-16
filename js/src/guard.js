require("isDev");

module.exports = function(func) {
  if (isDev) {
    return {
      fail: function(onError) {
        var error, result;
        result = void 0;
        try {
          result = func();
        } catch (_error) {
          error = _error;
          result = onError(error);
        }
        return result;
      }
    };
  } else {
    return {
      fail: function() {
        return func();
      }
    };
  }
};

//# sourceMappingURL=../../map/src/guard.map
