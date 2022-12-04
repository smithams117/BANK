function AllData() {
    const [data, setData] = React.useState("");

    React.useEffect(() => {

        // fetch all accounts from API
        fetch('/account/all')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setData(JSON.stringify(data));
            });

    }, []);

    return (<>
        <h5>All USERS</h5>
        <td>{data}</td>
        <label>
                    Name
                    <input type="text" name="name" value={this.name} onChange={this.handleNameChange}/>
                </label>
        
    </>);
}
