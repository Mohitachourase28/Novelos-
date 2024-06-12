/* eslint-disable no-unused-vars */
import React from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBTypography,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

export default function PersonalProfile() {
  return (
    <section className="min-h-screen bg-[#1D232A] text-gray-300 flex justify-center items-center">
      <MDBContainer className="py-5">
        <MDBRow className="justify-center items-center h-full">
          <MDBCol lg="6" className="mb-4 lg:mb-0">
            <MDBCard className="mb-3 rounded-lg">
              <MDBRow className="g-0">
                <MDBCol
                  md="4"
                  className="gradient-custom text-center text-white rounded-bl-lg flex flex-col justify-center items-center"
                  style={{
                    borderTopRightRadius: "20px",
                    borderBottomRightRadius: "20px",
                  }}
                >
                  <MDBCardImage
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                    alt="Avatar"
                    className="my-5 w-20 h-20 rounded-full"
                    fluid
                  />
                  <MDBTypography tag="h5">Mohita Chourase</MDBTypography>
                  <MDBCardText>Web Designer</MDBCardText>
                  <MDBIcon far icon="edit" className="mb-5" />
                </MDBCol>

                <MDBCol md="8">
                  <MDBCardBody className="p-4">
                    <MDBTypography tag="h6">Information</MDBTypography>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Email</MDBTypography>
                        <MDBCardText className="text-gray-300">
                          info@example.com
                        </MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Phone</MDBTypography>
                        <MDBCardText className="text-gray-300">
                          123 456 789
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>

                    <MDBTypography tag="h6">Information</MDBTypography>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Email</MDBTypography>
                        <MDBCardText className="text-gray-300">
                          info@example.com
                        </MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Phone</MDBTypography>
                        <MDBCardText className="text-gray-300">
                          123 456 789
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>

                    <div className="flex justify-start">
                      <a href="#!">
                        <MDBIcon
                          fab
                          icon="facebook"
                          className="me-3"
                          size="lg"
                        />
                      </a>
                      <a href="#!">
                        <MDBIcon
                          fab
                          icon="twitter"
                          className="me-3"
                          size="lg"
                        />
                      </a>
                      <a href="#!">
                        <MDBIcon
                          fab
                          icon="instagram"
                          className="me-3"
                          size="lg"
                        />
                      </a>
                    </div>
                    <div className="items-center justify-center text-center">
                      <Link to="/">
                        <button className="mt-6 bg-orange-400 text-white px-4 py-2 rounded-md hover:bg-white-700 duration-300">
                          Back
                        </button>
                      </Link>
                    </div>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
