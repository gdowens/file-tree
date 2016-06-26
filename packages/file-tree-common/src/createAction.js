const actions = {
  initialState: (state, rootPath) => {
    return {
      type: 'initialState',
      payload: { state, rootPath },
    }
  },
  change: (state) => {
    return {
      type: 'change',
      payload: state,
    }
  },
  event: (name, path, stat) => {
    return {
      type: 'event',
      payload: { name, path, stat },
    }
  },
  batch: (actions) => {
    return {
      type: 'batch',
      payload: actions,
    }
  },
  response: (id, err, data) => {
    return {
      type: 'response',
      error: !! err,
      meta: { id },
      payload: err ? err : data,
    }
  },
}

export default (type, ...args) => actions[type](...args)
