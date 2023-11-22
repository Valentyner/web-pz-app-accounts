import React, { FC, useEffect, useState } from 'react';
import './UserItem.css';
import { Account } from '../UserList/UserList';

export interface UserItemProps {
    account: Account;
}

const UserItem: FC<UserItemProps> = ({ account }) => {
    useEffect(() => {
        dateUpdate();
    }, []); 

    const [startDateEdit, setStartDateEdit] = useState(
        new Date(account.start_date * 1000)
    );
    const [expirationDateEdit, setExpirationDateEdit] = useState(
        new Date(account.expiration_date * 1000)
    );

    const dateUpdate = () => {
        setStartDateEdit(new Date(account.start_date * 1000));
        setExpirationDateEdit(new Date(account.expiration_date * 1000));
    };

    return (
        <tbody>
            <td>
                <p>{account.name}</p>
            </td>
            <td>
                <p>{account.account_name}</p>
            </td>
            <td>
                <p>{account.email}</p>
            </td>
            <td>
                <p className={`status ${account.status}`}>{account.status}</p>
            </td>
            <td>
                <p>
                    {new Date(startDateEdit).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                    })}
                </p>
            </td>
            <td>
                <p>
                    {new Date(expirationDateEdit).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                    })}
                </p>
            </td>
        </tbody>
    );
};

export default UserItem;
