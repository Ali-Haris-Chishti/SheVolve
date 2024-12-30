import { Link } from "react-router-dom";
import { Menu, User, LogOut } from 'lucide-react';
import { Button } from "../../components/ui/button";
import logo from '../../../public/assets/logo.png';
import profileImage from '../../../public/assets/avatar.png'; // Replace with your actual profile image path
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import '../../styles/navbar.css';

function NgoNavBar() {
    return (
        <nav className="admin-navbar">
            <div className="admin-navbar-container">
                <Link to="/dashboard" className="admin-navbar-logo">
                    <img src={logo} alt="SheVolve Logo" className="admin-logo" />
                </Link>

                <ul className="admin-navbar-menu">
                    <li className="admin-navbar-item">
                        <Link to="/mentor/entrepreneurs" className="admin-navbar-link">Entrepeneurs</Link>
                    </li>
                    <li className="admin-navbar-item">
                        <Link to="/mentor/mentorships" className="admin-navbar-link">Mentorships</Link>
                    </li>
                    <li className="admin-navbar-item">
                        <Link to="/mentor/resources" className="admin-navbar-link">Stats</Link>
                    </li>
                </ul>

                <div className="admin-navbar-profile">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="admin-profile-button">
                                <img
                                    src={profileImage}
                                    alt="Profile"
                                    className="admin-profile-image"
                                />
                                <span className="sr-only">Open profile menu</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                                <User className="dropdown-icon" />
                                <Link to="/account">Account</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <LogOut className="dropdown-icon" />
                                <Link to="/logout">Sign Out</Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </nav>
    );
}

export default NgoNavBar;
