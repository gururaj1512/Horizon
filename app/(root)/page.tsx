import Headerbox from '@/components/HeaderBox'
import RightSideBar from '@/components/RightSideBar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {
    const loggedIn = { firstName: 'Gururaj', lastName: 'Gurram', email: 'gururajgurram1512@gmail.com'}
    return (
        <section className='home'>
            <div className="home-content">
                <header className="home-header">
                    <Headerbox
                        type="greeting"
                        title="Welcome"
                        user={loggedIn?. firstName || 'Guest'}
                        subtext="Access and manage your account and transactions efficiently"
                    />

                    <TotalBalanceBox
                        accounts={[]}
                        totalBanks={1}
                        totalCurrentBalance={1234.34}
                    />
                </header>
                Recent Transactions
            </div>
            <RightSideBar
                user={loggedIn}
                transactions={[]}
                banks={[{currentBalance: 3278.32}, {currentBalance: 876.32}]}
            />
        </section>
    )
}

export default Home
