# Learn React by Building an eCommerce Site - Tutorial

This is a tutorial I followed from freeCodeCamp.org to learn the React library.

### [Tutorial Position](https://youtu.be/1DklrGoAxDE?feature=shared&t=16578)

### Life Cycle Phases of Components

- dev can use methods in phases to render content from server

1. **Mounting**
   - when instance of componener is being created & insert into DOM for 1st time
     - constructor(props)
     - used to init state & event handlers
     - dont make http req / fetch server data
     - render()
     - dont make changes to props/state, only UI
     - componentDidMount()
     - executes after both methods execute & children render
2. **Updating**
   - when a comp is updated by change in props/state
     - render()
     - componentDidUpdate(prevProps, prevState)
3. **Unmounting**
   - when component is removed from DOM (happens when routing is enable & user navigate to another route/ parent comp removes child comp)
     - componentWillUnmount()
4. **Error Handling**
   - when comp encounters error during rendering, in lifecycle method / in constructor of any child comp
     - componentDidCatch(error, info)
