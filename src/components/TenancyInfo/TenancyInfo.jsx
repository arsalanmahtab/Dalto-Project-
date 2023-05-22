import React from "react";
import Header from "../Header/Header";



export const TenancyInfo = () => {

  
  return (
    <>
     
      <Header/>
     
      <div className="" style={{ marginTop: "35px" }}>
        <h4 style={{ fontSIze: "17px", fontWeight: "600" }}>Arsalan  Tenant</h4>

        <div className="container button1">
          <div className="row">
            <div className="col-md-3">
              <button
                type="button"
                class="btn btn-outline-secondary"
                disabled
                style={{
                  color: "#2E3192",
                  border: "1px solid #2E3192",
                  fontSize: "16px",
                  fontWeight: "600",
                }}
              >
                Search From Messages
              </button>
            </div>
            <div className="col-md-3">
              <button
                type="button"
                class="btn btn-outline-secondary"
                disabled
                style={{
                  color: "#2E3192",
                  border: "1px solid #2E3192",
                  fontSize: "16px",
                  fontWeight: "600",
                }}
              >
                Add New
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="" style={{ marginTop: "35px" }}>
        <h4 style={{ fontSIze: "17px", fontWeight: "600" }}>Proposed Tenant</h4>

        <div className="container form1">
          <div className="row">
            1.
            <div className="col-md-3">
              {" "}
              <input
                placeholder="First Name "
                style={{
                  padding: "6px 14px",
                  background: "#f9f9f9",
                  border: "none",
                }}
              ></input>
            </div>
            <div className="col-md-3">
              {" "}
              <input
                placeholder="Last Name "
                style={{
                  padding: "6px 14px",
                  background: "#f9f9f9",
                  border: "none",
                }}
              ></input>
            </div>
            <div className="col-md-3">
              <button type="button" class="btn btn-secondary">
                Add Another
              </button>
            </div>
          </div>
        </div>

        <div className="container form2" style={{ marginTop: "15px" }}>
          <div className="row">
            2.
            <div className="col-md-3">
              {" "}
              <input
                placeholder="First Name "
                style={{
                  padding: "6px 14px",
                  background: "#f9f9f9",
                  border: "none",
                }}
              ></input>
            </div>
            <div className="col-md-3">
              {" "}
              <input
                placeholder="Last Name "
                style={{
                  padding: "6px 14px",
                  background: "#f9f9f9",
                  border: "none",
                }}
              ></input>
            </div>
            <div className="col-md-3">
              <button type="button" class="btn btn-secondary">
                Add Another
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="" style={{ marginTop: "35px" }}>
        <h4 style={{ fontSIze: "17px", fontWeight: "600" }}>
          Contact Details{" "}
        </h4>

        <div className="container form1">
          <div className="row">
            1. Tenant 1
            <div className="col-md-3">
              {" "}
              <input
                placeholder="++44 123 4567 "
                style={{
                  padding: "6px 14px",
                  background: "#f9f9f9",
                  border: "none",
                }}
              ></input>
            </div>
            <div className="col-md-3">
              {" "}
              <input
                placeholder="tanentemail@gmail.com "
                style={{
                  padding: "6px 14px",
                  background: "#f9f9f9",
                  border: "none",
                }}
              ></input>
            </div>
            <div className="col-md-3">
              <button type="button" class="btn btn-secondary">
                Add Another
              </button>
            </div>
          </div>
        </div>

        <div className="container form2" style={{ marginTop: "15px" }}>
          <div className="row">
            2. Tenant 2
            <div className="col-md-3">
              {" "}
              <input
                placeholder="+44 123 4567 "
                style={{
                  padding: "6px 14px",
                  background: "#f9f9f9",
                  border: "none",
                }}
              ></input>
            </div>
            <div className="col-md-3">
              {" "}
              <input
                placeholder="tanentemail@gmail.com "
                style={{
                  padding: "6px 14px",
                  background: "#f9f9f9",
                  border: "none",
                }}
              ></input>
            </div>
            <div className="col-md-3">
              <button type="button" class="btn btn-secondary">
                Add Another
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="" style={{ marginTop: "35px" }}>
        <h4 style={{ fontSize: "17px", fontWeight: "600", color: "#252B42" }}>
          Term Type
        </h4>

        <div className="container checkbox 1">
          <div className="row">
            <div class="form-check col-md-2">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label class="form-check-label" for="flexRadioDefault1">
                Opened Ended
              </label>
            </div>

            <div class="form-check col-md-2">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label class="form-check-label" for="flexRadioDefault1">
                Fixed Term
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="container" style={{ marginTop: "30px" }}>
        <h4 style={{ FontSize: "17px", fontWeight: "600", color: "#252B42" }}>
          Lettings Type
        </h4>
        <div className="select 1" style={{ width: "80%" }}>
          <select class="form-select" aria-label="Default select example">
            <option selected>Select Type</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>

      <div className="container " style={{ marginTop: "20px" }}>
        <div className="row">
          <div className="col-md-4">
            <h4
              style={{ fontSize: "17px", fontWeight: "600", color: "#252B42" }}
            >
              Tenancy Duration
            </h4>
            <div className="select 1" style={{ width: "" }}>
              <select class="form-select" aria-label="Default select example">
                <option selected></option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
          <div className="col-md-4" style={{ marginTop: "20px" }}>
            <h4
              style={{ fontSize: "17px", fontWeight: "600", color: "#252B42" }}
            >
              Auto Renewal{" "}
            </h4>
            <div className="row">
              <div class="form-check col-md-3">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  Yes
                </label>
              </div>

              <div class="form-check col-md-3">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  No
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container" style={{marginTop:"30px"}}>
        <div className="row">
          <div className="col-md-4">
            <h4 style={{fontSize:"17px",fontWeight:"600",color:"#252b42"}}>Tenancy Start</h4>
            
            
          
          </div>

          <div className="col-md-4">
            <h4 style={{fontSize:"17px",fontWeight:"600",color:"#252b42"}}>Tenancy End</h4>
            
            
          
          </div>
        </div>
      </div>
    </>
  );
};
export default TenancyInfo;