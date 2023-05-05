import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import { useContext, useEffect, useState } from 'react';
import { Store } from './Store';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import SignupScreen from './screens/SignupScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import ProfileScreen from './screens/ProfileScreen';
import Button from 'react-bootstrap/Button';
import { getError } from './utils';
import axios from 'axios';
import SearchBox from './components/SearchBox';
import SearchScreen from './screens/SearchScreen';
import ProtectedRoute from './components/ProtectedRoute';
import DashboardScreen from './screens/DashboardScreen';
import AdminRoute from './components/AdminRoute';
import ProductListScreen from './screens/ProductListScreen';
import ProductEditScreen from './screens/ProductEditScreen';
import Footer from './components/Footer/Footer';
import OrderListScreen from './screens/OrderListScreen';
import UserListScreen from './screens/UserListScreen';
import UserEditScreen from './screens/UserEditScreen';
import Chat from './components/Chat/Chat';

function App() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;

  const signoutHandler = () => {
    ctxDispatch({ type: 'USER_SIGNOUT' });
    localStorage.removeItem('userInfo');
    localStorage.removeItem('shippingAddress');
    localStorage.removeItem('paymentMethod');
    window.location.href = '/signin';
  };
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axios.get(`/api/products/categories`);
        setCategories(data);
      } catch (err) {
        toast.error(getError(err));
      }
    };
    fetchCategories();
  }, []);
  return (
    <BrowserRouter>
      <div
        className={
          sidebarIsOpen
            ? 'd-flex flex-column site-container active-cont '
            : 'd-flex flex-column site-container  ml-[40px] mr-[40px] text-black '
        }
      >
        <ToastContainer position="bottom-center" limit={1} />
        <header className="sticky top-0 z-50">
          <Navbar
            className="bg-blue-900 mt-2 shadow-sm rounded-sm "
            variant="dark"
            expand="lg"
          >
            <Container>
              <Button
                style={{ color: 'black' }}
                className="border-none  "
                color="dark"
                variant="dark"
                onClick={() => setSidebarIsOpen(!sidebarIsOpen)}
              >
                <i className="fas fa-bars"></i>
              </Button>

              <LinkContainer to="/">
                <Navbar.Brand className="text-black pl-3 text-[30px]">
                  <h1 className="bg-black-200 " style={{ color: 'white' }}>
                    xNeuron
                  </h1>
                </Navbar.Brand>
              </LinkContainer>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <SearchBox />
                <Nav className="me-auto  w-100  justify-content-end">
                  <Link to="/cart" className="nav-link">
                    <ShoppingCartIcon style={{ color: 'black' }} />
                    {cart.cartItems.length > 0 && (
                      <Badge pill bg="danger">
                        {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                      </Badge>
                    )}
                  </Link>
                  {userInfo ? (
                    <NavDropdown
                      className="text-black mr-[80px] "
                      color="black"
                      title={userInfo.name}
                      id="basic-nav-dropdown"
                    >
                      <LinkContainer to="/profile">
                        <NavDropdown.Item style={{ color: 'black' }}>
                          {/* User Profile */}
                        </NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/orderhistory">
                        <NavDropdown.Item style={{ color: 'black' }}>
                          Order History
                        </NavDropdown.Item>
                      </LinkContainer>
                      <NavDropdown.Divider />
                      <Link
                        style={{ color: 'black' }}
                        className="dropdown-item"
                        to="#signout"
                        onClick={signoutHandler}
                      >
                        Sign Out
                      </Link>
                    </NavDropdown>
                  ) : (
                    <Link style={{ color: 'black' }} to="/signin">
                      Sign In
                    </Link>
                  )}
                  {userInfo && userInfo.isAdmin && (
                    <NavDropdown title="Admin" id="admin-nav-dropdown">
                      {/* <LinkContainer to="/admin/dashboard">
                        <NavDropdown.Item>Dashboard</NavDropdown.Item>
                      </LinkContainer> */}
                      <LinkContainer to="/admin/products">
                        <NavDropdown.Item style={{ color: 'black' }}>
                          Products
                        </NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/admin/orders">
                        <NavDropdown.Item style={{ color: 'black' }}>
                          Orders
                        </NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/admin/users">
                        <NavDropdown.Item style={{ color: 'black' }}>
                          Users
                        </NavDropdown.Item>
                      </LinkContainer>
                    </NavDropdown>
                  )}
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>
        <div
          className={
            sidebarIsOpen
              ? 'active-nav side-navbar d-flex justify-content-between flex-wrap flex-column'
              : 'side-navbar d-flex justify-content-between flex-wrap flex-column'
          }
        >
          <Nav className="flex-column text-white w-100 p-2">
            <Nav.Item>
              <strong>Categories</strong>
            </Nav.Item>
            {categories.map((category) => (
              <Nav.Item key={category}>
                <LinkContainer
                  to={`/search/category=${category}`}
                  onClick={() => setSidebarIsOpen(false)}
                >
                  <Nav.Link>{category}</Nav.Link>
                </LinkContainer>
              </Nav.Item>
            ))}
          </Nav>
        </div>
        <main>
          <Container className="mt-3">
            <Routes>
              <Route path="/product/:slug" element={<ProductScreen />} />
              <Route path="/cart" element={<CartScreen />} />
              <Route path="/search" element={<SearchScreen />} />
              <Route path="/signin" element={<SigninScreen />} />
              <Route path="/signup" element={<SignupScreen />} />
              {/* <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <ProfileScreen />
                  </ProtectedRoute>
                }
              /> */}
              <Route path="/placeorder" element={<PlaceOrderScreen />} />
              <Route
                path="/order/:id"
                element={
                  <ProtectedRoute>
                    <OrderScreen />
                  </ProtectedRoute>
                }
              ></Route>
              <Route
                path="/orderhistory"
                element={
                  <ProtectedRoute>
                    <OrderHistoryScreen />
                  </ProtectedRoute>
                }
              ></Route>
              <Route
                path="/shipping"
                element={<ShippingAddressScreen />}
              ></Route>
              <Route path="/payment" element={<PaymentMethodScreen />}></Route>
              {/* Admin Routes */}
              {/* <Route
                path="/admin/dashboard"
                element={
                  <AdminRoute>
                    <DashboardScreen />
                  </AdminRoute>
                }
              ></Route> */}
              <Route
                path="/admin/orders"
                element={
                  <AdminRoute>
                    <OrderListScreen />
                  </AdminRoute>
                }
              ></Route>
              <Route
                path="/admin/users"
                element={
                  <AdminRoute>
                    <UserListScreen />
                  </AdminRoute>
                }
              ></Route>

              <Route
                path="/admin/products"
                element={
                  <AdminRoute>
                    <ProductListScreen />
                  </AdminRoute>
                }
              ></Route>
              <Route
                path="/admin/product/:id"
                element={
                  <AdminRoute>
                    <ProductEditScreen />
                  </AdminRoute>
                }
              ></Route>

              <Route
                path="/admin/user/:id"
                element={
                  <AdminRoute>
                    <UserEditScreen />
                  </AdminRoute>
                }
              ></Route>

              <Route path="/" element={<HomeScreen />} />
            </Routes>
          </Container>
        </main>
        <Chat />
        <Footer>
          {/* <div className="text-center">All rights reserved</div> */}
        </Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;

// import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import HomeScreen from './screens/HomeScreen';
// import ProductScreen from './screens/ProductScreen';
// import Navbar from 'react-bootstrap/Navbar';
// import Badge from 'react-bootstrap/Badge';
// import Nav from 'react-bootstrap/Nav';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Container from 'react-bootstrap/Container';
// import { LinkContainer } from 'react-router-bootstrap';
// import { useContext, useEffect, useState } from 'react';
// import { Store } from './Store';
// import CartScreen from './screens/CartScreen';
// import SigninScreen from './screens/SigninScreen';
// import ShippingAddressScreen from './screens/ShippingAddressScreen';
// import SignupScreen from './screens/SignupScreen';
// import PaymentMethodScreen from './screens/PaymentMethodScreen';
// import PlaceOrderScreen from './screens/PlaceOrderScreen';
// import OrderScreen from './screens/OrderScreen';
// import OrderHistoryScreen from './screens/OrderHistoryScreen';
// import ProfileScreen from './screens/ProfileScreen';
// import Button from 'react-bootstrap/Button';
// import { getError } from './utils';
// import axios from 'axios';
// import SearchBox from './components/SearchBox';
// import SearchScreen from './screens/SearchScreen';
// import ProtectedRoute from './components/ProtectedRoute';
// import DashboardScreen from './screens/DashboardScreen';
// import AdminRoute from './components/AdminRoute';

// function App() {
//   const { state, dispatch: ctxDispatch } = useContext(Store);
//   const { cart, userInfo } = state;

//   const signoutHandler = () => {
//     ctxDispatch({ type: 'USER_SIGNOUT' });
//     localStorage.removeItem('userInfo');
//     localStorage.removeItem('shippingAddress');
//     localStorage.removeItem('paymentMethod');
//     window.location.href = '/signin';
//   };
//   const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
//   const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const { data } = await axios.get(`/api/products/categories`);
//         setCategories(data);
//       } catch (err) {
//         toast.error(getError(err));
//       }
//     };
//     fetchCategories();
//   }, []);
//   return (
//     <BrowserRouter>
//       <div
//         className={
//           sidebarIsOpen
//             ? 'd-flex flex-column site-container active-cont'
//             : 'd-flex flex-column site-container'
//         }
//       >
//         <ToastContainer position="bottom-center" limit={1} />
//         <header>
//           <Navbar bg="dark" variant="dark" expand="lg">
//             <Container>
//               <Button
//                 variant="dark"
//                 onClick={() => setSidebarIsOpen(!sidebarIsOpen)}
//               >
//                 <i className="fas fa-bars"></i>
//               </Button>

//               <LinkContainer to="/">
//                 <Navbar.Brand>amazona</Navbar.Brand>
//               </LinkContainer>
//               <Navbar.Toggle aria-controls="basic-navbar-nav" />
//               <Navbar.Collapse id="basic-navbar-nav">
//                 <SearchBox />
//                 <Nav className="me-auto  w-100  justify-content-end">
//                   <Link to="/cart" className="nav-link">
//                     Cart
//                     {cart.cartItems.length > 0 && (
//                       <Badge pill bg="danger">
//                         {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
//                       </Badge>
//                     )}
//                   </Link>
//                   {userInfo ? (
//                     <NavDropdown title={userInfo.name} id="basic-nav-dropdown">
//                       <LinkContainer to="/profile">
//                         <NavDropdown.Item>User Profile</NavDropdown.Item>
//                       </LinkContainer>
//                       <LinkContainer to="/orderhistory">
//                         <NavDropdown.Item>Order History</NavDropdown.Item>
//                       </LinkContainer>
//                       <NavDropdown.Divider />
//                       <Link
//                         className="dropdown-item"
//                         to="#signout"
//                         onClick={signoutHandler}
//                       >
//                         Sign Out
//                       </Link>
//                     </NavDropdown>
//                   ) : (
//                     <Link className="nav-link" to="/signin">
//                       Sign In
//                     </Link>
//                   )}
//                   {userInfo && userInfo.isAdmin && (
//                     <NavDropdown title="Admin" id="admin-nav-dropdown">
//                       <LinkContainer to="/admin/dashboard">
//                         <NavDropdown.Item>Dashboard</NavDropdown.Item>
//                       </LinkContainer>
//                       <LinkContainer to="/admin/productlist">
//                         <NavDropdown.Item>Products</NavDropdown.Item>
//                       </LinkContainer>
//                       <LinkContainer to="/admin/orderlist">
//                         <NavDropdown.Item>Orders</NavDropdown.Item>
//                       </LinkContainer>
//                       <LinkContainer to="/admin/userlist">
//                         <NavDropdown.Item>Users</NavDropdown.Item>
//                       </LinkContainer>
//                     </NavDropdown>
//                   )}
//                 </Nav>
//               </Navbar.Collapse>
//             </Container>
//           </Navbar>
//         </header>
//         <div
//           className={
//             sidebarIsOpen
//               ? 'active-nav side-navbar d-flex justify-content-between flex-wrap flex-column'
//               : 'side-navbar d-flex justify-content-between flex-wrap flex-column'
//           }
//         >
//           <Nav className="flex-column text-white w-100 p-2">
//             <Nav.Item>
//               <strong>Categories</strong>
//             </Nav.Item>
//             {categories.map((category) => (
//               <Nav.Item key={category}>
//                 <LinkContainer
//                   to={`/search/category=${category}`}
//                   onClick={() => setSidebarIsOpen(false)}
//                 >
//                   <Nav.Link>{category}</Nav.Link>
//                 </LinkContainer>
//               </Nav.Item>
//             ))}
//           </Nav>
//         </div>
//         <main>
//           <Container className="mt-3">
//             <Routes>
//               <Route path="/product/:slug" element={<ProductScreen />} />
//               <Route path="/cart" element={<CartScreen />} />
//               <Route path="/search" element={<SearchScreen />} />
//               <Route path="/signin" element={<SigninScreen />} />
//               <Route path="/signup" element={<SignupScreen />} />
//               <Route
//                 path="/profile"
//                 element={
//                   <ProtectedRoute>
//                     <ProfileScreen />
//                   </ProtectedRoute>
//                 }
//               />
//               <Route path="/placeorder" element={<PlaceOrderScreen />} />
//               <Route
//                 path="/order/:id"
//                 element={
//                   <ProtectedRoute>
//                     <OrderScreen />
//                   </ProtectedRoute>
//                 }
//               ></Route>
//               <Route
//                 path="/orderhistory"
//                 element={
//                   <ProtectedRoute>
//                     <OrderHistoryScreen />
//                   </ProtectedRoute>
//                 }
//               ></Route>
//               <Route
//                 path="/shipping"
//                 element={<ShippingAddressScreen />}
//               ></Route>
//               <Route path="/payment" element={<PaymentMethodScreen />}></Route>
//               {/* Admin Routes */}
//               <Route
//                 path="/admin/dashboard"
//                 element={
//                   <AdminRoute>
//                     <DashboardScreen />
//                   </AdminRoute>
//                 }
//               ></Route>

//               <Route path="/" element={<HomeScreen />} />
//             </Routes>
//           </Container>
//         </main>
//         <footer>
//           <div className="text-center">All rights reserved</div>
//         </footer>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;
