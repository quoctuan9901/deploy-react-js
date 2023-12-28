import axios from "axios";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardImage, MDBIcon, MDBRipple, MDBBtn } from "mdb-react-ui-kit";
import { useContext, useEffect, useState } from "react";
import { Context } from "./AppContext";
import { useNavigate } from "react-router-dom";

function Product() {
    const [product, setProduct] = useState([]);
    const { handleAddToCart, cartCount, cartSubTotal } = useContext(Context);
    const navigate = useNavigate();

    const handleRedirectToCart = () => {
        navigate("/deploy-react-js/cart");
    };

    useEffect(() => {
        axios.get("https://6561f5c0dcd355c0832466a2.mockapi.io/api/products").then((response) => {
            setProduct(response.data);
        });
    }, []);

    return (
        <MDBContainer fluid>
            <MDBRow className="justify-content-center mt-5">
                <MDBCol md="12" xl="10">
                    <MDBBtn outline rounded className="mx-2" color="info" onClick={handleRedirectToCart}>
                        Cart ({cartCount}) - Total: {cartSubTotal}
                    </MDBBtn>
                </MDBCol>
            </MDBRow>

            {product &&
                product.map((value, key) => (
                    <MDBRow className="justify-content-center mb-0" key={key}>
                        <MDBCol md="12" xl="10">
                            <MDBCard className="shadow-0 border rounded-3 mt-5 mb-3">
                                <MDBCardBody>
                                    <MDBRow>
                                        <MDBCol md="12" lg="3" className="mb-4 mb-lg-0">
                                            <MDBRipple rippleColor="light" rippleTag="div" className="bg-image rounded hover-zoom hover-overlay">
                                                <MDBCardImage src={value.image} fluid className="w-100" />
                                                <a href="#!">
                                                    <div
                                                        className="mask"
                                                        style={{
                                                            backgroundColor: "rgba(251, 251, 251, 0.15)",
                                                        }}
                                                    ></div>
                                                </a>
                                            </MDBRipple>
                                        </MDBCol>
                                        <MDBCol md="6">
                                            <h5>{value.name}</h5>
                                            <div className="d-flex flex-row">
                                                <div className="text-danger mb-1 me-2">
                                                    <MDBIcon fas icon="star" />
                                                    <MDBIcon fas icon="star" />
                                                    <MDBIcon fas icon="star" />
                                                    <MDBIcon fas icon="star" />
                                                </div>
                                                <span>310</span>
                                            </div>
                                            <div className="mt-1 mb-0 text-muted small">
                                                <span>100% cotton</span>
                                                <span className="text-primary"> • </span>
                                                <span>Light weight</span>
                                                <span className="text-primary"> • </span>
                                                <span>
                                                    Best finish
                                                    <br />
                                                </span>
                                            </div>
                                            <div className="mb-2 text-muted small">
                                                <span>Unique design</span>
                                                <span className="text-primary"> • </span>
                                                <span>For men</span>
                                                <span className="text-primary"> • </span>
                                                <span>
                                                    Casual
                                                    <br />
                                                </span>
                                            </div>
                                            <p className="text-truncate mb-4 mb-md-0">{value.description}</p>
                                        </MDBCol>
                                        <MDBCol md="6" lg="3" className="border-sm-start-none border-start">
                                            <div className="d-flex flex-row align-items-center mb-1">
                                                <h4 className="mb-1 me-1">{value.price}</h4>
                                            </div>
                                            <h6 className="text-success">Free shipping</h6>
                                            <div className="d-flex flex-column mt-4">
                                                <MDBBtn color="primary" size="sm" onClick={() => handleAddToCart(value, 1)}>
                                                    Buy now
                                                </MDBBtn>
                                            </div>
                                        </MDBCol>
                                    </MDBRow>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                ))}
        </MDBContainer>
    );
}

export default Product;
