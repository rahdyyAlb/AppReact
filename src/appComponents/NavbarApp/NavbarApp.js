import React, {useState} from 'react';

const NavbarApp = ({apps}) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div>
            <nav className="d-block align-items-start align-items-md-end flex-column flex-md-row">
                <div className="mt-3 w-100">
                    <a
                        className="btn "
                        data-bs-toggle="collapse"
                        href="#MenuCollapse"
                        role="button"
                        aria-expanded={menuOpen ? 'true' : 'false'}
                        aria-controls="MenuCollapse"
                        onClick={handleMenuToggle}
                    >
                        <img
                            className="Logo-menu"
                            src={menuOpen ? 'X.png' : 'Hamburger_icon.svg.png'}
                            alt=""
                        />
                    </a>
                </div>
                <div className={`collapse w-100 ${menuOpen ? 'show' : ''}`} id="MenuCollapse">
                    <div className="rounded-top-left" id="full-tabs">
                        <div className="row w-100 bg-light border-dark rounded-3">
                            {apps.map((app) => (
                                <div key={app.id} className="w-50 col-2">
                                    <a href={app.link}>{app.name}</a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavbarApp;
