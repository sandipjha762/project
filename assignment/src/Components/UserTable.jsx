import { useContext } from "react";
import UserContext from './UserContext'
// const data = useContext(UserContext);

const UserTable = ({usersData}) => {
    console.log(usersData);

    const seeMoreBtn = (user) => {
        console.log(user);
        
    }
    
    return(
        <>
            <p>This is User Table</p>
            <table className="user-table">
                <thead>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Company Name</th>
                    <th></th>
                </thead>
                <tbody>
                    {
                        usersData.map(user => (
                            <tr>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.company.name}</td>
                                <td>
                                    <button onClick={(user) => seeMoreBtn(user)}>See More</button>
                                    {/* <SeeMore user={user}/> */}
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>

    )
}

const SeeMore = (user) => {
    return(
        <>
        <p>address : {user.address}</p>
        <p>phone : {user.phone}</p>

        </>
    ) 
}

export default UserTable;