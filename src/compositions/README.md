# Compositions

Compositions are Higher Order Components (HOC).

Rule: Only create HOC once you've used the same functionality across 2 components. Avoid developing in presight and overengineering problems that do not exist yet.

Where multiple components are doing the same things, we abstract them
into a single HOC that acts as a wrapper but shares the same functionality.

This is beneficial in circumstances we find very similar scenarios in our applications, such as:

- A paginated list
- Filtering list
- Tables in general
- Edit Forms (e.g Jobs/Admins/Admins)

The passed-in component is what controls the overall UI, however the HOC handles the shared functionality.

Using an example of table listings, we can create HOC such as:

```js
  const JobListWithList = withList(
    JobList,
    (DataSource) => actions.getJobs()
  )
```

Then the HOC will look like:

```js
  // Example taken from: https://reactjs.org/docs/higher-order-components.html

  function withList(WrappedComponent, selectData) {
    // ...and returns another component...
    return class extends React.Component {
      constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
      }

      componentDidMount() {
        // ... that takes care of the subscription...
        DataSource.addChangeListener(this.handleChange);
      }

      componentWillUnmount() {
        DataSource.removeChangeListener(this.handleChange);
      }

      handleChange() {
        this.setState({
          data: selectData(DataSource, this.props)
        });
      }

      render() {
        // ... and renders the wrapped component with the fresh data!
        // Notice that we pass through any additional props
        return <WrappedComponent data={this.state.data} {...this.props} />;
      }
    };
  }
```

Further reading:

`https://medium.com/backticks-tildes/reusing-react-component-logic-with-higher-order-component-3fbe284beec9`

