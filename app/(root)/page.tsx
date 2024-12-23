import Headerbox from '@/components/HeaderBox'
import RightSideBar from '@/components/RightSideBar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import { getLoggedInUser } from '@/lib/actions/user.actions'
import React from 'react'

const Home = async () => {
    const loggedIn = await getLoggedInUser();
    return (
        <section className='home'>
            <div className="home-content">
                <header className="home-header">
                    <Headerbox
                        type="greeting"
                        title="Welcome"
                        user={loggedIn?.name || 'Guest'}
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
