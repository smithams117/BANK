function Balance(){
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');  

  return (
    <Card
      
      status={status}
      body={show ?
        <BalanceForm setShow={setShow} setStatus={setStatus}/> :
        <BalanceMsg setShow={setShow} setStatus={setStatus}/>}
    />
  )

}

function BalanceMsg(props){
  return(<><div className="balance"><button type="submit"
  className="btn btn-light" 
  onClick={() => {
    props.setShow(true);
    props.setStatus('');
  }}>
    Check balance again
</button></div>
    <h5>Success</h5>
    
  </>);
}

function BalanceForm(props){
  const [email, setEmail]   = React.useState('');
  const [balance, setBalance] = React.useState('');  

  function handle(){
    fetch(`/account/findOne/${email}`)
    .then(response => response.text())
    .then(text => {
        try {
            const data = JSON.parse(text);
            props.setStatus(text);
            props.setShow(false);
            setBalance(user.balance);
            console.log('JSON:', data);
        } catch(err) {
            props.setStatus(text)
            console.log('err:', text);
        }
    });
  }

  return (<>
    <div className="balance">
      <div class="card">
      <div class="bg-primary card-headera">
        Balance
      </div>
      <div class="card-body">
      Email<br/>
        <input type="input" 
          className="form-control" 
          placeholder="Enter email" 
          value={email} 
          onChange={e => setEmail(e.currentTarget.value)}/><br/>

        <button type="submit" 
          className="btn btn-light" 
          onClick={handle}>
            Check Balance
        </button>
      </div>
      </div>
    </div>
  </>);
}