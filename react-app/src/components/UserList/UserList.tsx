import React, { useEffect, useState } from 'react';
import "./UserList.css"
import UserItem from '../UserItem/UserItem';
import axios, { AxiosResponse } from "axios";

export interface Account {
    id: number;
    name: string,
    account_name: string,
    email: string;
    status: string,
    start_date: number,
    expiration_date: number;
};

const UserList = () => {

    const [accounts, setAccounts] = useState<Account[]>([])

    useEffect(() => {
        getAccounts()
    }, [])

    const getAccounts = async () => {
        try {
            const data: AxiosResponse<Account[]> = await axios.get<Account[]>('http://localhost:3001/accounts');
            setAccounts(data.data)
        } catch (e) {
            console.log(e)
        }
    }



    return (
        <div className='table-container'>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Account name</th>
                        <th>E-mail</th>
                        <th>Status</th>
                        <th>Start date</th>
                        <th>Expiration date</th>
                        <th></th>
                    </tr>
                </thead>
                {accounts.map(account => (
                        <UserItem key={account.id} account={account} />
                    ))}
            </table>
        </div>
    );
};

export default UserList;