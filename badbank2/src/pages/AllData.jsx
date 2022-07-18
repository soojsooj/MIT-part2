import React, { useContext } from 'react'
import { useBankContext } from '../context/BankContext'
import { Card } from '../context/CardContext'
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'


// const AllData = () => {
//   const { bank } = useBankContext();

//   return (
//     <div>
//       {JSON.stringify(bank, null, 2)}
//     </div>
//   )
// }

// export default AllData

const AllData = () => {
 const { bank } = useBankContext();

  return (
    <Container>
    {JSON.stringify(bank, null, 2)}
     {bank.users ? (
        <Card
            txtcolor='black'
            header="User Data"
            status=""
            body={
                <>
                    <div>
                        Username: {bank.users.username} <br />
                        Password: {bank.users.password} <br />
                        <strong>Balance:</strong> ${bank.users.balance} <br />
                    </div>
                    
                    {/* <div>
                        <p><strong>Transactions:</strong></p>
                        {
                            ctx.transactions.map((item, index) => <div key={index}>{item.transaction}: ${item.amount}</div>)
                        }
                    </div> */}
                    
                    {/* <div>
                        <strong>Balance:</strong> ${bank.users.balance}
                    </div> */}
                </>
            } />
            ) : (
        <Card
              txtcolor= "black"
              header="Please create an account"
              status=''
              body={<><Link to="/createaccount">Create an account</Link></>} />
      )}
  </Container>
  )
}

export default AllData