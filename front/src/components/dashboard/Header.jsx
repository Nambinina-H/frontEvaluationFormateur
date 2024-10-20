import React, { useState } from 'react';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // Inverse l'état de la sidebar
  };

  return (
    <>
      <body>

        {/* <!-- ======= Header ======= --> */}
        <header id="header" class="header fixed-top d-flex align-items-center">

        <div class="d-flex align-items-center justify-content-between">
            <a href="index.html" class="logo d-flex align-items-center">
            <img src="assets/img/logo.png" alt=""/>
            <span class="d-none d-lg-block">NiceAdmin</span>
            </a>
            <i class="bi bi-list toggle-sidebar-btn"></i>
        </div>
        {/* <!-- End Logo --> */}

        {/* <div class="search-bar">
            <form class="search-form d-flex align-items-center" method="POST" action="#">
            <input type="text" name="query" placeholder="Search" title="Enter search keyword"/>
            <button type="submit" title="Search"><i class="bi bi-search"></i></button>
            </form>
        </div> */}
        {/* <!-- End Search Bar --> */}

        <nav class="header-nav ms-auto">
            <ul class="d-flex align-items-center">

            {/* <li class="nav-item d-block d-lg-none">
                <a class="nav-link nav-icon search-bar-toggle " href="#">
                <i class="bi bi-search"></i>
                </a>
            </li> */}
            {/* <!-- End Search Icon--> */}

            <li class="nav-item dropdown">

                <a class="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
                <i class="bi bi-bell"></i>
                <span class="badge bg-primary badge-number">4</span>
                </a>
                {/* <!-- End Notification Icon --> */}

                <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications dropdown-content">
                <li class="dropdown-header">
                    4 nouveaux notifications
                    {/* <a href="#"><span class="badge rounded-pill bg-primary p-2 ms-2">Voir tout</span></a> */}
                </li>
                <li>
                    <hr class="dropdown-divider"/>
                </li>

                <li class="notification-item">
                    <i class="bi bi-exclamation-circle text-warning"></i>
                    <div>
                    <h4>Nouveau retour sur votre évaluation</h4>
                    <p>Un formateur a répondu à votre évaluation. Consultez les commentaires.</p>
                    <p>Il y a 30 min.</p>
                    </div>
                </li>

                <li>
                    <hr class="dropdown-divider"/>
                </li>

                <li class="notification-item">
                    <i class="bi bi-x-circle text-danger"></i>
                    <div>
                    <h4>Évaluation à remplir</h4>
                    <p>Vous avez une évaluation en attente pour un formateur. N'oubliez pas de la compléter !</p>
                    <p>Il y a 1 h.</p>
                    </div>
                </li>

                <li>
                    <hr class="dropdown-divider"/>
                </li>

                <li class="notification-item">
                    <i class="bi bi-check-circle text-success"></i>
                    <div>
                    <h4>Mise à jour de la plateforme</h4>
                    <p>Des nouvelles fonctionnalités ont été ajoutées pour faciliter l'évaluation des formateurs.</p>
                    <p>Il y a 2 h.</p>
                    </div>
                </li>

                <li>
                    <hr class="dropdown-divider"/>
                </li>

                {/* <li class="notification-item">
                    <i class="bi bi-info-circle text-primary"></i>
                    <div>
                    <h4>Dicta reprehenderit</h4>
                    <p>Quae dolorem earum veritatis oditseno</p>
                    <p>4 hrs. ago</p>
                    </div>
                </li>

                <li>
                    <hr class="dropdown-divider"/>
                </li> */}
                <li class="dropdown-footer">
                    <a href="#">Voir tout</a>
                </li>

                </ul>
                {/* <!-- End Notification Dropdown Items --> */}

            </li>
            {/* <!-- End Notification Nav --> */}

            <li class="nav-item dropdown">

                <a class="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
                <i class="bi bi-chat-left-text"></i>
                <span class="badge bg-success badge-number">3</span>
                </a>
                {/* <!-- End Messages Icon --> */}

                <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
                <li class="dropdown-header">
                    3 nouveau messages
                    {/* <a href="#"><span class="badge rounded-pill bg-primary p-2 ms-2">Voir tout</span></a> */}
                </li>
                <li>
                    <hr class="dropdown-divider"/>
                </li>

                <li class="message-item">
                    <a href="#">
                    <img src="assets/img/messages-1.jpg" alt="" class="rounded-circle"/>
                    <div>
                        <h4>Manoa</h4>
                        <p>Mba atero ny bokiko azafady.</p>
                        <p>Il y a 4min</p>
                    </div>
                    </a>
                </li>
                <li>
                    <hr class="dropdown-divider"/>
                </li>

                <li class="message-item">
                    <a href="#">
                    <img src="assets/img/messages-2.jpg" alt="" class="rounded-circle"/>
                    <div>
                        <h4>Allan</h4>
                        <p>Ela efa nagnano evaluation va ? </p>
                        <p>Il y a 2h</p>
                    </div>
                    </a>
                </li>
                <li>
                    <hr class="dropdown-divider"/>
                </li>

                <li class="message-item">
                    <a href="#">
                    <img src="assets/img/messages-3.jpg" alt="" class="rounded-circle"/>
                    <div>
                        <h4>Mansour</h4>
                        <p>Karakory  ma laolo</p>
                        <p>Il y a 8h</p>
                    </div>
                    </a>
                </li>
                <li>
                    <hr class="dropdown-divider"/>
                </li>

                <li class="dropdown-footer">
                    <a href="#">Voir tout</a>
                </li>

                </ul>
                {/* <!-- End Messages Dropdown Items --> */}

            </li>
            {/* <!-- End Messages Nav --> */}

            <li class="nav-item dropdown pe-3">

                <a class="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
                <img src="assets/img/profile-img.jpg" alt="Profile" class="rounded-circle"/>
                <span class="d-none d-md-block dropdown-toggle ps-2">1110 H-F</span>
                </a>
                {/* <!-- End Profile Iamge Icon --> */}

                <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                <li class="dropdown-header">
                    <h6>Nambinina Hasina</h6>
                    <span>M1 IG</span>
                </li>
                <li>
                    <hr class="dropdown-divider"/>
                </li>

                <li>
                    <a class="dropdown-item d-flex align-items-center" href="users-profile.html">
                    <i class="bi bi-person"></i>
                    <span>Mon Profil</span>
                    </a>
                </li>
                <li>
                    <hr class="dropdown-divider"/>
                </li>

                <li>
                    <a class="dropdown-item d-flex align-items-center" href="users-profile.html">
                    <i class="bi bi-gear"></i>
                    <span>Paramètre</span>
                    </a>
                </li>
                <li>
                    <hr class="dropdown-divider"/>
                </li>

                <li>
                    <a class="dropdown-item d-flex align-items-center" href="pages-faq.html">
                    <i class="bi bi-question-circle"></i>
                    <span>Besoin d'aide ?</span>
                    </a>
                </li>
                <li>
                    <hr class="dropdown-divider"/>
                </li>

                <li>
                    <a class="dropdown-item d-flex align-items-center" href="#">
                    <i class="bi bi-box-arrow-right"></i>
                    <span>Deconnexion</span>
                    </a>
                </li>

                </ul>
                {/* <!-- End Profile Dropdown Items --> */}
            </li>
            {/* <!-- End Profile Nav --> */}

            </ul>
        </nav>
        {/* <!-- End Icons Navigation --> */}

        </header>
        {/* <!-- End Header --> */}
{/* 
        <!-- ======= Sidebar ======= --> */}
        <aside id="sidebar" class="sidebar">

        <ul class="sidebar-nav" id="sidebar-nav">

            <li class="nav-item">
            <a class="nav-link collapsed" href="index.html">
                <i class="bi bi-grid"></i>
                <span>Dashboard</span>
            </a>
            </li>
            {/* <!-- End Dashboard Nav --> */}

            <li class="nav-item">
            <a class="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
                <i class="bi bi-menu-button-wide"></i><span>Components</span><i class="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul id="components-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
                <li>
                <a href="components-alerts.html">
                    <i class="bi bi-circle"></i><span>Alerts</span>
                </a>
                </li>
                <li>
                <a href="components-accordion.html">
                    <i class="bi bi-circle"></i><span>Accordion</span>
                </a>
                </li>
                <li>
                <a href="components-badges.html">
                    <i class="bi bi-circle"></i><span>Badges</span>
                </a>
                </li>
                <li>
                <a href="components-breadcrumbs.html">
                    <i class="bi bi-circle"></i><span>Breadcrumbs</span>
                </a>
                </li>
                <li>
                <a href="components-buttons.html">
                    <i class="bi bi-circle"></i><span>Buttons</span>
                </a>
                </li>
                <li>
                <a href="components-cards.html">
                    <i class="bi bi-circle"></i><span>Cards</span>
                </a>
                </li>
                <li>
                <a href="components-carousel.html">
                    <i class="bi bi-circle"></i><span>Carousel</span>
                </a>
                </li>
                <li>
                <a href="components-list-group.html">
                    <i class="bi bi-circle"></i><span>List group</span>
                </a>
                </li>
                <li>
                <a href="components-modal.html">
                    <i class="bi bi-circle"></i><span>Modal</span>
                </a>
                </li>
                <li>
                <a href="components-tabs.html">
                    <i class="bi bi-circle"></i><span>Tabs</span>
                </a>
                </li>
                <li>
                <a href="components-pagination.html">
                    <i class="bi bi-circle"></i><span>Pagination</span>
                </a>
                </li>
                <li>
                <a href="components-progress.html">
                    <i class="bi bi-circle"></i><span>Progress</span>
                </a>
                </li>
                <li>
                <a href="components-spinners.html">
                    <i class="bi bi-circle"></i><span>Spinners</span>
                </a>
                </li>
                <li>
                <a href="components-tooltips.html">
                    <i class="bi bi-circle"></i><span>Tooltips</span>
                </a>
                </li>
            </ul>
            </li>
            {/* <!-- End Components Nav --> */}

            <li class="nav-item">
            <a class="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="#">
                <i class="bi bi-journal-text"></i><span>Forms</span><i class="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul id="forms-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
                <li>
                <a href="forms-elements.html">
                    <i class="bi bi-circle"></i><span>Form Elements</span>
                </a>
                </li>
                <li>
                <a href="forms-layouts.html">
                    <i class="bi bi-circle"></i><span>Form Layouts</span>
                </a>
                </li>
                <li>
                <a href="forms-editors.html">
                    <i class="bi bi-circle"></i><span>Form Editors</span>
                </a>
                </li>
                <li>
                <a href="forms-validation.html">
                    <i class="bi bi-circle"></i><span>Form Validation</span>
                </a>
                </li>
            </ul>
            </li>
            {/* <!-- End Forms Nav --> */}

            <li class="nav-item">
            <a class="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" href="#">
                <i class="bi bi-layout-text-window-reverse"></i><span>Tables</span><i class="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul id="tables-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
                <li>
                <a href="tables-general.html">
                    <i class="bi bi-circle"></i><span>General Tables</span>
                </a>
                </li>
                <li>
                <a href="tables-data.html">
                    <i class="bi bi-circle"></i><span>Data Tables</span>
                </a>
                </li>
            </ul>
            </li>
            {/* <!-- End Tables Nav --> */}

            <li class="nav-item">
            <a class="nav-link collapsed" data-bs-target="#charts-nav" data-bs-toggle="collapse" href="#">
                <i class="bi bi-bar-chart"></i><span>Charts</span><i class="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul id="charts-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
                <li>
                <a href="charts-chartjs.html">
                    <i class="bi bi-circle"></i><span>Chart.js</span>
                </a>
                </li>
                <li>
                <a href="charts-apexcharts.html">
                    <i class="bi bi-circle"></i><span>ApexCharts</span>
                </a>
                </li>
                <li>
                <a href="charts-echarts.html">
                    <i class="bi bi-circle"></i><span>ECharts</span>
                </a>
                </li>
            </ul>
            </li>
            {/* <!-- End Charts Nav --> */}

            <li class="nav-item">
            <a class="nav-link collapsed" data-bs-target="#icons-nav" data-bs-toggle="collapse" href="#">
                <i class="bi bi-gem"></i><span>Icons</span><i class="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul id="icons-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
                <li>
                <a href="icons-bootstrap.html">
                    <i class="bi bi-circle"></i><span>Bootstrap Icons</span>
                </a>
                </li>
                <li>
                <a href="icons-remix.html">
                    <i class="bi bi-circle"></i><span>Remix Icons</span>
                </a>
                </li>
                <li>
                <a href="icons-boxicons.html">
                    <i class="bi bi-circle"></i><span>Boxicons</span>
                </a>
                </li>
            </ul>
            </li>
            {/* <!-- End Icons Nav --> */}

            <li class="nav-heading">Pages</li>

            <li class="nav-item">
            <a class="nav-link collapsed" href="users-profile.html">
                <i class="bi bi-person"></i>
                <span>Profile</span>
            </a>
            </li>
            {/* <!-- End Profile Page Nav --> */}

            <li class="nav-item">
            <a class="nav-link collapsed" href="pages-faq.html">
                <i class="bi bi-question-circle"></i>
                <span>F.A.Q</span>
            </a>
            </li>
            {/* <!-- End F.A.Q Page Nav --> */}

            <li class="nav-item">
            <a class="nav-link collapsed" href="pages-contact.html">
                <i class="bi bi-envelope"></i>
                <span>Contact</span>
            </a>
            </li>
            {/* <!-- End Contact Page Nav --> */}

            <li class="nav-item">
            <a class="nav-link collapsed" href="pages-register.html">
                <i class="bi bi-card-list"></i>
                <span>Register</span>
            </a>
            </li>
            {/* <!-- End Register Page Nav --> */}

            <li class="nav-item">
            <a class="nav-link collapsed" href="pages-login.html">
                <i class="bi bi-box-arrow-in-right"></i>
                <span>Login</span>
            </a>
            </li>
            {/* <!-- End Login Page Nav --> */}

            <li class="nav-item">
            <a class="nav-link collapsed" href="pages-error-404.html">
                <i class="bi bi-dash-circle"></i>
                <span>Error 404</span>
            </a>
            </li>
            {/* <!-- End Error 404 Page Nav --> */}

            <li class="nav-item">
            <a class="nav-link " href="pages-blank.html">
                <i class="bi bi-file-earmark"></i>
                <span>Blank</span>
            </a>
            </li>
            {/* <!-- End Blank Page Nav --> */}

        </ul>

        </aside>
        {/* <!-- End Sidebar--> */}

        <main id="main" class="main">

        

        

        </main>
        {/* <!-- End #main --> */}

        {/* <!-- ======= Footer ======= --> */}




        {/* <!-- Vendor JS Files --> */}
        <script src="assets/vendor/apexcharts/apexcharts.min.js"></script>
        <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="assets/vendor/chart.js/chart.umd.js"></script>
        <script src="assets/vendor/echarts/echarts.min.js"></script>
        <script src="assets/vendor/quill/quill.js"></script>
        <script src="assets/vendor/simple-datatables/simple-datatables.js"></script>
        <script src="assets/vendor/tinymce/tinymce.min.js"></script>
        <script src="assets/vendor/php-email-form/validate.js"></script>

        {/* <!-- Template Main JS File --> */}
        <script src="assets/js/main.js"></script>

        </body>
    </>
  );
};

export default Header;
