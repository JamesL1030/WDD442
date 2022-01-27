class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        }
    }
    componentDidMount() {
        fetch(
            `/${this.props.model}`,
            { headers: { Accept: 'application/json' } })
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    })
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    })
                }
            )
    }
    render() {
        const { error, isLoaded, items } = this.state
        if (error) {
            return React.createElement('div', null, `Error: ${error.message}`)
        } else if (!isLoaded) {
            return React.createElement('div', null, 'Loading...')
        } else {
            return React.createElement(
                'ul', null,
                items.map( item => React.createElement( 'li', { key: item.id },
                    `${item.name} - `,
                    React.createElement('a', { href: `/${this.props.model}/${item.id}/edit` }, 'Edit'),
                    React.createElement('span', null, '  '),
                    React.createElement('a', { href: `/${this.props.model}/${item.id}/delete` }, 'Delete'),
                ))
            )
        }
    }
}

