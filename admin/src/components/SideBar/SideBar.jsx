import './SideBar.scss';
import { Home, Equalizer, Loyalty,Person,Storefront,AttachMoney,Assessment,Email,Forum,Work,Report } from '@material-ui/icons';

const SideBar = () => {
    return (
        <div className="sideBar">
            <div className="dashboard cate">
                <div className="home item">
                    <Home />
                    <span>Home</span>
                </div>
                <div className="analytics item">
                    <Equalizer />
                    <span>Analytics</span>
                </div>
                <div className="sales item">
                    <Loyalty />
                    <span>Sales</span>
                </div>
            </div>
            <div className="quickMenu cate">
                <div className="user item">
                    <Person />
                    <span>User</span>
                </div>
                <div className="products item">
                    <Storefront />
                    <span>Product</span>
                </div>
                <div className="transactions item">
                    <AttachMoney />
                    <span>Transactions</span>
                </div>
                <div className="reports item">
                    <Assessment />
                    <span>Reports</span>
                </div>
            </div>
            <div className="notification cate">
                <div className="mail item"></div>
                <div className="feedback item">
                    <Email />
                    <span>Mail</span>
                </div>
                <div className="messages item">
                    <Forum />
                    <span>Messages</span>
                </div>
            </div>
            <div className="staff cate">
                <div className="manage item">
                    <Work />
                    <span>Manage</span>
                </div>
                <div className="analytics item">
                    <Assessment />
                    <span>Analytics</span>
                </div>
                <div className="reports item">
                    <Report />
                    <span>Report</span>
                </div>
            </div>
        </div>
    )
}

export default SideBar
